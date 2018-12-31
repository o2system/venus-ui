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

require("babel-runtime/regenerator");
require("babel-register");
require("webpack-hot-middleware/client?reload=true");
require('bootstrap');
require("./main.scss");
require("./index.html");
require("./template/admin/admin.html");
require("./template/admin/login.html");

import Venus from './Venus';

/**
 * Venus Object
 */
module.exports = Venus;

require('./VenusAdmin');
require('./VenusForm');