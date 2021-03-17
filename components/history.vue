<template>
  <aside class="bg-white mr-4 h-full rounded-md" role="sidebar">
    <h3 class="text-gray-500 font-semi-bold text-xl my-2 ml-3">
      History
    </h3>
    <ul v-if="savedQueries.length >=1" class="px-4 mb-6 pb-4 border-b border-gray-500">
      <li v-for="(query, index) in savedQueries" :key="index" class="flex py-2 items-center">
        <figure class="h-5 w-3 mr-3">
          <img class="w-full h-full" :src="require('@/static/database.svg')" alt="" srcset="">
        </figure>
        <p>{{ query }}</p>
      </li>
    </ul>
    <div v-else class="h-64">
      <p class="px-4">
        There are no saved queries, yet.
      </p>
    </div>
  </aside>
</template>
<script>
import { mapGetters } from 'vuex'
export default {
  computed: mapGetters(['savedQueries'])
}
</script>
