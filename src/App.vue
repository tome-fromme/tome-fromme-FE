<template>
  <TopNavbar />
  <router-view />
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

<style></style>
