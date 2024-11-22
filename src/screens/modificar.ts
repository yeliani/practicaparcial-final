import '../components/nav/nav'
import Modi, { AttributeModi } from '../components/modi/modi';
import { getProductsAction } from '../store/action';
import { dispatch } from '../store';
import { appState } from '../store';
class Modificar extends HTMLElement {
    songsListModi: Modi[]=[]
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
        }

        async render()  {
            if (this.shadowRoot) {
                this.shadowRoot.innerHTML = `
                <nav-commponent></nav-commponent>
                 <div class="songs"></div>
                `;
                appState.products?.forEach(song => {
                    const songItem = this.ownerDocument.createElement('modi-commponent') as Modi;
                    songItem.setAttribute(AttributeModi.titlesong, song.albumname);
                    songItem.setAttribute(AttributeModi.idsong, song.id);
                    songItem.setAttribute(AttributeModi.autor, song.author);
                    songItem.setAttribute(AttributeModi.image, song.image);
                    songItem.setAttribute(AttributeModi.stock, song.stock);
                    songItem.setAttribute(AttributeModi.price, song.price);
                    this.songsListModi.push(songItem);
                });

            const container = this.shadowRoot?.querySelector('.songs');
            this.songsListModi.forEach((song) => {
                container?.appendChild(song);
            });
            }
            
        }
    
    }

customElements.define('app-modi', Modificar);