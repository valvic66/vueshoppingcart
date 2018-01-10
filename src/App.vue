<template>
  <div id="app">
    <div class="container">
      <div class="row">
        <div>by Micu Valentin</div>
      </div>

      <div class="row justify-content-center align-items-center">
        - IN WORK -
      </div><br />

      <div class="row justify-content-center">
        <b-button size="sm" variant="primary" @click="showCart">Show Cart</b-button>
      </div><br />

      <div v-if="isCartVisible">
        <shopping-cart
          class="shopping-cart"
          v-on:clickclosecart="closeCart"
        ></shopping-cart>
      </div>
          
      <div class="row">
        <product
          v-for="(product, index) in products"
          :key="index"
          :product="product"
          class="col-12 col-sm-6 col-md-6 col-lg-4 col-xl-3 box"
          ></product>
      </div>

    </div>
  </div>
</template>

<script>
import Break from "./components/Break";
import Product from "./components/Product";
import ShoppingCart from "./components/ShoppingCart";

export default {
  name: "app",
  data() {
    return {
      isCartVisible: false,
      products: [
        {
          id: 1,
          title: "Telefon mobil Apple iPhone 6, 32GB",
          price: 1699,
          image:
            "https://s4emagst.akamaized.net/products/5617/5616445/images/res_ab736a4f78e2a562ad01325752875057_200x200_c0e1.jpg",
          qty: 1
        },
        {
          id: 2,
          title: "Telefon mobil Apple iPhone 7, 128GB",
          price: 3329,
          image:
            "https://s3emagst.akamaized.net/products/4159/4158442/images/res_bbdfaa9537747e2cd6dd46a657f9107b_200x200_1qme.jpg",
          qty: 1
        },
        {
          id: 3,
          title: "Laptop Apple MacBook Pro 15 Retina",
          price: 6250,
          image:
            "https://s5emagst.akamaized.net/products/8/7048/images/img233743_05062013155008_0_200x200_79gq.jpg",
          qty: 1
        },
        {
          id: 4,
          title: "Laptop Apple MacBook 12",
          price: 7899,
          image:
            "https://s5emagst.akamaized.net/products/3446/3445042/images/res_9fad9f3f41cc11000fd525689d28a38e_200x200_gbub.jpg",
          qty: 1
        },
        {
          id: 5,
          title: "Sistem Desktop PC Mac mini ",
          price: 2449,
          image:
            "https://s2emagst.akamaized.net/products/41/40037/images/img255528_19062013160053_1_200x200_oc12.jpg",
          qty: 1
        },
        {
          id: 6,
          title: "Apple Watch 3, GPS",
          price: 1849,
          image:
            "https://s4emagst.akamaized.net/products/8894/8893687/images/res_59f34fedbd988eb8b14665569a3af0a7_200x200_vq3.jpg",
          qty: 1
        },
        {
          id: 7,
          title: "Sistem Desktop PC iMac 21.5",
          price: 5999,
          image:
            "https://s2emagst.akamaized.net/products/2420/2419759/images/res_fe514384118b62a95639073af813fd84_200x200_eimd.jpg",
          qty: 1
        },
        {
          id: 8,
          title: "Sistem Desktop PC iMac 27",
          price: 11499,
          image:
            "https://s2emagst.akamaized.net/products/2420/2419759/images/res_fe514384118b62a95639073af813fd84_200x200_eimd.jpg",
          qty: 1
        }
      ]
    };
  },
  components: {
    Break,
    Product,
    ShoppingCart
  },
  methods: {
    showCart: function () {
      this.isCartVisible = !this.isCartVisible
    },
    closeCart: function () {
      this.isCartVisible = false
    }
  }
};
</script>

<style lang="scss">
* {
  margin: 0;
  padding: 0;
}
@import "./styles/custom-bootstrap.scss";
@import "../node_modules/bootstrap/scss/bootstrap.scss";
@import '../node_modules/bootstrap-vue/dist/bootstrap-vue.css';

#app {
  position: relative;

  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* text-align: center; */
  color: #2c3e50;
  // background-color: azure;

  // max-width: 1200px;
  // margin: 0 auto;
}
body {
  background-color: transparent;
}
</style>

<style scoped>
.box {
  box-sizing: border-box;
  border: 5px solid transparent;
  background-clip: padding-box;
}
.products {
  
}
.shopping-cart {
  position: absolute;
  top: 0;
  right: 0;
  z-index: 100;
}


@media screen and (min-width: 576px) {
  .shopping-cart {
    max-width: 90%;
  }
}
@media screen and (min-width: 768px) {
  .shopping-cart {
    max-width: 80%;
  }
}
@media screen and (min-width: 992px) {
  .shopping-cart {
    max-width: 50%;
  }
}
@media screen and (min-width: 1024px) {
  .shopping-cart {
    max-width: 50%;
  }
}
</style>
