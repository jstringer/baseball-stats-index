<template>
  <div class="search">
    <input 
      type="text"
      v-model="searchTerm"
      @input="onInput"
      :placeholder="placeholder"
    />
    <ul class="autocomplete-results">
      <li class="autocomplete-result" v-show="isTyping">
      </li>
    </ul>
  </div>
</template>

<script>
export default {
   name: 'search',
   props: ['placeholder'],
   data() {
     return {
       searchTerm: '',
       results: [],
       isTyping: false
     };
   },
   methods: {
     onInput() {
       
     }
   }
}
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
    background-color: #4AAE9B;
  }

</style>