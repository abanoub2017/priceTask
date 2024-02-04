<template>
  <main>
    <AbInput/>
    <AbCard/>
  </main>
</template>

<script setup lang="ts">
import AbCard from '@/components/AbCard.vue';
import AbInput from '@/components/AbInput.vue';
</script>

<style>
main{
  width: 30%;
  margin: auto;
  @media screen and (max-width: 768px) {
    width: 100%;
  }
}
</style>