<template>
  <div class="page">
    <h2>Главная</h2>
    <div class="product-list">
      <ProductCard v-for="item of catalog" v-bind:key="item.id" v-bind:data="item" >
        <button class="btn" v-on:click="addToCart(item)">Выбрать поездку</button>
      </ProductCard>
    </div>
  </div>
</template>

<script>
import ProductCard from '../components/ProductCard.vue'

export default {
  components: { ProductCard },
  name: 'Home',
  computed: {
    catalog() {
      return this.$store.getters.getCatalog
    }
  },
  methods: {
    addToCart(item) {
      this.$store.dispatch('addToCart', item)
    }
  }
}
</script>

<style>
  .product-list {
    display: flex;
    justify-content: left;
    flex-wrap: wrap;
    /*max-width: 2050px;*/
    /*margin: 30px 0 0 0;*/
    /*border: 1px solid black;*/
  }
  .page {
    position: relative;
    margin-top: 70px;
    border: 4px solid yellow;
    /*min-height: 2100px;*/
    /*max-width: 2000px;*/
  }

h2 {
  color: grey;
  width: 200px;
  align-self: center;
  margin-top: 10px;
  font-family: 'Source Sans Pro', sans-serif;
  font-style: normal;
  font-weight: 600;
  font-size: 36px;
  border-bottom: 5px solid grey;
}
  .btn {
    outline: none;
    background: #f8f4f4;
    background: linear-gradient(164deg,#f8f4f4 20%, #a8b4a8 70%);
    background: -webkit-linear-gradient(164deg,#f8f4f4 20%, #a8b4a8 70%);
    background: -moz-linear-gradient(164deg,#f8f4f4 20%, #a8b4a8 70%);
    position: absolute;
    box-shadow: 1px 3px 4px 1px grey;
    bottom: 10px;
    right: 10px;
    padding: 10px;
    margin: 10px;
    border-radius: 15px 15px ;
    transition: 0.2s;
    border: none;
  }
  .btn:hover {
    background: #f8f4f4;
    background: linear-gradient(355deg,#f8f4f4 30%, #07c807 90%);
    background: -webkit-linear-gradient(355deg,#f8f4f4 30%, #07c807 90%);
    background: -moz-linear-gradient(355deg,#f8f4f4 30%, #07c807 90%);
    cursor: url("../assets/Vector.png"), pointer;

  }
  .btn:active {
    color: white;
    background: black;
  }
  @media (max-width: 980px) {
    .product-list {

    }
  }

  @media (max-width: 400px) {
    .page {
      min-width: 360px;


    }

  }
</style>