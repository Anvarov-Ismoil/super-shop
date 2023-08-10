<template>
  <div class="card w-72 h-full shadow-md p-3 rounded-md">
    <img class="w-full h-72 object-cover rounded-md" :src="products.data.image"
    alt="">
    <h3 class="text-xl font-bold my-3">
      {{ products.data.name }}
    </h3>
    <p class="font-semibold">{{ products.data.desc }}</p>
    <div class="btns flex justify-center items-center gap-5 mt-5">
      <button class="btn px-5 py-3 rounded-md text-white text-md cursor-pointer w-full bg-yellow-500" @click="$emit('edit')">
        <i class="fas fa-edit"></i>
        Edit
      </button>
      <button class="btn px-5 py-3 rounded-md text-white text-md cursor-pointer w-full bg-red-500" @click="$emit('action')">
        <i class="fas fa-trash-alt"></i>
        Delete
      </button>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    products: {
      type: Object,
      required: true
    }
  }
}
</script>