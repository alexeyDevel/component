class Component {
    constructor(params) {
        this.template = params.template;
        this.styles = params.styles || {};
        this.modifiers = params.modifiers || [];
        this.text = params.text || '';
        this.events = params.events || {};
    }

    render() {
        const btn = document.createElement('button');
        btn.innerHTML = this.template;
        Object.assign(btn.style, this.styles);

        for (let modifier of this.modifiers) {
            btn.classList.add(modifier);
        }
    
        if (this.text) {
          const span = document.createElement('span');
          span.innerText = this.text;
          btn.appendChild(span);
        }
    
        for (const event in this.events) {
          btn.addEventListener(event, this.events[event]);
        }
    
        return btn;
    }
}