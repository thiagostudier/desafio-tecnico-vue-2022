<template>
  <div class="news-item">
    <div :class="{ 'news-item__reverse': reverse }" class="news-item--row">
      <div class="news-item--image shadow">
        <img :src="image" />
      </div>
      <div class="news-item--content">
        <Heading>{{ title }}</Heading>
        <Paragraph size="3">{{ formatDate(date) }}</Paragraph>
        <Paragraph class="news-item--description">{{ description }}</Paragraph>
        <Button
          v-if="!hideButton"
          color="tertiary"
          @click="$emit('toggleModal', id)"
          >{{ buttonText }}</Button
        >
      </div>
    </div>
    <Button
      v-if="url"
      :link="url"
      color="tertiary"
      target="_blank"
      element="a"
      class="news-item--link"
      >Ir para o site</Button
    >
  </div>
</template>

<script>
import Heading from '@/components/Heading'
import Paragraph from '@/components/Paragraph'
import Button from '@/components/Button'

export default {
  name: 'NewsItem',
  components: {
    Heading,
    Paragraph,
    Button
  },
  props: {
    id: {
      type: [Number, String],
      default: null
    },

    title: {
      type: String,
      default: 'Título'
    },

    date: {
      type: String,
      default: 'dd/mm/yyyy'
    },

    description: {
      type: String,
      default: 'Lorem ipsum'
    },

    url: {
      type: String,
      default: null
    },

    buttonText: {
      type: String,
      default: 'Ver mais'
    },

    image: {
      type: String,
      default: ''
    },

    reverse: {
      type: Boolean,
      default: false
    },

    hideButton: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    /** Formatar data
     * @param { String } date - Texto em formato de string
     */
    formatDate(date) {
      const newDate = new Date(date)
      const formatDate =
        newDate.getDate() +
        '/' +
        (newDate.getMonth() + 1) +
        '/' +
        newDate.getFullYear()
      return formatDate
    }
  }
}
</script>

<style lang="scss" scoped>
.news-item {
  &--row {
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    gap: 50px;
    margin-bottom: 50px;
  }

  &--image {
    min-width: 200px;
    width: 200px;
    height: 200px;
    position: relative;
    border-radius: 3px;
    overflow: hidden;
    background-color: $primary;

    img {
      position: absolute;
      height: 100%;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
    }
  }

  &--content {
    flex: 1;
  }

  &--description {
    line-height: 20px;
  }

  &--link {
    margin: 50px auto 0px auto;
    display: block;
    max-width: 110px;
  }

  &:last-of-type {
    margin-bottom: 0px;
  }

  &__reverse {
    flex-direction: row-reverse;
  }
}
</style>
