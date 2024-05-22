<script setup>
import { ref } from 'vue'

const x = ref('Hello VUE!!')
</script>

<template>
  <h1 class="text-3xl bg">{{ x }}</h1>
</template>
