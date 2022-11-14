<template>
  <component :is="element" :class="`paragraph paragraph__size-${size}`">
    <slot> Parágrafo </slot>
  </component>
</template>

<script>
/** Componente padrão de parágrafos */
export default {
  name: 'Paragraph',
  props: {
    /** Elemento que deve ser renderizado no HTML */
    element: {
      type: String,
      default: 'p'
    },
    /** Tamanho */
    size: {
      type: [String, Number],
      default: 2
    }
  }
}
</script>

<style lang="scss" scoped>
.paragraph {
  margin-bottom: 10px;

  &__size-1 {
    font-size: paragraph-size('paragraph-100');
  }
  &__size-2 {
    font-size: paragraph-size('paragraph-80');
  }
  &__size-3 {
    font-size: paragraph-size('paragraph-60');
  }
  &__size-4 {
    font-size: paragraph-size('paragraph-40');
  }
  &__size-5 {
    font-size: paragraph-size('paragraph-20');
  }
  &__size-6 {
    font-size: paragraph-size('paragraph-10');
  }
}
</style>
