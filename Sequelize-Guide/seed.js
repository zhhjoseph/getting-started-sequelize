const {db, Campus} = require ('./models')

const seed = async () => {
  await db.sync({force: true})

  const harvard = await Campus.create({
    name: 'Harvard',
    address: 'PO Box 382609. Cambridge, MA 02238-2609.',
    description: 'World famous Ivy League university'
  })
  db.close()
  console.log('Seed Successful!')
}

seed()
