'use strict';

module.exports = {
    env: 'test',
    db: `mongodb://localhost/${process.env.DB_NAME}`,
    port: process.env.PORT || 4100,
};