<template>
  <main class="container">
    <div class="head flex items-center justify-between my-5 mt-7">
      <h1 class="text-3xl font-bold">Home</h1>

      <button class="btn px-5 py-3 rounded-md text-white text-md cursor-pointer font-bold bg-blue-500"
        @click="$router.push({ name: 'create' })">
        <i class="fas fa-plus"></i>
        Create
      </button>
    </div>

    <div class="wrapper flex items-stretch justify-center flex-wrap gap-5">
      <TheCard v-for="item in products" :key="item" :products="item" />
    </div>
  </main>
</template>

<script>
import http from '../axios.config'
import TheCard from '../components/TheCard.vue';

export default {
  components: {
    TheCard
  },
  data() {
    return {
      products: ''
    }
  },
  methods: {
    async fetchProducts() {
      const res = await http.get('/products.json', this.product)
      const array = []
      
      Object.keys(res.data).forEach((key) => {
        array.push({ id: key, data: res.data[key] });
      });
      
      this.products = array
    }
  },
  mounted() {
    this.fetchProducts()
  },

}
</script>
