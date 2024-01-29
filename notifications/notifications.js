import 'vue-toast-notification/dist/theme-sugar.css';
import {toast} from 'vue3-toastify';
import 'vue3-toastify/dist/index.css';

export const notify = (text) => {
    toast(text, {
        autoClose: 1000,
        type: "success"
    });
}
