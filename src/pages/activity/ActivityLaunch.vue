<script setup lang="ts">
//
import type { EHorzAlignment } from "XrFrame/components/text/types";
import { ref, reactive } from "vue";
const rules = {
  studentId: {
    rules: [
      { required: true, errorMessage: "学号不能为空" },
      { minLength: 13, maxLength: 20, errorMessage: "学号必须为13-20位数字" }
    ]
  },
  phone: {
    rules: [
      { required: true, errorMessage: "电话不能为空" },
      { minLength: 11, maxLength: 11, errorMessage: "电话必须为11位数字" }
    ]
  }
}
type address = {
  value: string;
  text: string;
  children?: address[];
}
type form = {
  // 活动主题、姓名、学院、、学号、举办日期、举办时间、举办地点、人数估计、线上地址、发起人电话、主讲人简介
  title: string;
  name: string;
  college: string;
  studentId: string;
  time: string;
  address: string;
  population: number;
  onlineAddress: string;
  phone: string;
  introduction: string;
}
const addresses = ref<address[]>(
  [{
    text: "一年级",
    value: "1-0",
    children: [
      {
        text: "1.1班",
        value: "1-1"
      },
      {
        text: "1.2班",
        value: "1-2"
      }
    ]
  },
  {
    text: "二年级",
    value: "2-0"
  },
  {
    text: "三年级",
    value: "3-0"
  }]
)
const content = ref<form>({
  title: "",
  name: "",
  college: "",
  studentId: "",
  time: "",
  address: "",
  population: 0,
  onlineAddress: "",
  phone: "",
  introduction: "",
})
</script>

<template>
  <view class="activity">
    <!-- 输入活动相关信息：活动主题、姓名、学院、、学号、举办日期、举办时间、举办地点、人数估计、线上地址、发起人电话、发起人简介，使用uniapp的uni-form组件 -->
    <!-- 使用uni-form -->
    <view class="forms">
      <uni-forms ref="baseform" label-position="top" :rules="rules">
        <uni-forms-item required label="活动主题" name="title">
          <uni-easyinput v-model="content.title" placeholder="请输入活动主题"></uni-easyinput>
        </uni-forms-item>
        <uni-forms-item required label="姓名" name="name">
          <uni-easyinput v-model="content.name" placeholder="请输入姓名"></uni-easyinput>
        </uni-forms-item>
        <uni-forms-item required label="学院" name="college">
          <uni-combox candidates="hhh" placeholder="请选择所在学院" v-model="content.college" />
        </uni-forms-item>
        <uni-forms-item required label="学号" name="studentId">
          <uni-easyinput v-model="content.studentId" placeholder="请输入学号"></uni-easyinput>
        </uni-forms-item>
        <uni-forms-item required label="举办时间" name="time">
          <uni-datetime-picker v-model="content.time" @change="" type="datetimerange" range-separator="至" />
        </uni-forms-item>
        <uni-forms-item required label="举办地点" name="address">
          <uni-data-picker :localdata="addresses" popup-title="请选择举办地点" />
        </uni-forms-item>
        <uni-forms-item required label="人数估计" name="population">
          <uni-easyinput v-model="content.population" placeholder="请输入人数估计"></uni-easyinput>
        </uni-forms-item>
        <uni-forms-item required label="线上地址" name="onlineAddress">
          <uni-easyinput v-model="content.onlineAddress" placeholder="请输入线上地址，没有则添无"></uni-easyinput>
        </uni-forms-item>
        <uni-forms-item required label="电话" name="phone" style="white-space: nowrap;width: 30rpx;">
          <uni-easyinput v-model="content.phone" placeholder="请输入发起人电话"></uni-easyinput>
        </uni-forms-item>
        <uni-forms-item required label="简介" name="introduction">
          <textarea @blur="" class="text" :maxlength=-1></textarea>
        </uni-forms-item>

        <view class="btns">
          <button @click="" class="btn" type="primary">提交</button>
          <button class="btn" type="default">保存</button>
          <button @click="" class="btn" type="warn">重置</button>
        </view>
      </uni-forms>
    </view>
  </view>
</template>

<style lang="scss">
//
.activity {

  // width: 100vw;
  .forms {
    display: flex;
    flex-direction: column;
    width: 90%;
    margin: 0 auto;

    .uni-forms-item-label {
      white-space: nowrap;
    }

    .text{
      box-sizing: border-box;
      width: 100%;
      border: 1px solid #d6d6d6;
      border-radius: 10rpx;
      padding: 10rpx;
    }

    .btns {
      margin-top: 20rpx;
      margin-bottom: 20rpx;
      display: flex;
      justify-content: space-between;
      .btn {
        width: 25%;
      }
    }
  }
}
</style>
