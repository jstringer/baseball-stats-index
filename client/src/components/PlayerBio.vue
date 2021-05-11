<template>
  <section class="container player-bio">
    <div class="row-1">
      <div class="col-1 image-container">
        <div class="image-mask">
          <img src="@/assets/barry.jpg"/>
        </div>
      </div>
      <div class="col-2 player-details-container">
        <h3 class="player-name">
          {{ this.player.nameFirst }} {{ this.player.nameLast }}
        </h3>
        <div class="player-info-container">
          <ul class="player-bio column-1">
            <li><b>Full Name:</b> {{ this.player.nameGiven }} {{ this.player.nameLast }} </li>
            <li><b>Born:</b> {{ this.player.birthDay}}/{{ this.player.birthMonth }}/{{ this.player.birthYear }} <b>in</b> {{ this.player.birthCity }}, {{ this.player.birthState }}, {{ this.player.birthCountry }}</li>
            <li v-if="this.player.deathYear">
              <b>Died:</b> {{ this.player.deathDay }}/{{ this.player.deathMonth }}/{{ this.player.deathYear }} <b>in</b> {{ this.player.deathCity }}, {{ this.player.deathState }}, {{ this.player.deathCountry }}</li>
            <li><b>Height:</b> {{ this.playerHeight}}</li>
            <li><b>Weight:</b> {{ this.player.weight }}</li>
          </ul>
          <ul class="player-bio column-2">
            <li><b>Bats:</b> {{ this.player.bats }}</li>
            <li><b>Throws:</b> {{ this.player.throws }}</li>
            <li><b>Debut:</b> {{ this.player.debut }}</li>
            <li v-if="this.player.finalGame">
              <b>Final Game:</b> {{ this.player.finalGame }}
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  props: ["player"],
  computed: {
    playerHeight() {
      let feet = Math.floor(this.player.height / 12);
      let inches = this.player.height % 12;
      return `${feet}'${inches}"`;
    },
    
  }
};
</script>

<style>
.row-1 {
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
  margin-top: 5%;
  width: 100%;
}

.player-name {
  font-size: 20px;
}

.image-container {
  flex-basis: 25%;
  height: 100%;
}

.player-details-container {
  flex-basis: 75%;
  display: flex;
  flex-flow: column nowrap;
}

.image-mask {
  height: 300px;
  width: 90%;
  border: 2px solid black;
}

.image-mask img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.player-info-container {
  display: flex;
  flex-flow: row nowrap;
  border: solid 2px black;
  height: 85%;
}

.player-bio {
  list-style-type: none;
  margin-left: 20px;
  display: flex;
  flex-flow: column wrap;
  justify-content: space-evenly;
  flex-basis: 50%;
}

</style>
