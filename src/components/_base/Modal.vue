<template>
  <div class="modal-content">
    <!-- FUNDO CLICÁVEL -->
    <div class="modal-content--overlay" @click="$emit('toggleModal')"></div>
    <!-- CONTEÚDO DO MODAL -->
    <div class="modal-content--block">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Modal'
}
</script>

<style lang="scss" scoped>
.modal-content {
  position: fixed;
  top: 0px;
  left: 0px;
  background: rgba(0, 0, 0, 0.5);
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  &--block {
    max-width: 800px;
    background-color: $white;
    padding: 30px;
    border: 2px solid $primary;
  }

  &--overlay {
    width: 100%;
    height: 100%;
    position: fixed;
    z-index: -1;
    cursor: pointer;
  }
}
</style>
