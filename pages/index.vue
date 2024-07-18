<template>
  <div v-if="user" class="text-center flex flex-col space-y-12">

    <h1 class="text-5xl text-white">Welcome! {{ user?.email }}</h1>

    <div
      class="rounded-lg divide-y divide-gray-200 dark:divide-gray-800 ring-1 ring-gray-200 dark:ring-gray-800 shadow bg-white dark:bg-gray-900 w-full max-w-lg">

    </div>

  </div>
</template>

<script setup lang="ts">


const user = useSupabaseUser();


</script>
