<template>
  <div class="flex h-screen overflow-hidden">
    <!-- Sidebar -->
    <Sidebar :sidebarOpen="sidebarOpen" @close-sidebar="sidebarOpen = false" />
    <!-- Akhir Sidebar -->

    <div class="relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden">
      <!-- Header -->
      <Header :sidebarOpen="sidebarOpen" @toggle-sidebar="sidebarOpen = !sidebarOpen" />
      <!-- Akhir Header -->
    </div>
  </div>
</template>

<script>
import { ref } from 'vue'
import Sidebar from './sidebar/Sidebar.vue'
import Header from './header/Header.vue'

export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'Layout',
  components: {
    Sidebar,
    // eslint-disable-next-line vue/no-reserved-component-names
    Header
  },
  setup() {
    const sidebarOpen = ref(false)
    return {
      sidebarOpen
    }
  }
}
</script>
