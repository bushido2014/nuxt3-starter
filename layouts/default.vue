<template>
  <!-- If the user is logged in, show the header navigation -->
  <Header v-if="user" />

  <div class="w-full h-full min-h-screen bg-gray-900 flex items-center justify-center">
    <slot />
  </div>
</template>

<script setup lang="ts">

const user = useSupabaseUser();

</script>
