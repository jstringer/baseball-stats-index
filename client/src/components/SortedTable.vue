<template>
  <div class="sorted-table">
    <table>
      <tr class="labels">
        <th class="row-heading" scope="col" v-for="label in labels" :key="label">
          {{ label }}
        </th>
      </tr>
      <tr class="years" v-for="(year, index) in stats" :key="year.yearId">
        <td class="stat" v-for="stat in stats[index]" :key="stat">
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
  }

}
</script>

<style>

.row-heading {
  border: 2px solid black;
  padding: 10px;
  background-color: black;
}

.sorted-table {
  border: 2px solid rgb(200, 200, 200)
}

</style>