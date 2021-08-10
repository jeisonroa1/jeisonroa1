const express = require('express');
const session = require('express-session');
const url = require('url');
const path = require('path');
const app = express();
app.use(express.urlencoded({ extended: false }));

app.use(session({
    'secret': 'salt for cookie',
    'resave': false,
    'saveUninitialized': false
}));

app.use('/css', express.static(path.join(__dirname, 'css')));
app.use('/js', express.static(path.join(__dirname, 'js')));
app.get('/', function (req, res) {
    res.send(
        `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
            <title>Session and Cookies - q2</title>
            <script src="js/indexScript.js"></script>
    </head>
    <body>
    <form action=result method=post>
        <label>Name <input name=name type=text></label>
        <label>Age <input name=age type=number></label>
        <button type=submit>Submit Qurey</button>
    </form>
    </body>
    </html>`
    )
});

app.post('/result', (req, res) => {

    req.session[Math.random()] = 'Name: ' + req.body.name + ' Age: ' + req.body.age;
    res.redirect(url.format({
        pathname: "/output"
    }));
});

app.get('/output', function (req, res) {
    let view = "<ol>";
    for (const key in req.session) {
        if (key === 'cookie') continue;
        view += `<li>${req.session[key]}</li>`;
    }
    view += "</ol><a href='/'>back</a>";
    res.send(view);
});


app.listen(3000, () => {
    console.log("Server running at port 3000.")
});