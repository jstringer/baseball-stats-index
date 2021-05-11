<template>
  <div class="player-pitching stats-container container">
    <SortedTable :labels="this.tableLabels" :stats="this.pitchingStats">
    </SortedTable>
  </div>
</template>

<script>
import SortedTable from "@/components/SortedTable.vue";

export default {
  name: "player-pitching",
  components: {
    SortedTable
  },
  props: {
    pitchingStats: Array
  },
  computed: {
    tableLabels() {
      return Object.keys(this.pitchingStats[0]);
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
