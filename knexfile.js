const path = require('path');

const BASE_PATH = path.join(__dirname, 'src', 'db');

module.exports = {
  test: {
    client: 'postgres',
    connection: 'postgres://sam:sam@localhost:5432/blog_test',
    migrations: {
      directory: path.join(BASE_PATH, 'migrations')
    },
    seeds: {
      directory: path.join(BASE_PATH, 'seeds')
    }
  },

  development: {
    client: 'postgres',
    connection: 'postgres://sam:sam@localhost:5432/sam',
    migrations: {
      directory: path.join(BASE_PATH, 'migrations')
    },
    seeds: {
      directory: path.join(BASE_PATH, 'seeds')
    }
  }
};
