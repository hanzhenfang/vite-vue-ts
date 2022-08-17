import { h, render } from "vue";
import Toast from "./toast.vue";

interface ToastOption {
  message: string;
  position: string;
  duration: number;
}

export class ToastCreator {
  options: ToastOption;
  container: HTMLElement;
  constructor(theOptions: ToastOption) {
    this.options = theOptions;
    this.container = document.createElement("div");
  }

  present() {
    const myToast = h(h(Toast), this.options);
    render(myToast, this.container);
    //1.为了保证toast弹窗需要在所有组件之上，我们需要让它成为在body标签第一个子
    document.body.insertBefore(this.container, document.body.firstChild);
    setTimeout(() => {
      this.dismiss();
    }, this.options.duration);
  }

  dismiss() {
    if (this.container) {
      const toastDOM = this.container.querySelector("div");
      console.log("toastDOM", toastDOM);
      toastDOM?.classList.add("animate-toastAnimation");
      setTimeout(() => {
        document.body.removeChild(this.container);
      }, 1500);
    }
  }
}
