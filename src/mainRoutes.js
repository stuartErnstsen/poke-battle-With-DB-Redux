import { Switch, Route } from 'react-router-dom';
import LoginWall from './components/TeamBuilder/LoginWall'
import TeamBuilder from './components/TeamBuilder/TeamBuilder';


export default (
    <Switch>
        <Route exact path="/" component={LoginWall} />
        <Route path="/team-builder" component={TeamBuilder} />
        {/* <Route path="/arena" component={ } /> */}
    </Switch>
)