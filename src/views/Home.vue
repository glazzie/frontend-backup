<template>
  <div class="container">
    <div class="pic-style d-flex justify-content-center flex-column align-items-center mb-3">
      <h1 class="text-white mt-5">RasmusElectronics</h1>
      <p class="text-white p pt-2">Påhittade producter till ett bra pris</p>
    </div>
    <div class="border d-flex justify-content-center">
     <h1>Best sellers</h1>
    </div>
    <div class="row">
      <div class="col-lg-4 my-2" v-for="product in products" :key="product.id">
        <router-link :to="{ name: 'ProductWatch', params: { id: product._id }}">
          <div class="card border">
        <div class="d-flex flex-column justify-content-center align-items-center">
          <img style="width: 10rem" class="bg-image" :src="product.image"/>
        <h3>${{ product.price }}</h3>
        </div>
          <div class="card-body">
            <h5 class="card-title">{{ product.name }}</h5>
            <p class="card-text">{{ product.short }}</p>
          </div>
      </div>

        </router-link>
      
    </div>

    </div>
  </div>
</template>

<script>

export default {
mounted(){
this.$store.dispatch('loadProducts')
},
computed: {
  products() { return this.$store.state.products}
},

}
</script>

<style scoped>
  .pic-style{
    background-image: url("https://wallpapercave.com/wp/wp2701655.jpg");
    padding-bottom: 5rem;
  }
  .p{
    font-size: 30px;
  }
</style>