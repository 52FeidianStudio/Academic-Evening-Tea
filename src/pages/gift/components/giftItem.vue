<template>
  <div class="product-list">
    <div class="product-item" v-for="product in products" :key="product.id">
       <image class="product-image" :src="product.image" mode="aspectFit" :data-url="product.imageUrl" bindtap="previewImage"></image>
      <div class="product-info">
        <h3 class="product-name">{{ product.name }}</h3>
        <span class="product-price">{{ product.price }}积分</span>
        <button class="preview-button" @click="handlePreview(product.image)">预览</button>
        <button class="redeem-button" @click="toggle('center')">兑换</button>
      </div>
    </div>
  </div>
<uni-popup class="popup-center" ref="popup" background-color="#fff">
			<view class="popup-content" :class="{ 'popup-height': type === 'left' || type === 'right' }">
				<view style="color: green;">
					这是一个弹窗
				</view>
				<view style="color: red;" @click="close()">
					关闭弹窗
				</view>
			</view>
		</uni-popup>


  <!-- 兑换弹窗     v-model="showDialog"
      title="兑换确认"
      :content="confirmContent"
      confirm-text="确定"
      cancel-text="取消"  -->
    <!--  <uni-popup
      type="center"
      v-if="showDialog"
      @change="hideDialog"
      >
      <view class="DialogContain"> -->
       <!-- <view>
               <image :src="selectedProduct.image" mode="aspectFit"></image>
               <text>{{ selectedProduct.name }}</text>
               <uni-number-box v-model="count" :min="0" :max="selectedProduct.stock" :step="1" @change="checkQuantity"></uni-number-box>
             </view>
        <button @click="showConfirmDialog">兑换</button>
        <button @click="hideDialog">取消</button> -->
      <!--  </view>
     </uni-popup> -->
</template>

<script>
  import uniNumberBox from '@dcloudio/uni-ui/lib/uni-number-box/uni-number-box.vue';
  import uniPopup from '@dcloudio/uni-ui/lib/uni-popup/uni-popup';

export default {
  components: {
      uniNumberBox,
      uniPopup
    },
     data(){
       return{
         products: [
         {
           id: 1,
           name: "商品1",
           price: 100,
           image: '../../../static/giftCenter/giftt0.webp',
           imageUrl: ['https://cdn.pixabay.com/photo/2021/07/09/09/51/hummingbird-6396743_960_720.jpg',"https://cdn.pixabay.com/photo/2021/07/09/09/51/hummingbird-6396743_960_720.jpg"]
         },
         {
           id: 2,
           name: "商品2",
           price: 200,
           image:  "../../../static/giftCenter/giftt0.webp",
           imageUrl: ['../../../static/giftCenter/giftt0.webp',"https://example.com/product1.jpg"]
         },
       ],
         showDialog: false,
               showConfirm: false,
               selectedProduct: null,
               count: 100,
               userPoints: 500// 假设用户的积分为500
       };
     },

    methods: {
       handlePreview(image) {
             // 调用微信小程序的预览图片方法
             wx.previewImage({
               current: image,
               urls: this.products.map(product => product.image)
             });
           },
            showExchangeDialog(product) {
                 // this.selectedProduct = product;
                 //       this.count = 0;
                 //       this.confirmContent = `
                 //         <image src="${this.selectedProduct.image}" mode="aspectFit"></image>
                 //         <text>${this.selectedProduct.name}</text>
                 //       `;
                 // this.showDialog = true;
                 this.$refs.popup.open('center')

               },
                checkQuantity() {
                     if (this.count*this.selectedProduct.price > this.userPoints) {
                       this.count = this.userPoints/this.selectedProduct.price;
                     }
                   },
               hideDialog(e) {
                 this.showDialog = e.show
               },
               //弹窗开启
               			toggle(type) {
               				this.type = type
               				this.$refs.popup.open(type)
               			},
               			//弹窗关闭
               			close() {
               				this.$refs.popup.close()
               			},

              //  showConfirmDialog() {
              //    this.showConfirm = true;
              //  },
              //  hideConfirmDialog() {
              //    this.showConfirm = false;
              //  },

              //  confirmExchange() {
              //    // 执行兑换操作
              //    // 可以在这里调用接口或其他逻辑处理
              //    console.log("兑换成功");
              //    this.hideConfirmDialog();
      // },


}
}
</script>

<style lang="scss">


.container {
  padding: 20rpx;
}

.product-list {
  width:100vw;

  display: flex;
  flex-wrap: wrap;
}

.product-item {
  width: 50%;
  padding: 10rpx;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.product-image {
  width: 100%;
  height: 200rpx;
  margin-bottom: 10rpx;
}

.product-info {
  text-align: center;
}

.product-name {
  font-size: 28rpx;
  margin-bottom: 10rpx;
}

.product-price {
  font-size: 24rpx;
  color: #999999;
}
.preview-button,
.redeem-button {
  width:40vw;
  height:5vh;
  line-height: 5vh;
  margin-top:2rpx;
}
.popup-center {
  top: 50% !important;
  left: 50% !important;
  -webkit-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
}
.popup-content {
	display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: center;
		padding: 15px;
		height: 200px;
		width: 280px;
		background-color: #fff;
		border-radius: 10px;

	}
</style>
