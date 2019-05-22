let express = require('express'),
    app = express(),
    PORT_SERVER = 9009;


app.listen(PORT_SERVER, () => {
    console.log(`listening to port ${PORT_SERVER}`)
})