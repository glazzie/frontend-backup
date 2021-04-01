<template>
  <!-- Navbar -->
<nav class="navbar navbar-expand-lg navbar-light bg-inf">
  <!-- Container wrapper -->
  <div class="container">
    <!-- Navbar brand -->
     <router-link to="/"><a class="navbar-brand" href="#">RasmusElectronics</a></router-link>
    

    <!-- Toggle button -->
    <button
      class="navbar-toggler"
      type="button"
      data-mdb-toggle="collapse"
      data-mdb-target="#navbarSupportedContent"
      aria-controls="navbarSupportedContent"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <i class="fas fa-bars"></i>
    </button>

    <!-- Collapsible wrapper -->
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <!-- Left links -->
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
            <router-link to="/"><a class="nav-link" href="#">Home</a></router-link>
        </li>
        <li class="nav-item">
            <router-link to="/products"><a class="nav-link" href="#">Products</a></router-link>
        </li>
      </ul>
      <!-- Left links -->

      <!-- Right links -->
      <ul class="navbar-nav d-flex flex-row">
      <!-- Icon dropdown cart -->
      <li class="nav-item me-3 me-lg-0 dropdown ">
        <a
          class="nav-link hidden-arrow"
          href="#"
          id="navbarDropdown"
          role="button"
          data-mdb-toggle="dropdown"
          aria-expanded="false"
        >
          <span><i class="fas fa-shopping-cart fa-lg"></i></span>
          <span v-if="cartItemCount" class="badge rounded-pill badge-notification bg-danger">{{ cartItemCount }}</span>
        </a>
        <ul :class="formattedSrc" class="dropdown-menu shopping-cart" aria-labelledby="navbarDropdown">
         <ShoppingCart />
        </ul>
      </li>

      <!-- Log in button-->
        <router-link to="/login" v-if="!currentUser._id">
             <button
          class="btn btn-outline-primary mx-3"
          type="button"
          data-mdb-ripple-color="dark"
        >
          Login
        </button>
        </router-link>
     
      
      <!-- Icon dropdown user-->
      <li class="nav-item me-3 me-lg-0 dropdown" v-else>
        <a
          class="nav-link dropdown-toggle"
          href="#"
          id="navbarDropdown"
          role="button"
          data-mdb-toggle="dropdown"
          aria-expanded="false"
        >
          <i class="fas fa-user"></i>
        </a>
        <ul :class="formattedSrc" class="dropdown-menu" aria-labelledby="navbarDropdown">
          <li><a class="dropdown-item" href="#">{{ currentUser.email }}</a></li>
          <li v-if="currentUser.admin"> <router-link to="/admin"><a class="dropdown-item" href="#">Admin tools</a></router-link></li>
          <li><hr class="dropdown-divider" /></li>
          <li @click="logoutUser">
            <a class="dropdown-item" href="#" >Log out</a>
          </li>
        </ul>
      </li>
    </ul>
    </div>
    <!-- Collapsible wrapper -->
  </div>
  <!-- Container wrapper -->
</nav>
<!-- Navbar -->
</template>

<script>
import ShoppingCart from './ShoppingCart'
import { mapGetters, mapState } from 'vuex'
export default {

  components: {
    ShoppingCart
  },
  
computed: {
  ...mapGetters(['cartItemCount']),
  ...mapState(['currentUser']),

  formattedSrc(){
          return{
            'dropdown-menu-end': screen.width > 991
          }
        }
},
methods: {

  logoutUser(){
    this.$store.dispatch("logoutUser")
  }
  
}
}
</script>

<style scoped>
.shopping-cart{
  min-width: 450px;
}
</style>