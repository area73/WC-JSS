module.exports = {
  "extends": "airbnb-base",
  "parser": "babel-eslint",
  "env": {
    "browser": true
  },
  "rules": {
    "import/extensions": 0,
    "import/prefer-default-export": 0,
  },
  "settings": {
    "import/resolver": {
      "node": {
        "moduleDirectory": ["node_modules", "bower_components"],
      }
    }
  },
  "plugins": ["html"]
};
