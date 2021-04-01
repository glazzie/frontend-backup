<template>
  <div class="container">
      <div class="row color py-4 mt-2 px-4">
          <h1 class="d-flex justify-content-center align-items-center">Orders</h1>
        <div class="my-2" v-for="order in orders" :key="order.id">
            <div class="card border bord">
            <div class="d-flex flex-column justify-content-center align-items-center">
            <h3>{{ order.user.firstName}}  {{ order.user.lastName}}</h3>
            <p>{{ order.user.email}}</p>
            <button class="btn btn-success">Done</button>
            </div>
            <div class="card-body">
                <div v-for="item in order.products" :key="item.id">
                    <div class="d-flex justify-content-between align-items-center border bord py-2">
                        <div class="d-flex align-items-center mx-3">
                            <img style="width: 5rem" class="bg-image" :src="item.product.image"/>
                            <h3>{{ item.product.name }}</h3>
                        </div>
                        <div class="d-flex align-items-center mx-3">
                            <small class="m-auto">{{ item.quantity }}x ${{ item.product.price }}</small>
                        </div>
                        
                    </div>
                    
                </div>
                <h5 class="card-text d-flex justify-content-end mt-3">Total: ${{ order.price }}</h5>
            </div>
        </div>
        </div>
    </div>
  </div>
</template>

<script>
export default {
    
    mounted(){
        this.$store.dispatch('loadOrders')
},
computed: {
    orders() { return this.$store.state.orders }
},  
}
</script>

<style scoped>
.bord{
    border-radius: 20px;
}
</style>