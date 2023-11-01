<template>
  <view class="contain">

    <view class="gifts">
      <view v-if="showExchange" class="gift">
        <!-- 可兑换的礼品内容 -->
        <gift-item></gift-item>
      </view>
      <view v-else class="gift">
         <order-list></order-list>
        <!-- 已兑换的礼品内容 -->
      </view>
    </view>

      <view class="buttons">
      <button  :class="{ 'selected': showExchange }" @tap="showExchangeGifts()">可兑换的礼品</button>
      <button  :class="{ 'selected': !showExchange }" @tap="showRedeemedGifts()">已兑换的礼品</button>
    </view>
  </view>
</template>

<script>
import giftItem from './giftItem.vue';
import orderList from './orderList.vue';

export default {
  data() {
    return {
      showExchange: true,
    };
  },
components: {
    giftItem,
    orderList,
  },
  methods: {
    showExchangeGifts() {
      this.showExchange = true;
      console.log(this.showExchange);
    },
    showRedeemedGifts() {
      this.showExchange = false;
      console.log(this.showExchange);
    },
  },
};
</script>

<style>
.contain{
     width:100vw;
      overflow-y: auto;
      position: relative;
  }
.buttons {
   position: fixed;
   display: flex;
   flex-direction: row;
   bottom: 0;
   width: 100%;
   height: 90rpx;
   line-height: 90rpx;
   background-color: #f8f8f8;
}
.selected {
  background-color: #007bff;
}
button {
  width:45%;
  font-size: 32rpx;
}

.gifts {
  height: calc(100% - 90rpx);
  overflow-y: auto;
}

.gift {
  /* 设置内容区域的高度，留出底部固定元素的空间 */

  width: 100%;
  /* 礼品卡片样式 */
}
</style>
