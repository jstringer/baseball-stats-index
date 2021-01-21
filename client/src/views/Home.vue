<template>
  <div class="home">
    <h2 class="heading">
      <b>The Baseball Index</b> is a powerful
      <b>historical baseball stat</b>
      search engine powered by the
      <b>Lahman Database</b>
    </h2>
    <Search></Search>
    <div class="links">
      <router-link to="/about">About</router-link>
      <router-link to="/advanced-search">Advanced Search</router-link>
      <!--TODO add link to team search. -->
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
