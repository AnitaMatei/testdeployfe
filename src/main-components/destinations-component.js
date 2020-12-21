import {
    html,
    LitElement
} from "lit-element"

import "./../header"
import "./../footer"
import "./../section-components/destinations-section"

class DestinationsComponent extends LitElement {


    render() {
        return html `
        <main>
            <destinations-section>
    
            </destinations-section>
        </main>
    
        `
    }
}

export default customElements.define("destinations-component", DestinationsComponent)