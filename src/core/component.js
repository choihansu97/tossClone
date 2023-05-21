export default class Component {
    constructor(target, props) {
        this.target = target;
        this.props = props;
        this.setup();
        this.render();
        this.mounted();
    }
    setTitle(title) {
        document.title = title;
    }

    setup(){}

    template() {
        return '';
    }

    render(){
        this.target.innerHTML = this.template();
        this.mounted();
    }

    mounted(){}

    setState(newState){
        this.state = { ...this.state, ...newState };
        this.render();
    }
}