<template>
  <view class="order-list">
    <view v-for="order in orders" :key="order.id" class="order-item">
      <image :src="order.image" class="order-image" />
      <view class="order-details">
        <text class="order-name">{{ order.name }}</text>
        <text class="order-time">兑换时间：{{ order.orderTime }}</text>
        <text class="order-status">礼品状态:{{ order.status }}</text>
        <text class="order-amount">花费积分：{{ order.amount }}</text>
      </view>
    </view>
  </view>
</template>

<script>
export default {
  data() {
    return {
      orders: [
        {
          id: 1,
          image: '../../../static/giftCenter/giftt0.webp',
          name: 'Product 100',
          orderTime: '2021-07-01 10:00',
          status: 'Pending',
          amount: '$10.00',
        },
        {
          id: 2,
          image: '../../../static/giftCenter/giftt0.webp',
          name: 'Product 2',
          orderTime: '2021-07-02 14:30',
          status: 'Delivered',
          amount: '$15.00',
        },
        // Add more orders as needed
      ],
    };
  },
};
</script>

<style>
.order-list {
  width:100vw;
  padding: 2.5vw;
}

.order-item {
  padding: 5rpx;
  width:95vw;
 box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  display: flex;
  align-items: center;
  margin-bottom: 1.5vh;
}

.order-image {
  width: 150rpx;
  height: 150rpx;
  margin-right: 10rpx;
}

.order-details {
  display: flex;
  flex-direction: column;
  flex: 1;
}

.order-name {
  font-size:24rpx;
  font-weight: bold;
  padding-bottom: 5rpx;
}

.order-time {
  color: gray;
  font-size: 16rpx;
  margin-bottom: 5rpx;
}

.order-status {
  font-size: 24rpx;
  margin-bottom: 5rpx;
}

.order-amount {
  font-weight: bold;
   font-size: 24rpx;
}
</style>
