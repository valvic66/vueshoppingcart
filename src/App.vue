<template>
  <div id="app">
    <p>by Micu Valentin</p>
    <break></break>
    <div style="text-align: center">- IN WORK -</div>
    <div class="product">
      <product
        v-for="(product, index) in products"
        :key="index"
        :product="product"
      ></product>
    </div>

    <div class="shopping-cart">
      <shopping-cart></shopping-cart>
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
      products: [
        {
          id: 1,
          title: "Product no. 1",
          price: 300,
          image: "https://s5emagst.akamaized.net/products/3445/3444889/images/res_49e87252f4e6ede1b47eadc2aee9010b_200x200_oq2q.jpg",
          qty: 1
        },
        {
          id: 2,
          title: "Product no. 2",
          price: 500,
          image: "https://s4emagst.akamaized.net/products/2043/2042057/images/res_be272f187a7cab3b5931d2aed37e4a90_200x200_6087.jpg",
          qty: 1
        },
        {
          id: 3,
          title: "Product no. 3",
          price: 100,
          image: "https://s4emagst.akamaized.net/products/8894/8893687/images/res_59f34fedbd988eb8b14665569a3af0a7_200x200_vq3.jpg",
          qty: 1
        }
      ]
    }
  },
  components: {
    Break,
    Product,
    ShoppingCart
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* text-align: center; */
  color: #2c3e50;
}
body {
  background-color: transparent;
}

</style>

<style scoped>
.my-button {
  width: 200px;
}
.product {
  margin: 0 8px;

  display: flex;
}
.shopping-cart {
  display: flex;
  flex-direction: row;
  justify-content: center;
}
</style>
