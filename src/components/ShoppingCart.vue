<template>
  <div class="cart">
    <h3 class="cart-title">SHOPPING CART</h3>
    <div class="cart-item" v-for="(item, index) in items" v-bind:key="index">
      <img :src="item.image" class="cart-item-img">
      <div class="info-wrapper">
        <div class="cart-item-title">{{ item.title }}</div>
        <div class="price-q-wrapper">
          <div class="cart-item-qty">x{{ item.qty }}</div>
          <div class="cart-item-price">$ {{ item.qty * item.price }}</div>
        </div>
      </div>
    </div>
    <div class="cart-total">
      <div class="cart-total-title">TOTAL</div>
      <div class="cart-total-amount">$ {{ total }}</div>
    </div>
  </div>
</template>


<script>
import _ from "lodash";
import State from "../shoppingCartState";

export default {
  name: "ShoppingCart",
  props: ["product"],
  data() {
    return {
      items: State.data.cart
    }
  },
  computed: {
    total: function () {
      return _.sumBy(this.items, function (item) {
        return (item.price * item.qty)
      })
    }
  }
}
</script>


<style scoped lang="scss">
.cart {
  // background-color: lightcoral;
  box-shadow: 2px 2px 5px black;

  margin-top: 30px;
  width: 200px;
  padding: 5px;

  display: flex;
  flex-direction: column;
  align-items: center;

  .cart-title {
    // font-weight: bold;

    margin: 10px 0;
  }
  .cart-item {
    border-bottom: solid lightgray 1px;

    margin-bottom: 5px;
    padding: 2px;

    display: flex;
    flex-direction: row;
    align-items: center;

    .cart-item-img {
      width: 60px;
      height: 60px;
    }
    .info-wrapper {
      padding-left: 5px;
      .cart-item-title {
      }
      .price-q-wrapper {
        display: flex;
        flex-direction: row;
        justify-content: space-between;

        .cart-item-qty {
        }
        .cart-item-price {
        }
      }
    }
  }
  .cart-total {
    width: 100%;
    margin: 10px 0;

    display: flex;
    flex-direction: row;
    justify-content: space-around;

    .cart-total-title {
      font-weight: bold;
    }
    .cart-total-amount {
    }
  }
}
</style>

