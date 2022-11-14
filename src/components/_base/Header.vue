<template>
  <div class="header">
    <div class="header--navbar">
      <!-- CAMPO DE BUSCA -->
      <FormInput
        v-model="search"
        :buttonSearch="true"
        placeholder="Buscar notícias"
        @submit="searchNews()"
      ></FormInput>
      <!-- CAMPOS DE ORDENAÇÃO -->
      <Button :active="order === 'desc'" @click="orderNews('desc')"
        >Mais novos</Button
      >
      <Button :active="order === 'asc'" @click="orderNews('asc')"
        >Mais antigos</Button
      >
    </div>
    <!-- IMAGEM DE FUNDO -->
    <img :src="background" class="header--background" />
    <!-- LOGO DO SITE -->
    <img :src="logo" class="header--logo" />
  </div>
</template>

<script>
import FormInput from '@/components/FormInput'
import Button from '@/components/Button'

import logo from '@/assets/images/logo.webp'
import background from '@/assets/images/background.jpg'

export default {
  name: 'Header',
  components: {
    FormInput,
    Button
  },
  /** Recebe os dados do componente pai */
  inject: ['searchData', 'orderData'],
  data() {
    return {
      /** Imagem do fundo */
      background: background,
      /** Imagem do logo */
      logo: logo,
      /** Campo de pesquisa */
      search: null,
      /** Ordenação da pesquisa */
      order: 'desc'
    }
  },
  methods: {
    /** Ao realizar uma busca, enviar o campo para o componente pai */
    searchNews() {
      this.searchData(this.search)
    },
    /** Ao clicar para ordenar uma listagem, deve enviar o campo para o componente pai
     * @param { String } data - Ordem atualizada da listagem
     */
    orderNews(newOrder) {
      this.order = newOrder
      this.orderData(newOrder)
    }
  }
}
</script>

<style lang="scss" scoped>
.header {
  height: 400px;
  width: 100%;
  position: relative;
  overflow: hidden;
  margin-bottom: 50px;
  border-bottom: 5px solid $primary;
  padding: 30px;
  box-shadow: 0px -15px 100px $black;

  &--background {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 100%;
    z-index: -1;
  }

  &--logo {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 200px;
  }

  &--navbar {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    gap: 15px;
  }
}
</style>
