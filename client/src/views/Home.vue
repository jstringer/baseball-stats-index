<template>
  <div class="home">
    <div class="hero">
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

.home {
  display: flex;
  height: 100vh;
}

.hero {
  margin: auto;
  width: 100%;
  display: flex;
  flex-flow: column;
  align-items: center;
  justify-content: space-between;
}

.links {
  width: 20%;
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
  margin-top: 2%;
}
</style>
