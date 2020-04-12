<template>
  <div>
    <div class="container px-6" v-for="item in data" :key="data.id">
      <Maincard />
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
