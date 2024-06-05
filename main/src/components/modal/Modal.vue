<template>
  <transition
    enter-active-class="transition-opacity ease-out duration-200"
    enter-from-class="opacity-0"
    enter-to-class="opacity-100"
    leave-active-class="transition-opacity ease-in duration-150"
    leave-from-class="opacity-100"
    leave-to-class="opacity-0"
  >
    <div
      v-if="isOpen"
      class="fixed top-0 left-0 w-full h-full flex justify-center items-center bg-black bg-opacity-50"
    >
      <div class="modal bg-white p-8 rounded shadow-lg">
        <div class="modal-header flex justify-between items-center">
          <slot name="header">
            <h2 class="text-lg font-semibold">Title</h2>
            <button @click="closeModal" class="text-red-500 focus:outline-none">Close</button>
          </slot>
        </div>
        <div class="modal-body">
          <slot name="body"> </slot>
        </div>
        <div class="modal-footer flex justify-end mt-4">
          <slot name="footer">
            <button
              @click="closeModal"
              class="bg-blue-500 text-white px-4 py-2 rounded focus:outline-none"
            >
              Close
            </button>
          </slot>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'Modal',
  props: {
    isOpen: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    closeModal() {
      this.$emit('close')
    }
  }
}
</script>
