<template>
  <TopNavbar />
  <router-view class="body__container" />
  <BottomNavbar />
</template>

<script>
  import BottomNavbar from '@/components/BottomNavbar.vue'
  import TopNavbar from '@/components/TopNavbar.vue'

  export default {
    components: {
      BottomNavbar,
      TopNavbar,
    },
    setup() {},
  }
</script>

<style scoped>
  .body__container {
    display: flex;
    flex-direction: column;
    margin: auto;
    max-width: 80%;
  }
</style>
