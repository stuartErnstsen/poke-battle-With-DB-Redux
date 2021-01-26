
module.exports = {
    addTeam: async (req, res) => {
        const { teamName } = req.body;
        const { user_id } = req.session.user;

        const db = req.app.get('db');

        const [checkTeamName] = await db.check_team_name([teamName]);
        if (checkTeamName) {
            return res.status(409).send('Team name is unavailable');
        };

        const [addedTeam] = await db.add_team([user_id, teamName]);

        req.session.user.team = addedTeam;
        res.status(200).send(req.session.user.team);
    },
    getUserTeam: async (req, res) => {
        const { user_id } = req.session.user;
        const db = req.app.get('db');
        const [hasTeam] = await db.check_team_user_id(user_id);
        hasTeam ? res.status(200).send(hasTeam) : res.status(200).send({})
    }
}