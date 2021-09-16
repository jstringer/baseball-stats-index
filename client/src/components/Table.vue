<template>
  <grid 
    :cols="cols" 
    :rows="rows"
    :pagination=true
    :sort=false
    :styles="style"
    :class-names="classNames"
  ></grid>
</template>
<script>
import Grid from "gridjs-vue";

export default {
  components: {
    Grid
  },
  props: {
    stats: Array
  },
  methods: {
    extractCols() {
      let colLabels = [];
      Object.keys(this.stats[0]).forEach(element => {
        colLabels.push({
          id: element,
          name: element
        });
      });
      return colLabels;
    }
  },
  data() {
    return {
      cols: this.extractCols(),
      rows: this.stats,
      classNames: {
        th: 'th-styles',
        sort: 'sort-button'
      }
    }
  }
}
</script>
<style>

.th-styles > div {
  overflow: visible;
}

.sort-button {
  clear: left;
}

</style>
