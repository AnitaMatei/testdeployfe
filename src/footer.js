import {
    LitElement,
    html,
    css
} from "lit-element"


class Footer extends LitElement {
    static get styles() {
        return css `

        footer {
            background-color: var(--main-background-color);
            text-align: center;
            padding: 5px;
        }
        
        footer p {
            color: var(--main-background-secondary-color);
        }
        `;
    }


    constructor() {
        super()
    }

    render() {
        return html `
        <footer>
            <p>Copyright &#169; 2020 Travel site, Inc. All rights reserved.</p>
        </footer>
        `;
    }
}

customElements.define('app-footer', Footer)