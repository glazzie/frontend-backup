<template>

<div class="d-flex login m-auto align-items-center flex-column">


    <h1 class="my-5">Register</h1>
    
    <form>
  <!-- Email input -->

    <div class="form-outline mb-4 d-flex">
        <div class="d-flex flex-column me-2">
            <label for="firstName">Firstname</label>
            <input v-model="registerInfo.firstName" type="text" id="firstName" class="bg-light border xav" /> 
        </div>
    
  
    <div class="d-flex flex-column">
        <label for="lastName">Lastname</label>
        <input v-model="registerInfo.lastName" type="text" id="lastName" class="bg-light border xav" /> 
      </div>
  </div>

  <div class="form-outline mb-4 d-flex flex-column">
    <label for="email">Email address</label>
    <input v-model="registerInfo.email" type="email" id="email" class="bg-light border" />
  </div>

  <!-- Password input -->
  <div class="form-outline mb-4 d-flex flex-column">
    <label class="" for="password">Password</label>
    <input v-model="registerInfo.password" type="password" id="password" class="bg-light border" />
  </div>

  <!-- 2 column grid layout for inline styling -->
  

  <!-- Submit button -->
  <button @click.prevent="registerUser" type="submit" class="btn btn-primary btn-block mb-4">Sign in</button>

  <!-- Register buttons -->
  <div class="text-center">
    <p>have an account?<router-link to="/login"><a href="#!"> sign in</a></router-link></p>
    
  </div>
</form>
</div>


</template>

<script>
import { mapActions } from 'vuex'
export default {
data(){
  return{
    registerInfo: {
      firstName: "",
      lastName: "",
      email: "",
      password: ""
    },

  }
  
},
methods: {
  ...mapActions(['register']),
  
  registerUser(){
    this.register(this.registerInfo)
  }
}
}
</script>

<style scoped>
.login{
  height: 500px;
  width:400px;
  background-color: rgb(200, 226, 231);
  border-radius: 15%;
}
.xav{
  width: 150px;
}

</style>