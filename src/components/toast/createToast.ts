import { h, definecomponent, createVNode, render } from "vue";
import ToastVue from "./toast.vue";

class Toast {
  message: string;
  constructor(message: string) {
    this.message = message;
  }

  present() {
    const toastTest = h(h(ToastVue), { message: this.message });
    const toastWrapper = document.createElement("div");
    render(toastTest, toastWrapper);
    document.body.insertBefore(toastWrapper, document.body.firstChild);
  }
}

export default Toast;
