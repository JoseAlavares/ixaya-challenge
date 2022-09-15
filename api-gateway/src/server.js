const express = require('express')
const app = express()

app.use('/api/v1')
app.get('/', (req, resp) => {
    return resp.status(200).json('ok')
})

app.listen(() => console.log('Api Gateway'), process.env.PORT)