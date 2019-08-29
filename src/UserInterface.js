/**
 * This file is part of the O2System Venus UI Framework package.
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 *
 * @author         Steeve Andrian Salim
 * @copyright      Copyright (c) Steeve Andrian Salim
 */
// ------------------------------------------------------------------------

import $ from 'jquery';
window.$ = window.jQuery = $;
import Popper from 'popper.js';
window.Popper = Popper.default;
import 'bootstrap';
import 'offline-js';
import PerfectScrollbar from 'perfect-scrollbar';
const Pace = require('pace-js-amd-fix');
require("@fancyapps/fancybox");

/**
 * Class UserInterface
 * 
 * @author  Teguh Rianto
 */
class UserInterface {
    
    /**
     * UserInterface.constructor
     */
    constructor() {
        Pace.start();

        $(".perfect-scrollbar").each(function(){ 
            const ps = new PerfectScrollbar($(this)[0]); 
        });

        $('[data-toggle="dropdown"]').dropdown();
        $('[data-toggle="popover"]').popover();
        $('[data-toggle="tooltip"]').tooltip();
    }
}

export default new UserInterface;