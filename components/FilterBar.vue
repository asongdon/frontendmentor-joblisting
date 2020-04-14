<template>
  <div
    v-show="showFilter"
    class="mb-10 -mt-16 shadow-lg bg-white px-5 py-4 rounded flex justify-between items-center"
  >
    <!-- tags -->
    <div
      class="flex flex-wrap justify-start lg:justify-end lg:items-center mt-2"
    >
      <div
        class="flex justify-start mr-3 mb-2"
        v-for="filter in filters"
        :key="filter.id"
      >
        <div
          class="flex px-2 py-1 bg-gray-200 text-gray-500 rounded-l font-medium text-sm"
        >
          {{ filter }}
        </div>
        <div
          @click="
            removeFilter(filter)
            filteringByTags()
          "
          class="bg-teal-500 px-2 py-1 rounded-r text-white cursor-pointer font-bold hover:bg-gray-900"
        >
          ✕
        </div>
      </div>
    </div>
    <!-- clear -->
    <div @click="clearTag()" class="font-medium text-teal-500 cursor-pointer">
      Clear
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {}
  },
  computed: {
    filters() {
      return this.$store.state.filter.filters
    },
    showFilter() {
      if (this.filters.length > 0) {
        return true
      } else {
        return false
      }
    }
  },
  methods: {
    removeFilter(filter) {
      if (this.$store.state.filter.filters.length === 1) {
        this.$store.dispatch('filter/unSetFilteredList')
      }
      this.$store.dispatch('filter/removeTag', filter)
    },
    clearTag() {
      this.$store.dispatch('filter/clearTag')
      this.$store.dispatch('filter/unSetFilteredList')
    },
    filteringByTags() {
      const fullFilteredList = this.$store.state.filter.fullFilteredList
      const filteredList = this.$store.state.filter.filteredList
      const filters = this.$store.state.filter.filters

      for (let index = 0; index < filters.length; index++) {
        const element = filters[index]
        const filteredElement = fullFilteredList.filter(list => {
          return (
            list.role == element ||
            list.level == element ||
            list.languages.includes(element) ||
            list.tools.includes(element)
          )
        })

        this.$store.dispatch('filter/filterByTags', filteredElement)
      }
    }
  }
}
</script>

<style></style>
