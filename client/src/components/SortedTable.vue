<template>
  <div class="sorted-table">
    <div class="table-wrapper">
      <div class="table-scroller">
        <table>
          <tr class="labels">
            <th
              class="column-heading sort-button"
              scope="col"
              v-for="label in labels"
              :key="label"
              @click="updateSortKey(label)"
            >
              {{ label }}
            </th>
          </tr>
          <tr class="years" v-for="(year, index) in sortedStats" :key="year.yearId">
            <td class="stat" v-for="stat in sortedStats[index]" :key="stat.id">
              {{ stat }}
            </td>
          </tr>
        </table>
      </div>
    </div>
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
.sorted-table {
  margin-top: 10px;
  width: 100%;
}

.table-wrapper {
  position: relative;
}

.table-scroller {
  overflow-x: scroll;
  margin-left: 100px;
}

table {
  table-layout: auto;
  border-collapse: separate;
  border-spacing: 0;
 }

td {
  border: 1px solid black;
  border-bottom: 2px solid black;
}

th {
  border: none;
}

.column-heading:first-child, .stat:first-child{
  position: absolute;
  left: 0;
  top: auto;
  width: 100px;
}

.column-heading {
  border: 2px solid black;
  padding: 10px;
  background-color: black;
}

.sort-button {
  cursor: pointer;
}

</style>
