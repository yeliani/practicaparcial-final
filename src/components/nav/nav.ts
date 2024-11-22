import { dispatch } from '../../store/index'
import { Screens } from '../../types/store';
import { navigate } from '../../store/action';

class Nav extends HTMLElement {
   
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
              
                    <h1>Vinyl Store</h1>
                    <p id="home">Home</p>
                    <p id="add">Add New Product</p>
                    <p id="edit">Modify Products</p>
              
          
            `;
            const edit = this.shadowRoot?.querySelector('#edit')
            edit?.addEventListener('click', () =>  {
                dispatch(navigate(Screens.MODIFICAR));
            })

            const home = this.shadowRoot?.querySelector('#home')
            home?.addEventListener('click', () =>  {
                dispatch(navigate(Screens.HOME));
            })
            const add = this.shadowRoot?.querySelector('#add')
            add?.addEventListener('click', () =>  {
                dispatch(navigate(Screens.ADD));
            })

        }
        
    }
}

customElements.define("nav-commponent", Nav);
export default Nav;