import {
    LitElement,
    html,
    css
} from "lit-element"


import "./destinations-post.js"
import axios from "axios"

class DestinationsSection extends LitElement {
    static get styles() {
        return css `
        .section-title {
            text-align: center;
        }
        
        .section-title h2 {
            color: var(--main-background-color);
        }
        
        .destination-post {
            display: flex;
            flex-direction: column;
            align-items: center;
            padding: 2% 10% 2% 10%;
        }

        button{
            border: 1px solid white;
            margin: 20px auto 20px auto;
            background-color: var(--main-background-color);
            color: white;
            display: block;
            padding: 10px 35px 10px 35px;
            transition: 0.3s;
        }
        
        @media screen and (min-width:1600px) {
            .destination-post {
                flex-direction: row;
                align-items: unset;
            }
            button{
                margin: 10px auto 30px auto;
            }
        }`;
    }

    static get properties() {
        return {
            destinationsContents: { type: Array },
            nrDestinations: { type: Number }
        }
    }

    constructor() {
        super()
        this.nrDestinations = 6
        this.destinationsContents = []
    }

    render() {
            return html `
            <div class="section-title">
            <h2>Best destinations</h2>
        </div>
                ${this.destinationsContents.map(item => html`
                    <destinations-post class="destination-post" .imageOptions=${item.images} .title=${item.title} .description=${item.description} .moreDetails=${item.moreDetails}></destinations-post>
                `)}
                <button @click=${this.handleClickLoadMore}>Load more</button>
            `;
    }

    connectedCallback(){
        super.connectedCallback()
        this.getArticlesContents()
        
    }

    getArticlesContents(){
        const location = "https://devschool-2020.firebaseio.com/mateianita/destinations.json"

        let newDestinationsContents = []

        axios.get(location)
            .then(response =>{
                
                let i = 0
                for (let key in response.data){
                    if(i > this.nrDestinations-1){
                        break
                    }
                    newDestinationsContents.push(response.data[key])
                    i++
                }
                this.nrDestinations = i
                this.destinationsContents = newDestinationsContents
            })
            .catch(error => console.log(error))
    
    }

    handleClickLoadMore(){
        this.nrDestinations+=6
        this.getArticlesContents()
    }
}

customElements.define('destinations-section', DestinationsSection)