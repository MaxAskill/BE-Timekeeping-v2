
<style>
a{
  color: #00a3ad;
}
</style>

<template>
  <div class="bg-grey-lighter min-h-screen flex flex-col">
          <div class="container max-w-sm mx-auto flex-1 flex flex-col items-center justify-center px-2">
              <div class="bg-white px-6 py-8 rounded shadow-md text-black w-full">
                  <h1 class="mb-8 text-3xl text-center font-bold">Log in</h1>
                  <input
                      type="text"
                      class="block border border-grey-light w-full p-3 rounded mb-4"
                      name="email"
                      placeholder="Email" />
                  <input
                      type="password"
                      class="block border border-grey-light w-full p-3 rounded mb-4"
                      name="password"
                      placeholder="Password" />

                  <button
                      type="submit"
                      class="w-full text-center py-3 rounded bg-green-500 text-white hover:bg-green-900 focus:outline-none my-1"
                  >Create Account</button>
              </div>

              <div class="text-grey-dark mt-6">
                  Don't have an account yet?

                  <!-- <RouterLink :to="'/nav'" class="no-underline border-b border-blue text-blue">
                    Create One
                </RouterLink> -->

                <router-link to="/signup"> Create One</router-link>
              </div>
          </div>
      </div>

</template>

<script>
// eslint-disable-next-line no-unused-vars
// import axios from 'axios';
/* eslint-disable */
// export default{
//   data(){

//   }
// }
</script>

