import AppBar from "./AppBar/AppBar";
import Search from "./AppBar/Search/Search";
import "./Header.css";
function Header(): JSX.Element {
    return (
        <div className="Header">
            <AppBar />
            <div className="search-area">
                <h2>
                    Unlimited movies, TV shows, and more.
                </h2>
                <h4>Watch anywhere. Cancel anytime.</h4><br/>
                <Search />
            </div>
        </div>
    );
}

export default Header;
