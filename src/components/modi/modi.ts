import { dispatch, appState } from "../../store";
import { navigate, getProductsAction } from "../../store/action";
import { Screens } from "../../types/store";
import { deleteSong } from "../../utils/firebase";

export enum AttributeModi {
    "image" = "image",
    "titlesong" = "titlesong",
    "autor" = "autor",
    "price" = "price",
    "stock" = "stock",
   "idsong" ="idsong"
}

class Modi extends HTMLElement {
    idsong?: string;
    image?: string;
    titlesong?: string;
    autor?: string;
    price?: number;
    stock?: number; 
 

    static get observedAttributes() {
        return Object.values(AttributeModi);
    }

    attributeChangedCallback(propName: AttributeModi, oldValue: string | undefined, newValue: string | undefined) {
        switch (propName) {
            
            case AttributeModi.price:
                this.price = newValue ? Number(newValue) : undefined;
                break;
                case AttributeModi.stock:
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
                    <button id="edit">Editar</button>
                    <button id="delete">Delete</button>
                </div>
            `;
            const editButton = this.shadowRoot.querySelector("#edit");
            editButton?.addEventListener('click', () => this.selectProductForEdit(this.idsong));

            const deleteButton = this.shadowRoot.querySelector('#delete');
            deleteButton?.addEventListener('click', () => {
                this.deleteProduct(this.idsong);
                alert('Vinilo borrado')
            });
            
        }
        
        
    }
    selectProductForEdit(productId: string | undefined) {
        if (productId) {
            const product = appState.products.find(p => p.id === productId);
            if (product) {
                appState.currentProduct = { ...product };
                dispatch(navigate(Screens.EDIT));  
            } else {
                console.error('Producto no encontrado');
            }
        }
    }
    async deleteProduct(productId: string | undefined) {
        if (productId) {
            try {
                await deleteSong(productId);
                const action = await getProductsAction();
                dispatch(action);
            } catch (error) {
                console.error('Error al eliminar el producto:', error);
            }
        } else {
            console.error('ID del producto no proporcionado para eliminar.');
        }
    }

}

customElements.define("modi-commponent", Modi);
export default Modi;