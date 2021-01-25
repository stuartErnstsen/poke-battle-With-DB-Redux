const bcrypt = require('bcryptjs')

module.exports = {
    register: async (req, res) => {
        const { username, password } = req.body;
        const db = req.app.get('db');

        const newUser = await db.check_user({ username });
        if (newUser[0]) {
            return res.status(409).send('Username already taken');
        };

        const salt = bcrypt.genSaltSync(10);
        const hash = bcrypt.hashSync(password, salt);
        const registeredUser = await db.register_user({ username, hash })[0];

        req.session.user = registeredUser;
        res.status(201).send(req.session.user);
    },
    login: async (req, res) => {
        const { username, password } = req.body;
        const db = req.app.get('db')

        const foundUser = await db.check_user({ username })
        if (!foundUser[0]) {
            return res.status(401).send('Username does not exist')
        }
        const isAuthenticated = bcrypt.compareSync(password, foundUser[0].password)
        if (!isAuthenticated) {
            return res.status(403).send('Password is incorrect')
        }
        req.session.user = { username: foundUser[0].username, user_id: foundUser[0].user_id }
        res.status(200).send(req.session.user)
    },
    logout: (req, res) => {
        req.session.destroy()
        res.sendStatus(200)
    }
}