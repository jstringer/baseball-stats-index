<template>
  <div class="player-batting stats-container container">
    <SortedTable :labels="this.tableLabels" :stats="this.battingStats">
    </SortedTable>
  </div>
</template>

<script>
import SortedTable from "@/components/SortedTable.vue";

export default {
  name: "player-batting",
  components: {
    SortedTable
  },
  props: {
    battingStats: Array
  },
  computed: {
    tableLabels() {
      return Object.keys(this.battingStats[0]);
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
