import "./duck_cursor.style.css";
import { useMouseMove, useValue, animate, withSpring } from "react-ui-animate";
import { useEffect, useRef, useState } from "react";
import { useAnimateContext } from "../../pages/HomePage/HomePage";

const CURSOR_SIZE = 40;

const DuckCursor = ({ animateEnabled = true }) => {
    const AnimationContext = useAnimateContext();

    const COORDINATE_X = useValue(0);
    const COORDINATE_Y = useValue(0);
    const divRef = useRef<HTMLDivElement | null>(null);

    const [divPosition, setDivPosition] = useState({ x: 0, y: 0 });
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const [direction, setDirection] = useState("down");
    const [speed, setSpeed] = useState("normal");

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
                setDivPosition({ x: rect.left + (rect.width / 2), y: rect.top + (rect.height / 2)});
            }
            animationFrameId = requestAnimationFrame(updatePosition);
        };

        updatePosition(); // Start tracking

        return () => cancelAnimationFrame(animationFrameId);
    }, [animateEnabled]);

    // Animate Mouse Movement
    useMouseMove(({ mouseX, mouseY }) => {
        if (animateEnabled) {
            COORDINATE_X.value = withSpring(mouseX - 60 - CURSOR_SIZE / 2, animationConfig);
            COORDINATE_Y.value = withSpring(mouseY - 30 - CURSOR_SIZE / 2, animationConfig);
        }
    });

    // Track Div location and Mouse Cursor location
    useEffect(() => {
        let newDirection = setNewDirection(mousePosition, divPosition, speed, setSpeed);

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
        >
            <div className="character_mask unselectable" ref = {divRef}>            
                <img src={`/assets/duck_sprite_with_idle.png`} className={`character_spritesheet pixel_art face-${direction} movement_speed_${speed}`} alt="Desktop_Pet" />
            </div>
        </animate.div>
    );
};

const setNewDirection = (point2: any, point1: any, speed: string, setSpeed: any) => {
    const directionVector = calculateDirectionVector(point2, point1);
    const dx = directionVector.x;
    const dy = directionVector.y;

    const distance = Math.sqrt(dx * dx + dy * dy);
    
    if (distance > 700) {
        if (speed !== "fast") setSpeed("fast");
    } else if (distance >= 200 && distance <= 1300) {
        if (speed !== "normal") setSpeed("normal");
    } else {
        if (speed !== "slow") setSpeed("slow");
    }

    if (distance < 60) {
        return "idle";
    }
    if (Math.abs(dx) > Math.abs(dy)) {
        if (dx > 0) return "right" 
        else return "left";
    } else {
        if (dy > 0) return "down"
        else return "up";
    }
}

const calculateDirectionVector = (point2: any, point1: any) => {
    const directionVector = {
        x: point2.x - point1.x,
        y: point2.y - point1.y
    };

    return directionVector;
};

export default DuckCursor;