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

/**
 * Development Dependencies
 */
import "@babel/register";
import "webpack-hot-middleware/client?reload=true";
import "./index.html";

import UserInterface from './UserInterface';

// ------------------------------------------------------------------------

/**
 * Venus User Interface Object
 */
module.exports = new UserInterface;