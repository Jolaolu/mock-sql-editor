<template>
  <div class="w-full h-full flex bg-gray-300 px-5 pt-5 pb-10">
    <section class="w-full">
      <editor :save-item="saveItem" @saved="toggleStoreQuery" />
      <queries @save-query="toggleStoreQuery" />
    </section>
  </div>
</template>

<script>
export default {
  data () {
    return {
      saveItem: false
    }
  },
  methods: {
    toggleStoreQuery () {
      this.saveItem = !this.saveItem
    }
  }
}
</script>

<style>
/* Sample `apply` at-rules with Tailwind CSS
.container {
@apply min-h-screen flex justify-center items-center text-center mx-auto;
}
*/
</style>
