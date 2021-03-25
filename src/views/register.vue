<template>

<div class="d-flex login m-auto align-items-center flex-column">


    <h1 class="my-5">Register</h1>
    
    <form>
  <!-- Email input -->

    <div class="form-outline mb-4 d-flex">
        <div class="d-flex flex-column me-2">
            <label class="" for="firstname">Firstname</label>
            <input type="text" id="firstname" class="bg-light border xav" /> 
        </div>
    
  
    <div class="d-flex flex-column">
        <label class="" for="lastname">Lastname</label>
        <input type="text" id="lastname" class="bg-light border xav" /> 
      </div>
  </div>

  <div class="form-outline mb-4 d-flex flex-column">
    <label class="" for="email">Email address</label>
    <input v-model="loginInfo.email" type="email" id="email" class="bg-light border" />
  </div>

  <!-- Password input -->
  <div class="form-outline mb-4 d-flex flex-column">
    <label class="" for="password">Password</label>
    <input v-model="loginInfo.password" type="password" id="password" class="bg-light border" />
  </div>

  <!-- 2 column grid layout for inline styling -->
  

  <!-- Submit button -->
  <button @click.prevent="loginUser" type="submit" class="btn btn-primary btn-block mb-4">Sign in</button>

  <!-- Register buttons -->
  <div class="text-center">
    <p>have an account?<router-link to="/login"><a href="#!"> sign in</a></router-link></p>
    
  </div>
</form>
</div>


</template>

<script>
export default {
data(){
  return{
    loginInfo: {
      email: "",
      password: ""
    },

  }
  
},
methods: {
  async loginUser(){
    let user = await this.$store.dispatch('loginUser', this.loginInfo)
    if(user.error){
      console.log("fail")
    }else{
      console.log("success")
      console.log(user.user.email)
    }
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