import {
    LitElement,
    html,
    css
} from "lit-element"


class Header extends LitElement {
    static get styles() {
        return css `
        .active{
            border:1px solid red;
        }

        .nav-bar {
            display: flex;
            flex-direction: column;
            list-style: none;
            padding: 0;
            margin: 0;
        }
        
        header {
            background-color: var(--main-background-color);
            text-align: center;
            padding-bottom: 100px;
        }
        
        header h1 {
            color: var(--main-background-secondary-color);
        }
        
        li {
            border: 1px solid white;
            margin: 5px;
            background-color: var(--main-background-color);
            transition: 0.3s;
        }
        
        li:hover {
            background-color: var(--main-background-fade-color);
        }
        
        li a {
            text-decoration: none;
            color: white;
            display: block;
            padding: 10px 35px 10px 35px;
        }
        @media screen and (min-width:1080px) {
            .nav-bar {
                flex-direction: row;
                justify-content: center;
            }
            li {
                margin: 45px;
            }
        }
        @media (prefers-color-scheme: dark){
                li {
                    background: grey;
                }
        }

        `;
    }

    static get properties() {
        return {
            navBarOptions: { type: Array },
            currentPath:{type:String},
            theme:{type:String}
        }
    }

    constructor() {
        super()

        this.theme=localStorage.getItem("theme") ? localStorage.getItem("theme") : "light"

        this.currentPath = window.location.pathname
        window.addEventListener('vaadin-router-location-changed', (event) => {
            this.currentPath = event.detail.location.pathname
            // console.log(event)
            // let path = event.detail.location.pathname
            // if(path == "/"){
            //     this.shadowRoot.querySelector("#home").classList.add("active")
            //     this.shadowRoot.querySelector("#destinations").classList.remove("active")
            // }else if(path == "/destinations"){
            //     this.shadowRoot.querySelector("#destinations").classList.add("active")
            //     this.shadowRoot.querySelector("#home").classList.remove("active")
            // }
        });

        this.navBarOptions = [{
                innerHtml: html `<a href="/">Home</a>`,
                location: "/"
            },
            {
                innerHtml: html `<a href="/destinations">Destinations</a>`,
                location:"/destinations"

            },
            {
                innerHtml: html `<a href="">Language</a>`,
                location:"language"
            },
            {
                innerHtml: html `<label><input type="checkbox" @change = ${
                    this.changeTheme
                }/>Use dark theme</label>`,
                location:"dark theme"

            }
        ]
    }

    render() {
        console.log(window.location)
            return html `
        <header>
            <nav>
                <ul class="nav-bar">
                    ${this.navBarOptions.map( item => html`
                    <li class=${this.currentPath === item.location ? "active" : ""} >${item.innerHtml}</li>
                    `)}
                </ul>
            </nav>
            <h1>Travel far and wide!</h1>
        </header>
        `;
    }

    changeTheme(){
        console.log("aici")
        this.theme = this.theme === "dark" ? "light" : "dark"
    }

    updated(changedProperties){
        if (changedProperties.has(`theme`)){
            this.updateTheme();
        }
    }

    updateTheme(){
        document.head.querySelector("link[data-theme]")?.remove()
        const themeStyle = document.createElement("link")
        themeStyle.dataset.theme = this.theme
        themeStyle.rel = "stylesheet"
        themeStyle.href = `css/${this.theme}.css`
        document.head.appendChild(themeStyle)
        localStorage.setItem("theme",this.theme)
    }
}

customElements.define('app-header', Header)