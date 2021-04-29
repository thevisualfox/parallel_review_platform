class Alert {
    constructor(el) {
        this.DOM = { el };
        this.DOM.toggle = this.DOM.el.querySelector(".alert__btn");

        this.onInit();
    }
    onInit() {
        this.DOM.toggle.addEventListener("click", () => this.toggle());
    }
    toggle() {
        this.DOM.el.style.opacity = 0;
        this.DOM.el.style.visibility = "hidden";
        this.DOM.el.style.transform = "translateY(100%)";
    }
}

const alertNodes = document.querySelectorAll("[data-alert]");
[...alertNodes].forEach((node) => new Alert(node));
