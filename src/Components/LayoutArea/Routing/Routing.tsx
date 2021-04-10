import { Switch, Route, Redirect } from "react-router-dom";
import Home from "../../HomeArea/Home/Home";
import Category from "../../MoviesArea/Category/Category";
import MovieDetails from "../../MoviesArea/MovieDetails/MovieDetails";
import Page404 from "../../Shares/Page404/Page404";

function Routing(): JSX.Element {
    return (
        <Switch>
            <Route path="/home" component={Home} exact></Route>
            <Route path="/popular/details/:id" component={MovieDetails} exact />
            <Route path="/category/:id/:name" component={Category} exact />
            <Redirect from="/" to="/home" exact />
            <Route component={Page404} />
        </Switch>
    );
}

export default Routing;
