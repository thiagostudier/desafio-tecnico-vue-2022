<template>
  <div class="base-layout">
    <Header></Header>
    <div class="base-layout--content">
      <slot name="content"></slot>
    </div>
  </div>
</template>

<script>
import Header from '@/components/_base/Header'

export default {
  name: 'BaseLayout',
  components: {
    Header
  },
  props: {
    search: {
      /** Campo de busca das notícias */
      type: String,
      default: null
    }
  },
  /** Fornece os valores para o componente filho */
  provide() {
    return { searchData: this.searchData, orderData: this.orderData }
  },
  methods: {
    /** Quando o dado da pesquisa mudar
     * @param { Number } data - Valor atualizado do campo
     */
    searchData(data) {
      this.$emit('updateSearch', data)
    },
    /** Ao ordenar a pesquisa, alterar o valor
     * @param { String } data - Ordem atualizada da listagem
     */
    orderData(data) {
      this.$emit('updateOrder', data)
    }
  }
}
</script>

<style lang="scss" scoped>
.base-layout {
  &--content {
    margin: 0px auto;
    max-width: 1080px;
  }
}
</style>
