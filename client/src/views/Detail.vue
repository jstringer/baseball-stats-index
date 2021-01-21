<template>
  <div class="detail">
    <PlayerBio :player="this.player.player[0]"></PlayerBio>
  </div>
</template>

<script>
import axios from "axios";
import PlayerBio from '../components/PlayerBio.vue';

export default {
  components: { PlayerBio },
  props: {
    id: String,
    isPlayer: Boolean
  },
  data() {
    return {
      player: null
    };
  },
  created() {
    axios.get(`${process.env.VUE_APP_API}/player/${this.id}`).then(response => {
      this.player = response.data;
    });
  }
};
</script>
<style></style>
