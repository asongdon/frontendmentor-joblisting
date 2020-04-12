<template>
  <div class="mt-10">
    <div class="container px-6" v-for="item in data" :key="item.id">
      <Maincard :logo="item.logo" :company="item.company" :newStatus="item.new" :featured="item.featured" />
    </div>
  </div>
</template>

<script>
import Maincard from '@/components/Maincard'
import data from '@/static/data/data.json'

export default {
  components: {
    Maincard
  },
  data() {
    return {
      data
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
