const Sequelize = require('sequelize')
const db = new Sequelize('postgres://localhost:5432/sequelize-guide', {logging: false})


const Campus = db.define('campus', {
  name: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: true
    }
  },
  address: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: true
    }
  },
  description: {
    type: Sequelize.TEXT
  }
})

module.exports = {
  db,
  Campus
}
