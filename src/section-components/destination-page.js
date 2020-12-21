import {
    html,
    LitElement
} from "lit-element"

class DestinationPage extends LitElement{

    render(){
        console.log(this.location)
        return html`
        <h1>destination page with id ${this.location.params.id}</h1>
        `

    }
}

export default customElements.define("destination-page",DestinationPage)