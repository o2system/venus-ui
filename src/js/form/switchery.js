import * as $ from 'jquery';
import Switchery from 'switchery';

export  default (function () {
    $('[data-plugin="switchery"]').each(function (idx, obj) {
        new Switchery($(this)[0], $(this).data());
    });
})();
