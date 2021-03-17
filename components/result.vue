<template>
  <section class="mt-4 flex flex-col items-center">
    <table class="w-full mt-5 table-auto info-table">
      <thead>
        <tr class="bg-gray-600">
          <th
            v-for="(header, index) in currentResult.headers"
            :key="index"
            class="text-sm text-white"
          >
            {{ seperateString(header) }}
          </th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(query, index) in currentResult.data" :key="index">
          <td v-for="(name, value, i) in query" :key="i">
            {{ name }}
          </td>
        </tr>
      </tbody>
    </table>
    <div v-if="currentResult.headers" class="pagination-wrapper mt-5">
      <div class="pagination-info">
        {{ pageDetails.from }} - {{ pageDetails.to }} of {{ totalPageData }}
      </div>
      <Pagination
        :total-pages="getPageCount()"
        :current-page="pageNumber"
        @changing="changePage"
      />
    </div>
  </section>
</template>
<script>
import { mapGetters } from 'vuex'
export default {
  data () {
    return {
      pageNumber: 1,
      totalPages: null,
      pageDetails: {
        to: null,
        from: 1,
        perPage: 20
      }
    }
  },
  computed: {
    ...mapGetters(['currentResult']),
    totalPageData () {
      return this.currentResult.data.length
    }
  },
  methods: {
    seperateString (header) {
      return header
        .replace(/((?<!^)[A-Z](?![A-Z]))(?=\S)/g, ' $1')
        .replace(/^./, s => s.toUpperCase())
    },
    getPageCount () {
      const total = this.totalPageData
      const perPage = this.pageDetails.perPage
      const totalItemsCount = total
      const numberOfItemsPerPage = perPage
      const page = this.pageNumber
      this.pageDetails.from =
        page * numberOfItemsPerPage - (numberOfItemsPerPage - 1)
      this.pageDetails.to = Math.min(
        this.pageDetails.from + numberOfItemsPerPage - 1,
        totalItemsCount
      )
      return (this.totalPages = Math.ceil(total / perPage))
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
.pagination-wrapper{
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 3rem;
}
.pagination-info{
    font-weight: bold;
    font-size: 1rem;
    margin-right: 1rem;
    color: #c4c4c4;
}
</style>
