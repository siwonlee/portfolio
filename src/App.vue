<script setup>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
// import HelloWorld from "./components/HelloWorld.vue";
// import Home from "./views/Home.vue";
// import About from "./views/About.vue";
// import HelloWorld from "./components/HelloWorld.vue";
//import VueSidebarMenuAkahon from "vue-sidebar-menu-akahon";
</script>

<template>
  <div id="mySidebar" class="sidebar">
    <div style="height: 83vh">
      <a href="javascript:void(0)" class="closebtn" onclick="closeNav()">×</a>
      <router-link to="/">Portfolio</router-link>
      <router-link to="/tutorial">Tutorials </router-link>
    </div>

    <div class="profile mt-5">
      <div class="profile-details">
        <img src="./assets/img/photo.png" />

        <div class="name_job">
          <div class="text-white">Siwon Lee</div>
          <div class="text-white">swleeca@gmail.com</div>
        </div>
      </div>
    </div>
  </div>
  <div id="main">
    <button class="openbtn" onclick="openNav()">☰</button>
    <router-view></router-view>
  </div>
</template>

<style>
.sidebar {
  width: 0px;
  position: fixed;
  z-index: 1;
  top: 0;
  left: 0;
  background-color: #111;
  overflow-x: hidden;
  transition: 0.5s;
  padding-top: 60px;

  position: relative;
  display: flex;
  flex-direction: column;
  position: fixed;
  left: 0;
  top: 0;
  height: 100%;

  transition: all 0.5s ease;
}

.sidebar a {
  padding: 8px 8px 8px 32px;
  text-decoration: none;
  font-size: 15px;
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

.profile {
  height: 60px;
  width: 78px;
  left: 0px;
  bottom: 0px;
  padding: 10px 14px;

  transition: all 0.5s ease;
}
.profile {
  width: 200px;
}
.profile-details {
  display: flex;
  align-items: center;
  flex-wrap: nowrap;
}
.sidebar img {
  height: 45px;
  width: 45px;
  object-fit: cover;
  border-radius: 6px;
  margin-right: 10px;
}
</style>
