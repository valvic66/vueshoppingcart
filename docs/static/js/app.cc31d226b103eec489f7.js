webpackJsonp([1],{"+Gxq":function(t,i,a){"use strict";var s=a("fnDg").a;var e=a("VU/8")(s,null,!1,function(t){a("4veK")},null,null);i.a=e.exports},"46CQ":function(t,i){},"4veK":function(t,i){},"8oGC":function(t,i){},"HUt/":function(t,i,a){"use strict";var s=a("qRo1").a;var e=a("VU/8")(s,null,!1,function(t){a("n9mN")},null,null);i.a=e.exports},JCpY:function(t,i,a){"use strict";var s=a("rKsW").a;var e=a("VU/8")(s,null,!1,function(t){a("xBwK")},null,null);i.a=e.exports},JDVb:function(t,i,a){"use strict";var s=a("9NuQ").a;var e=a("VU/8")(s,null,!1,function(t){a("Y9O/")},null,null);i.a=e.exports},NHnr:function(t,i,a){"use strict";Object.defineProperty(i,"__esModule",{value:!0});var s=a("7+uW"),e=a("e6fC"),r={render:function(){var t=this.$createElement;return(this._self._c||t)("div",{staticClass:"break"})},staticRenderFns:[]};var c=a("VU/8")({name:"Break",props:[""],data:function(){return{}}},r,!1,function(t){a("hKti")},"data-v-a9d69e56",null).exports,n=a("pFYg"),o=a.n(n),d=a("M4fF"),u=a.n(d),l={data:{cart:[]},add:function(t){var i=_.find(this.data.cart,["id",t.id]);"object"!=(void 0===i?"undefined":o()(i))&&this.data.cart.push({id:t.id,title:t.title,price:t.price,image:t.image,qty:t.qty})},increase:function(t){var i=_.find(this.data.cart,["id",t.id]);if("object"==(void 0===i?"undefined":o()(i))){var a=_.indexOf(this.data.cart,i);this.data.cart[a].qty++}},decrease:function(t){var i=_.find(this.data.cart,["id",t.id]);if("object"==(void 0===i?"undefined":o()(i))){var a=_.indexOf(this.data.cart,i);1==this.data.cart[a].qty?this.data.cart.splice(a,1):this.data.cart[a].qty--}}},p={name:"Product",props:["product"],data:function(){return{shared:l.data}},methods:{addToCart:function(){l.add(this.product)},increaseCart:function(){l.increase(this.product)},decreaseCart:function(){l.decrease(this.product)}},computed:{quantityInCart:function(){var t=u.a.find(this.shared.cart,["id",this.product.id]);return"object"==(void 0===t?"undefined":o()(t))?t.qty:0}}},v={render:function(){var t=this.$createElement,i=this._self._c||t;return i("div",{staticClass:"product"},[i("img",{staticClass:"product-image",attrs:{src:this.product.image}}),this._v(" "),i("div",{staticClass:"product-title"},[this._v(this._s(this.product.title))]),this._v(" "),i("div",{staticClass:"product-price"},[i("div",{staticClass:"product-price-amount"},[this._v(this._s(this.product.price)+" RON")]),this._v(" "),i("div",{staticClass:"product-price-qty"},[this._v("x "+this._s(this.quantityInCart))])]),this._v(" "),i("div",{staticClass:"product-button"},[0==this.quantityInCart?i("b-btn",{staticClass:"product-button-add",attrs:{size:"sm",variant:"primary"},on:{click:this.addToCart}},[this._v("Add")]):i("div",{staticClass:"product-button-wrapper"},[i("b-btn",{staticClass:"product-button-increase",attrs:{size:"sm",variant:"primary"},on:{click:this.increaseCart}},[this._v("+")]),this._v(" "),i("b-btn",{staticClass:"product-button-decrease",attrs:{size:"sm",variant:"primary"},on:{click:this.decreaseCart}},[this._v("-")])],1)],1)])},staticRenderFns:[]};var m={name:"ShoppingCart",props:["product"],data:function(){return{items:l.data.cart}},methods:{onCloseCart:function(){this.$emit("clickclosecart")}},computed:{total:function(){return u.a.sumBy(this.items,function(t){return t.price*t.qty})}}},h={render:function(){var t=this,i=t.$createElement,a=t._self._c||i;return a("div",{staticClass:"cart"},[a("h4",{staticClass:"cart-title"},[t._v("Your Cart")]),t._v(" "),t._l(t.items,function(i,s){return a("div",{key:s,staticClass:"cart-item"},[a("div",{staticClass:"cart-item-img"},[a("img",{attrs:{src:i.image}})]),t._v(" "),a("div",{staticClass:"info-wrapper"},[a("div",{staticClass:"cart-item-title"},[t._v(t._s(i.title))]),t._v(" "),a("div",{staticClass:"price-q-wrapper"},[a("div",{staticClass:"cart-item-qty"},[t._v("x"+t._s(i.qty))]),t._v(" "),a("div",{staticClass:"cart-item-price"},[t._v(t._s(i.qty*i.price)+" RON")])])])])}),t._v(" "),a("div",{staticClass:"cart-total"},[a("div",{staticClass:"cart-total-title"},[t._v("TOTAL")]),t._v(" "),a("div",{staticClass:"cart-total-amount"},[t._v(t._s(t.total)+" RON")])]),t._v(" "),a("div",{staticClass:"cart-total-close"},[a("b-button",{attrs:{size:"sm",variant:"primary"},on:{click:t.onCloseCart}},[t._v("Close")])],1)],2)},staticRenderFns:[]};var f={name:"app",data:function(){return{isCartVisible:!1,products:[{id:1,title:"Telefon mobil Apple iPhone 6, 32GB",price:1699,image:"https://s4emagst.akamaized.net/products/5617/5616445/images/res_ab736a4f78e2a562ad01325752875057_200x200_c0e1.jpg",qty:1},{id:2,title:"Telefon mobil Apple iPhone 7, 128GB",price:3329,image:"https://s3emagst.akamaized.net/products/4159/4158442/images/res_bbdfaa9537747e2cd6dd46a657f9107b_200x200_1qme.jpg",qty:1},{id:3,title:"Laptop Apple MacBook Pro 15 Retina",price:6250,image:"https://s5emagst.akamaized.net/products/8/7048/images/img233743_05062013155008_0_200x200_79gq.jpg",qty:1},{id:4,title:"Laptop Apple MacBook 12",price:7899,image:"https://s5emagst.akamaized.net/products/3446/3445042/images/res_9fad9f3f41cc11000fd525689d28a38e_200x200_gbub.jpg",qty:1},{id:5,title:"Sistem Desktop PC Mac mini ",price:2449,image:"https://s2emagst.akamaized.net/products/41/40037/images/img255528_19062013160053_1_200x200_oc12.jpg",qty:1},{id:6,title:"Apple Watch 3, GPS",price:1849,image:"https://s4emagst.akamaized.net/products/8894/8893687/images/res_59f34fedbd988eb8b14665569a3af0a7_200x200_vq3.jpg",qty:1},{id:7,title:"Sistem Desktop PC iMac 21.5",price:5999,image:"https://s2emagst.akamaized.net/products/2420/2419759/images/res_fe514384118b62a95639073af813fd84_200x200_eimd.jpg",qty:1},{id:8,title:"Sistem Desktop PC iMac 27",price:11499,image:"https://s2emagst.akamaized.net/products/2420/2419759/images/res_fe514384118b62a95639073af813fd84_200x200_eimd.jpg",qty:1}]}},components:{Break:c,Product:a("VU/8")(p,v,!1,function(t){a("8oGC")},"data-v-0a5c82be",null).exports,ShoppingCart:a("VU/8")(m,h,!1,function(t){a("O16x")},"data-v-79e2b21c",null).exports},methods:{showCart:function(){this.isCartVisible=!this.isCartVisible},closeCart:function(){this.isCartVisible=!1}}},C={render:function(){var t=this.$createElement,i=this._self._c||t;return i("div",{attrs:{id:"app"}},[i("div",{staticClass:"container"},[this._m(0),this._v(" "),i("div",{staticClass:"row justify-content-center align-items-center"},[this._v("\n      - IN WORK -\n    ")]),i("br"),this._v(" "),i("div",{staticClass:"row justify-content-center"},[i("b-button",{attrs:{size:"sm",variant:"primary"},on:{click:this.showCart}},[this._v("Show Cart")])],1),i("br"),this._v(" "),this.isCartVisible?i("div",[i("shopping-cart",{staticClass:"shopping-cart",on:{clickclosecart:this.closeCart}})],1):this._e(),this._v(" "),i("div",{staticClass:"row"},this._l(this.products,function(t,a){return i("product",{key:a,staticClass:"col-12 col-sm-6 col-md-6 col-lg-4 col-xl-3 box",attrs:{product:t}})}))])])},staticRenderFns:[function(){var t=this.$createElement,i=this._self._c||t;return i("div",{staticClass:"row"},[i("div",[this._v("by Micu Valentin")])])}]};var g=a("VU/8")(f,C,!1,function(t){a("46CQ"),a("WOHx")},"data-v-3bc19385",null).exports;s.a.use(e.a),s.a.config.productionTip=!1,new s.a({el:"#app",template:"<App/>",components:{App:g}})},O16x:function(t,i){},WOHx:function(t,i){},"Y9O/":function(t,i){},dW2o:function(t,i){},hKti:function(t,i){},n9mN:function(t,i){},r15W:function(t,i,a){"use strict";var s=a("E9Zr").a;var e=a("VU/8")(s,null,!1,function(t){a("dW2o")},null,null);i.a=e.exports},xBwK:function(t,i){}},["NHnr"]);
//# sourceMappingURL=app.cc31d226b103eec489f7.js.map