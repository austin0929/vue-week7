import{P as $}from"./PaginationCp-DI9jl0kZ.js";import{M as O}from"./modal-CqhrGsQ6.js";import{_ as D,o as l,c as n,a as t,t as s,h as M,F as u,g as y,w as f,r as g,d as b}from"./index-jslE-nee.js";const x={props:["order"],data(){return{modal:null,tempOrder:{},localDate:"",payDate:""}},methods:{showModal(){this.modal.show(),console.log(this.tempOrder)},hideModal(){this.modal.hide()}},watch:{order(){this.tempOrder=this.order;const d=this.tempOrder.create_at,o=new Date(d*1e3),e=o.getFullYear(),_=o.getMonth()+1,a=o.getDate();this.localDate=`${e}/${_}/${a}`;const c=this.order.paid_date,i=new Date(c*1e3),m=i.getFullYear(),p=i.getMonth()+1,r=i.getDate();this.payDate=`${m}/${p}/${r}`}},mounted(){this.modal=new O(this.$refs.orderModal)}},w={class:"modal fade",id:"orderModal",tabindex:"-1",role:"dialog","aria-labelledby":"exampleModalLabel","aria-hidden":"true",ref:"orderModal"},P={class:"modal-dialog modal-xl",role:"document"},C={class:"modal-content border-0"},L=t("div",{class:"modal-header bg-dark text-white"},[t("h5",{class:"modal-title",id:"exampleModalLabel"},[t("span",null,"訂單細節")]),t("button",{type:"button",class:"btn-close","data-bs-dismiss":"modal","aria-label":"Close"})],-1),E={class:"modal-body"},V={class:"row"},A={class:"col-md-4"},S=t("h3",null,"用戶資料",-1),T={class:"table"},F={key:0},I=t("th",{style:{width:"100px"}},"姓名",-1),R=t("th",null,"Email",-1),U=t("th",null,"電話",-1),B=t("th",null,"地址",-1),Y={class:"col-md-8"},N=t("h3",null,"訂單細節",-1),q={class:"table"},H=t("th",{style:{width:"100px"}},"訂單編號",-1),j=t("th",null,"下單時間",-1),z=t("th",null,"付款時間",-1),G={key:0},J={key:1},K=t("th",null,"付款狀態",-1),Q={key:0,class:"text-success"},W={key:1,class:"text-muted"},X=t("th",null,"總金額",-1),Z=t("h3",null,"選購商品",-1),tt={class:"table"},et=t("thead",null,[t("tr")],-1),st={class:"text-end"},ot={class:"modal-footer"},lt=t("button",{type:"button",class:"btn btn-outline-secondary","data-bs-dismiss":"modal"}," 取消 ",-1);function nt(d,o,e,_,a,c){return l(),n("div",w,[t("div",P,[t("div",C,[L,t("div",E,[t("div",V,[t("div",A,[S,t("table",T,[e.order.user?(l(),n("tbody",F,[t("tr",null,[I,t("td",null,s(e.order.user.name),1)]),t("tr",null,[R,t("td",null,s(e.order.user.email),1)]),t("tr",null,[U,t("td",null,s(e.order.user.tel),1)]),t("tr",null,[B,t("td",null,s(e.order.user.address),1)])])):M("",!0)])]),t("div",Y,[N,t("table",q,[t("tbody",null,[t("tr",null,[H,t("td",null,s(e.order.id),1)]),t("tr",null,[j,t("td",null,s(a.localDate),1)]),t("tr",null,[z,t("td",null,[e.order.is_paid?(l(),n("span",G,s(a.payDate),1)):(l(),n("span",J,"時間不正確"))])]),t("tr",null,[K,t("td",null,[e.order.is_paid?(l(),n("strong",Q,"已付款")):(l(),n("span",W,"尚未付款"))])]),t("tr",null,[X,t("td",null,s(e.order.total),1)])])]),Z,t("table",tt,[et,t("tbody",null,[(l(!0),n(u,null,y(e.order.products,i=>(l(),n("tr",{key:i.id},[t("th",null,s(i.product.title),1),t("td",st,s(i.qty),1),t("td",null,s(i.product.unit),1)]))),128))])])])])]),t("div",ot,[lt,t("button",{type:"button",class:"btn btn-primary",onClick:o[0]||(o[0]=f(i=>c.hideModal(),["prevent"]))},"確認")])])])],512)}const at=D(x,[["render",nt]]);var dt={VITE_APP_URL:"https://vue3-course-api.hexschool.io/v2",VITE_APP_PATH:"david777",BASE_URL:"./",MODE:"production",DEV:!1,PROD:!0,SSR:!1};const{VITE_APP_URL:k,VITE_APP_PATH:v}=dt,it={components:{Pagination:$,CheckOrderModal:at},data(){return{orders:[],pagination:{},localDate:"",tempOrder:{},isLoading:!1}},methods:{getOrders(d=1){this.isLoading=!0;const o=`${k}/api/${v}/orders?page=${d}`;this.$http.get(o).then(e=>{this.orders=e.data.orders,this.pagination=e.data.pagination,this.getDate(),this.isLoading=!1})},getDate(){this.orders.forEach(d=>{if(this.orders){const o=new Date(d.create_at*1e3);let e=o.getFullYear(),_=o.getMonth()+1,a=o.getDate();this.localDate=`${e}/${_}/${a}`}})},delOrder(d){const o=`${k}/api/${v}/admin/order/${d}`;this.$http.delete(o).then(e=>{e.data.success&&this.getOrders()}).catch(e=>{console.log(e)})},CheckModal(d){this.tempOrder={...d},this.$refs.checkModal.showModal()}},mounted(){this.getOrders()}},rt={class:"table table-striped mt-4"},ct=t("thead",null,[t("tr",null,[t("th"),t("th",null,"購買時間"),t("th",null,"Email"),t("th",null,"購買款項"),t("th",{width:"150"},"應付金額"),t("th",{width:""},"是否付款"),t("th",null,"編輯")])],-1),ht={class:"pt-1"},_t={href:"#"},ut=["onClick"],mt={class:"list-unstyled"},pt={class:"text-right"},gt={key:0,class:"bg-success text-center tableStatusActive"},bt=t("span",null,"已付款",-1),yt=[bt],ft={key:1,class:"bg-warning text-center tableStatusInactive"},kt=t("span",null,"未付款",-1),vt=[kt],Dt={class:"btn-group"},Mt=["onClick"];function $t(d,o,e,_,a,c){const i=g("VueLoading"),m=g("Pagination"),p=g("CheckOrderModal");return l(),n(u,null,[t("table",rt,[b(i,{active:a.isLoading},null,8,["active"]),ct,t("tbody",null,[a.orders?(l(!0),n(u,{key:0},y(a.orders,r=>(l(),n("tr",{key:r.id},[t("td",ht,[t("a",_t,[t("i",{class:"bi bi-x h3 text-danger",onClick:f(h=>c.delOrder(r.id),["prevent"])},null,8,ut)])]),t("td",null,s(a.localDate),1),t("td",null,[t("span",null,s(r.user.email),1)]),t("td",null,[t("ul",mt,[(l(!0),n(u,null,y(r.products,h=>(l(),n("li",{key:h.id},s(h.product.title)+" "+s(h.qty)+" / "+s(h.product.unit),1))),128))])]),t("td",pt,s(r.total),1),t("td",null,[r.is_paid?(l(),n("div",gt,yt)):(l(),n("div",ft,vt))]),t("td",null,[t("div",Dt,[t("button",{class:"btn btn-outline-primary btn-sm",onClick:f(h=>c.CheckModal(r),["prevent"])}," 檢視 ",8,Mt)])])]))),128)):M("",!0)])]),b(m,{pages:a.pagination,onUpdatePage:c.getOrders},null,8,["pages","onUpdatePage"]),b(p,{ref:"checkModal",order:a.tempOrder},null,8,["order"])],64)}const Pt=D(it,[["render",$t]]);export{Pt as default};
