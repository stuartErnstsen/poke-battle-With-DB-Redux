import { Switch, Route } from 'react-router-dom';
import LoginWall from './components/TeamBuilder/LoginWall/LoginWall'
import NameTeam from './components/TeamBuilder/NameTeam/NameTeam';
import TeamBuilder from './components/TeamBuilder/TeamBuilder/TeamBuilder';


export default (
    <Switch>
        <Route exact path="/" component={LoginWall} />
        <Route path="/name-team" component={NameTeam} />
        <Route path="/team-builder" component={TeamBuilder} />
        {/* <Route path="/arena" component={ } /> */}
    </Switch>
)