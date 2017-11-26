import $ from 'jquery';
import EsLayer from './components/me-es6layer';

const esLayer = new EsLayer();

setInterval(function () {
    esLayer.show();
    setTimeout(function () {
        esLayer.hide();
    }, 1000);
}, 3000);

$('#btn').on('click', function () {
    alert('牛逼');
});