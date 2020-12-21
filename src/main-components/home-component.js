import {
    LitElement,
    html,
    css
} from "lit-element"

import "../section-components/home-section.js"

class HomeComponent extends LitElement {

    static get styles() {
        return css `
    .intro-section {
        text-align: center;
        padding-left: 10%;
        padding-right: 10%;
    }
    
    .intro-section h2 {
        color: var(--main-background-color);
    }
    `
    }

    render() {
        return html `
    <main>
        <section class="intro-section">
            <h2>
                "To travel is to live"
            </h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis gravida in mauris quis dictum. Aliquam a ipsum non mauris tempus sagittis. Proin hendrerit semper sem sed ultricies. In id placerat nisi. Duis accumsan semper nibh, et cursus sem
                imperdiet et. Maecenas lacinia vestibulum pulvinar. Nam risus metus, malesuada id magna at, cursus varius ipsum. Aenean mollis erat quis nisi condimentum, id egestas nunc semper. Vivamus nec ligula varius, mattis sem vitae, gravida ante.
                Curabitur in leo at arcu volutpat ultrices ut nec nisi. In tincidunt leo ut purus ornare vulputate. Ut porttitor egestas nunc. Aliquam erat volutpat.</p>
        </section>
        <br>
        <home-section></home-section>
    </main>
        `
    }

}

export default customElements.define("home-component", HomeComponent)