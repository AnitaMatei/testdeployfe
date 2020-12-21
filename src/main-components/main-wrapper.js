import {
    LitElement,
    html
} from "lit-element"

import "../header.js"
import "../footer.js"

class MainWrapper extends LitElement{
    render(){
        return html`
        <app-header>

        </app-header>
        <br>
        <slot></slot>
        <app-footer></app-footer>
        `
    }
}

export default customElements.define("main-wrapper", MainWrapper)