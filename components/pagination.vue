<template>
  <div class="pagination">
    <div>
      <button
        class="text-xs rounded-md"
        :disabled="presentPage === 1"
        @click="previousPage()"
      >
        &#60; Previous
      </button>

      <button
        class="text-xs rounded-md"
        :disabled="presentPage === totalPages"
        @click="nextPage()"
      >
        Next &#62;
      </button>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    totalPages: {
      default: 1,
      type: Number
    },
    currentPage: {
      default: 1,
      type: Number
    }
  },
  data () {
    return {
      next: 'next',
      previous: 'previous',
      presentPage: 1
    }
  },
  watch: {
    currentPage (newVal) {
      // watch for changes
      return (this.presentPage = newVal)
    }
  },
  methods: {
    nextPage () {
      this.$emit('changing', this.next)
    },
    previousPage () {
      this.$emit('changing', this.previous)
    }
  }
}
</script>
<style scoped>
.pagination {
  display: flex;
  justify-content: center;
}
  button {
    margin: 0.2rem 0;
    padding: .5rem;
    border: 1px solid #000f40;
    cursor: pointer;
    color: #000000;
    width: 80px;
  }
  button:disabled {
    background: #e8e6e6;
    cursor: not-allowed;
    }
</style>
