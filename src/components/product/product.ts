
export enum Attribute {
    "idsong" = "idsong",
    "image" = "image",
    "titlesong" = "titlesong",
    "autor" = "autor",
    "price" = "price",
    "stock" = "stock",
   
}

class Song extends HTMLElement {
    idsong?: number;
    image?: string;
    titlesong?: string;
    autor?: string;
    price?: number;
    stock?: number; 
 

    static get observedAttributes() {
        return Object.values(Attribute);
    }

    attributeChangedCallback(propName: Attribute, oldValue: string | undefined, newValue: string | undefined) {
        switch (propName) {
            case Attribute.idsong:
                this.idsong = newValue ? Number(newValue) : undefined;
                break;
            case Attribute.price:
                this.price = newValue ? Number(newValue) : undefined;
                break;
                case Attribute.stock:
                    this.stock = newValue ? Number(newValue) : undefined;
                    break;
            default:
                this[propName] = newValue;
                break;
        }
        
    }

    constructor() {
        super();
        this.attachShadow({ mode: "open" });
    }

    connectedCallback() {
        this.render();
    }


    render() {
        if (this.shadowRoot) {
            this.shadowRoot.innerHTML = `
                <div class="song">
                    <div class="perfil">
                        <div id="img">
                            <img src="${this.image}" >
                        </div>
                        <div class="texts">
                            <p>${this.titlesong}</p>
                            <p id="autor">${this.autor}</p>
                        </div>
                    </div>
                    <p class="album">${this.price}</p>
                    <p class="duracion">${this.stock}</p>
                </div>
            `;
        }
        
    }
}

customElements.define("song-commponent", Song);
export default Song;