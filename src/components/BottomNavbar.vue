<template>
  <link rel="stylesheet" href="https://cdn.lineicons.com/1.0.1/LineIcons.min.css" />
  <div class="bottom__navbar">
    <div class="colum">
      <router-link class="navbar__icon" :to="{ name: 'Home' }">
        <i class="lni-home size-md" :class="{ 'lni-tada-effect': !showHome }" id="home" @click="clickIcon"></i>
      </router-link>
      <router-link class="check navbar__icon" :to="{ name: 'Write' }">
        <i
          class="lni-check-mark-circle size-md"
          :class="{ 'lni-tada-effect': !showCheck }"
          id="check"
          @click="clickIcon"
        ></i>
      </router-link>

      <router-link class="coin navbar__icon" :to="{ name: 'Faq' }">
        <i class="lni-coin size-md" :class="{ 'lni-tada-effect': !showCoin }" id="coin" @click="clickIcon"></i>
      </router-link>

      <router-link class="user navbar__icon" :to="{ name: 'MyPage' }">
        <i class="lni-user size-md" :class="{ 'lni-tada-effect': !showUser }" id="user" @click="clickIcon"></i>
      </router-link>
    </div>
  </div>
</template>

<script>
  import { ref } from 'vue'

  export default {
    setup() {
      const showHome = ref(true)
      const showCheck = ref(true)
      const showCoin = ref(true)
      const showUser = ref(true)

      const clickIcon = (event) => {
        switch (event.target.id) {
          case 'home':
            showHome.value = false
            showCheck.value = true
            showCoin.value = true
            showUser.value = true
            break
          case 'check':
            showHome.value = true
            showCheck.value = false
            showCoin.value = true
            showUser.value = true
            break

          case 'coin':
            showHome.value = true
            showCheck.value = true
            showCoin.value = false
            showUser.value = true
            break

          case 'user':
            showHome.value = true
            showCheck.value = true
            showCoin.value = true
            showUser.value = false
            break
        }
      }

      return {
        showHome,
        showCheck,
        showCoin,
        showUser,
        clickIcon,
      }
    },
  }
</script>

<style setup>
  .bottom__navbar {
    width: 100%;
    height: 55px;
    background-color: #44a8b1;
    bottom: 2px;
    position: fixed;
    box-shadow: 0.1px 0.1px 15px 0.1px #c6e2e4;
    border-radius: 10px;
    display: flex;
  }
  #home {
    margin-left: 0;
    margin-top: 2px;
    color: #ffff;
    transition: width 0.5s, background-color 0.5s, border-radius 0.5s;
  }
  #check {
    margin-left: 0;
    margin-top: 2px;
    color: #ffff;
    transition: width 0.5s, background-color 0.5s, border-radius 0.5s;
  }
  #coin {
    margin-left: 0;
    margin-top: 2px;
    color: #ffff;
    transition: width 0.5s, background-color 0.5s, border-radius 0.5s;
  }
  #user {
    margin-left: 0;
    color: #ffff;
    transition: width 0.5s, background-color 0.5s, border-radius 0.5s;
  }
  .colum {
    display: flex;
    width: 95%;
    height: 40px;
    margin-top: 10px;
    margin-left: 10px;
    justify-content: space-evenly;
  }
  .navbar__icon {
    height: 34px;
    display: flex;
    align-items: center;
    text-decoration: none;
  }
  .navbar__text {
    padding-left: 3px;
    margin-top: 8px;
    color: #ffff;
  }
  .clicked {
    width: 100px;
    height: 34px;
    background-color: #feca57;
    border-radius: 10px;
    transition: background-color 0.3s, border-radius 0.5s, width 0.5s;
  }
</style>
