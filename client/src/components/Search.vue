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
  display: flex;
  flex-flow: column nowrap;
  width: 25%;
  outline: 0;
  justify-content: center;
}
.search-icon {
  position: absolute;
  height: 31px;
}

input {
  height: 20px;
  width: 100%;
}

.autocomplete-results {
  list-style-type: none;
  margin-top: 0%;
  border: 1px solid #000000;
  max-height: 300px;
  overflow-y: auto;
}

.autocomplete-result {
  color: blanchedalmond;
  text-align: left;
  padding-top: 2px;
  padding-left: 0px;
  cursor: pointer;
}

.autocomplete-result:hover {
  background-color: #4aae9b;
}
</style>
