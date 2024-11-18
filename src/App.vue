<script setup>
import trangchu from './components/trangchu.component.vue';
import navbar from './components/layout/header.component.vue';
</script>

<template>
   <div class="container">
      <navbar/>
      <router-view></router-view>
   </div>
</template>

