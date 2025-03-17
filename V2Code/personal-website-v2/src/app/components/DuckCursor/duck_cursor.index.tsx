import "./duck_cursor.style.css";
import { useMouseMove, useValue, animate, withSpring } from "react-ui-animate";
import { useEffect, useRef, useState } from "react";
import "../../../assets/Sheet_Guy_2.png"

const CURSOR_SIZE = 40;

const DuckCursor = () => {
    const COORDINATE_X = useValue(0);
    const COORDINATE_Y = useValue(0);
    const divRef = useRef<HTMLDivElement | null>(null);

    const [divPosition, setDivPosition] = useState({ x: 0, y: 0 });
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const [direction, setDirection] = useState("down");

    let animationConfig = {
        tension: 1
    };

    // Record Mouse Movement
    useEffect(() => {
        const updateMousePosition = (e: { clientX: any; clientY: any; }) => {
            setMousePosition({ x: e.clientX, y: e.clientY });
        };

        window.addEventListener("mousemove", updateMousePosition);

        return () => {
            window.removeEventListener("mousemove", updateMousePosition);
        };
    }, []);

    // Get Div's Position
    useEffect(() => {
        let animationFrameId: number;

        const updatePosition = () => {
            if (divRef.current) {
                const rect = divRef.current.getBoundingClientRect();
                setDivPosition({ x: rect.left, y: rect.top});
            }
            animationFrameId = requestAnimationFrame(updatePosition);
        };

        updatePosition(); // Start tracking

        return () => cancelAnimationFrame(animationFrameId);
    }, []);

    // Animate Mouse Movement
    useMouseMove(({ mouseX, mouseY }) => {
        COORDINATE_X.value = withSpring(mouseX - 60 - CURSOR_SIZE / 2, animationConfig);
        COORDINATE_Y.value = withSpring(mouseY - 30 - CURSOR_SIZE / 2, animationConfig);
    });

    // Track Div location and Mouse Cursor location
    useEffect(() => {
        let newDirection = calculateDirection(mousePosition.x, divPosition.x);

        if (newDirection != direction) {
            setDirection(newDirection);
        }
    }, [mousePosition, divPosition]); 

    return (
        <animate.div
            style={{
            translateX: COORDINATE_X.value,
            translateY: COORDINATE_Y.value,
            }}
            ref = {divRef}
        >
            <div className="character_mask unselectable">            
                <img className= {`character_spritesheet pixelart face-${direction}`} src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/21542/DemoRpgCharacter.png" alt="Character" />
            </div>
        </animate.div>
    );
};

const calculateDirection = (mouseX: number, divX: number) => {
    // TODO: Add modifiers based on facing direction. 
    // TODO: Animate all 8 directions
    console.log("mouseX, divX = " + mouseX + ", " + divX);
    if (Math.abs(mouseX - divX) < 100) {
        return "down";
    } else if ((mouseX - divX) > 0) {
        return "right";
    } else {
        return "left";
    }
}

export default DuckCursor;