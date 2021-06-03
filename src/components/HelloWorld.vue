<template>
  <div class="text-center">
    <h1 class="py-4">Welcome to NFT MultiSender</h1>
    <p>A tool that allows you to conveniently send your NFT tokens to multiple recipients.</p>
  </div>
</template>

<script setup>
import { defineProps } from 'vue'

defineProps({
  msg: String
})
</script>