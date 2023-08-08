<template>
  <div>
    <div class="head flex items-center justify-between my-5 mt-7">
      <h1 class="text-3xl font-bold">Create product</h1>

      <button class="btn px-5 py-3 rounded-md text-white text-md cursor-pointer font-bold bg-blue-500"
        @click="$router.push({ name: 'home' })">
        <i class="fas fa-home"></i>
        Home
      </button>
    </div>

    <div class="form w-[700px] mx-auto p-7 shadow-md rounded-md">
      <h3>Create Product</h3>
      <form class="flex flex-col content-between" @submit.prevent="createProduct">
        <input class="border border-slate-300 px-5 py-2 rounded-md mt-5" type="text" placeholder="Product name"
          v-model.trim="product.name">
        <p class="text-red-500 text-sm">
          {{ errors.name }}
        </p>

        <input class="border border-slate-300 px-5 py-2 rounded-md mt-5" type="text" placeholder="Product image"
          v-model.trim="product.image">
        <p class="text-red-500 text-sm">{{ errors.image }}</p>

        <textarea placeholder="Product description"
          class="resize-none border border-slate-300 px-5 py-2 rounded-md mt-5 h-36"
          v-model.trim="product.desc"></textarea>
        <p class="text-red-500 text-sm">{{ errors.desc }}</p>

        <div class="btn-div mt-5">
          <button class="btn px-5 py-3 rounded-md text-white text-md cursor-pointer w-full 
          bg-green-500" :disabled="isValid || loading" :class="{ 'opacity-50': isValid || loading }">
            {{ isValid || loading ? 'Loading...' : 'Create' }}
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import http from '../axios.config'

export default {
  data() {
    return {
      isTrue: false,
      loading: false,
      product: {
        name: '',
        desc: '',
        image: ''
      },
      errors: {
        name: '',
        desc: '',
        image: ''
      }
    }
  },
  computed: {
    isValid() {
      if (this.product.name && this.product.desc && this.product.image) {
        return false
      } else {
        return true
      }
    }
  },
  watch: {
    product: {
      handler(newValue) {
        if (newValue.name.length <= 3) {
          this.errors.name = "Product name can't be less than 4"
        } else if (newValue.name.length >= 20) {
          this.errors.name = "Product name can't be more than 20"
        } else {
          this.errors.name = ""
        }

        if (newValue.desc.length <= 10) {
          this.errors.desc = "Description can't be less than 10"
        } else if (newValue.desc.length >= 50) {
          this.errors.desc = "Product name can't be more than 50"
        } else {
          this.errors.desc = ""
        }

        const httpRegex = /^https?:\/\/(?:www\.)?[-a-zA-Z0-9@: %._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b(?:[-a-zA-Z0-9()@:%_\+.~#?&\/=]*)$/
        if (newValue.image.length < 1) {
          this.errors.image = "Image can't be less than 5"
        } else if (!httpRegex.test(newValue.image)) {
          this.errors.image = "It is not correct"
        } else {
          this.errors.image = ""
        }
      },
      deep: true
    },
  },
  methods: {
    async createProduct() {
      this.isValid
      this.loading = true
      const res = await http.post('/products.json', this.product)
      this.loading = false
      this.product = {
        name: '',
        desc: '',
        image: ''
      }
      console.log(res);
      if (res.status === 200) {
        this.$router.push({name: 'home'})
      }
    },

  }
  // Modal => edit products (put, patch), delete Card !important
}
</script>