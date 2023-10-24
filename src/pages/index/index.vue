<script setup lang="ts">
//
import CustomNavbar from './components/CustomNavbar.vue';
import HomeContent from './components/HomeContent.vue';
</script>

<template>
  <CustomNavbar />
  <scroll-view class="scroll-view" scroll-y>
    <XsSwiper class="swiper"></XsSwiper>
    <HomeContent />
    <div class="divider"></div>
  </scroll-view>
</template>

<style lang="scss">
//
page {
  background-color: #f7f7f7;
  height: 100%;
  display: flex;
  flex-direction: column;
}

.scroll-view {
  display: flex;
  flex: 1;

  .swiper {
    padding-top: 20px;
  }

  .divider{
    // justify-content: center;
    // position: absolute;
    // left: 50%; 
    // transform: translateX(-50%); 
    width: 90%;
    height: 1px;
    background-color: #d6d6d6;
    margin: 15px auto;
  }
}
</style>
