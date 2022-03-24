<template>
  <footer class="footer">

    <div class="footer_container_p">
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid facere iure libero? <a href="#">GO</a></p>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad id qui veritatis. <a href="#">Ap</a></p>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et maiores nostrum odio. <a href="#">Back</a></p>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloremque id officiis repudiandae? <a href="#">Cool</a></p>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facilis molestiae molestias suscipit? <a href="#">End</a></p>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet illo nam perspiciatis. <a href="#">Button</a></p>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet laboriosam nesciunt veniam. <a href="#">Shop</a></p>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae debitis dignissimos qui. <a href="#">Start</a></p>
    </div>
    <div class="icons_container">
        <i class="icon-linux"></i>
        <i class="icon-plancast"></i>
        <i class="icon-firefox"></i>
        <i class="icon-chrome"></i>
        <i class="icon-twitter"></i>
        <i class="icon-facebook"></i>
        <i class="icon-github-circled"></i>
        <i class="icon-github"></i>
      </div>
      <div class="icons_container">
        <i class="icon-apple"></i>
        <i class="icon-android"></i>
        <i class="icon-vkontakte"></i>
        <i class="icon-google"></i>
        <i class="icon-paper-plane"></i>
        <i class="icon-odnoklassniki"></i>
        <i class="icon-opera"></i>
        <i class="icon-gitlab"></i>
      </div>


    <span class="span_copyright">Copyright &#169; 2022.<i class="icon-spin5"></i></span>
  </footer>
</template>

<script>
</script>

<style lang="scss">


.footer {
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  min-height: 250px;
  background: black;
  border: 4px solid blue;
}
.icons_container {
  //border: 1px solid white;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  align-self: center;
  justify-content: space-around;
  margin: 10px auto;
  width: 49%;
  min-height: 170px;
}

.footer_container_p {
  margin-top: 10px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-around;
  width: 100%;
  min-height: 80px;

  border: 1px solid white;

  p{ color: grey;
    //text-shadow: 2px 0 3px black;
    margin: 10px 30px;
    padding: 10px;
    width: 200px;
    height: 100px;
    border: 1px solid grey;
    font-size: 16px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    border-radius: 10px;
    box-shadow: 0 3px 6px 1px rgba(255,255,255,19%);
    transition: 0.4s;
    a{
      box-shadow: 0 2px 1px 1px rgba(255,255,255,19%);
      border-radius: 10px;
      outline: none;
      text-decoration: none;
      cursor: pointer;
      margin-top: auto;
      padding: 5px;
      color: rgba(255,255,255,0.1);
      width: 70px;
      background-color: rgba(255,255,255,9%);
      transition: 0.4s;
    }
  }

  p:hover {
    color: white;
    box-shadow: 0 5px 9px 2px white;
    border: 1px solid white;
  }
  p:hover a {
    color: green;
    box-shadow: 0 2px 1px 1px rgba(255,255,255,59%);
    background-color: rgba(255,255,255,99%);
  }
  p:hover a:active {
    box-shadow: 0 0 0 0 rgba(255,255,255,0.1);
    transition: 0s;
    background-color: rgba(255,255,255,49%);
  }
}

.icon-linux {
  color: yellow;
}
.icon-plancast {
  color: white;
}
.icon-firefox {
  color: orange;
}
.icon-chrome {
color: red;
}
.icon-twitter {
  color: blue;
}
.icon-facebook {
  color: white;
}
.icon-github-circled {
  color: white;
}
.icon-github {
  color: yellowgreen;
}
.icon-apple {
  color: white;
}
.icon-android {
  color: green;
}
.icon-vkontakte {
  color: lightblue;
}
.icon-google {
  color: darkblue;
}
.icon-paper-plane {
  color: white;
}
.icon-odnoklassniki {
  color: orange;
}
.icon-opera {
  color: red;
}
.icon-gitlab {
  color: darkorange;
}

i {
  width: 40px;
  height: 40px;
  margin: 5px;
  line-height: 40px;
  font-size: 20px;
  //color: rgba(255,255,255,19%);
  transition: 0.3s;
  border: 2px solid rgba(255,255,255,19%);
  border-radius: 50% 50%;
  letter-spacing: 0.08em;
}

i:hover {
  border: 2px solid rgba(255,255,255,69%);
  transform: scale(1.1);
}

i:active {
  border: 2px solid white;
  color: white;
  transition: 0s;
  box-shadow: 0 1px 16px white;
}

.span_copyright {
  width: 100%;
  color: rgba(255,255,255,19%);
  transition: 1s;
}
.span_copyright:hover {
  color: green;
  transition: 1s;
  letter-spacing: 1em;
}
@media (max-width: 360px) {
footer {
  min-width: 360px;
}
  i {
    margin: 10px 20px;
  }
  .icons_container {
    flex-direction: row;
    flex-wrap: wrap;
    width: 80%;
    margin: 0 auto;

  }

}
</style>

