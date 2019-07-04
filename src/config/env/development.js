'use strict';

module.exports = {
    env: 'development',
    db: `mongodb://localhost/${process.env.DB_NAME}`,
    port: process.env.APP_PORT || 4000
}