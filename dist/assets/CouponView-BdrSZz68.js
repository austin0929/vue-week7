import{M as w}from"./modal-C3SELmZl.js";import{_ as M,o as a,c as p,a as o,b as c,v as r,i as y,w as m,r as C,d as f,F as v,g as k,t as b}from"./index-DyH5CR64.js";const x={props:{coupon:{}},data(){return{couponModal:null,tempCoupon:{},due_date:""}},methods:{showModal(){this.couponModal.show()},hideModal(){this.couponModal.hide()},updateCoupon(){this.$emit("update-coupon",this.tempCoupon)}},watch:{coupon(){this.tempCoupon=this.coupon;const e=new Date(this.tempCoupon.due_date*1e3).toISOString().split("T");[this.due_date]=e},due_date(){this.tempCoupon.due_date=Math.floor(new Date(this.due_date)/1e3)}},mounted(){this.couponModal=new w(this.$refs.couponModal)}},V={class:"modal fade",id:"couponModal",tabindex:"-1",role:"dialog","aria-labelledby":"exampleModalLabel","aria-hidden":"true",ref:"couponModal"},L={class:"modal-dialog",role:"document"},P={class:"modal-content"},U=o("div",{class:"modal-header"},[o("h5",{class:"modal-title",id:"exampleModalLabel"},"優惠券"),o("button",{type:"button",class:"btn-close","data-bs-dismiss":"modal","aria-label":"Close"})],-1),A={class:"modal-body"},D={class:"mb-3"},T=o("label",{for:"title"},"標題",-1),E={class:"mb-3"},S=o("label",{for:"coupon_code"},"優惠碼",-1),I={class:"mb-3"},R=o("label",{for:"due_date"},"到期日",-1),B={class:"mb-3"},N=o("label",{for:"price"},"折扣百分比",-1),O={class:"mb-3"},F={class:"form-check"},H=o("label",{class:"form-check-label",for:"is_enabled"}," 是否啟用 ",-1),z={class:"modal-footer"},j=o("button",{type:"button",class:"btn btn-secondary","data-bs-dismiss":"modal"}," Close ",-1);function q(e,t,d,u,s,i){return a(),p("div",V,[o("div",L,[o("div",P,[U,o("div",A,[o("div",D,[T,c(o("input",{type:"text",class:"form-control",id:"title",placeholder:"請輸入標題","onUpdate:modelValue":t[0]||(t[0]=n=>s.tempCoupon.title=n)},null,512),[[r,s.tempCoupon.title]])]),o("div",E,[S,c(o("input",{type:"text",class:"form-control",id:"coupon_code",placeholder:"請輸入優惠碼","onUpdate:modelValue":t[1]||(t[1]=n=>s.tempCoupon.code=n)},null,512),[[r,s.tempCoupon.code]])]),o("div",I,[R,c(o("input",{type:"date",class:"form-control",id:"due_date","onUpdate:modelValue":t[2]||(t[2]=n=>s.due_date=n)},null,512),[[r,s.due_date]])]),o("div",B,[N,c(o("input",{type:"number",class:"form-control",id:"price",placeholder:"請輸入折扣百分比","onUpdate:modelValue":t[3]||(t[3]=n=>s.tempCoupon.percent=n)},null,512),[[r,s.tempCoupon.percent,void 0,{number:!0}]])]),o("div",O,[o("div",F,[c(o("input",{class:"form-check-input",type:"checkbox","true-value":1,"false-value":0,id:"is_enabled","onUpdate:modelValue":t[4]||(t[4]=n=>s.tempCoupon.is_enabled=n)},null,512),[[y,s.tempCoupon.is_enabled]]),H])])]),o("div",z,[j,o("button",{type:"button",class:"btn btn-primary",onClick:t[5]||(t[5]=m((...n)=>i.updateCoupon&&i.updateCoupon(...n),["prevent"]))}," 更新優惠券 ")])])])],512)}const G=M(x,[["render",q]]);var J={VITE_APP_URL:"https://vue3-course-api.hexschool.io/v2",VITE_APP_PATH:"david777",BASE_URL:"/vue-week7",MODE:"production",DEV:!1,PROD:!0,SSR:!1};const{VITE_APP_URL:h,VITE_APP_PATH:_}=J,K={components:{CouponModal:G},data(){return{tempCoupon:{},coupons:[],due_date:"",isNewCoupon:!1,isLoading:!1}},methods:{getCoupon(){this.isLoading=!0;const e=`${h}/api/${_}/admin/coupons`;this.$http.get(e).then(t=>{this.coupons=t.data.coupons,this.isLoading=!1})},openCouponModal(e,t){e?this.tempCoupon={due_date:new Date().getTime()/1e3}:this.tempCoupon={...t},this.isNewCoupon=e,this.$refs.cpModal.showModal()},updateCoupon(e){this.tempCoupon=e;let t="post",d=`${h}/api/${_}/admin/coupon`;this.isNewCoupon||(d=`${h}/api/${_}/admin/coupon/${e.id}`,t="put"),this.$http[t](d,{data:this.tempCoupon}).then(u=>{u.data.success&&(this.$refs.cpModal.hideModal(),this.getCoupon())}).catch(u=>{console.log(u)})},delCoupon(e){const t=`${h}/api/${_}/admin/coupon/${e.id}`;this.$http.delete(t).then(d=>{d.data.success&&this.getCoupon()}).catch(d=>{console.log(d)})}},mounted(){const e=document.cookie.replace(/(?:(?:^|.*;\s*)vuetoken\s*\=\s*([^;]*).*$)|^.*$/,"$1");this.$http.defaults.headers.common.Authorization=e,this.getCoupon()}},Q={class:"text-end my-4"},W={class:"table mt-4 table-striped"},X=o("thead",null,[o("tr",null,[o("th",{width:"100"}),o("th",{width:"300"},"名稱"),o("th",{width:"150"},"折扣百分比"),o("th",{width:"150"},"到期日"),o("th",{width:"100"},"是否啟用"),o("th",{width:"80"},"編輯")])],-1),Y=["onClick"],Z=o("i",{class:"bi bi-x h3 text-danger"},null,-1),oo=[Z],to={class:"text-right"},eo={key:0,class:"bg-success text-center tableStatusActive"},so=o("span",null,"啟用",-1),no=[so],lo={key:1,class:"bg-warning text-center tableStatusInactive"},io=o("span",null,"未啟用",-1),ao=[io],po={class:"btn-group"},uo=["onClick"];function co(e,t,d,u,s,i){const n=C("VueLoading"),$=C("CouponModal");return a(),p(v,null,[f(n,{active:s.isLoading},null,8,["active"]),o("div",Q,[o("button",{type:"button",class:"btn btn-primary btn-lg",onClick:t[0]||(t[0]=m(l=>i.openCouponModal(!0),["prevent"]))}," 新增優惠券 ")]),o("table",W,[X,o("tbody",null,[(a(!0),p(v,null,k(s.coupons,l=>(a(),p("tr",{key:l.id},[o("td",null,[o("a",{href:"#",onClick:m(g=>i.delCoupon(l),["prevent"])},oo,8,Y)]),o("td",null,b(l.title),1),o("td",null,b(l.percent),1),o("td",to,b(e.$filters.date(l.due_date)),1),o("td",null,[l.is_enabled?(a(),p("div",eo,no)):(a(),p("div",lo,ao))]),o("td",null,[o("div",po,[o("button",{class:"btn btn-outline-primary btn-sm",onClick:m(g=>i.openCouponModal(!1,l),["prevent"])}," 編輯 ",8,uo)])])]))),128))])]),f($,{ref:"cpModal",coupon:s.tempCoupon,onUpdateCoupon:i.updateCoupon},null,8,["coupon","onUpdateCoupon"])],64)}const _o=M(K,[["render",co]]);export{_o as default};