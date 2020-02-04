<template>
  <div class="container">
    <div class="section-no-bg header">
      <h1 class="logo">Island: FV-1 Platform Pedal</h1>
      <h2 class="subtitle">Experiment with up to 23 FV-1 programs</h2>
    </div>

    <div class="section">
      <p>Details coming soon...</p>

      <template v-if="false">
        <signup/>
      </template>
    </div>
  </div>

</template>

<script>
import Signup from "../components/Signup.vue"

export default {
  components: {
    Signup,
  },
  data: function() {
    return {
    }
  },
  mounted: function() {
  }
}
</script>

<style>
</style>
