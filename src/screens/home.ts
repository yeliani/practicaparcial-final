import '../components/nav/nav'
import Song, { Attribute } from '../components/product/product';
import { getProductsAction } from '../store/action';
import { dispatch } from '../store';
import { appState } from '../store';
class Home extends HTMLElement {
    songsList: Song[]=[]
    constructor()  {
        super();
        this.attachShadow( {mode: 'open'});
    }

    async connectedCallback() {
        if (appState.products.length === 0) {
            const songsAction = await getProductsAction();
            dispatch(songsAction)
        }
        this.render();
        const editProductHandler = (productId: string) => {
            // Encuentra el producto que corresponde al ID
            const productToEdit = appState.products.find(product => product.id === productId);
        
            if (productToEdit) {
                appState.currentProduct = {
                    id: productToEdit.id,
                    albumname: productToEdit.albumname,
                    author: productToEdit.author,
                    price: productToEdit.price,
                    stock: productToEdit.stock,
                    image: productToEdit.image,
                };

            }
        };
    }

    async render()  {
        if (this.shadowRoot) {
            this.shadowRoot.innerHTML = `
           
            <nav-commponent></nav-commponent>
             <div class="songs"></div>
            `;

          
            appState.products?.forEach(song => {
                const songItem = this.ownerDocument.createElement('song-commponent') as Song;
                songItem.setAttribute(Attribute.titlesong, song.albumname);
                songItem.setAttribute(Attribute.autor, song.author);
                songItem.setAttribute(Attribute.image, song.image);
                songItem.setAttribute(Attribute.stock, song.stock);
                songItem.setAttribute(Attribute.price, song.price);
                this.songsList.push(songItem);
            });

            const container = this.shadowRoot?.querySelector('.songs');
            this.songsList.forEach((song) => {
                container?.appendChild(song);
            });
        };
        
        
        
    }

}

customElements.define('app-home', Home);