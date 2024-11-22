import './screens/addProduct'
import './screens/editProduct'
import './screens/home'
import './screens/modificar'
import { addObserver, appState } from './store';
import { Screens } from './types/store';
import './components/nav/nav'

class AppContainer extends HTMLElement {
    constructor(){
        super();
        this.attachShadow({mode: "open"})
        addObserver(this);
    }

    connectedCallback() {
       
        this.render();
    }

    render() {
        if (this.shadowRoot) {
			this.shadowRoot.innerHTML = '';
        switch (appState.screen) {
            case Screens.ADD:
                const add = this.ownerDocument.createElement('app-add');
                this.shadowRoot?.appendChild(add);
                break;

            case Screens.EDIT:
                const edit = this.ownerDocument.createElement('app-edit');
                this.shadowRoot?.appendChild(edit);
                break

            case Screens.HOME:
                const home = this.ownerDocument.createElement('app-home');
                this.shadowRoot?.appendChild(home);
                break;
            case Screens.MODIFICAR:
                const modi = this.ownerDocument.createElement('app-modi');
                this.shadowRoot?.appendChild(modi);
                break;
    

            default:
                break;
        }
    }
}
}

customElements.define('app-container', AppContainer)