<template>
  <canvas id="primitives" />
</template>

<script lang="ts">
  export default {
    name: 'Primitives',
    mounted() {
      import('./three')
    },
  }
</script>
