const http = require('http')
const fs = require('fs')

const server = http.createServer((req, res) => {
    const { url, method } = req;
    console.log("url=", url);
    console.log("method=", method);
    function sendFile(p) {
        let file = fs.readFileSync(p, 'utf-8');
        res.end(file)
    }
    if (method == 'GET') {
        switch (url) {
            case '/':
            case '/home': sendFile("./pages/home.html");
                break;
            case '/about': sendFile("./pages/about.html");
                break;
            case '/style': sendFile("./style/style.css")
                break;
            case '/signup': sendFile("./pages/signup.html")
                break;
            case '/login': sendFile("./pages/login.html")
                break;



            default: res.end("<h1>404 Page Not Found</h1>")
        }
    } else if (method == 'POST') {
        switch (url) {
            case '/signup': req.on('data', (user) => {
                const u = JSON.parse(user.toString());
                const users = JSON.parse(fs.readFileSync('./users.json', 'utf-8'));
                const isUser = users.find((user) => user.email == u.email);

                if (isUser) {
                    return res.end(JSON.stringify({ message: "user already exist with this email" }));
                }
                users.push(u);
                fs.writeFileSync('./users.json', JSON.stringify(users));
                return res.end(JSON.stringify({ message: "USER CREATED SUCCESSFULLY" }));
            })
                break;

            default: res.end(JSON.stringify({ message: "invalid url post request" }))


            case '/login':
                req.on('data', (user) => {
                    const u = JSON.parse(user.toString());
                    const users = JSON.parse((fs.readFileSync('./users.json', 'utf-8')));
                    const isUser = users.find((us) => us.email === u.email)

                    if (!isUser) {
                        return res.end(JSON.stringify({ message: "Invalid email" }))
                    }

                    if (u.password != isUser.password) {
                        return res.end(JSON.stringify({ message: 'Invalid password' }))
                    }

                    return res.end(JSON.stringify({ message: 'LOGIN SUCCESSFUL' }))

                })
                break;
        }
    }
});

server.listen(8000, 'localhost', () => {
    console.log("server started at http://localhost:8000");
})