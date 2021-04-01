<template>
    <div>
        <CartProduct v-for="item in cart" :key="item.product.id" :item="item" />

        <div v-if="cart.length < 1" class="cart-item">

            <div class="p-2 d-flex justify-content-center align-items-center">
                din kundvagn är tom
            </div>
            <div class="dropdown-divider"></div>
        </div>

        <div class="p-2 d-flex justify-content-between align-items-center">
            <div class="ms-2">
                <div class="total price">
                    Totalt: <p class="ms-1">{{ cartPriceTotal }} sek</p>
                </div>
                <small class="text-muted">inkl. moms</small>
            </div>
            <button @click="buy" class="btn btn-info">Köp</button>
        </div>
    </div>
</template>

<script>
import { mapActions, mapGetters, mapState } from 'vuex'
import CartProduct from './CartProduct'
export default {
    components: {
        CartProduct
    },
    data(){
  return{
    orderInfo: {
      user: {},
      products: "",
      price: "",
    },


  }
  
},
methods: {
...mapActions(['buyReq']),

    buy(){
        if(this.$store.state.currentUser.email){
            this.orderInfo.user = this.$store.state.currentUser
        } 
        this.orderInfo.price = this.$store.getters.cartPriceTotal
        this.orderInfo.products = this.$store.state.cart
        this.buyReq(this.orderInfo)
    }
},
    computed: {
        ...mapState(['cart']),
        ...mapGetters(['cartPriceTotal']),

    }
}
</script>

<style>

</style>