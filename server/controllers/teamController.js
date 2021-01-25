import axios from 'axios';

module.exports = {
    addTeam: (req, res) => {
        const { teamName } = req.body;
        const { userId } = req.session.user;

        const db = req.app.get('db');

        const [checkUserHasTeam] = db.check_team_user_id([userId]);
        if (checkUserHasTeam) {
            return res.status(409).send(`${req.session.user.username} already has a team`)
        }

        const [checkTeamName] = db.check_team_name([teamName]);
        if (checkTeamName) {
            return res.status(409).send('Team name is unavailable');
        };

        const [addedTeam] = db.add_team([userId, teamName]);

        req.session.user.team = addedTeam;
        res.status(200).send(req.session.user.team);
    }
}