<template>
  <aside class="bg-white mr-4 h-full rounded-md" role="sidebar">
    <h3 class="text-gray-500 font-semi-bold text-xl my-2 ml-3">
      History
    </h3>
    <ol
      v-if="savedQueries.length >= 1"
      class="px-4 mb-6 pb-4 border-b border-gray-500"
    >
      <li
        v-for="(query, index) in savedQueries"
        :key="index"
        class="flex justify-between py-2 items-center"
      >
        <div class="w-1/2 flex items-center">
          <p class="mr-2 text-xs">
            {{ index + 1 }}.
          </p>
          <p class="text-xs md:text-base mr-2">
            {{ query }}
          </p>
        </div>
        <div class="w-1/2 flex justify-end items-center">
          <button class="px-3 md:px-0 md:w-20 py-1 border-2 rounded-md flex items-center justify-center mr-5" @click="search(query)">
            <p class="mr-2 hidden md:block capitalize">
              run
            </p>
            <img
              class="w-5 h-4"
              :src="require('@/static/play-button.svg')"
              alt=""
              srcset=""
            >
          </button>
          <button class="bg-red-500 py-1 flex items-center border font-bold rounded-md px-3 text-white" @click="removeItem(index)">
            <p class="hidden md:block">
              remove
            </p>
            <img class="h-4 w-5" :src="require('@/static/delete.svg')" alt="" srcset="">
          </button>
        </div>
      </li>
    </ol>
    <div v-else class="h-64">
      <p class="px-4">
        There are no saved queries, yet.
      </p>
    </div>
  </aside>
</template>
<script>
import { mapGetters, mapActions } from 'vuex'
export default {
  computed: mapGetters(['savedQueries']),
  methods: {
    ...mapActions(['deleteQuery', 'getResults']),
    removeItem (index) {
      this.deleteQuery(index)
    },
    search (query) {
      this.getResults(query)
    }
  }
}
</script>
