<template>
  <div class="news-legend">
    <Paragraph size="3">
      {{ number }} notícias carregadas de um total de {{ total }}
    </Paragraph>
  </div>
</template>

<script>
import Paragraph from '@/components/Paragraph'

export default {
  name: 'NewsLegend',
  components: {
    Paragraph
  },
  props: {
    /** Número de notícias carregas */
    number: {
      type: Number,
      default: 0
    },
    /** Total de notícias da requisição */
    total: {
      type: Number,
      default: 0
    }
  }
}
</script>

<style lang="scss" scoped></style>
