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
                    Totalt: <span class="ms-1">100 sek</span>
                </div>
                <small class="text-muted">inkl. moms</small>
            </div>
            <button class="btn btn-info">gå till kassan</button>
        </div>
    </div>
</template>

<script>
import { mapState } from 'vuex'
import CartProduct from './CartProduct'
export default {
    components: {
        CartProduct
    },
    computed: {
        ...mapState(['cart'])
    }
}
</script>

<style>

</style>