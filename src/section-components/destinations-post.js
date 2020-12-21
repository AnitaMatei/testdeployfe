import {
    LitElement,
    html,
    css
} from "lit-element"


class DestinationsPost extends LitElement {
    static get styles() {
        return css `
        .article-body {
            background-color: var( --article-background-color);
            padding-left: 5%;
            padding-right: 3%;
        }

        img {
            width: 300px;
        }

        @media screen and (min-width:750px) {
            img {
                width: 450px;
            }
        }
        `;
    }

    static get properties() {
        return {
            imageOptions: { type: Array },
            title: { type: String },
            description: { type: String },
            moreDetails: { type: String }
        }
    }

    constructor() {
        super()
    }

    render() {
            return html `
        <picture>
            ${this.imageOptions.map((item, idx)=>{
                if (idx<this.imageOptions.length-1){
                    return html`<source media="(min-width:${item.minWidth}px)" srcset=${item.url}>`
                }
                return html`<img src=${item.url} alt=${item.alt}>`
            })}
        </picture>
        <div class="article-body">
            <h2>
                ${this.title}
            </h2>
            <p>
                ${this.description}
            </p>
            <p>Find out more at <a href=${this.moreDetails}>the official website.</a></p>
        </div>
        `;
    }
}

export default customElements.define('destinations-post', DestinationsPost)