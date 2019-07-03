'use strict';

const dotenv = require('dotenv');
var result = function () {
    return dotenv.config({ path: './.env' });
}()
if (result.error) throw result.error