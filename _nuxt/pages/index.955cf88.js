(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{1359:function(t,e,r){var content=r(1429);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(49).default)("286db4e8",content,!0,{sourceMap:!1})},1360:function(t,e,r){var content=r(1434);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(49).default)("1d480b60",content,!0,{sourceMap:!1})},1361:function(t,e,r){"use strict";r(39),r(25),r(20),r(11),r(26);var o=r(3),n=(r(94),r(103),r(12)),c=r(1),d=r(246);function l(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}function f(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?l(Object(source),!0).forEach((function(e){Object(o.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):l(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var m=c.a.extend({props:{value:{type:String,default:""}},data:function(){return{loading:!1,items:[],search:null}},watch:{search:function(t){var e=this;return Object(n.a)(regeneratorRuntime.mark((function r(){var o;return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:if(console.log("val :>> ",t),console.log("this.value :>> ",e.value),console.log("this.querySelections(val) :>> ",e.querySelections(t)),o=e.value?e.value.split(":")[0]:null,console.log("curVal :>> ",o),r.t0=t&&t!==o,!r.t0){r.next=9;break}return r.next=9,e.querySelections(t);case 9:case"end":return r.stop()}}),r)})))()}},methods:f(f({},Object(d.b)(["searchDashNames"])),{},{querySelections:function(t){var e=this;return Object(n.a)(regeneratorRuntime.mark((function r(){var o;return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return e.loading=!0,r.next=3,e.searchDashNames(t);case 3:o=r.sent,e.items=o.map((function(t){return{text:t.data.label,value:"".concat(t.data.label,":").concat(t.id)}})),console.log("items :>> ",e.items),e.loading=!1;case 7:case"end":return r.stop()}}),r)})))()}})}),h=r(136),v=r(196),y=r.n(v),k=r(1363),component=Object(h.a)(m,(function(){var t=this,e=t.$createElement;return(t._self._c||e)("v-autocomplete",{attrs:{loading:t.loading,items:t.items,"search-input":t.search,"cache-items":"",flat:"","hide-no-data":"","hide-details":"",label:"Enter Dash Name",solo:"",value:t.value},on:{"update:searchInput":function(e){t.search=e},"update:search-input":function(e){t.search=e},input:function(e){return t.$emit("input",e)}}})}),[],!1,null,null,null);e.a=component.exports;y()(component,{VAutocomplete:k.a})},1428:function(t,e,r){"use strict";var o=r(1359);r.n(o).a},1429:function(t,e,r){(e=r(48)(!1)).push([t.i,'*[data-v-f0f95da4],[data-v-f0f95da4]:after,[data-v-f0f95da4]:before{box-sizing:border-box}body[data-v-f0f95da4]{background:#012060}.loadcontainer[data-v-f0f95da4]{transform:translate(-50%,-50%);transform-style:preserve-3d;perspective:2000px;transform:rotateX(-30deg) rotateY(-45deg)}.holder[data-v-f0f95da4],.loadcontainer[data-v-f0f95da4]{position:absolute;top:50%;left:50%}.holder[data-v-f0f95da4]{transform:translate(-50%,-50%);transform-style:preserve-3d;transform:translate3d(0,3em,1.5em)}.holder[data-v-f0f95da4]:last-child{transform:rotateY(-90deg) rotateX(90deg) translate3d(0,3em,1.5em)}.holder[data-v-f0f95da4]:first-child{transform:rotate(-90deg) rotateX(-90deg) translate3d(0,3em,1.5em)}.holder:first-child .box[data-v-f0f95da4]{background-color:#008de4}.holder:first-child .box[data-v-f0f95da4]:before{background-color:#004e7e}.holder:first-child .box[data-v-f0f95da4]:after{background-color:#006db1}.holder:nth-child(2) .box[data-v-f0f95da4]{background-color:#787878}.holder:nth-child(2) .box[data-v-f0f95da4]:before{background-color:#454545}.holder:nth-child(2) .box[data-v-f0f95da4]:after{background-color:#5f5f5f}.holder:nth-child(3) .box[data-v-f0f95da4]{background-color:#fff}.holder:nth-child(3) .box[data-v-f0f95da4]:before{background-color:#ccc}.holder:nth-child(3) .box[data-v-f0f95da4]:after{background-color:#e6e6e6}.box[data-v-f0f95da4]{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);transform-style:preserve-3d;-webkit-animation:ani-box-data-v-f0f95da4 6s infinite;animation:ani-box-data-v-f0f95da4 6s infinite;width:3em;height:3em}.box[data-v-f0f95da4]:after,.box[data-v-f0f95da4]:before{position:absolute;width:100%;height:100%;content:""}.box[data-v-f0f95da4]:before{left:100%;bottom:0;transform:rotateY(90deg);transform-origin:0 50%}.box[data-v-f0f95da4]:after{left:0;bottom:100%;transform:rotateX(90deg);transform-origin:0 100%}@-webkit-keyframes ani-box-data-v-f0f95da4{8.33%{transform:translate3d(-50%,-50%,0) scaleZ(2)}16.7%{transform:translate3d(-50%,-50%,-3em) scaleZ(1)}25%{transform:translate3d(-50%,-100%,-3em) scaleY(2)}33.3%{transform:translate3d(-50%,-150%,-3em) scaleY(1)}41.7%{transform:translate3d(-100%,-150%,-3em) scaleX(2)}50%{transform:translate3d(-150%,-150%,-3em) scaleX(1)}58.3%{transform:translate3d(-150%,-150%,0) scaleZ(2)}66.7%{transform:translate3d(-150%,-150%,0) scaleZ(1)}75%{transform:translate3d(-150%,-100%,0) scaleY(2)}83.3%{transform:translate3d(-150%,-50%,0) scaleY(1)}91.7%{transform:translate3d(-100%,-50%,0) scaleX(2)}to{transform:translate3d(-50%,-50%,0) scaleX(1)}}@keyframes ani-box-data-v-f0f95da4{8.33%{transform:translate3d(-50%,-50%,0) scaleZ(2)}16.7%{transform:translate3d(-50%,-50%,-3em) scaleZ(1)}25%{transform:translate3d(-50%,-100%,-3em) scaleY(2)}33.3%{transform:translate3d(-50%,-150%,-3em) scaleY(1)}41.7%{transform:translate3d(-100%,-150%,-3em) scaleX(2)}50%{transform:translate3d(-150%,-150%,-3em) scaleX(1)}58.3%{transform:translate3d(-150%,-150%,0) scaleZ(2)}66.7%{transform:translate3d(-150%,-150%,0) scaleZ(1)}75%{transform:translate3d(-150%,-100%,0) scaleY(2)}83.3%{transform:translate3d(-150%,-50%,0) scaleY(1)}91.7%{transform:translate3d(-100%,-50%,0) scaleX(2)}to{transform:translate3d(-50%,-50%,0) scaleX(1)}}.checkmark__circle[data-v-f0f95da4]{stroke-dasharray:166;stroke-dashoffset:166;stroke-width:2;stroke-miterlimit:10;stroke:#7ac142;fill:none;-webkit-animation:stroke-data-v-f0f95da4 .6s cubic-bezier(.65,0,.45,1) forwards;animation:stroke-data-v-f0f95da4 .6s cubic-bezier(.65,0,.45,1) forwards}.checkspace[data-v-f0f95da4]{stroke-width:2}.checkmark[data-v-f0f95da4],.checkspace[data-v-f0f95da4]{width:56px;height:56px;border-radius:50%;display:block;margin:10% auto}.checkmark[data-v-f0f95da4]{stroke-width:2;stroke:#fff;stroke-miterlimit:10;box-shadow:inset 0 0 0 #7ac142;-webkit-animation:fill-data-v-f0f95da4 .4s ease-in-out .4s forwards,scale-data-v-f0f95da4 .3s ease-in-out .9s both;animation:fill-data-v-f0f95da4 .4s ease-in-out .4s forwards,scale-data-v-f0f95da4 .3s ease-in-out .9s both}.checkmark__check[data-v-f0f95da4]{transform-origin:50% 50%;stroke-dasharray:48;stroke-dashoffset:48;-webkit-animation:stroke-data-v-f0f95da4 .3s cubic-bezier(.65,0,.45,1) .8s forwards;animation:stroke-data-v-f0f95da4 .3s cubic-bezier(.65,0,.45,1) .8s forwards}@-webkit-keyframes stroke-data-v-f0f95da4{to{stroke-dashoffset:0}}@keyframes stroke-data-v-f0f95da4{to{stroke-dashoffset:0}}@-webkit-keyframes scale-data-v-f0f95da4{0%,to{transform:none}50%{transform:scale3d(1.1,1.1,1)}}@keyframes scale-data-v-f0f95da4{0%,to{transform:none}50%{transform:scale3d(1.1,1.1,1)}}@-webkit-keyframes fill-data-v-f0f95da4{to{box-shadow:inset 0 0 0 30px #7ac142}}@keyframes fill-data-v-f0f95da4{to{box-shadow:inset 0 0 0 30px #7ac142}}',""]),t.exports=e},1430:function(t,e,r){t.exports=r.p+"img/dashdonuts.24367e0.png"},1431:function(t,e,r){t.exports=r.p+"img/airtime.af3ecdc.png"},1432:function(t,e,r){t.exports=r.p+"img/giftcard.084f918.png"},1433:function(t,e,r){"use strict";var o=r(1360);r.n(o).a},1434:function(t,e,r){(e=r(48)(!1)).push([t.i,'*[data-v-164d05b5],[data-v-164d05b5]:after,[data-v-164d05b5]:before{box-sizing:border-box}body[data-v-164d05b5]{background:#012060}.loadcontainer[data-v-164d05b5]{transform:translate(-50%,-50%);transform-style:preserve-3d;perspective:2000px;transform:rotateX(-30deg) rotateY(-45deg)}.holder[data-v-164d05b5],.loadcontainer[data-v-164d05b5]{position:absolute;top:50%;left:50%}.holder[data-v-164d05b5]{transform:translate(-50%,-50%);transform-style:preserve-3d;transform:translate3d(0,3em,1.5em)}.holder[data-v-164d05b5]:last-child{transform:rotateY(-90deg) rotateX(90deg) translate3d(0,3em,1.5em)}.holder[data-v-164d05b5]:first-child{transform:rotate(-90deg) rotateX(-90deg) translate3d(0,3em,1.5em)}.holder:first-child .box[data-v-164d05b5]{background-color:#008de4}.holder:first-child .box[data-v-164d05b5]:before{background-color:#004e7e}.holder:first-child .box[data-v-164d05b5]:after{background-color:#006db1}.holder:nth-child(2) .box[data-v-164d05b5]{background-color:#787878}.holder:nth-child(2) .box[data-v-164d05b5]:before{background-color:#454545}.holder:nth-child(2) .box[data-v-164d05b5]:after{background-color:#5f5f5f}.holder:nth-child(3) .box[data-v-164d05b5]{background-color:#fff}.holder:nth-child(3) .box[data-v-164d05b5]:before{background-color:#ccc}.holder:nth-child(3) .box[data-v-164d05b5]:after{background-color:#e6e6e6}.box[data-v-164d05b5]{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);transform-style:preserve-3d;-webkit-animation:ani-box-data-v-164d05b5 6s infinite;animation:ani-box-data-v-164d05b5 6s infinite;width:3em;height:3em}.box[data-v-164d05b5]:after,.box[data-v-164d05b5]:before{position:absolute;width:100%;height:100%;content:""}.box[data-v-164d05b5]:before{left:100%;bottom:0;transform:rotateY(90deg);transform-origin:0 50%}.box[data-v-164d05b5]:after{left:0;bottom:100%;transform:rotateX(90deg);transform-origin:0 100%}@-webkit-keyframes ani-box-data-v-164d05b5{8.33%{transform:translate3d(-50%,-50%,0) scaleZ(2)}16.7%{transform:translate3d(-50%,-50%,-3em) scaleZ(1)}25%{transform:translate3d(-50%,-100%,-3em) scaleY(2)}33.3%{transform:translate3d(-50%,-150%,-3em) scaleY(1)}41.7%{transform:translate3d(-100%,-150%,-3em) scaleX(2)}50%{transform:translate3d(-150%,-150%,-3em) scaleX(1)}58.3%{transform:translate3d(-150%,-150%,0) scaleZ(2)}66.7%{transform:translate3d(-150%,-150%,0) scaleZ(1)}75%{transform:translate3d(-150%,-100%,0) scaleY(2)}83.3%{transform:translate3d(-150%,-50%,0) scaleY(1)}91.7%{transform:translate3d(-100%,-50%,0) scaleX(2)}to{transform:translate3d(-50%,-50%,0) scaleX(1)}}@keyframes ani-box-data-v-164d05b5{8.33%{transform:translate3d(-50%,-50%,0) scaleZ(2)}16.7%{transform:translate3d(-50%,-50%,-3em) scaleZ(1)}25%{transform:translate3d(-50%,-100%,-3em) scaleY(2)}33.3%{transform:translate3d(-50%,-150%,-3em) scaleY(1)}41.7%{transform:translate3d(-100%,-150%,-3em) scaleX(2)}50%{transform:translate3d(-150%,-150%,-3em) scaleX(1)}58.3%{transform:translate3d(-150%,-150%,0) scaleZ(2)}66.7%{transform:translate3d(-150%,-150%,0) scaleZ(1)}75%{transform:translate3d(-150%,-100%,0) scaleY(2)}83.3%{transform:translate3d(-150%,-50%,0) scaleY(1)}91.7%{transform:translate3d(-100%,-50%,0) scaleX(2)}to{transform:translate3d(-50%,-50%,0) scaleX(1)}}.checkmark__circle[data-v-164d05b5]{stroke-dasharray:166;stroke-dashoffset:166;stroke-width:2;stroke-miterlimit:10;stroke:#7ac142;fill:none;-webkit-animation:stroke-data-v-164d05b5 .6s cubic-bezier(.65,0,.45,1) forwards;animation:stroke-data-v-164d05b5 .6s cubic-bezier(.65,0,.45,1) forwards}.checkspace[data-v-164d05b5]{stroke-width:2}.checkmark[data-v-164d05b5],.checkspace[data-v-164d05b5]{width:56px;height:56px;border-radius:50%;display:block;margin:10% auto}.checkmark[data-v-164d05b5]{stroke-width:2;stroke:#fff;stroke-miterlimit:10;box-shadow:inset 0 0 0 #7ac142;-webkit-animation:fill-data-v-164d05b5 .4s ease-in-out .4s forwards,scale-data-v-164d05b5 .3s ease-in-out .9s both;animation:fill-data-v-164d05b5 .4s ease-in-out .4s forwards,scale-data-v-164d05b5 .3s ease-in-out .9s both}.checkmark__check[data-v-164d05b5]{transform-origin:50% 50%;stroke-dasharray:48;stroke-dashoffset:48;-webkit-animation:stroke-data-v-164d05b5 .3s cubic-bezier(.65,0,.45,1) .8s forwards;animation:stroke-data-v-164d05b5 .3s cubic-bezier(.65,0,.45,1) .8s forwards}@-webkit-keyframes stroke-data-v-164d05b5{to{stroke-dashoffset:0}}@keyframes stroke-data-v-164d05b5{to{stroke-dashoffset:0}}@-webkit-keyframes scale-data-v-164d05b5{0%,to{transform:none}50%{transform:scale3d(1.1,1.1,1)}}@keyframes scale-data-v-164d05b5{0%,to{transform:none}50%{transform:scale3d(1.1,1.1,1)}}@-webkit-keyframes fill-data-v-164d05b5{to{box-shadow:inset 0 0 0 30px #7ac142}}@keyframes fill-data-v-164d05b5{to{box-shadow:inset 0 0 0 30px #7ac142}}',""]),t.exports=e},1447:function(t,e,r){"use strict";r.r(e);r(39),r(25),r(20),r(26),r(94);var o=r(32),n=(r(103),r(12)),c=r(3),d=(r(11),r(52),r(1)),l=r(246),f=r(10),m=r(1421),h=r.n(m),v=r(1361);function y(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}function k(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?y(Object(source),!0).forEach((function(e){Object(c.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):y(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var x=function(t){return new Promise((function(e){return setTimeout(e,t)}))},w=d.a.extend({components:{NameAutocomplete:v.a},data:function(){return{paymentIntents:{},tab:null,customer:":"}},created:function(){this.pollPaymentIntents()},mounted:function(){console.log("this.tab :>> ",this.tab)},methods:k(k({},Object(l.b)(["queryDocuments","requestFiat"])),{},{pollPaymentIntents:function(){var t=this;return Object(n.a)(regeneratorRuntime.mark((function e(){var r,o,n,c;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(console.log("this.$store.getters.checkoutStep :>> ",t.$store.getters.checkoutStep),2===t.$store.getters.checkoutStep){e.next=6;break}return e.next=4,x(2e3);case 4:return t.pollPaymentIntents(),e.abrupt("return");case 6:return r={limit:1,startAt:1,orderBy:[["timestamp","desc"]],where:[["requesterUserId","==",t.$store.state.name.docId],["invoiceId","==",t.$store.state.selectedItem.invoiceId],["timestamp",">",Math.floor(Date.now()/1e3)-120]]},e.next=9,t.queryDocuments({contract:"PaymentRequest",typeLocator:"PaymentIntent",queryOpts:r});case 9:if(!(o=e.sent).length){e.next=20;break}return n=o[0].toJSON(),t.$store.commit("setIntentDoc",n),t.$store.commit("showSnackbar",{text:"Received Intent from ".concat(n.requesteeUserName),color:"blue"}),e.next=16,t.requestFiat({requesteeUserId:n.requesteeUserId,requesteeUserName:n.requesteeUserName,refId:n.$id,fiatAmount:t.$store.state.selectedItem.fiatAmount,fiatSymbol:t.$store.state.selectedItem.fiatSymbol,memo:t.$store.state.selectedItem.name,invoiceId:t.$store.state.selectedItem.invoiceId});case 16:c=e.sent,console.log("requestDoc :>> ",c),t.$store.commit("setRequestDoc",c),t.$store.commit("showSnackbar",{text:"Sent Request to ".concat(o[0].data.requesteeUserName),color:"blue"});case 20:return e.next=22,x(1e3);case 22:t.pollPaymentIntents();case 23:case"end":return e.stop()}}),e)})))()}})}),O=r(136),S=r(196),_=r.n(S),P=r(1369),j=r(1347),R=r(1446),C=r(1452),I=r(1449),D=r(1441),component=Object(O.a)(w,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("v-card",{staticClass:"mx-auto mb-6",attrs:{"max-width":"550px"}},[r("v-card-title",{staticClass:"text-center justify-center py-6"},[r("h1",{staticClass:"font-weight-bold display-1"},[t._v("Checkout")])]),t._v(" "),r("v-card-text",{staticClass:"text-center justify-center py-6"},[t._v("\n      Scan the QR Code with\n      "),r("a",{attrs:{target:"_blank",href:"http://evowallet.io"}},[t._v("EvoWallet")]),t._v(" to checkout.\n    ")]),t._v(" "),r("v-tabs",{attrs:{centered:""},model:{value:t.tab,callback:function(e){t.tab=e},expression:"tab"}},[r("v-tab",[t._v("\n        Guest\n      ")]),t._v(" "),r("v-tab",[t._v("\n        Signup\n      ")]),t._v(" "),r("v-tab",[t._v("\n        By Name\n      ")])],1),t._v(" "),r("v-tabs-items",{model:{value:t.tab,callback:function(e){t.tab=e},expression:"tab"}},[r("v-tab-item",[r("v-card-text",{staticClass:"text-center justify-center py-6"},[t._v("\n          Choose for a single time purchase."),r("br"),t._v("\n          "+t._s(t.$store.getters.qrCheckout)+"\n        ")]),t._v(" "),r("v-card-text",{staticClass:"text-center justify-center py-6"},[r("qrcode",{staticStyle:{"margin-to":"-5px"},attrs:{value:t.$store.getters.qrCheckout,tag:"img"}})],1)],1),t._v(" "),r("v-tab-item",[r("v-card-text",{staticClass:"text-center justify-center py-6"},[r("v-card-text",{staticClass:"text-center justify-center py-6"},[t._v('\n            Choose to enable "pay by name" in the future.\n          ')]),t._v(" "),r("qrcode",{staticStyle:{"margin-to":"-5px"},attrs:{value:t.$store.state.name.label,tag:"img"}})],1)],1),t._v(" "),r("v-tab-item",[r("v-card-text",{staticClass:"text-center justify-center py-6"},[r("v-card-text",{staticClass:"text-center justify-center py-6"},[t._v("\n            Signed up users can enter their name to pay.\n          ")]),t._v(" "),r("NameAutocomplete",{model:{value:t.customer,callback:function(e){t.customer=e},expression:"customer"}})],1)],1)],1)],1)],1)}),[],!1,null,"df05ceb2",null),A=component.exports;_()(component,{VCard:P.a,VCardText:j.b,VCardTitle:j.c,VTab:R.a,VTabItem:C.a,VTabs:I.a,VTabsItems:D.a});var $=r(1330);function U(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}function V(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?U(Object(source),!0).forEach((function(e){Object(c.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):U(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var X=function(t){return new Promise((function(e){return setTimeout(e,t)}))},F=d.a.extend({data:function(){return{isPaid:!1,satoshisReceived:0,satoshisRequested:-1}},computed:{dashReceived:function(){return f.Unit.fromSatoshis(this.satoshisReceived).toBTC()},dashRequested:function(){return f.Unit.fromSatoshis(this.satoshisRequested).toBTC()},uuid:function(){return Object($.a)()}},mounted:function(){var t=this;return Object(n.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.pollWaitForPayment();case 2:case"end":return e.stop()}}),e)})))()},methods:V(V({},Object(l.b)(["getAddressSummary"])),{},{pollWaitForPayment:function(){var t=this;return Object(n.a)(regeneratorRuntime.mark((function e(){var r,summary;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(void 0!==t.$store.state.selectedItem.requestDoc.encAddress){e.next=8;break}return t.isPaid=!1,t.satoshisReceived=0,t.satoshisRequested=-1,e.next=6,X(2e3);case 6:return t.pollWaitForPayment(),e.abrupt("return");case 8:return r=t.$store.state.selectedItem.requestDoc,t.satoshisRequested=r.encSatoshis,e.next=12,t.getAddressSummary(r.encAddress);case 12:return summary=e.sent,t.satoshisReceived=summary.totalBalanceSat,t.satoshisReceived>=r.encSatoshis&&(t.isPaid=!0),e.next=17,X(2e3);case 17:t.pollWaitForPayment();case 18:case"end":return e.stop()}}),e)})))()}})}),Y=(r(1428),r(1345)),T=r(325),N=Object(O.a)(F,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("v-card",{staticClass:"mx-auto mb-6",attrs:{"max-width":"550px"}},[r("v-card-title",{staticClass:"text-center mx-auto"},[t.isPaid?r("span",[t._v("Payment Received.")]):t._e(),t._v(" "),t.isPaid?t._e():r("span",[t._v("Waiting for Payment.")])]),t._v(" "),t.isPaid?t._e():r("v-card-text",{staticClass:"text-center",staticStyle:{height:"120px"}},[r("div",{staticStyle:{height:"30px"}}),t._v(" "),r("v-progress-circular",{staticClass:"text-center",attrs:{indeterminate:"",size:"60"}})],1),t._v(" "),t.isPaid?r("svg",{staticClass:"checkmark",attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 52 52"}},[r("circle",{staticClass:"checkmark__circle",attrs:{cx:"26",cy:"26",r:"25",fill:"none"}}),t._v(" "),r("path",{staticClass:"checkmark__check",attrs:{fill:"none",d:"M14.1 27.2l7.1 7.2 16.7-16.8"}})]):t._e(),t._v(" "),r("v-card-text",{staticClass:"text-center"},[t._v("\n      From: "+t._s(t.$store.state.selectedItem.intentDoc.requesteeUserName)+" "),r("br"),t._v("\n      Amount: "+t._s(t.$store.state.selectedItem.fiatAmount)+"\n      "+t._s(t.$store.state.selectedItem.fiatSymbol)),r("br"),t._v(" "),t.satoshisReceived>0?r("span",[t._v("\n        Received "+t._s(t.dashReceived)+" / "+t._s(t.dashRequested)+" Dash")]):r("span",[t._v("Waiting .. ")])]),t._v(" "),t.isPaid?r("v-alert",{attrs:{outlined:"",border:"top",type:"info",color:"green",elevation:"2",prominent:""}},[t._v("\n      Your "),r("b",[t._v(t._s(t.$store.state.selectedItem.name))]),t._v(" voucher is:"),r("br"),t._v(" "),r("code",[t._v(t._s(t.uuid))])]):t._e()],1)],1)}),[],!1,null,"f0f95da4",null),Z=N.exports;function E(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}function W(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?E(Object(source),!0).forEach((function(e){Object(c.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):E(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}_()(N,{VAlert:Y.a,VCard:P.a,VCardText:j.b,VCardTitle:j.c,VProgressCircular:T.a}),d.a.component(h.a.name,h.a);var z=function(t){return new Promise((function(e){return setTimeout(e,t)}))},B=d.a.extend({components:{ConnectWallet:A,AwaitPayment:Z},data:function(){var data={cards:[{title:"1 USD",name:"Dash Donuts Giftcard",fiatAmount:1,fiatSymbol:"USD",src:r(1430),flex:6},{title:"2 USD",name:"Airtime Balance",fiatAmount:2,fiatSymbol:"USD",src:r(1431),flex:6},{title:"4 USD",name:"Store Giftcard",fiatAmount:4,fiatSymbol:"USD",src:r(1432),flex:6}],e1:1,mode:"newSale",status:"",memo:"",prevDocument:{},fiatAmount:0,refId:"",customer:":",waitingForPayment:!1,satoshisReceived:0,satoshisRequested:-1,isPaid:!1,document:{}};return data},computed:{checkoutStep:{get:function(){return this.$store.getters.checkoutStep},set:function(t){console.log("value :>> ",t),this.$store.commit("clearStoreItem")}},dashReceived:function(){return f.Unit.fromSatoshis(this.satoshisReceived).toBTC()},dashRequested:function(){return f.Unit.fromSatoshis(this.satoshisRequested).toBTC()},fiatSymbol:{get:function(){return this.$store.state.pos.currency},set:function(t){this.$store.commit("setPosCurrency",t)}},confirmCaption:function(){var t,e=Math.round(100*this.fiatAmount-100*(null===(t=this.prevDocument)||void 0===t?void 0:t.encFiatAmount))/100;return"Refunded"===this.status&&(e=Math.round(100*this.fiatAmount)/100),e<0?{color:"blue",text:"Decrease: ".concat(e," ").concat(this.fiatSymbol),enabled:!0}:e>0?{text:"Increase: ".concat(e," ").concat(this.fiatSymbol),enabled:!0}:this.fiatAmount>0?{text:"Confirm",enabled:!0}:{text:"Confirm"}}},created:function(){this.mode=this.$store.state.pos.mode,this.customer="".concat(this.$store.state.pos.requesteeUserName,":").concat(this.$store.state.pos.requesteeUserId),this.prevDocument=this.$store.state.pos.prevDocument,this.fiatAmount=this.$store.state.pos.fiatAmount,this.refId=this.$store.state.pos.refId,this.status=this.$store.state.pos.status,console.log(this.customer,this.fiatAmount,this.refId),this.$store.commit("resetPOSOptions")},methods:W(W({},Object(l.b)(["requestFiat","requestPayment","getAddressSummary","refundPaymentRequest"])),{},{selectStoreItem:function(t){this.$store.commit("setStoreItem",t)},sendRequest:function(){var t=this;return Object(n.a)(regeneratorRuntime.mark((function e(){var r,o,n,c,d,l,f,m,h,v,y,k,x,w,summary;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(console.log("this.mode :>> ",t.mode),"Amend"!==t.mode){e.next=25;break}return r=t.fiatAmount,o=t.memo,n=t.prevDocument,c=n.requesteeUserId,d=n.requesteeUserName,l=n.refId,f=n.encSatoshis,m=n.encFiatSymbol,h=n.encAddress,v=n.encFiatAmount,y=parseFloat(v)/parseFloat(f),console.log("rate :>> ",y),k=Math.round(100*parseFloat(v)-100*r)/100,x=Math.floor(k/y),console.log("refundSatoshis :>> ",x),w=f-x,console.log("satoshis :>> ",w),e.next=14,t.getAddressSummary(h);case 14:if(summary=e.sent,console.log("summary :>> ",summary),!(summary.totalBalanceSat<=w)){e.next=19;break}return t.reqPayment(),e.abrupt("return");case 19:return t.$store.commit("showSnackbar",{text:"Refunding ".concat(k," ").concat(m," to ").concat(d),color:"blue"}),e.next=22,t.requestPayment({requesteeUserId:c,requesteeUserName:d,satoshis:w,memo:o,refId:l,fiatAmount:r,fiatSymbol:m,address:h});case 22:return e.next=24,t.refundPaymentRequest({requestDocument:t.prevDocument,satoshis:x});case 24:t.$router.push("/");case 25:"Intent"===t.mode&&t.reqPayment();case 26:case"end":return e.stop()}}),e)})))()},pollWaitForPayment:function(){var t=this;return Object(n.a)(regeneratorRuntime.mark((function e(){var r,summary;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.document,t.satoshisRequested=r.encSatoshis,e.next=4,t.getAddressSummary(r.encAddress);case 4:if(summary=e.sent,t.satoshisReceived=summary.totalBalanceSat,!(t.satoshisReceived>=r.encSatoshis)){e.next=11;break}t.isPaid=!0,setTimeout((function(){t.$router.push("/")}),5e3),e.next=14;break;case 11:return e.next=13,z(2e3);case 13:t.pollWaitForPayment();case 14:case"end":return e.stop()}}),e)})))()},cancelRequest:function(){var t=this;return Object(n.a)(regeneratorRuntime.mark((function e(){var r,o,n,c,d;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.document,o=t.prevDocument,n=t.requestPayment,c=t.$router,o.encSatoshis?((d=o).satoshis=o.encSatoshis,d.fiatAmount=o.encFiatAmount,d.fiatSymbol=o.encFiatSymbol,d.address=o.encAddress):((d=r).satoshis=0,d.fiatAmount=0,d.address=r.encAddress,d.fiatSymbol=r.encFiatSymbol),console.log("cancel document :>> ",d),e.next=5,n(d);case 5:c.push("/");case 6:case"end":return e.stop()}}),e)})))()},reqPayment:function(){var t=this;return Object(n.a)(regeneratorRuntime.mark((function e(){var r,n,c,d,l,f,m,address,h,v,y,k;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.waitingForPayment=!0,r=t.customer,n=t.fiatAmount,c=t.fiatSymbol,d=t.memo,l=t.refId,f=t.requestFiat,m=t.prevDocument,console.log("fiatAmount :>> ",n),console.log("fiatSymbol :>> ",c),console.log("memo :>> ",d),console.log("customer :>> ",r),address=null==m?void 0:m.encAddress,console.log("previous Address :>> ",address),h=r.split(":"),v=Object(o.a)(h,2),y=v[0],k=v[1],e.next=11,f({requesteeUserId:k,requesteeUserName:y,fiatAmount:n,fiatSymbol:c,refId:l,memo:d,address:address});case 11:t.document=e.sent,console.log("request fiat document :>> ",t.document),t.pollWaitForPayment();case 14:case"end":return e.stop()}}),e)})))()}})}),M=(r(1433),r(1340)),G=r(1346),J=r(1368),H=r(1451),L=r(1343),Q=r(1370),K=r(1371),tt=r(1348),et=r(1372),at=Object(O.a)(B,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("v-stepper",{model:{value:t.checkoutStep,callback:function(e){t.checkoutStep=e},expression:"checkoutStep"}},[r("v-stepper-header",[r("v-stepper-step",{attrs:{complete:t.checkoutStep>1,step:"1",editable:""}},[t._v("Select item")]),t._v(" "),r("v-divider"),t._v(" "),r("v-stepper-step",{attrs:{complete:t.checkoutStep>2,step:"2"}},[t._v("Connect Wallet")]),t._v(" "),r("v-divider"),t._v(" "),r("v-stepper-step",{attrs:{step:"3"}},[t._v("Approve Payment")])],1),t._v(" "),r("v-stepper-items",[r("v-stepper-content",{attrs:{step:"1"}},[r("v-card",{staticClass:"mx-auto",attrs:{"max-width":"1000"}},[r("v-container",{attrs:{fluid:""}},[r("v-row",{attrs:{dense:""}},t._l(t.cards,(function(e){return r("v-col",{key:e.title,attrs:{cols:"4"}},[r("v-card",{staticClass:"ma-2",attrs:{rounded:""},on:{click:function(r){return t.selectStoreItem(e)}}},[r("v-img",{staticClass:"white--text align-end",attrs:{src:e.src,gradient:"to bottom, rgba(0,0,0,0), rgba(0,0,0,.3)",height:"200px",contain:""}},[r("v-card-title",{domProps:{textContent:t._s(e.title)}})],1)],1)],1)})),1)],1)],1)],1),t._v(" "),r("v-stepper-content",{attrs:{step:"2"}},[r("ConnectWallet")],1),t._v(" "),r("v-stepper-content",{attrs:{step:"3"}},[r("AwaitPayment")],1)],1)],1)],1)}),[],!1,null,"164d05b5",null);e.default=at.exports;_()(at,{VCard:P.a,VCardTitle:j.c,VCol:M.a,VContainer:G.a,VDivider:J.a,VImg:H.a,VRow:L.a,VStepper:Q.a,VStepperContent:K.a,VStepperHeader:tt.a,VStepperItems:tt.b,VStepperStep:et.a})}}]);