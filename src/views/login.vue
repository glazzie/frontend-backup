<template>

<div class="d-flex login m-auto align-items-center flex-column mt-5">


    <h1 class="my-5">Login</h1>
    
    <form class="w-75">
  <!-- Email input -->
  <div class="mb-4 d-flex flex-column">
    <label class="" for="email">Email address</label>
    <input v-model="loginInfo.email" type="email" id="email" class="bg-light border" />
    <div class="text-danger">{{ loginerror.msg }}</div>    
  </div>

  <!-- Password input -->
  <div class="mb-4 d-flex flex-column">
    <label class="" for="password">Password</label>
    <input v-model="loginInfo.password" type="password" id="password" class="bg-light border" />
  </div>

  <!-- 2 column grid layout for inline styling -->
  

  <!-- Submit button -->
  <button @click.prevent="loginUser" type="submit" class="btn btn-primary btn-block mb-4">Sign in</button>

  <!-- Register buttons -->
  <div class="text-center">
    <p>Not a member?<router-link to="/register"><a href="#!"> Register</a></router-link></p>
    
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
    loginerror:{
      msg: ""
    }

  }
  
},
methods: {
  async loginUser(){
          let user = await this.$store.dispatch('loginUser', this.loginInfo)
          if(user.error){
            this.loginerror.msg = "fel email eller lösenord"
          }else{
            this.$router.replace({ name: 'Home'})
            this.loginerror.msg = ""
    }

  }
}
}
</script>

<style scoped>
.login{
  height: 500px;
  width:400px;
  background-color: rgba(0, 0, 0, 0.212);
  border-radius: 20px;
}
</style>