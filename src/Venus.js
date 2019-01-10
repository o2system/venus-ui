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

import $ from "jquery";
import Popper from 'popper.js';

/**
 * Class Venus
 */
class Venus {
    constructor() {
        window.Popper = Popper.default;
        window.$ = window.jQuery = $;

        $('[data-toggle="popover"]').popover();
        $('[data-toggle="tooltip"]').tooltip();
    }
}

export default Venus;