let Express = require('express');

let app = Express();
app.use(Express.static (__dirname + "/src"));
app.get ("/" , (req, res) => {
    res.sendFile(__dirname + '/src/index.html');
}  )

app.listen(8081, () => {
    console.log('Foi');
});
