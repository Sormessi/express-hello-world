const express = require("express");
const app = express();
const port = process.env.PORT || 3001;

app.get("/", (req, res) => res.type('html').send(html));

const server = app.listen(port, () => console.log(`Example app listening on port ${port}!`));

server.keepAliveTimeout = 120 * 1000;
server.headersTimeout = 120 * 1000;

const html = `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Void Federation</title>
    <link rel="stylesheet" href="login.css">
</head>
<body>
    <div class="container">
        <form id="login-form" action="C:/Users/USER/Documents/Visual%20Studio%20Code%20Projects/Void/index-black.html" method="post">
            <label for="username">Username:</label>
            <input type="text" id="username" name="username" required>
            <label for="password">Password:</label>
            <input type="password" id="password" name="password" required>
            <button type="submit">Login</button>
        </form>
    </div>
    <script>
        var validUsers = {
            '26cHx5VK4WoE': 'wVHQIK96xf61',
            '6qmLK3bGtR94': '1m1m8sI0Ib78',
            '01WF9lLBIqMT': 'Htg3fMOfW7o4',
            'rH5vaE889jIU': 'nZ25Pq4IvD1Y',
            'QiLf8ur9pi4N': 'sdKZppP3708I',
            '0Rbk5IQLq3cb': '9CcKcs7OFK0z',
            'CU2ufA6pwa57': 'bd778XU2Pbis',
            '77FRm1Dz7UdL': '54IPhd5oMwR7',
            'w2ad27NDpuiS': 'X3bMnHhT87Im',
            'sBi348Qo83xq': 'dR13XX25aVLs'

        };

        document.getElementById('login-form').addEventListener('submit', function(event) {
            event.preventDefault();
            var username = document.getElementById('username').value;
            var password = document.getElementById('password').value;

            // Check if the username and password are valid
            if (!username || !password) {
                alert('Please enter both a username and password');
            } else if (!validUsers[username] || validUsers[username] !== password) {
                alert('Invalid username or password');
            } else {
                this.submit();
            }
        });
    </script>
</body>
</html>
