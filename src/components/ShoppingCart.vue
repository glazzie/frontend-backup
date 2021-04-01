<template>
    <div>

        <div>
    <modal-vue
      @on-close="$vm2.close('modal-1')"
      name="modal-1"
      :headerOptions="{
        title: 'order status',
      }"
      noFooter
    > <p v-if="!problem" class="mx-3"><span class="text-success">Success</span> you will receive your items shortly</p>
       <p v-else class="mx-3"><span class="text-danger">Failed</span> u need to add a item to cart</p>
    
    </modal-vue>
  </div>




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
            <button @click="buy" @click.stop="$vm2.open('modal-1')" class="btn btn-info">Köp</button>
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
      user: {firstName: "No", lastName: "User", email: "noUser@noUser"},
      products: "",
      price: "",
    },
    problem: true
    


  }
  
},
methods: {
...mapActions(['buyReq']),

    buy(){
        if(this.$store.state.cart.length > 0){
            this.problem = false
            
        if(this.$store.state.currentUser.email){
            this.orderInfo.user = this.$store.state.currentUser
        }else{
            this.orderInfo.user = {firstName: "No", lastName: "User", email: "noUser@noUser"}
        }
        this.orderInfo.price = this.$store.getters.cartPriceTotal
        this.orderInfo.products = this.$store.state.cart
        this.buyReq(this.orderInfo)
        }
        else{
            this.problem = true;
        }
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