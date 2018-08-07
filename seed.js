const {db, Gardener, Plot, Vegetable} = require('./models');



const peas = Vegetable.create ({
    name: 'peas',
    color: 'green',
    planted_on: new Date()
  }).then(veggie => {console.log(veggie);

  db.sync({force: true})
  .then(() => {console.log('successful sync'); db.close()})
  .catch(error => {console.error(error); db.close()})
  })

