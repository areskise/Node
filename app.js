const http = require('http');

const username = ['User1', 'User2']

const server = http.createServer((req, res) => {
    const url = req.url;
    const method = req.method;
    if(url === '/') {
        res.write('<html>');
        res.write('<head><title>Lab2.1</title></head>');
        res.write('<body><form action="/create-user" method="POST"><input type="text" name="username"><button type="submit">Send</button></form></body>');
        res.write('<html>');
        return res.end(); 
    }
    if(url === '/users') {
        res.write('<html>');
        res.write('<head><title>Users</title></head>');
        res.write('<body><ul>');
        for (const user of username) {
            res.write(`<li>${user}</li>`)
        }
        res.write('</ul></body>');
        res.write('<html>');
        return res.end(); 
    }
    if(url === '/create-user' && method === 'POST') {
        const body = [];
        req.on('data', (chunk) => {
            console.log(chunk);
            body.push(chunk);
        });
        return req.on('end', () => {
            const parseBody = Buffer.concat(body).toString();
            const createUser = parseBody.split('=')[1];
            username.push(createUser);
            console.log(username);
            res.statusCode = 302;
            res.setHeader('Location', '/users');
            return res.end();
        });
    }
});
server.listen(3000);