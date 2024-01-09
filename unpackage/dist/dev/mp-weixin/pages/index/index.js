"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  data() {
    return {
      // 				html: `<p><img style="width: 100%; height:100%" src="https://cdn-document-huoshan.orange-classroom.com/document/20230314092354_2339329481678757034234_1.jpg" /></p>
      // <p><img style="width: 100%; height:100%" src="https://cdn-document-huoshan.orange-classroom.com/document/20230314092354_2339329481678757034234_2.jpg" /></p>
      // <p>1231243213y612u73612783612783618</p>
      // <p><img style="width: 100%; height:100%" src="https://cdn-document-huoshan.orange-classroom.com/document/20230314092354_2339329481678757034234_3.jpg" /></p>`
      // html: '<p><img style="height:200px" src="https://th.bing.com/th?id=OIP.YmBnwfkMgzoyYCS7THLfYwHaNK&w=187&h=333&c=8&rs=1&qlt=90&o=6&dpr=2&pid=3.1&rm=2" /></p>'
      html: "<video src='https://media.w3.org/2010/05/sintel/trailer.mp4' />"
    };
  },
  onLoad() {
  },
  methods: {
    imgLoad(e) {
      console.log(e);
    }
  }
};
if (!Array) {
  const _easycom_mp_html2 = common_vendor.resolveComponent("mp-html");
  _easycom_mp_html2();
}
const _easycom_mp_html = () => "../../uni_modules/mp-html/components/mp-html/mp-html.js";
if (!Math) {
  _easycom_mp_html();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.o($options.imgLoad),
    b: common_vendor.p({
      content: $data.html
    })
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "/Users/apple/Desktop/mp-html-test/pages/index/index.vue"]]);
wx.createPage(MiniProgramPage);
