<template>
  <section class="w-full bg-white text-gray-700 h-auto px-5 py-6 rounded-md">
    <h2 class="text-2xl font-bold">
      Editor
    </h2>
    <div class="flex justify-between">
      <p class="text-xs md:text-sm text-gray-700">
        Type in your queries here.
      </p>
      <button type="button" class="bg-blue-400 rounded-md font-semibold text-white text-xs md:text-sm py-2 px-4" @click="search">
        Run query
      </button>
    </div>
    <textarea v-model="query" class="w-full mt-3 px-2 pt-3 pb-5 border-t border-b text-xl" placeholder="Your Query" name="" rows="5" />
  </section>
</template>
<script>
import { mapActions } from 'vuex'
export default {
  data () {
    return {
      query: null
    }
  },
  methods: {
    ...mapActions(['getResults']),
    search  () {
      this.getResults(this.query)
    }
  }
}
</script>
