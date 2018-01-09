// keeping state instead of Vuex, next step will be Vuex

export default {
  data: {
    cart: []  
  },
  add (product) {
    var found = _.find(this.data.cart, ['id', product.id])
    if (typeof found != 'object') {
      this.data.cart.push ({
        id: product.id,
        title: product.title,
        price: product.price,
        image: product.image,
        qty: product.qty
      })
    }
  },
  increase (product) {
    var found = _.find(this.data.cart, ['id', product.id])
    if (typeof found == 'object') {
      var index = _.indexOf (this.data.cart, found)
      this.data.cart[index].qty++
    }
  },
  decrease (product) {
    var found = _.find(this.data.cart, ['id', product.id])
    if (typeof found == 'object') {
      var index = _.indexOf (this.data.cart, found)
      if (this.data.cart[index].qty == 1) {
        this.data.cart.splice(index, 1)
      } else {
        this.data.cart[index].qty--
      }
    }
  }
}