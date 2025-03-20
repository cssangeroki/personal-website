import { createContext, useContext, useReducer, useState } from "react";
import './HomePage.css'; // For page-specific styling
import DuckCursor from "../../components/DuckCursor/duck_cursor.index";
import { duckCursorInitialState, followCoordinateReducer, FollowCursorActions, FollowCursorContext } from "../../components/DuckCursor/context/duck_cursor.contexts";

  
// export interface DuckCursorAnimationState {
//     cursorFollow: boolean;
//     targetCoordinate: { x: number; y: number };
// }
  
// export enum AnimationAction {
//     ToggleCursorFollow,
//     SetTargetCoordinate
// }
  // Initial state

const HomePage = () => {
    const [state, dispatch] = useReducer(followCoordinateReducer, duckCursorInitialState);

    // Toggle function for the button click

    return (
        <div className="home-page">
            <FollowCursorContext.Provider value={{ state, dispatch }}>
                <main className="home-content">
                    <DuckCursor/>
                    <h1>Welcome to the Home Page</h1>
                    <p>This is a basic React homepage layout with sample content.</p>

                    <section className="features">
                        <h2>Our Features</h2>
                        <ul>
                            <li>Feature 1</li>
                            <li>Feature 2</li>
                            <li>Feature 3</li>
                            <button onClick={() => {
                                dispatch({ type: FollowCursorActions.ToggleCursorFollow });
                                dispatch({ type: FollowCursorActions.SetTargetCoordinate, payload: {x: getRandomInt(1000), y: 2500} });
                                }}>
                                {state.followCursor ? "Stop Cursor Animation" : "Start Cursor Animation"}
                            </button>
                            <div className="space-for-scrolling">

                            </div>
                        </ul>
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
