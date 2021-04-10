import AllCategories from "../../HomeArea/AllCategories/AllCategories";
import Popular from "../../HomeArea/Popular/Popular";
import "./Container.css";

function Container(): JSX.Element {
    return (
        <div className="Container">
			<Popular />
            <AllCategories />
        </div>
    );
}

export default Container;
