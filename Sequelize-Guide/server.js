const models = require('./models')

const init = async () => {
  await models.Campus.sync()
  console.log('Tables have synced!')
}

init()
