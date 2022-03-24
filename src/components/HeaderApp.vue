<template>
  <header id="header-app">

    <h1>Название сайта
<!--      <i class="icon-tree-1 icon-h1-header"></i>-->

<!--      <i class="icon-tree-2 icon-h1-header"></i>-->

<!--      <i class="icon-tree-1 icon-h1-header"></i>-->

<!--      <i class="icon-tree-2 icon-h1-header"></i>-->
<!--      <i class="icon-tree-1 icon-h1-header"></i>-->
    </h1>


    <nav class="header-nav">
      <router-link class="router-link" to="/Catalog">Каталог<i class="icon-spin5 icon-header-nav"></i></router-link>
      <router-link class="router-link" to="/">Главная<i class="icon-globe icon-header-nav"></i></router-link>
      <router-link class="router-link" to="/cart">Корзина<i class="icon-basket icon-header-nav"></i></router-link>
      <router-link class="router-link" to="/form">Форма<i class="icon-user icon-header-nav"></i></router-link>
    </nav>
  </header>
</template>
<script>
export default {
  name: 'header-app',
  data() {
    return {}
  },
  methods: {}
}
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Source+Sans+Pro&display=swap');

#header-app {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  min-height: 200px;
  background: white;
  //position: fixed;
  //z-index: 99;
  border: 4px solid red;
}

h1 {
  //position: absolute;

  width: 650px;
  min-height: 35px;
  //left: 10px;
  //top: 13px;
  font-family: 'Source Sans Pro', sans-serif;
  font-style: normal;
  font-weight: 600;
  font-size: 37px;
  line-height: 35px;
  color: #3F3F3F;
  letter-spacing: 0.07em;
  text-shadow: 1px 1px 2px greenyellow;
  transition: 1s;
  .icon-h1-header {
    //margin: 0;
    //padding: 0;
    //border: none;
    //text-shadow: none;
    ////line-height: 35px;
    //font-size: 30px;
  }
}

h1:hover {
  color: green;
  transition: 0.5s;
}
h1:hover .icon-h1-header {
  color: lawngreen;
  transition: 1s;
}
h1:hover .icon-h1-header:hover {
border: none;
}
.header-nav {
  display: flex;
  margin: 0 0 0 0;
  min-width: 600px;
  min-height: 40px;
  align-content: center;
  align-items: center;
  border: 1px solid black;
}

.router-link {
  display: flex;
  flex-direction: row;
  text-decoration: none;
  margin-left: 10px;
  color: white;
  font-family: 'Source Sans Pro', sans-serif;
  font-style: normal;
  font-weight: 600;
  height: 20px;
  font-size: 16px;
  background-color: #B4B4B4;
  padding: 5px;
  border-radius: 4px 4px;
  box-shadow: 0 2px 1px 1px white;
  .icon-header-nav {
    font-size: 20px;
    width: 30px;
    height: 20px;
    transform: scale(1);
    line-height: 20px;
    margin: 0 0 0 5px;
    padding: 0;
    border: none;
  }
  .icon-header-nav:hover {
    color: red;
  }
}

.router-link:hover {
  background-color: #F1F4F3;
  box-shadow: 0 2px 1px 1px darkgray;
  color: #3F3F3F;
  transition: 0.5s;

}
.router-link:hover .icon-header-nav {
  color: #07c807;
  border: none;
}

.router-link:active {
  box-shadow: 0 1px 0 1px gray;
  background-color: #E5E5E5;
  transition: 0.2s;
}
@media (max-width: 1000px) {
  .header-app {
    flex-direction: column;
    flex-wrap: wrap;
    align-items: center;
  }
}
@media (max-width: 980px) {
  #header-app {
    height: 190px;
    display: flex;
    align-items: flex-end;
    flex-direction: row;
  }
  h1 {
    flex-direction: column;
    flex-wrap: wrap;
    width: 350px;
    line-height: 80px;
    height: 100%;
    top: 0;
    left: 50px;
  }
  .header-nav {
    width: 350px;
    height: 160px;
    flex-direction: column;
    margin: 15px 0 0 200px;

  }
  .router-link {
    align-self: center;
    margin: 15px 0 0 0;

  }
}
@media (max-width: 856px) {
  h1 {
    width: 150px;
    line-height: 30px;
  }
}
@media (max-width: 670px) {
  .router-link {
    align-self: center;
  }
}
@media (max-width: 500px) {
  h1 {
    top: 0;
    left: 50px;
    width: 300px;
    height: 70px;
  }
  .header-nav {
    flex-direction: row;
    height: 50px;
    min-width: 200px;
    margin: 0 0 0 35px;
  }
  .router-link {
    align-self: start;
    margin: 5px;
  }
}
@media (max-width: 400px) {
  #header-app {
    min-height: 100px;
  }
  .header-nav {
    height: 50px;
  }
}
</style>


