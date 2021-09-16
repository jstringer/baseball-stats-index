<template>
  <div class="search">
    <input
      type="text"
      v-model="searchTerm"
      @input="onInput"
      :placeholder="placeholder"
    />
    <div class="results-container" v-show="isTyping">
      <ul class="autocomplete-results"
        @keyup.esc="this.handleClickOutside()"
      >
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
  mounted() {
    document.addEventListener('click', this.handleClickOutside);
    document.addEventListener('keypress', this.handleEscapeKey);
  },
  destroyed() {
    document.removeEventListener('click', this.handleClickOutside);
    document.removeEventListener('keypress', this.handleEscapeKey);
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
    },
    handleClickOutside() {
    //if(!this.$el.contains(event.target)) 
      this.isTyping = false;
    },
    handleEscapeKey(event) {
      if(event.keyCode == 27)
        this.isTyping = false;
    }
  }
};
</script>

<style>
.search {
  position: relative;
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

.results-container {
  position: absolute;
  max-height: 300px;
  overflow-y: auto;
  border: 2px solid black;
  background-color: white;
  z-index: 100;
  top: 20px;
  width: 100%;
}

.autocomplete-results {
  list-style-type: none;
}

.autocomplete-result {
  color: blanchedalmond;
  text-align: left;
  padding-top: 2px;
  padding-left: 0px;
  cursor: pointer;
  margin: 10px 0 10px 20px;
}

.autocomplete-result:hover {
  background-color: #4aae9b;
}
</style>
