<template>
  <div class="mt-10">
    <div class="container mx-auto px-6">
      <!-- Filter bar -->
      <FilterBar />
      <!-- End filter bar -->

      <!-- Main card listing -->
      <div v-for="item in data" :key="item.id">
        <Maincard
          :logo="item.logo"
          :company="item.company"
          :newStatus="item.new"
          :featured="item.featured"
          :position="item.position"
          :postedAt="item.postedAt"
          :contract="item.contract"
          :location="item.location"
          :languages="item.languages"
          :tools="item.tools"
          :level="item.level"
          :role="item.role"
        />
      </div>
      <!-- End maincard -->
    </div>
  </div>
</template>

<script>
import Maincard from '@/components/Maincard'
import FilterBar from '@/components/FilterBar'
// import data from '@/static/data/data.json'

export default {
  components: {
    FilterBar,
    Maincard
  },
  data() {
    return {}
  },
  computed: {
    data() {
      if (this.$store.state.filter.filteredList.length === 0) {
        return this.$store.state.filter.fullFilteredList
      } else {
        return this.$store.state.filter.filteredList
      }
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
