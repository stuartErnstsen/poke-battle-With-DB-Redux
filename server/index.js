require('dotenv').config()
const express = require('express'),
    massive = require('massive'),
    session = require('express-session'),
    authCtrl = require('./controllers/authController'),
    teamCtrl = require('./controllers/teamController'),
    { SERVER_PORT, CONNECTION_STRING, SESSION_SECRET } = process.env,
    app = express()

app.use(express.json());
app.use(session({
    resave: true,
    saveUninitialized: false,
    secret: SESSION_SECRET
}));
massive({
    connectionString: CONNECTION_STRING,
    ssl: { rejectUnauthorized: false }
}).then(db => {
    app.set('db', db),
        console.log('db connected')
})

//AUTHENTICATION ENDPOINTS 
app.post('/auth/register', authCtrl.register);
app.post('/auth/login', authCtrl.login);
app.get('/auth/logout', authCtrl.logout);

//TEAM ENDPOINTS
app.get('/api/team', teamCtrl.getUserTeam);
app.post('/api/team', teamCtrl.addTeam);

app.listen(SERVER_PORT, () => console.log(`App listening on port: ${SERVER_PORT}`))