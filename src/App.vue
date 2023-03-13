<script setup>
import { RouterLink, RouterView } from 'vue-router'
import TopNav from './components/TopNav.vue'
import MyFooter from './components/MyFooter.vue'
</script>

<template>
  <TopNav></TopNav>


  <RouterView />
  <MyFooter></MyFooter>
</template>

<style lang="less" scoped></style>