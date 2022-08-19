<script setup>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
// import HelloWorld from "./components/HelloWorld.vue";
// import Home from "./views/Home.vue";
// import About from "./views/About.vue";
// import HelloWorld from "./components/HelloWorld.vue";
</script>

<template>
  <div id="mySidebar" class="sidebar">
    <a href="javascript:void(0)" class="closebtn" onclick="closeNav()">×</a>
    <router-link to="/">Portfolio</router-link>
    <router-link to="/tutorial">Tutorials </router-link>

    <footer class="lg:text-left">
      <div class="text-white p-4">
        Siwon Lee<br />
        swleeca@gmail.com
      </div>
    </footer>
  </div>
  <div id="main">
    <button class="openbtn" onclick="openNav()">☰</button>
    <router-view></router-view>
  </div>
</template>

<style>
.sidebar {
  height: 100%;
  width: 0px;
  position: fixed;
  z-index: 1;
  top: 0;
  left: 0;
  background-color: #111;
  overflow-x: hidden;
  transition: 0.5s;
  padding-top: 60px;
}

.sidebar a {
  padding: 8px 8px 8px 32px;
  text-decoration: none;
  font-size: 20px;
  color: #818181;
  display: block;
  transition: 0.3s;
}

.sidebar a:hover {
  color: #f1f1f1;
}

.sidebar .closebtn {
  position: absolute;
  top: 20px;
  right: 25px;
  font-size: 50px;
  margin-left: 50px;
}

.openbtn {
  font-size: 30px;
  cursor: pointer;

  color: black;
  padding: 10px 15px;
  border: none;
  position: relative;
}

#main {
  transition: margin-left 0.5s;
  padding: 16px;
}

/* On smaller screens, where height is less than 450px, change the style of the sidenav (less padding and a smaller font size) */
@media screen and (max-height: 450px) {
  .sidebar {
    padding-top: 15px;
  }
  .sidebar a {
    font-size: 18px;
  }
}
</style>
