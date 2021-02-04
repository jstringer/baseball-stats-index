<template>
  <div class="home">
    <div class="container">
      <h2 class="heading">
        <b>The Baseball Index</b> is a powerful
        <b>historical baseball stat<br></b>
        search engine powered by the
        <b>Lahman Database</b>
      </h2>
      <Search placeholder="Search Any Player"></Search>
      <div class="links">
        <router-link to="/about">About</router-link>
        <router-link to="/advanced-search">Advanced Search</router-link>
        <router-link to="/team-search">Team Search</router-link>
        <!--TODO add link to team search. -->
      </div>
    </div>
    <Footer></Footer>
  </div>
</template>

<script>
// @ is an alias to /src
import Search from "@/components/Search.vue";
import Footer from "@/components/Footer.vue";

export default {
  name: "Home",
  components: {
    Search,
    Footer
  }
};
</script>

<style>
.container {
  padding-bottom: 10%;
  height: 50%;
  margin-top: 15%;
  display: flex;
  flex-flow: column;
  align-items: center;
  justify-content: space-between;
}

.links {
  width: 20%;
  display: flex;
  justify-content: space-around;
  margin-top: 2%;
}
</style>
