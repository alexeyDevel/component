const body = document.getElementsByTagName('body')[0];
const comp = new Component({
    template: '<a>Template</a>',
    styles: {
        width: '300px',
        height: '50px'
    },
    modifiers: ['green', 'strat'],
    text: 'btnText',
    events: {
        click: function() {
            console.log('click1');
        },
        focus: function() {
            console.log('hover');
        },
    }
})

body.appendChild(comp.render());