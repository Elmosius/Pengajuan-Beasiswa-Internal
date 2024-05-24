<template>
  <div class="flex h-screen overflow-hidden">
    <!-- Sidebar -->
    <Sidebar :sidebarOpen="sidebarOpen" @close-sidebar="sidebarOpen = false" />
    <!-- Akhir Sidebar -->

    <!-- Content -->
    <div class="relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden">
      <!-- Header -->
      <Header :sidebarOpen="sidebarOpen" @toggle-sidebar="sidebarOpen = !sidebarOpen" />
      <!-- Akhir Header -->
      <main>
        <div class="px-4 sm:px-6 lg:px-8 py-8 w-full max-w-9xl mx-auto">
          <!-- Welcome banner -->
          <WelcomeBanner />
          <slot></slot>
        </div>
      </main>
    </div>
    <!-- Akhir Content -->
  </div>
</template>

<script>
import { ref } from 'vue'
import Sidebar from './sidebar/Sidebar.vue'
import Header from './header/Header.vue'
import WelcomeBanner from './dashboard/WelcomeBanner.vue'

export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'Layout',
  components: {
    Sidebar,
    // eslint-disable-next-line vue/no-reserved-component-names
    Header,
    WelcomeBanner
  },
  setup() {
    const sidebarOpen = ref(false)
    return {
      sidebarOpen
    }
  }
}
</script>
