import {
    LitElement,
    html,
    css
} from "lit-element"


class HomePost extends LitElement {
    static get styles() {
        return css `
        
        picture img {
            width: 300px;
        }
        
        .article-body {
            padding: 5%;
            box-sizing: border-box;
        }
        

        @media screen and (min-width:600px) {
            picture img {
                width: 500px;
            }
        }
        
        @media screen and (min-width:1600px) {
            picture img {
                width: 1000px;
                float: right;
            }
        }
        `;
    }

    static get properties() {
        return {
            imageOptions: { type: Array },
            title: { type: String },
            subtitle: { type: String },
            description: { type: String }
        }
    }


    constructor() {
        super()
    }

    render() {
            return html `
        <picture>
            ${this.imageOptions.map((item, idx)=>{
                if (idx < this.imageOptions.length-1){
                    return html`<source media="(min-width:${item.minWidth}px)" srcset=${item.url}>`
                }
                return html`<img src=${item.url} alt=${item.alt}>`
            })}
        </picture>
        <div class="article-body">
            <h2>
                ${this.title}
            </h2>
            <h3>
                ${this.subtitle}
            </h3>
            <p>
                ${this.description}
            </p>
        </div>
        `;
    }


}

export default customElements.define('home-post', HomePost)