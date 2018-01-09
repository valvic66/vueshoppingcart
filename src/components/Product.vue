<template>
  <div class="product">
    <img :src="product.image" class="product-image">
    <div class="product-title">{{ product.title }}</div>
    <div class="product-price">
      <div class="product-price-amount">$ {{ product.price }}</div>
      <div class="product-price-qty">x {{ quantityInCart }}</div>
    </div>
    <div class="product-button">
      <button @click="addToCart" class="product-button-add" v-if="quantityInCart == 0">Add</button>
      <div class="product-button-wrapper" v-else>
        <button @click="increaseCart" class="product-button-increase">+</button>
        <button @click="decreaseCart" class="product-button-decrease">-</button>
      </div>
    </div>  
  </div>
</template>


<script>
import _ from "lodash";
import State from "../shoppingCartState";

export default {
  name: "Product",
  props: ["product"],
  data() {
    return {
      shared: State.data
    };
  },
  methods: {
    addToCart: function() {
      State.add(this.product)
    },
    increaseCart: function() {
      State.increase(this.product)
    },
    decreaseCart: function() {
      State.decrease(this.product)
    }
  },
  computed: {
    quantityInCart: function () {
      var found = _.find (this.shared.cart, ['id', this.product.id])
      if (typeof found == 'object') {
        return found.qty
      } else {
        return 0
      }
    }
  }
}
</script>


<style scoped lang="scss">
$card-color: white;

.product {
  background-color: $card-color;
  box-shadow: 2px 2px 5px black;

  width: 200px;
  padding: 5px;

  display: flex;
  flex-direction: column;
  align-items: center;

  .product-image {
  }

  .product-title {
    font-weight: bold;
  }

  .product-price {
    width: 100%;

    display: flex;
    flex-direction: row;
    justify-content: space-around;

    .product-price-amount {
    }
    .product-price-qty {
    }
  }

  .product-button {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;

    .product-button-add {
    }

    .product-button-wrapper {
      width: 100%;

      display: flex;
      flex-direction: row;
      justify-content: space-around;

      .product-button-increase {
      }

      .product-button-decrease {
      }
    }
  }
}
</style>

