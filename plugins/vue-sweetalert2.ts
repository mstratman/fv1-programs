import Swal, { SweetAlertOptions } from 'sweetalert2'
import 'sweetalert2/dist/sweetalert2.css'

// Default options
const options: SweetAlertOptions = {}

const $swal = {
    install: (Vue: any, options: SweetAlertOptions) => {
        Vue.provide('$swal', Swal.mixin(options))
    }
}
export default defineNuxtPlugin((nuxtApp) => {
    nuxtApp.vueApp.use($swal, options)
})
