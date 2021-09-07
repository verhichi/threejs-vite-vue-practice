<template>
  <canvas id="fundamental" />
</template>

<script lang="ts">
  export default {
    name: 'Fundamental',
    mounted() {
      import('./three')
    },
  }
</script>
