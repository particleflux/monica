(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{1:function(e,t,s){e.exports=s("316X")},"316X":function(e,t,s){"use strict";s.r(t);var a=s("7pj7"),n=s.n(a);s("9Wh1"),window.Vue=s("XuX8"),Vue.use(n.a),Vue.component("StripeSubscription",s("DfI7").default),Vue.component("FormInput",s("oDCb").default),Vue.component("ContactSearch",s("rB0q").default),s("awRP").default.loadLanguage(window.Laravel.locale,!0).then((function(e){return new Vue({i18n:e,data:{htmldir:window.Laravel.htmldir,locale:e.locale}}).$mount("#app")}))},DfI7:function(e,t,s){"use strict";s.r(t);var a=s("URgk"),n={props:{name:{type:String,default:""},stripeKey:{type:String,default:""},clientSecret:{type:String,default:""},plan:{type:String,default:""},amount:{type:String,default:""},callback:{type:String,default:""},token:{type:String,default:""},confirm:{type:Boolean,default:!1},paymentSucceeded:{type:Boolean,default:!1},paymentCancelled:{type:Boolean,default:!1}},data:function(){return{selectedName:"",stripe:null,zip:"",errors:"",successMessage:"",cardElement:null,paymentMethod:"",paymentProcessing:!1,paymentProcessed:!1}},watch:{name:function(){this.selectedName=this.name}},mounted:function(){this.selectedName=this.name,(this.paymentSucceeded||this.paymentCancelled)&&(this.paymentProcessed=!0),this.paymentProcessed||this.start()},methods:{start:function(){this.stripe=Stripe(this.stripeKey);var e=this.stripe.elements();this.cardElement=e.create("card",{hidePostalCode:!0,style:{base:{color:"#32325d",lineHeight:"18px",fontFamily:'"Helvetica Neue", Helvetica, sans-serif',fontSmoothing:"antialiased",fontSize:"16px","::placeholder":{color:"#aab7c4"}},invalid:{color:"#fa755a",iconColor:"#fa755a"}}}),this.cardElement.mount("#card-element");var t=this;this.cardElement.addEventListener("change",(function(e){e.error?t.errors=e.error.message:t.errors=""}))},handleError:function(e){"parameter_invalid_empty"===e.code&&"payment_method_data[billing_details][name]"===e.param?this.errors=this.$t("settings.subscriptions_payment_error_name"):this.errors=e.message},subscribe:function(){var e=this;this.errors="",this.paymentProcessing=!0,this.paymentProcessed=!1,this.stripe.handleCardSetup(e.clientSecret,e.cardElement,{payment_method_data:{billing_details:{name:e.selectedName,address:{postal_code:e.zip}}}}).then((function(t){e.paymentProcessing=!1,t.error?e.handleError(t.error):(e.paymentProcessed=!0,e.paymentSucceeded=!0,e.successMessage=e.$t("settings.subscriptions_payment_success"),e.notify(e.successMessage,!0),e.processPayment(t.setupIntent))}))},processPayment:function(e){var t=this;this.paymentMethod=e.payment_method,Object(a.setTimeout)((function(){t.$refs.form.submit()}),10)},confirmPayment:function(){var e=this;this.paymentProcessing=!0,this.paymentProcessed=!1,this.errorMessage="",this.stripe.handleCardPayment(e.clientSecret,e.cardElement,{payment_method_data:{billing_details:{name:this.selectedName}}}).then((function(t){e.paymentProcessing=!1,t.error?e.handleError(t.error):(e.paymentProcessed=!0,e.paymentSucceeded=!0,e.successMessage=e.$t("settings.subscriptions_payment_success"),e.notify(e.successMessage,!0),Object(a.setTimeout)((function(){window.location=e.callback}),3e3))}))},notify:function(e,t){this.$notify({group:"subscription",title:e,text:"",type:t?"success":"error"})}}},i=s("KHd+"),r=Object(i.a)(n,(function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("form",{ref:"form",staticClass:"mb4",attrs:{action:e.callback,method:"post"},on:{submit:function(t){return t.preventDefault(),e.subscribe()}}},[s("notifications",{attrs:{group:"subscription",position:"top middle",duration:5e3,width:"400"}}),e._v(" "),s("div",{staticClass:"form-group"},[e.errors?s("div",{staticClass:"alert alert-danger w-100",attrs:{role:"alert"}},[e._v("\n      "+e._s(e.errors)+"\n    ")]):e._e(),e._v(" "),e.paymentSucceeded?s("div",[s("h1",{staticClass:"text-xl mt-2 mb-4 text-gray-700"},[e._v("\n        "+e._s(e.$t("settings.subscriptions_payment_succeeded_title"))+"\n      ")]),e._v(" "),e.successMessage?s("p",{staticClass:"mb-6"},[e._v("\n        "+e._s(e.successMessage)+"\n      ")]):s("p",{staticClass:"mb-6"},[e._v("\n        "+e._s(e.$t("settings.subscriptions_payment_succeeded"))+"\n      ")])]):e.paymentCancelled?s("div",[s("h1",{staticClass:"text-xl mt-2 mb-4 text-gray-700"},[e._v("\n        "+e._s(e.$t("settings.subscriptions_payment_cancelled_title"))+"\n      ")]),e._v(" "),s("p",{staticClass:"mb-6"},[e._v("\n        "+e._s(e.$t("settings.subscriptions_payment_cancelled"))+"\n      ")])]):e.paymentProcessed?e._e():s("div",{staticClass:"b--gray-monica ba pa4 br2 mb3 bg-black-05",attrs:{id:"payment-elements"}},[s("div",{staticClass:"form-row"},[s("div",{staticClass:"mb3"},[s("form-input",{attrs:{id:"cardholder-name","input-type":"text",iclass:"br3 b--black-30 ba pa3 w-100 f4",required:!0,title:e.$t("settings.subscriptions_upgrade_name")},model:{value:e.selectedName,callback:function(t){e.selectedName=t},expression:"selectedName"}})],1),e._v(" "),s("div",{staticClass:"mb3"},[s("form-input",{attrs:{id:"address-zip","input-type":"text",iclass:"br3 b--black-30 ba pa3 w-100 f4",title:e.$t("settings.subscriptions_upgrade_zip")},model:{value:e.zip,callback:function(t){e.zip=t},expression:"zip"}})],1),e._v(" "),s("label",{attrs:{for:"card-element"}},[e._v("\n          "+e._s(e.$t("settings.subscriptions_upgrade_credit"))+"\n        ")]),e._v(" "),s("div",{attrs:{id:"card-element"}})]),e._v(" "),s("button",{staticClass:"btn btn-primary w-100 mt3",attrs:{id:"card-button",disabled:e.paymentProcessing},domProps:{innerHTML:e._s(e.$t("settings.subscriptions_upgrade_submit",{amount:e.amount}))},on:{click:function(t){t.preventDefault(),e.confirm?e.confirmPayment():e.subscribe()}}})]),e._v(" "),e.paymentProcessed?s("a",{staticClass:"btn btn-secondary w-100 tc",attrs:{href:e.callback}},[e._v("\n      "+e._s(e.$t("app.go_back"))+"\n    ")]):e._e()]),e._v(" "),s("input",{attrs:{type:"hidden",name:"_token"},domProps:{value:e.token}}),e._v(" "),s("input",{attrs:{type:"hidden",name:"plan"},domProps:{value:e.plan}}),e._v(" "),s("input",{attrs:{type:"hidden",name:"payment_method"},domProps:{value:e.paymentMethod}})],1)}),[],!1,null,"f0b7585c",null);t.default=r.exports}},[[1,0,1]]]);