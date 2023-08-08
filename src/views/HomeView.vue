<template>
  <main class="container">
    <div class="head flex items-center justify-between my-5 mt-7">
      <h1 class="text-3xl font-bold">Home</h1>
      
      <button class="btn px-5 py-3 rounded-md text-white text-md cursor-pointer font-bold bg-blue-500"
      @click="$router.push({ name: 'create' })"
      >
        <i class="fas fa-plus"></i>
        Create
      </button>
    </div>

    <div class="wrapper flex items-center justify-center flex-wrap gap-5">
      <TheCard v-for="item in 10" :key="item"/>
    </div>
  </main>
</template>

<script>
import TheCard from '../components/TheCard.vue';

export default {
  components: {
    TheCard
  }

}
</script>
