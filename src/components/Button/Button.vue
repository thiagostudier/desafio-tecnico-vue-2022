<template>
  <component
    v-bind="{
      to: element === 'router-link' ? link : false
    }"
    :is="element"
    :href="element === 'a' ? link : false"
    :target="target"
    :class="[
      `button__${color}`,
      { button__active: active, button__disabled: disabled }
    ]"
    class="button"
    @click="$emit('click', $event)"
    @focus="$emit('focus', $event)"
    @blur="$emit('blur', $event)"
  >
    <slot> Botão </slot>
  </component>
</template>

<script>
/** Botão padrão */

export default {
  name: 'Button',
  props: {
    /**
     * Elemento html do botão
     * @values 'button', 'a' ou 'router-link'
     */
    element: {
      type: String,
      default: 'button'
    },
    /** Link para quando element for router-link */
    link: {
      type: String,
      default: '/'
    },
    /** Possibilita o tipo de "target"
     * @values '_self', '_blank'
     */
    target: {
      type: String,
      default: '_self'
    },
    /** Cor do botão
     * @values 'primary', 'secondary', 'tertiary'
     */
    color: {
      type: String,
      default: 'primary'
    },
    /** Desabilita o botão */
    disabled: {
      type: Boolean,
      default: false
    },
    /** Se o botão está ativado */
    active: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<style lang="scss" scoped>
.button {
  border: 0px;
  border-radius: 3px;
  padding: 7px 12px;
  font-size: paragraph-size('pa ragraph-80');
  color: $white;
  border: 1px solid $primary;
  transition: 0.2s all;
  text-align: center;

  /** Cores */
  &__primary {
    background-color: $primary;
    border-color: $primary;

    &:hover {
      background-color: $white;
      color: $primary;
    }
  }

  &__secondary {
    background-color: $secondary;
    border-color: $secondary;

    &:hover {
      background-color: $white;
      color: $secondary;
    }
  }

  &__tertiary {
    background-color: $tertiary;
    border-color: $tertiary;

    &:hover {
      background-color: $white;
      color: $tertiary;
    }
  }

  /** Ativo */
  &__active {
    background-color: $white;
    color: $primary;
  }

  /** Desabilitar botão */
  &__disabled {
    opacity: 0.3;
    pointer-events: none;
  }
}
</style>
