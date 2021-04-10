import { BrowserRouter } from "react-router-dom";
import Header from "../Header/Header";
import Routing from "../Routing/Routing";
import "./Layout.css";


function Layout(): JSX.Element {
    return (
        <BrowserRouter>
            <div className="Layout">
                <header>
                    <Header />
                </header>
                <main>
                    <Routing />
                </main>
                <footer>

                </footer>
            </div>
        </BrowserRouter> 
    );
}

export default Layout;
