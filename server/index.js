let express = require('express'),
    app = express(),
    itemController = require('./controllers/itemController'),
    path = '/api/expenses',
    PORT_SERVER = 9009;

app.use(express.json());
    
app.get(path, itemController.getItems)
app.post(path, itemController.addItems)
app.delete(`${path}/:id`, itemController.deleteItems)

app.listen(PORT_SERVER, () => {
    console.log(`listening to port ${PORT_SERVER}`)
})