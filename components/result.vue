<template>
  <section class="mt-4">
    <table class="w-full table-auto">
      <thead>
        <tr>
          <th v-for="(name, index) in currentQuery.headers" :key="index">
            {{ name.toLowerCase() }}
          </th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(query, index) in currentQuery.data" :key="index">
          <td v-for="(name, value, i) in query" :key="i">
            {{ name }}
          </td>
        </tr>
      </tbody>
    </table>
  </section>
</template>
<script>
import { mapGetters } from 'vuex'
export default {
  computed: mapGetters(['currentQuery'])
}
</script>
