<template>
  <div
    class="flex flex-col flex-no-wrap rounded-sm px-5 border-l-4 border-green-500 bg-white shadow-xl pb-4 mb-10"
  >
    <div class="-mt-6 mb-2">
      <img class="w-12" :src="'/logos/' + logo" alt="" />
    </div>

    <div class="flex items-center">
      <div class="text-sm font-bold text-gray-600">{{company}}</div>
      <div class="flex text-xxs font-bold">
        <div class="bg-black text-white rounded-full px-2 py-1 uppercase ml-2">
          New!
        </div>
        <div class="bg-black text-white rounded-full px-2 py-1 uppercase ml-2">
          Featured
        </div>
      </div>
    </div>

    <div class="mt-2 font-bold text-gray-900">
      Senior Frontend Developer
    </div>

    <div class="flex text-sm mt-2 text-gray-500 border-b border-gray-200 pb-4">
      <div class="mr-2">1d ago</div>
      <div class="mr-2">·</div>
      <div class="mr-2">Full time</div>
      <div class="mr-2">·</div>
      <div>USA Only</div>
    </div>

    <div class="mt-4 flex flex-wrap justify-start">
      <div
        class="px-2 py-1 bg-gray-200 text-gray-500 rounded-sm font-bold mr-2 mb-4 text-sm"
      >
        Frontend
      </div>
      <div
        class="px-2 py-1 bg-gray-200 text-gray-500 rounded-sm font-bold mr-2 mb-4 text-sm"
      >
        Senior
      </div>
      <div
        class="px-2 py-1 bg-gray-200 text-gray-500 rounded-sm font-bold mr-2 mb-4  text-sm"
      >
        HTML
      </div>
      <div
        class="px-2 py-1 bg-gray-200 text-gray-500 rounded-sm font-bold mr-2 mb-4  text-sm"
      >
        CSS
      </div>
      <div
        class="px-2 py-1 bg-gray-200 text-gray-500 rounded-sm font-bold mr-2 mb-4  text-sm"
      >
        Javascript
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    logo: String,
    company: String
  }
}
</script>

<style></style>
