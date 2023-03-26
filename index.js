let Express = require('express');

let app = Express();

app.get ("/" , (req, res) => {
    res.sendFile(__dirname + '/src/index.html')
}  )

app.listen(8081, () => {
    console.log('Foi');
});
