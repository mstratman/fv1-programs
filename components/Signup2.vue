<template>
  <div>
    <form action="https://formspree.io/mpzdlzzl" method="POST">
      <div>
        <label for="field-email">Email:</label>
        <input id="field-email" type="email" class="form-control u-full-width" data-inputmask="" name="_replyto" placeholder="" autocomplete="email">
      </div>
      <div>
        <label for="field-price">Price range?</label>
         <div><small>Pricing will depend on how many people want one, so let me know the price range at which you're interested</small></div>
        <input id="field-price" type="text" class="form-control u-full-width" data-inputmask="" name="price" placeholder="" autocomplete="">
      </div>
      <div>
        <label for="field-custom">Customizations?</label>
        <div><small>Interested in a custom label, name, quote etc written on it? Or different art?</small></div>
        <input id="field-custom" type="text" class="form-control u-full-width" data-inputmask="" name="customizations" placeholder="" autocomplete="">
      </div>
      <div>
        <button type="submit" class="primary button-primary">Sign up</button>
      </div>
    </form>
  </div>
</template>

<script>
  export default {
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
