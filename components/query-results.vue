<template>
  <section class="mt-4 flex flex-col items-center">
    <table v-if="currentResult.headers" class="w-full mt-5 table-auto info-table">
      <thead>
        <tr class="bg-gray-600">
          <th
            v-for="(header, index) in currentResult.headers"
            :key="index"
            class="text-sm text-white"
          >
            {{ header }}
          </th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(query, index) in results" :key="index">
          <td v-for="(name, value, i) in query" :key="i">
            {{ name }}
          </td>
        </tr>
      </tbody>
    </table>
    <div v-if="currentResult.headers" class="pagination-wrapper mt-5">
      <Pagination
        :total-pages="getNumberOfPages()"
        :current-page="pageNumber"
        @changing="changePage"
      />
    </div>
    <article v-show="!currentResult.headers && !error" class="w-full py-4 px-3 h-64">
      <p>This is where your query results will appear</p>
    </article>
    <article v-show="error" class="h-64 py-5">
      <p>NO result found for this Query, Could be a missing space in your query. please check and try again.</p>
    </article>
  </section>
</template>
<script>
/* eslint-disable eqeqeq */
import { paginate } from '@/utils/utils'
import { mapGetters } from 'vuex'
export default {
  data () {
    return {
      pageNumber: 1,
      totalPages: null,
      perPage: 20,
      results: [],
      pageDetails: {
        to: null,
        from: 1
      }
    }
  },
  computed: {
    ...mapGetters(['currentResult', 'error']),
    totalPageData () {
      return this.currentResult.data.length
    }
  },
  watch: {
    currentResult: {
      immediate: true,
      handler (newVal) {
        if (Object.keys(newVal) != 0) {
          const data = paginate(20, this.pageNumber, [...newVal.data])
          this.results = data
        }
      }
    },
    pageNumber (newVal) {
      const data = paginate(20, newVal, [...this.currentResult.data])
      this.results = data
    }
  },
  methods: {
    getNumberOfPages () {
      return (this.totalPages = Math.ceil(this.totalPageData / this.perPage))
    },
    changePage (value) {
      switch (value) {
        case 'next':
          this.pageNumber++
          break
        case 'previous':
          this.pageNumber--
          break
        default:
          this.pageNumber = 1
          break
      }
    }
  }
}
</script>
<style lang="scss" scoped>
.info-table {
  display: block;
  width: 100%;
  width: -webkit-max-content;
  width: -moz-max-content;
  width: max-content;
  max-width: 100%;
  overflow: auto;
  border-collapse: collapse;
  @include screen(custom, min, 1920) {
    width: 100%;
    display: table;
  }
}
.info-table td,
.info-table th {
  font-size: 12px;
  padding: 5px;
  overflow: hidden;
  line-height: 1;
  text-align: left;
  white-space: nowrap;
  border: 1px solid #c4c4c4;
}
.pagination-wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 3rem;
}
.pagination-info {
  font-weight: bold;
  font-size: 1rem;
  margin-right: 1rem;
  color: #c4c4c4;
}
</style>
