const Sequelize = require('sequelize');

const config = {
    host: process.env.CORONABOARD_MYSQL_HOST || '127.0.0.1',
    port: 3306,
    database: 'coronaboard',
    user: 'coronabaoard_admin',
    password: process.env.CORONABOARD_MYSQL_HOST || 'tkfkd1',
};

const sequelize = new Sequelize(config.database, config.user, config.password, {
    host: confg.host,
    dialect: 'mysql',
});

module.exports = {
    sequelize,
    GlobalStat: require('./global-stat.model')(sequelize)
};