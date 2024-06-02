<template>
  <div>
    <Layout>
      <WelcomeBanner>
        <!-- Content -->
        <div class="relative">
          <h1 class="text-2xl md:text-3xl text-slate-800 dark:text-slate-100 font-bold mb-3">
            Welcome back, Elmosius👋
          </h1>
          <p class="dark:text-indigo-200">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi, ex?
          </p>
        </div>
      </WelcomeBanner>
    </Layout>
  </div>
</template>

<script>
import Layout from '../Layout.vue'
import WelcomeBanner from './WelcomeBanner.vue'

export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'Dashboard',
  components: {
    Layout,
    // eslint-disable-next-line vue/no-unused-components
    WelcomeBanner
  }
}
</script>
