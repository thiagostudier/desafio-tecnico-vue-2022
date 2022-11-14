<template>
  <div class="home">
    <BaseLayout
      :search="search"
      @updateSearch="searchNews"
      @updateOrder="orderNews"
    >
      <template #content>
        <!-- ÍNDICE DAS NOTÍCIAS -->
        <NewsLegend
          v-if="news.length"
          :number="news.length"
          :total="total"
        ></NewsLegend>
        <!-- NOTÍCIAS -->
        <NewsItem
          v-for="(item, i) in news"
          :key="i"
          :id="item.id"
          :title="item.title"
          :date="item.publishedAt"
          :image="item.imageUrl"
          :description="item.summary"
          :reverse="i % 2 === 0 ? false : true"
          @toggleModal="toggleModal"
        />
        <!-- NENHUMA NOTÍCIA ENCONTRADA -->
        <div v-if="news.length === 0" class="my-4">
          <Heading>Nenhuma notícia encontrada</Heading>
          <Paragraph
            >Realize uma nova busca para visualizar os resultados</Paragraph
          >
        </div>
        <!-- ÍNDICE DAS NOTÍCIAS (RODAPÉ) -->
        <NewsLegend
          v-if="news.length"
          :number="news.length"
          :total="total"
        ></NewsLegend>
        <!-- BOTÃO PARA CARREGAR MAIS NOTÍCIAS -->
        <Button
          :disabled="disabledLoadMore()"
          class="loadMore"
          @click="loadMore()"
          >Carregar mais</Button
        >
        <!-- MODAL -->
        <Modal v-if="modal" @toggleModal="toggleModal">
          <NewsItem
            :id="modalObject.id"
            :title="modalObject.title"
            :date="modalObject.publishedAt"
            :image="modalObject.imageUrl"
            :description="modalObject.summary"
            :url="modalObject.url"
            :hideButton="true"
          />
        </Modal>
      </template>
    </BaseLayout>
  </div>
</template>

<script>
import BaseLayout from '@/layouts/BaseLayout'
import NewsItem from '@/components/_base/NewsItem'
import NewsLegend from '@/components/_base/NewsLegend'
import Modal from '@/components/_base/Modal'
import Button from '@/components/Button'
import Heading from '@/components/Heading'
import Paragraph from '@/components/Paragraph'

import api from '@/services/api'

export default {
  name: 'Home',
  components: {
    BaseLayout,
    NewsItem,
    NewsLegend,
    Button,
    Modal,
    Heading,
    Paragraph
  },
  data() {
    return {
      /** Array de notícias */
      news: [],
      /** Paginação */
      page: 1,
      /** Limite de notícias por consulta */
      limit: 10,
      /** Ordenação */
      order: 'desc',
      /** Início da consulta no array de notícias */
      start: 0,
      /** Pesquisa de notícias */
      search: '',
      /** Desativar botão para carregar mais */
      disabled: false,
      /** Número de notícias */
      total: 0,
      /** Visibilidade da modal */
      modal: false,
      /** Dados da modal */
      modalObject: {}
    }
  },
  created() {
    /** Carregar as 10 primeiras notícias */
    this.getNews()
    /** Contar o número de notícias */
    this.countNews()
  },
  methods: {
    /** Carregar as notícias */
    getNews() {
      api
        .get(
          `/?title_contains=${this.search}&_start=${this.start}&_sort=${
            this.order === 'asc' ? 'publishedAt' : ''
          }`
        )
        .then((response) => {
          /** Atualizar a listagem de notícias */
          this.news.push(...response.data)
          /** Habilitar botão de carregar mais notícias */
          this.disabled = false
        })
        .catch(() => {
          alert('Houve um erro ao buscar mais notícias')
        })
    },
    /** Contador de notícias */
    countNews() {
      api
        .get(`/count?title_contains=${this.search}&_start=${this.start}`)
        .then((response) => {
          this.total = response.data
        })
        .catch(() => {
          alert('Houve um erro ao buscar mais notícias')
        })
    },
    /** Buscar as notícias
     * @param { Number } data - Texto buscado
     */
    searchNews(data) {
      /** Zerar paginação */
      this.start = 0
      /** Atualizar o campo de pesquisa */
      this.search = data
      /** Limpar as notícias carregadas */
      this.news = []
      /** Buscar novas notícias */
      this.getNews()
      /** Atualizar o número de notícias */
      this.countNews()
    },
    /** Ordenar as notícias
     * @param { String } order - Ordem da listagem
     */
    orderNews(order) {
      /** Zerar paginação */
      this.start = 0
      /** Atualizar o campo de pesquisa */
      this.order = order
      /** Limpar as notícias carregadas */
      this.news = []
      /** Buscar novas notícias */
      this.getNews()
      /** Atualizar o número de notícias */
      this.countNews()
    },
    /** Avançar na paginação das notícias */
    loadMore() {
      /** Desabilitar botão de carregar mais notícias */
      this.disabled = true
      /** Avançar na paginação */
      this.start = this.start + this.limit
      /** Buscar mais notícias */
      this.getNews()
    },
    /** Desabilitar e habilitar o botão de carregar mais notícias */
    disabledLoadMore() {
      /** Caso o número de notícias carregadas for igual ao número
       * total de notícias, não habilitar o botão de carregar mais */
      return this.disabled || this.news.length === this.total
    },
    /** Abrir e fechar modal
     * @param { Number } id - ID da modal aberta
     */
    toggleModal(id = null) {
      /** Se houver um ID selecionado */
      if (id) {
        /** Buscar a notícia */
        const newItem = this.news.find((item) => item.id === id)
        /** Atualizar os dados da modal */
        this.modalObject = newItem
      }
      /** Abrir/fechar modal */
      this.modal = !this.modal
    }
  }
}
</script>

<style lang="scss" scoped>
.loadMore {
  margin: 50px auto;
  display: block;
}
</style>
