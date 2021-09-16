<template>
  <div v-if="this.loaded" class="detail container">
    <Header></Header>
    <PlayerBio :player="this.playerInfo"></PlayerBio>
    <h1 v-if="this.playerBatting">Standard Batting</h1>
    <Table v-if="this.playerBatting" :stats="this.playerBatting"></Table>
    <h1 v-if="this.playerPitching">Standard Pitching</h1>
    <Table v-if="this.playerPitching" :stats="this.playerPitching"></Table>
    <h1 v-if="this.playerFielding">Standard Fielding</h1>
    <Table v-if="this.playerFielding" :stats="this.playerFielding"></Table>
    <Footer>
    </Footer>
  </div>
  <div v-else class="loading-image">
    <img src="@/assets/loadingbaseball.gif">
  </div>
</template>

<script>
import axios from "axios";
import PlayerBio from '../components/PlayerBio.vue';
import Table from '../components/Table.vue';
import Header from "../components/Header.vue"
import Footer from '../components/Footer.vue';

export default {
  components: { 
    Header,
    PlayerBio, 
    Table, 
    Footer
  },
  props: {
    isPlayer: Boolean
  },
  data() {
    return {
      playerInfo: null,
      playerBatting: null, 
      playerPitching: null,
      playerFielding: null,
      loaded: false
    };
  },
  created() {
    this.fetchPlayer(this.$route.params.id);
    this.$watch(
      () => this.$route.params,
      () => {
        this.fetchPlayer(this.$route.params.id)
      }
    )
  },
  methods: {
    fetchPlayer(playerId){
      axios.get(`${process.env.VUE_APP_API}/player/${playerId}`).then(response => {
        this.loaded = true;
        this.playerInfo = response.data.player[0];
        if (response.data.batting.length) {
          this.playerBatting = response.data.batting;
        } 
        if (response.data.pitching.length) {
          this.playerPitching = response.data.pitching;
        }
        if (response.data.fielding.length) {
          this.playerFielding = response.data.fielding;
        }
      });
    }
  }
};
</script>
<style>
.loading-image {
  display: flex;
  flex-flow: column;
  align-items: center;
  margin: auto;
  width: 100%;
}
.container {
  width: 100%;
  margin: 0px auto 0px auto;
  max-width: 960px;
}
</style>
