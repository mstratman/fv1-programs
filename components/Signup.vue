<template>
  <div>
    <div id="mlb2-1741186" class="ml-form-embedContainer ml-subscribe-form ml-subscribe-form-1741186 row">
      <div class="ml-form-align-center">
        <div class="ml-form-embedWrapper embedForm">
          <div class="ml-form-embedBody ml-form-embedBodyDefault row-form">
            <form class="ml-block-form" action="https://app.mailerlite.com/webforms/submit/n7b2e7" data-code="n7b2e7" method="post" target="_blank">
              <div class="ml-form-formContent">
                <div class="ml-form-fieldRow">
                  <div class="ml-field-group ml-field-email ml-validate-email ml-validate-required">
                    <label for="ml-form-email">Email</label>
                    <input id="ml-form-email" type="email" class="form-control u-full-width" data-inputmask="" name="fields[email]" placeholder="" autocomplete="email">
                  </div>
                </div>
                <div class="ml-form-fieldRow">
                  <div class="ml-field-group ml-field-price ml-validate-required">
                    <label for="ml-form-price">Price range?</label>
                    <div><small>Pricing will depend on how many people want one, so let me know the price range at which you're interested</small></div>
                    <input id="ml-form-price" type="text" class="form-control u-full-width" data-inputmask="" name="fields[price]" placeholder="" autocomplete="">
                  </div>
                </div>
                <div class="ml-form-fieldRow ml-last-item">
                  <div class="ml-field-group ml-field-custom_art">
                    <label for="ml-form-customizations">Customizations?</label>
                    <div><small>Interested in a custom label, name, quote etc written on it? Or different art?</small></div>
                    <input id="ml-form-customizations" type="text" class="form-control u-full-width" data-inputmask="" name="fields[custom_art]" placeholder="" autocomplete="">
                  </div>
                </div>
              </div>
              <input type="hidden" name="ml-submit" value="1">
              <div class="ml-form-embedSubmit">
                <button type="submit" class="primary button-primary">Sign up</button>
                <button disabled="disabled" style="display:none" type="button" class="loading button"> Please wait<div class="ml-form-embedSubmitLoad"><div></div><div></div><div></div><div></div></div> </button>
              </div>
            </form>
          </div>
          <div class="ml-form-successBody row-success" style="display:none">
            <div class="ml-form-successContent">
              <h4>Awesome!</h4>
              <p>I'll keep you updated</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <img src="https://track.mailerlite.com/webforms/o/1741186/n7b2e7?v4a60e9ef938a7fa0240ac9ba567062cb" width="1" height="1" style="max-width:1px;max-height:1px;visibility:hidden;padding:0;margin:0;display:block" alt="." border="0">
  </div>
</template>

<script>
  export default {
    data: function() {
      return {
      }
    },
    mounted: function() {
      let tag = document.createElement('script')
      tag.setAttribute('src',"//static.mailerlite.com/js/w/webforms.min.js?v4a60e9ef938a7fa0240ac9ba567062cb")
      document.head.appendChild(tag)

      tag = document.createElement('script')
      // This is fragile. Oh well.
      tag.setAttribute('src',"/fv1-programs/scripts/mailerlite.js")
      document.head.appendChild(tag)
    }
  }
</script>

<style>
</style>
