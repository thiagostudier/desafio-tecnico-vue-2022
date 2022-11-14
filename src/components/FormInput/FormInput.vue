<template>
  <div class="form-input">
    <input
      :value="value"
      :placeholder="placeholder"
      :type="type"
      class="form-input--field"
      @input="$emit('input', $event.target.value)"
      @blur="$emit('blur', $event)"
      @focus="$emit('focus', $event)"
    />
    <!-- BOTÃO DE PESQUISA -->
    <button
      v-if="buttonSearch"
      class="form-input--button"
      @click="$emit('submit', value)"
    >
      <img :src="searchIcon" />
    </button>
  </div>
</template>

<script>
import search from '@/assets/images/search.png'

export default {
  name: 'FormInput',
  props: {
    type: {
      type: String,
      default: 'text'
    },
    /** Placeholder do campo */
    placeholder: {
      type: String,
      default: 'Insira o conteúdo'
    },
    /** Nome do campo */
    name: {
      type: String,
      default: ''
    },
    /** Valor do campo */
    value: {
      type: [String, Number, Object, Array],
      default: ''
    },
    /** Ícone de pesquisa */
    buttonSearch: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      searchIcon: search
    }
  }
}
</script>

<style lang="scss" scoped>
.form-input {
  position: relative;
  max-width: 200px;
  border-radius: 5px;
  overflow: hidden;

  &--field {
    background: $white;
    padding: 5px 10px;
    color: $dark;
    width: 100%;
    border: 2px solid $primary;
    border-radius: 5px;
  }

  &--button {
    border: 0;
    background: $primary;
    width: 30px;
    height: 100%;
    position: absolute;
    top: 50%;
    right: 0px;
    transform: translateY(-50%);

    img {
      max-width: 100%;
    }
  }
}
</style>
