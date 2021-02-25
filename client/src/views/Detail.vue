<template>
  <div v-if="this.loaded" class="detail">
    <Header></Header>
    <PlayerBio :player="this.playerInfo"></PlayerBio>
    <PlayerBatting :battingStats="this.playerBatting"></PlayerBatting>
  </div>
</template>

<script>
import axios from "axios";
import PlayerBio from '../components/PlayerBio.vue';
import PlayerBatting from "../components/PlayerBatting.vue"
import Header from "../components/Header.vue"

export default {
  components: { 
    Header,
    PlayerBio, 
    PlayerBatting
  },
  props: {
    id: String,
    isPlayer: Boolean
  },
  data() {
    return {
      playerInfo: null,
      playerBatting: null,
      loaded: false
    };
  },
  created() {
    axios.get(`${process.env.VUE_APP_API}/player/${this.id}`).then(response => {
      this.loaded = true;
      this.playerInfo = response.data.player[0];
      this.playerBatting = response.data.batting;
    });
  }
};
</script>
<style>
.container {
  width: 960px;
  margin: 0px auto 0px auto;
}
</style>
