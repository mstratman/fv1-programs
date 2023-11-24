import * as SweetAlert2 from 'sweetalert2'

export default function () {
    const useSwal = () => {
        return inject('$swal') as typeof SweetAlert2.default
    }
    return useSwal()
}
