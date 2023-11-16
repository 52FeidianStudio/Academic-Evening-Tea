<script setup lang="ts">
//
import { getCollegeListAPI, launchActivityAPI, getLaunchPermissionAPI } from "@/services/ActivityLaunch";
import { ref, reactive } from "vue";
import { onLoad, onShow } from "@dcloudio/uni-app";
import debounce from "@/utils/tool";
const rules = {
  studentId: {
    rules: [
      { required: true, errorMessage: "学号不能为空" }
    ]
  },
  phone: {
    rules: [
      { required: true, errorMessage: "电话不能为空" },
      { minLength: 11, maxLength: 11, errorMessage: "电话必须为11位数字" }
    ]
  },
  population: {
    rules: [
      // population不能为0
      {
        required: true,
        errorMessage: "人数不能为空",
      },
    ]
  },
  title: {
    rules: [
      { required: true, errorMessage: "活动主题不能为空" },
    ]
  },
  name: {
    rules: [
      { required: true, errorMessage: "姓名不能为空" },
    ]
  },
  college: {
    rules: [
      { required: true, errorMessage: "学院不能为空" },
    ]
  },
  time: {
    rules: [
      { required: true, errorMessage: "时间不能为空" },
    ]
  },
  address: {
    rules: [
      { required: true, errorMessage: "地点不能为空" },
    ]
  },
  sponsorName: {
    rules: [
      { required: true, errorMessage: "主讲人姓名不能为空" },
    ]
  },
  introduction: {
    rules: [
      { required: true, errorMessage: "活动简介不能为空" },
    ]
  },
  sponsorIntroduction: {
    rules: [
      { required: true, errorMessage: "主讲人简介不能为空" },
    ]
  },
}
type address = {
  value: string;
  text: string;
  children?: address[];
}
type college = {
  value: string;
  text: string;
}
type form = {
  // 活动主题、姓名、学院、、学号、举办日期、举办时间、举办地点、人数估计、线上地址、发起人电话、主讲人简介
  title: string;
  name: string;
  college: string;
  studentId: string;
  time: string;
  address: string;
  population: string;
  onlineAddress: string;
  phone: string;
  introduction: string;
  sponsorIntroduction: string;
  sponsorName: string;
  deptNums?: Array<object>
}
type limit = {
  college?: string;
  population: number;
  id: number;
}
const content = ref<form>({
  title: "",
  name: "",
  college: "",
  studentId: "",
  time: "",
  address: "",
  population: '',
  onlineAddress: "",
  phone: "",
  introduction: "",
  sponsorIntroduction: "",
  sponsorName: "",
})
const colleges = ref<college[]>([])
const selectedColleges = ref<string[]>([])
// 选中学院
const selectedCollegeChange: UniHelper.UniDataCheckboxMultipleOnChange = (e) => {
  console.log(e)
}

const populationLimit = ref<limit[]>([])
let newLimit = ref<any>([])

const launchActivity = async (data: any) => {
  const res = await launchActivityAPI(data)
  console.log(res)
  if(res.code===200){
    uni.showToast({
        title: '提交成功',
        icon: 'success',
        duration: 1000,
        complete: () => {
          setTimeout(() => {
            uni.switchTab({
              url: '/pages/index/index'
            })
            reset()
          }, 1000);

        }
      })
  }else{
    uni.showToast({
      title:'活动发起失败',
      icon:'none'
    })
  }
}

// 表单校验
const baseform = ref<any>()
// 提交
const submit = debounce(() => {
  baseform.value.validate().then((res: form) => {
    // 求学院限制人数总和
    let sum:number=0;
    populationLimit.value.forEach((item:any)=>{
      sum += item.population
    })
    console.log(res)
    if (parseInt(res.population) === 0) {
      uni.showToast({
        title: '人数不能为0',
        icon: 'none'
      })
      return
    }
    if (res) {
      if (selectedColleges.value.length === 0) {
        newLimit.value = []
      } else if (populationLimit.value.every(item => item.population === 0)) {
        uni.showToast({
          title: '学院限制人数不能为0',
          icon: 'none'
        })
        return
      } else if(sum>parseInt(content.value.population)){
        uni.showToast({
          title:'学院限制人数之和不能超过总限制人数',
          icon:'none'
        })
        return
      } else {
        populationLimit.value.forEach(item => {
          if (item.population !== 0) {
            newLimit.value.push({
              deptId: item.id,
              maxNum: item.population
            })
          }
        })
      }
      const needContent = {
        id: '',
        userImg2: content.value.title,
        userName: content.value.name,
        hbKeyword: content.value.college,
        userTel: content.value.studentId,
        lat: content.value.time,
        address: content.value.address,
        hot: parseInt(content.value.population),
        qphone: content.value.phone,
        details: content.value.introduction,
        cityname: content.value.onlineAddress,
        speakerName: content.value.sponsorName,
        img: content.value.sponsorIntroduction,
        deptNums: newLimit.value
      }
      console.log(needContent)
      launchActivity(needContent);
    }
  })

  // console.log(content.value)
})
// 重置
const reset = () => {
  uni.removeStorageSync('content')
  content.value = {
    title: "",
    name: "",
    college: "",
    studentId: "",
    time: "",
    address: "",
    population: "",
    onlineAddress: "",
    phone: "",
    introduction: "",
    sponsorIntroduction: "",
    sponsorName: "",
  }
  populationLimit.value.forEach(item => {
    item.population = 0
  })
  newLimit = []
  selectedColleges.value = []
}
// 保存
const save = () => {
  uni.setStorageSync('content', content.value)
  uni.showToast({
    title:'已保存！',
    icon:'success'
  })
}
// 获取学院列表
const getCollegeList = async () => {
  const res = await getCollegeListAPI()
  console.log(res)
  colleges.value = res.data.map((item: any) => ({
    value: item.deptName,
    text: item.deptName
  }))
  populationLimit.value = res.data.map((item: any) => ({
    college: item.deptName,
    population: 0,
    id: item.deptId
  }))
  console.log(populationLimit.value)
}

const getLaunchPermission = async () => {
  const res = await getLaunchPermissionAPI()
  console.log(res)
  if (res.code !== 200) {
    uni.showToast({
      title: '您没有发起活动的权限',
      icon: 'none'
    })
    setTimeout(() => {
      uni.switchTab({
        url: '/pages/index/index'
      })
    }, 1000)
  } else {
    getCollegeList()
    if (uni.getStorageSync('content')) {
      content.value = uni.getStorageSync('content')
    }
  }
}
onShow(() => {
  getLaunchPermission()
})
</script>

<template>
  <view class="activity">
    <!-- 输入活动相关信息：活动主题、姓名、学院、、学号、举办日期、举办时间、举办地点、人数估计、线上地址、发起人电话、发起人简介，使用uniapp的uni-form组件 -->
    <!-- 使用uni-form -->
    <view class="forms">
      <uni-forms ref="baseform" label-position="top" :rules="rules" :model="content" label-width="100%">
        <uni-forms-item required label="活动主题" name="title">
          <uni-easyinput v-model="content.title" placeholder="请输入活动主题"></uni-easyinput>
        </uni-forms-item>
        <uni-forms-item required label="发布者姓名" name="name">
          <uni-easyinput v-model="content.name" placeholder="请输入姓名"></uni-easyinput>
        </uni-forms-item>
        <!-- 主讲人姓名 -->
        <uni-forms-item required label="主讲人姓名" name="sponsorName">
          <uni-easyinput v-model="content.sponsorName" placeholder="请输入主讲人姓名"></uni-easyinput>
        </uni-forms-item>
        <uni-forms-item required label="学院" name="college">
          <uni-combox :candidates="colleges.map((item) => (item.value))" placeholder="请选择所在学院"
            v-model="content.college" />
        </uni-forms-item>
        <uni-forms-item required label="学号" name="studentId">
          <uni-easyinput v-model="content.studentId" placeholder="请输入学号"></uni-easyinput>
        </uni-forms-item>
        <uni-forms-item required label="举办时间" name="time">
          <uni-datetime-picker v-model="content.time" type="datetime" />
        </uni-forms-item>
        <uni-forms-item required label="举办地点" name="address">
          <!-- <uni-data-picker :localdata="addresses" popup-title="请选择举办地点" v-model="content.address" /> -->
          <uni-easyinput v-model="content.address" placeholder="请输入举办地点"></uni-easyinput>
        </uni-forms-item>
        <uni-forms-item required label="人数限制" name="population">
          <uni-easyinput v-model="content.population" placeholder="请输入人数限制"></uni-easyinput>
        </uni-forms-item>
        <uni-forms-item label="学院限制" class="checkbox-container">
          <uni-data-checkbox :multiple="true" class="checkbox-item" v-model="selectedColleges" :localdata="colleges"
            mode="default" @change="selectedCollegeChange" />
        </uni-forms-item>
        <uni-forms-item>
        <view label="学院报名人数限制">
          <uni-section v-for="(college, index) in selectedColleges" :key="index" :title="`设置${college}的报名人数`" type="line"
            padding>
            <uni-number-box :max="1500"
              v-model="populationLimit.find(item => item.college === college).population">
            </uni-number-box>
          </uni-section>
        </view>
        </uni-forms-item>
        <uni-forms-item label="线上地址" name="onlineAddress">
          <uni-easyinput v-model="content.onlineAddress" placeholder="请输入线上地址，没有则不填"></uni-easyinput>
        </uni-forms-item>
        <uni-forms-item required label="电话" name="phone" style="white-space: nowrap;width: 30rpx;">
          <uni-easyinput v-model="content.phone" placeholder="请输入发起人电话"></uni-easyinput>
        </uni-forms-item>
        <uni-forms-item required label="活动简介" name="introduction">
          <textarea class="text" :maxlength=-1 v-model="content.introduction"></textarea>
        </uni-forms-item>
        <!-- 主讲人简介 -->
        <uni-forms-item required label="主讲人简介" name="sponsorIntroduction">
          <textarea class="text" :maxlength=-1 v-model="content.sponsorIntroduction"></textarea>
        </uni-forms-item>
        <view class="btns">
          <button @tap="submit" class="btn" type="primary">提交</button>
          <button @tap="save" class="btn" style="color:#fff;background-color: rgba(12, 194, 240, 0.925);"
            type="default">保存</button>
          <button @tap="reset" class="btn" type="warn">重置</button>
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

    .text {
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
        height: 80%;
        font-size: 30rpx;
      }
    }
  }
}

.checkbox-container {
  background-color: blue;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}

.checkbox-item {
  width: 100% !important;
}
</style>
