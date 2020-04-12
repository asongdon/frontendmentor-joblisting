<template>
  <div
    class="flex flex-col lg:flex-row lg:justify-between flex-no-wrap rounded-sm px-5 bg-white shadow-xl py-4 mb-10 border-l-4 border-white"
    :class="{ 'border-l-4': featured, 'border-teal-500': featured }"
  >
    <div class="lg:flex lg:justify-between">
      <!-- Logo -->
      <div class="-mt-10 mb-2 lg:mt-0 lg:mb-0 lg:mr-5">
        <img class="w-12 lg:w-24" :src="'/logos/' + logo" alt="" />
      </div>
      <!-- End Logo -->

      <!-- Info -->
      <div>
        <div class="flex items-center">
          <div class="text-sm font-bold text-gray-600 lg:text-md">
            {{ company }}
          </div>
          <div class="flex text-xs font-bold">
            <div
              v-if="newStatus"
              class=" bg-teal-500 text-white rounded-full px-2 py-1 uppercase ml-2"
            >
              New!
            </div>
            <div
              v-if="featured"
              class="bg-black text-white rounded-full px-2 py-1 uppercase ml-2"
            >
              Featured
            </div>
          </div>
        </div>

        <div class="mt-2 font-bold text-gray-900 lg:text-lg">
          {{ position }}
        </div>

        <div
          class="flex text-xs mt-2 mb-4 text-gray-500 border-b border-gray-200 pb-4 lg:border-0 lg:mb-0 lg:text-sm"
        >
          <div class="mr-2">{{ postedAt }}</div>
          <div class="mr-2">·</div>
          <div class="mr-2">{{ contract }}</div>
          <div class="mr-2">·</div>
          <div>{{ location }}</div>
        </div>
      </div>
    </div>
    <!-- End Info -->

    <!-- Tags -->
    <div class="flex flex-wrap justify-start lg:justify-end lg:items-center">
      <div
        class="px-2 py-1 bg-gray-200 text-gray-500 rounded-sm font-bold mr-2 mb-4 text-sm lg:text-md"
      >
        {{ role }}
      </div>
      <div
        class="px-2 py-1 bg-gray-200 text-gray-500 rounded-sm font-bold mr-2 mb-4 text-sm lg:text-md"
      >
        {{ level }}
      </div>
      <div
        v-for="tag in languages"
        :key="tag.id"
        class="px-2 py-1 bg-gray-200 text-gray-500 rounded-sm font-bold mr-2 mb-4 text-sm"
      >
        {{ tag }}
      </div>
      <div
        v-for="tool in tools"
        :key="tool.id"
        class="px-2 py-1 bg-gray-200 text-gray-500 rounded-sm font-bold mr-2 mb-4 text-sm"
      >
        {{ tool }}
      </div>
    </div>
    <!-- End Tags -->
  </div>
</template>

<script>
export default {
  props: {
    logo: String,
    company: String,
    newStatus: Boolean,
    featured: Boolean,
    position: String,
    postedAt: String,
    contract: String,
    location: String,
    languages: Array,
    tools: Array,
    level: String,
    role: String
  }
}
</script>

<style></style>
