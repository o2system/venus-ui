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

import UserInterface from './UserInterface';

/**
 * Venus Object
 */
export default class Venus extends Object {

    /**
     * Venus.constructor
     */
    constructor() {
        this.userInterface = new UserInterface;
    }
}

module.exports = new Venus;