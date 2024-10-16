"use strict";
const common_vendor = require("../../common/vendor.js");
const services_gift = require("../../services/gift.js");
const services_personalInf = require("../../services/personalInf.js");
require("../../utils/http.js");
require("../../stores/index.js");
require("../../stores/modules/member.js");
if (!Array) {
  const _easycom_uni_tag2 = common_vendor.resolveComponent("uni-tag");
  const _easycom_uni_number_box2 = common_vendor.resolveComponent("uni-number-box");
  (_easycom_uni_tag2 + _easycom_uni_number_box2)();
}
const _easycom_uni_tag = () => "../../node-modules/@dcloudio/uni-ui/lib/uni-tag/uni-tag.js";
const _easycom_uni_number_box = () => "../../node-modules/@dcloudio/uni-ui/lib/uni-number-box/uni-number-box.js";
if (!Math) {
  (_easycom_uni_tag + _easycom_uni_number_box)();
}
const _sfc_main = /* @__PURE__ */ common_vendor.defineComponent({
  __name: "gift",
  props: {
    id: null
  },
  setup(__props) {
    const props = __props;
    const { safeAreaInsets } = common_vendor.index.getSystemInfoSync();
    const getGiftDetails = async (id) => {
      const res = await services_gift.getGiftDetail(id);
      console.log(res.data);
      goodsdata.value = res.data;
    };
    const getMyCredit = async () => {
      const res = await services_personalInf.getPersonalInf();
      console.log(res.data.credit);
      mycredit.value = res.data.credit;
    };
    const mycredit = common_vendor.ref(1);
    const blur = (e) => {
      console.log(e);
      if (e.detail.value > goodsdata.value.allnums) {
        common_vendor.index.showToast({
          title: "兑换数量超出库存",
          icon: "none",
          duration: 1e3
        });
      }
    };
    const maxNum = common_vendor.computed(() => {
      if (mycredit.value == 0) {
        return 0;
      }
      return goodsdata.value.allnums;
    });
    const scoreres = common_vendor.computed(() => {
      return (goodsnum.value * goodsdata.value.price).toFixed(2);
    });
    const goodsdata = common_vendor.ref({});
    const goodsnum = common_vendor.ref(0);
    common_vendor.onShow(() => {
      if (common_vendor.index.getStorageSync("token")) {
        getMyCredit();
      }
    });
    common_vendor.onLoad(() => {
      if (common_vendor.index.getStorageSync("token")) {
        console.log(props.id);
        getGiftDetails(props.id);
        getMyCredit();
      } else {
        common_vendor.wx$1.showToast({
          title: "您尚未登录，请先登录",
          icon: "none",
          duration: 1e3,
          complete: () => {
            setTimeout(() => {
              common_vendor.index.navigateTo({
                url: "/pages/login/login"
              });
            }, 1e3);
          }
        });
      }
    });
    const previewImage = (e) => {
      var current = e.target.dataset.src;
      console.log(current);
      common_vendor.wx$1.previewImage({
        current,
        urls: goodsdata.value.imgs
      });
    };
    const applyExchange = async (data) => {
      const res = await services_gift.exchangeGift(data);
      console.log(res);
      if (res.code == 200) {
        if (res.data == 3) {
          common_vendor.index.showToast({
            title: "兑换成功！",
            icon: "success",
            duration: 2e3,
            complete: function() {
              setTimeout(function() {
                getGiftDetails(props.id);
                getMyCredit();
                goodsnum.value = 0;
              }, 2e3);
            }
          });
        }
        if (res.data == 2) {
          common_vendor.index.showToast({
            title: "余额不足！",
            icon: "error",
            duration: 2e3
          });
        }
        if (res.data == 1) {
          common_vendor.index.showToast({
            title: "库存不足！",
            icon: "error",
            duration: 2e3
          });
        }
      }
    };
    const immeBuy = () => {
      console.log("购买");
      if (mycredit.value < goodsnum.value * goodsdata.value.price) {
        common_vendor.index.showToast({
          title: "剩余积分不足",
          icon: "error",
          duration: 1e3
        });
        return;
      }
      common_vendor.wx$1.showModal({
        title: "确认兑换",
        content: "确定要兑换吗？",
        success(res) {
          if (res.confirm) {
            applyExchange({
              id: null,
              goodsId: goodsdata.value.id,
              nums: goodsnum.value
            });
          } else if (res.cancel) {
            console.log("用户取消了兑换");
          }
        }
      });
    };
    return (_ctx, _cache) => {
      var _a, _b, _c;
      return common_vendor.e({
        a: mycredit.value == 0
      }, mycredit.value == 0 ? {} : {}, {
        b: goodsdata.value.coverPicture,
        c: common_vendor.t(goodsdata.value.price),
        d: common_vendor.t(goodsdata.value.name),
        e: common_vendor.p({
          text: `总库存：${goodsdata.value.allnums}`,
          size: "mini",
          inverted: true,
          type: "success"
        }),
        f: common_vendor.t(goodsdata.value.introduce),
        g: common_vendor.o(blur),
        h: common_vendor.o(($event) => goodsnum.value = $event),
        i: common_vendor.p({
          max: common_vendor.unref(maxNum),
          modelValue: goodsnum.value
        }),
        j: common_vendor.f(goodsdata.value.imgs, (url, index, i0) => {
          return {
            a: index,
            b: url,
            c: common_vendor.o(previewImage, index)
          };
        }),
        k: ((_a = common_vendor.unref(safeAreaInsets)) == null ? void 0 : _a.bottom) + 1 + "px",
        l: common_vendor.t(common_vendor.unref(scoreres)),
        m: goodsnum.value == 0,
        n: common_vendor.o(immeBuy),
        o: ((_b = common_vendor.unref(safeAreaInsets)) == null ? void 0 : _b.bottom) + 0 + "px",
        p: ((_c = common_vendor.unref(safeAreaInsets)) == null ? void 0 : _c.bottom) + 0 + "px"
      });
    };
  }
});
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-018686c0"], ["__file", "/Users/Shared/Files From d.localized/项目储存/Academic-Evening-Tea-zhy_demo/Academic-Evening-Tea-zhy_demo/src/pages/gift/gift.vue"]]);
wx.createPage(MiniProgramPage);
//# sourceMappingURL=gift.js.map
