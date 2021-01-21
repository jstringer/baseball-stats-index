<template>
  <div class="search">
    <input
      type="text"
      v-model="searchTerm"
      @input="onInput"
      :placeholder="placeholder"
    />
    <ul class="autocomplete-results" v-show="isTyping">
      <li
        class="autocomplete-result"
        v-for="item in results"
        :key="item.playerID"
      >
        <router-link
          :to="{
            name: 'Player',
            params: { id: item.playerID, isPlayer: true }
          }"
        >
          {{ item.nameFirst + " " + item.nameLast }}
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "search",
  props: ["placeholder"],
  data() {
    return {
      searchTerm: "",
      results: [],
      isTyping: false
    };
  },
  methods: {
    onInput() {
      if (this.searchTerm.length >= 3) {
        this.isTyping = true;
        axios
          .get(process.env.VUE_APP_API + "/player/match", {
            params: {
              term: this.searchTerm
            }
          })
          .then(response => {
            this.results = response.data;
          });
      } else if (this.searchTerm.length === 0) {
        this.results = [];
        this.isTyping = false;
      }
    }
  }
};
</script>

<style>
.search {
  position: relative;
  width: 130px;
}

.autocomplete-results {
  border: 1px solid #000000;
  overflow: auto;
}

.autocomplete-result {
  text-align: left;
  padding: 4px 2px;
  cursor: pointer;
}

.autocomplete-result:hover {
  background-color: #4aae9b;
}
</style>
