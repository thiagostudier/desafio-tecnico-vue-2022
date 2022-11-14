<template>
  <component :is="element" :class="`heading heading__size-${size}`">
    <slot> Título </slot>
  </component>
</template>

<script>
/** Componente padrão de títulos */
export default {
  name: 'Heading',
  props: {
    /** Elemento que deve ser renderizado no HTML */
    element: {
      type: String,
      default: 'h2'
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
.heading {
  margin-bottom: 10px;

  &__size-1 {
    font-size: heading-size('heading-100');
  }
  &__size-2 {
    font-size: heading-size('heading-80');
    font-weight: font-weight('weight-bold');
  }
  &__size-3 {
    font-size: heading-size('heading-60');
    font-weight: font-weight('weight-bold');
  }
  &__size-4 {
    font-size: heading-size('heading-40');
  }
  &__size-5 {
    font-size: heading-size('heading-20');
  }
  &__size-6 {
    font-size: heading-size('heading-10');
  }
}
</style>
