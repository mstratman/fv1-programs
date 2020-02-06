<template>
  <div class="container">
    <div class="section-no-bg header">
      <h1 class="logo">Island: FV-1 Platform Pedal</h1>
      <h2 class="subtitle">Experiment with up to 23 FV-1 programs</h2>
    </div>

    <div class="section">
      <div class="row">
        <div class="four columns">
          <h2>Your "deserted island" pedal</h2>
          <h4>Loaded with your ideal tones</h4>
          <div>
            <a href="images/pedal-platform/fv1-2.jpg" target="_blank">
              <img class="u-max-full-width" src="images/pedal-platform/fv1-2.jpg" alt="FV-1 pedal platform"/>
            </a>
            <a href="images/pedal-platform/fv1-3.jpg" target="_blank">
              <img class="u-max-full-width" src="images/pedal-platform/fv1-3.jpg" alt="FV-1 pedal platform"/>
            </a>
          </div>
        </div>
        <div class="eight columns">
          <a href="images/pedal-platform/fv1-1.jpg" target="_blank">
            <img class="u-max-full-width" src="images/pedal-platform/fv1-1.jpg" alt="FV-1 pedal platform"/>
          </a>
        </div>
      </div>

      <h3>About</h3>
      <p>This is an FV-1 based pedal (the same DSP chip in the Rainbow Machine, Dispatch Master,  Chase Bliss Audio Mood, Red Panda Tensor, and tons of others), with a 2.8" TFT screen, that can run a
      <a target="_blank" href="https://mstratman.github.io/fv1-programs/">huge variety of programs</a>, and has a bank switch to toggle between the 7 built-in effects demos and two of your own custom banks of 8 programs each, for a total of 16 custom and 7 built-in tones.</p>
      <p>It uses "sister" pairs of EEPROMs; One to store the FV-1 programs, the other to store program names and control labels. This allows you to swap out programs easily without having to reprogram the display driver IC.</p>

      <h3>Want one?</h3>
      <p>If there's enough interest, I'm going to create a small batch of these.
        If you buy one you get a pedal similar to what you see above, with:
      </p>
      <ul>
        <li><strong>Choose your intitial 16 programs</strong>, <a target="_blank" href="https://mstratman.github.io/fv1-programs/">from this list</a>, or wherever.  I can also recommend some of the best ones if you'd like</li>
        <li><strong>Customize the graphics</strong> with your name, your band's name, favorite quote, a name for the pedal, etc</li>
        <li>Very low cost <strong>EEPROMs with new programs</strong>, for as long as I'm building pedals (probably forever). Just tell me what you'd like and I'll program it and send it to you. If you buy EEPROMs from <a target="_blank" href="https://www.pedalpcb.com/product/eeprombuilder/">PedalPCB's EEPROM builder</a>, or elsewhere, I can also provide the "sister" EEPROM with the program and control labels.</li>
        <li><strong>Free fixes</strong> for as long as I'm building pedals (you pay shipping).</li>
      </ul>
    </div>

    <div class="section">
      <h3>I want one!</h3>
      <signup/>
    </div>
  </div>

</template>

<script>
import Signup from "../components/Signup2.vue"

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
