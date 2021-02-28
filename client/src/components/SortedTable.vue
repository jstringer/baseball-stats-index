<template>
  <div class="sorted-table">
    <table>
      <tr class="labels">
        <th
          class="row-heading"
          scope="col"
          v-for="label in labels"
          :key="label"
        >
          <div 
            class="sort-button"
            @click="updateSortKey(label)"
          >
            {{ label }}
          </div>
        </th>
      </tr>
      <tr class="years" v-for="(year, index) in sortedStats" :key="year.yearId">
        <td class="stat" v-for="stat in sortedStats[index]" :key="stat.id">
          {{ stat }}
        </td>
      </tr>
    </table>
  </div>
</template>

<script>
export default {
  name: "sorted-table",
  props: {
    labels: Array,
    stats: Array
  },
  data() {
    return {
      sortKey: this.labels[1],
      descending: true
    }
  },
  computed: {
    sortedStats() {
      let statsCopy = [...this.stats];
      return statsCopy.sort(this.sortStats(this.sortKey));
    }
  },
  methods: {
    updateSortKey(label){
      this.sortKey = label;
      this.descending ? this.descending = false : this.descending = true;
    },
    sortStats(label) {
      return (stat1, stat2) => {
        let a = typeof(stat1[label]) === 'string' ? stat1[label].toUpperCase() : stat1[label];
        let b = typeof(stat2[label]) === 'string' ? stat2[label].toUpperCase() : stat2[label];
      
        if (a < b){
          if (this.descending) {
            return 1
          }
          return -1;
        }
        else if (a > b){
          if (this.descending){
            return -1
          }
          return 1;
        }
      }
    }
  }
};
</script>

<style>
.row-heading {
  border: 2px solid black;
  padding: 10px;
  background-color: black;
}

.sorted-table {
  border: 2px solid black;
  margin-top: 10px;
}

.sort-button {
  cursor: pointer;
}

table {
  table-layout: fixed;
}

td {
  max-width: 150px;
  overflow: scroll;
}
</style>
