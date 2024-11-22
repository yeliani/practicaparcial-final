import '../components/nav/nav'
import '../components/edit/edit'
class EditProduct extends HTMLElement {
        constructor()  {
            super();
            this.attachShadow( {mode: 'open'});
        }
    
        connectedCallback() {
            this.render();
        }

        async render()  {
            if (this.shadowRoot) {
                this.shadowRoot.innerHTML = `
                <nav-commponent></nav-commponent>
                <edit-commponent></edit-commponent>
                `;

            }
            
        }
    
    }

customElements.define('app-edit', EditProduct);