<template>
  <div class="player-bio">
    <div class="column">
      <div class="player-name">
        {{ this.player.nameFirst }} {{ this.player.nameLast }}
      </div>
      <div class="player-info-container">
        <ul class="player-bio-column-1">
          <li><b>Full Name:</b> {{ this.player.nameGiven }} {{ this.player.nameLast }} </li>
          <li><b>Born:</b> {{ this.player.birthDay}}/{{ this.player.birthMonth }}/{{ this.player.birthYear }} <b>in</b> {{ this.player.birthCity }}, {{ this.player.birthState }}, {{ this.player.birthCountry }}</li>
          <li v-if="this.player.deathYear">
            <b>Died:</b> {{ this.player.deathDay }}/{{ this.player.deathMonth }}/{{ this.player.deathYear }} <b>in</b> {{ this.player.deathCity }}, {{ this.player.deathState }}, {{ this.player.deathCountry }}</li>
          <li><b>Height:</b>{{ this.player.height }}</li>
          <li><b>Weight:</b>{{ this.player.weight }}</li>
        </ul>
        <ul class="player-bio-column-2">
          <li><b>Bats:</b>{{ this.player.bats }}</li>
          <li><b>Throws:</b>{{ this.player.throws }}</li>
          <li><b>Debut:</b>{{ this.player.debut }}</li>
          <li v-if="this.player.finalGame">
            <b>Final Game:</b>{{ this.player.finalGame }}
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["player"]
};
</script>

<style>
.player-name {
  font-size: 20px;
  padding-right: 75%;
}

.player-bio-column-1 {
  display: flex;
  flex-flow: column wrap;
}

</style>
