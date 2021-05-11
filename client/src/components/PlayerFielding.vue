<template>
  <div class="player-fielding stats-container container">
    <SortedTable :labels="this.tableLabels" :stats="this.fieldingStats">
    </SortedTable>
  </div>
</template>

<script>
import SortedTable from "@/components/SortedTable.vue";

export default {
  name: "player-fielding",
  components: {
    SortedTable
  },
  props: {
    fieldingStats: Array
  },
  computed: {
    tableLabels() {
      return Object.keys(this.fieldingStats[0]);
    }
  }
};
</script>

<style>
.stats-container {
  display: flex;
  flex-flow: column;
  align-items: center;
}
</style>
