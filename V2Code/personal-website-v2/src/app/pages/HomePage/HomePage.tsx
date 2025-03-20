import { useReducer } from "react";
import './HomePage.scss';
import DuckCursor from "../../components/DuckCursor/duck_cursor.index";
import { duckCursorInitialState, followCoordinateReducer, FollowCursorActions, FollowCursorContext } from "../../components/DuckCursor/context/duck_cursor.contexts";
import RetroFilter from "../../components/RetroFilter/retro-filter.index";

const HomePage = () => {
    const [state, dispatch] = useReducer(followCoordinateReducer, duckCursorInitialState);

    return (
        <div className="home-page">
            <FollowCursorContext.Provider value={{ state, dispatch }}>
                <main className="home-content">
                    <DuckCursor/>
                    <h1>Welcome to the Home Page</h1>
                    <p>This is a basic React homepage layout with sample content.</p>

                    <section className="features">
                        <button onClick={() => {
                            dispatch({ type: FollowCursorActions.ToggleCursorFollow });
                            dispatch({ type: FollowCursorActions.SetTargetCoordinate, payload: {x: getRandomInt(1000), y: 2000} });
                            }}>
                            {state.followCursor ? "Stop Cursor Animation" : "Start Cursor Animation"}
                        </button>
                        <RetroFilter imageUrl={`/assets/IMG_5167.jpg`} altText="picture"></RetroFilter>
                        <div className="space-for-scrolling"></div>
                    </section>
                </main>
            </FollowCursorContext.Provider>    
        </div>
    );
};

const getRandomInt = (max: number) => {
    return Math.floor(Math.random() * max);
}

export default HomePage;
