import $ from 'jquery';
import './index.less';
import tpl from './index.html';

class EsLayer {
    constructor() {
        this.id = 'es-layer';
        this.$ = $(`#${this.id}`);
        if (this.$.length == 0) {
            $('body').append(tpl);
            this.$ = $(`#${this.id}`);
        }
    }
    show() {
        console.log('this is a show function.');
        this.$.show();
    }
    hide() {
        console.log('this is a hide function.');
        this.$.hide();
    }
}

export default EsLayer;