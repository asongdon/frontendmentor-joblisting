<template>
  <div class="container py-10 px-6">
    <Maincard/>
    <Maincard/>
  </div>
</template>

<script>
import Maincard from '@/components/Maincard'
import data from '@/static/data.json'

export default {
  components: {
    Maincard
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
