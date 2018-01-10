<template>
  <div class="cart">
    <h4 class="cart-title">Your Cart</h4>
    <div class="cart-item" v-for="(item, index) in items" v-bind:key="index">
      <div class="cart-item-img">
        <img :src="item.image">
      </div>
      
      <div class="info-wrapper">
        <div class="cart-item-title">{{ item.title }}</div>
        <div class="price-q-wrapper">
          <div class="cart-item-qty">x{{ item.qty }}</div>
          <div class="cart-item-price">{{ item.qty * item.price }} RON</div>
        </div>
      </div>
    </div>
    <div class="cart-total">
      <div class="cart-total-title">TOTAL</div>
      <div class="cart-total-amount">{{ total }} RON</div>
    </div>
    <div class="cart-total-close">
      <b-button size="sm" variant="primary" @click="onCloseCart">Close</b-button>
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
  methods: {
    onCloseCart: function () {
      this.$emit('clickclosecart')
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
  background-color: white;

  padding: 5px;
  width: 100%;

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
    width: 100%;

    display: flex;
    align-items: center;

    .cart-item-img {
      flex: 1;
      display: flex;
      justify-content: center;
      align-items: center;
    }
    .cart-item-img img {
      max-width: 60px;
    } 
    .info-wrapper {
      padding-left: 5px;
      flex: 4;

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
    margin: 10px 0;
    width: 100%;

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

