import Component from './core/component';
import './components/header/header';
import './components/footer/footer';

export class App extends Component {
    setup() {
        this.state = {

        }
    }

    template() {
        const header = document.createElement("app-header");
        this.target.before(header);

        const main = document.createElement('main');
        this.target.appendChild(main);

        const footer = document.createElement("app-footer");
        this.target.after(footer);
    }
}