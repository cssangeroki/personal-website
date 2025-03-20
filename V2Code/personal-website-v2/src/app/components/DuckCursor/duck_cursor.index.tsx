import "./duck_cursor.style.scss";
import { useMouseMove, useValue, animate, withSpring } from "react-ui-animate";
import { useEffect, useReducer, useRef } from "react";
import { Directions, DuckCursorActions, Speeds, useFollowCursorContext } from "./context/duck_cursor.contexts";

const CURSOR_SIZE = 40;

const initialState = {
    divPosition: { x: 0, y: 0 },
    targetPosition: { x: 0, y: 0 },
    direction: Directions.Down,
    speed: Speeds.Normal,
    tension: 1
};
  
const reducer = (state: any, action: any) => {
    switch (action.type) {
        case DuckCursorActions.SetDivPosition:
            return { ...state, divPosition: action.payload };
        case DuckCursorActions.SetTargetPosition:
            return { ...state, targetPosition: action.payload };
        case DuckCursorActions.SetDirection:
            return { ...state, direction: action.payload };
        case DuckCursorActions.SetSpeed:
            return { ...state, speed: action.payload };
        case DuckCursorActions.SetTension:
            return { ...state, tension: action.payload };
        default:
            return state;
    }
}

const DuckCursor = () => {
    const followCursorContext = useFollowCursorContext();

    const COORDINATE_X = useValue(0);
    const COORDINATE_Y = useValue(0);
    const divRef = useRef<HTMLDivElement | null>(null);

    const [state, dispatch] = useReducer(reducer, initialState);

    // Record Mouse Movement
    useEffect(() => {
        if (followCursorContext.state.followCursor) {
            const updateMousePosition = (e: { clientX: any; clientY: any; }) => {
                dispatch({type: DuckCursorActions.SetTargetPosition, payload: { x: e.clientX, y: e.clientY + window.scrollY }});
            };
    
            window.addEventListener("mousemove", updateMousePosition);
    
            return () => {
                window.removeEventListener("mousemove", updateMousePosition);
            };
        } else {
            dispatch({type: DuckCursorActions.SetTargetPosition, payload: { x: followCursorContext.state.targetCoordinate.x, y: followCursorContext.state.targetCoordinate.y }});
        }
        
    }, [followCursorContext.state.followCursor]);

    // Get Duck Div's Position
    useEffect(() => {
        let animationFrameId: number;

        const updatePosition = () => {
            if (divRef.current) {
                const rect = divRef.current.getBoundingClientRect();
                
                dispatch({ type: DuckCursorActions.SetDivPosition, payload: { x: rect.left + (rect.width / 2), y: rect.top + (rect.height / 2) + window.scrollY}});
            }
            animationFrameId = requestAnimationFrame(updatePosition);
        };

        updatePosition(); // Start tracking

        return () => cancelAnimationFrame(animationFrameId);
    }, []);

    // Follows Mouse Movement
    useMouseMove(({ mouseX, mouseY }) => {
        const scrollY = window.scrollY;

        const animationConfig = {
            tension: calculateDirectionVectorAndDistance(state.targetPosition, state.divPosition).distance > 1000 ? 8 : 1
        }

        if (followCursorContext.state.followCursor) {
            const adjustedMouseY = mouseY + scrollY;

            COORDINATE_X.value = withSpring(calculateEndPosition(mouseX), animationConfig );
            COORDINATE_Y.value = withSpring(calculateEndPosition(adjustedMouseY), animationConfig);
        }
    });

    // Heads to target coordinates
    useEffect(() => {
        if (!followCursorContext.state.followCursor) {
            const animationConfig = {
                tension: calculateDirectionVectorAndDistance(state.targetPosition, state.divPosition).distance > 1000 ? 8 : 1
            }
            COORDINATE_X.value = withSpring(calculateEndPosition(state.targetPosition.x), animationConfig);
            COORDINATE_Y.value = withSpring(calculateEndPosition(state.targetPosition.y), animationConfig);
        }
    }, [followCursorContext.state.followCursor, state.targetPosition]);

    // Track Div location and Mouse Cursor location
    useEffect(() => {
        setNewDirection(state.targetPosition, state.divPosition, state.speed, state.direction, dispatch);
    }, [state.targetPosition, state.divPosition]);

    return (
        <animate.div
            style={{
            translateX: COORDINATE_X.value,
            translateY: COORDINATE_Y.value,
            }}
        >
            <div className="character_mask unselectable" ref = {divRef}>            
                <img src={`/assets/duck_sprite_with_idle.png`} className={`character_spritesheet pixel_art face-${state.direction} movement_speed_${state.speed}`} alt="Desktop_Pet" />
            </div>
        </animate.div>
    );
};

// #region Helper Methods
const setNewDirection = (point2: any, point1: any, speed: Speeds, direction: Directions, dispatch: any) => {
    const directionVector = calculateDirectionVectorAndDistance(point2, point1);

    const dx = directionVector.dx;
    const dy = directionVector.dy;
    const distance = directionVector.distance;

    
    if (distance > 700) {
        if (speed !== Speeds.Fast) dispatch({ type: DuckCursorActions.SetSpeed, payload: Speeds.Fast});
    } else if (distance >= 200 && distance <= 1300) {
        if (speed !== Speeds.Normal) dispatch({ type: DuckCursorActions.SetSpeed, payload: Speeds.Normal});
    } else {
        if (speed !== Speeds.Slow) dispatch({ type: DuckCursorActions.SetSpeed, payload: Speeds.Slow});
    }

    if (distance < 60) {
        if (direction !== Directions.Idle) dispatch({ type: DuckCursorActions.SetDirection, payload: Directions.Idle});
    } else {
        if (Math.abs(dx) > Math.abs(dy)) {
            if (dx > 0) {
                if (direction !== Directions.Right) dispatch({ type: DuckCursorActions.SetDirection, payload: Directions.Right});
            } else {
                if (direction !== Directions.Left) dispatch({ type: DuckCursorActions.SetDirection, payload: Directions.Left});
            }
        } else {
            if (dy > 0) {
                if (direction !== Directions.Down) dispatch({ type: DuckCursorActions.SetDirection, payload: Directions.Down});
            } else {
                if (direction !== Directions.Up) dispatch({ type: DuckCursorActions.SetDirection, payload: Directions.Up});
            }
        }
    }
    
}

const calculateEndPosition = (position: number) => {
    return position - 60 - CURSOR_SIZE / 2;
}

const calculateDirectionVectorAndDistance = (point2: any, point1: any) => {
    const directionVector = {
        x: point2.x - point1.x,
        y: point2.y - point1.y
    };

    return { 
        dx: directionVector.x, 
        dy: directionVector.y, 
        distance: Math.sqrt(directionVector.x * directionVector.x + directionVector.y * directionVector.y)
    };
};
// #endregion
export default DuckCursor;