<template>
  <section class=" mt-12 relative h-64 w-full bg-white text-gray-700 px-5 py-6 rounded-md">
    <div v-if="loading" class="w-full h-full bg-white flex items-center z-20">
      <loader />
    </div>
    <header v-if="!loading" class="w-full flex items-start justify-between">
      <div class="flex w-1/2 justify-around border-b">
        <h3>
          <button class="px-2" :class="{'border-b-2 border-blue-500':currentTabComponent=='result'}" type="button" @click="currentTabComponent = 'result'">
            Query result
          </button>
        </h3>
        <h3>
          <button class="px-2" :class="{'border-b-2 border-blue-500': currentTabComponent=='history'}" type="button" @click="currentTabComponent='history'">
            History
          </button>
        </h3>
      </div>
    </header>
    <article v-if="!loading">
      <component :is="currentTabComponent" />
    </article>
  </section>
</template>
<script>
import { mapGetters } from 'vuex'
export default {
  data () {
    return {
      currentTabComponent: 'result'
    }
  },
  computed: mapGetters(['loading'])
}
</script>
