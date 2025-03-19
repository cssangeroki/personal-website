import { createContext, Dispatch, SetStateAction, useContext, useState } from "react";
import './HomePage.css'; // For page-specific styling
import DuckCursor from "../../components/DuckCursor/duck_cursor.index";

type AnimationContextType = {
    animateEnabled: boolean,
    setAnimateEnabled: Dispatch<SetStateAction<boolean>>
}

const AnimationContext = createContext<AnimationContextType>({
    animateEnabled: false,
    setAnimateEnabled: () => {}
});

export const useAnimateContext = () => {
    return useContext(AnimationContext);
};

const HomePage = () => {
    const [animateEnabled, setAnimateEnabled] = useState(false);

    // Toggle function for the button click

    return (
        <div className="home-page">
            <AnimationContext.Provider value={{ animateEnabled, setAnimateEnabled }}>
                <main className="home-content">
                    <DuckCursor animateEnabled={animateEnabled}/>
                    <h1>Welcome to the Home Page</h1>
                    <p>This is a basic React homepage layout with sample content.</p>

                    <section className="features">
                        <h2>Our Features</h2>
                        <ul>
                            <li>Feature 1</li>
                            <li>Feature 2</li>
                            <li>Feature 3</li>
                            <button onClick={() => setAnimateEnabled((prev) => !prev)}>
                                {animateEnabled ? "Stop Cursor Animation" : "Start Cursor Animation"}
                            </button>
                        </ul>
                    </section>
                </main>
            </AnimationContext.Provider>    
        </div>
    );
};

export default HomePage;
