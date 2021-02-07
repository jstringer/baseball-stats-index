<template>
  <div class="detail">
    <Header></Header>
    <PlayerBio :player="this.playerInfo"></PlayerBio>
  </div>
</template>

<script>
import axios from "axios";
import PlayerBio from '../components/PlayerBio.vue';
import Header from "../components/Header.vue"

export default {
  components: { PlayerBio, Header },
  props: {
    id: String,
    isPlayer: Boolean
  },
  data() {
    return {
      playerInfo: null
    };
  },
  created() {
    axios.get(`${process.env.VUE_APP_API}/player/${this.id}`).then(response => {
      this.playerInfo = response.data.player[0];
    });
  }
};
</script>
<style></style>
