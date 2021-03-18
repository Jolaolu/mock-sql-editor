<template>
  <section class=" mt-12 relative w-full bg-white text-gray-700 px-5 py-6 rounded-md">
    <div v-if="loading" class="w-full h-64 bg-white flex items-center z-20">
      <loader />
    </div>
    <header v-if="!loading" class="w-full flex items-start justify-between">
      <div class="flex w-3/5 md:w-1/2 justify-around border-b">
        <h3 class="mr-1 md:mr-0">
          <button class="text-sm md:text-xl px-2" :class="{'border-b-2 border-blue-500': currentTabComponent=='query-results'}" type="button" @click="setComponent('results')">
            Query result
          </button>
        </h3>
        <h3>
          <button class="text-sm md:text-xl" :class="{'border-b-2 border-blue-500': currentTabComponent=='query-history'}" type="button" @click="setComponent('history')">
            History
          </button>
        </h3>
      </div>
      <div class="flex justify-end w-2/5 md:w-1/3">
        <button type="button" class="bg-green-400 flex items-center rounded-md font-semibold text-xs md:text-sm py-1 md:py-2 px-2 md:px-4" @click="$emit('save-query')">
          <span>  Save query  </span>
          <figure class="h-5 w-3 ml-3">
            <img class="w-full h-full" :src="require('@/static/save-file.svg')" alt="" srcset="">
          </figure>
        </button>
      </div>
    </header>
    <article v-if="!loading">
      <component :is="currentTabComponent" v-if="currentTabComponent" />
    </article>
  </section>
</template>
<script>
import { mapGetters } from 'vuex'
export default {
  components: {
    'query-results': () => import('./query-results.vue'),
    'query-history': () => import('./query-history.vue')
  },
  data () {
    return {
      currentTab: 'results'
    }
  },
  computed: {
    ...mapGetters(['loading']),
    currentTabComponent () {
      let name
      if (this.currentTab) {
        name = 'query-' + this.currentTab
        return name
      }
      return null
    }
  },
  methods: {
    setComponent (name) {
      this.currentTab = name
      console.log(name)
    }
  }
}
</script>
<style scoped>
  section{
    height: max-content;
  }
</style>
