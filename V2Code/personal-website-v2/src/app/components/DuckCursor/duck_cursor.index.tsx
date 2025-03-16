import { useMouseMove, useValue, animate, withTiming, interpolate, withSequence, withSpring, withEase } from "react-ui-animate";
import "./duck_cursor.style.css";

const CURSOR_SIZE = 40;

const DuckCursor = () => {
    const x = useValue(0);
    const y = useValue(0);

    let animationConfig = {
        tension: 3
    };
    useMouseMove(({ mouseX, mouseY }) => {
    x.value = withSpring(mouseX - 30 - CURSOR_SIZE / 2, animationConfig);
    y.value = withSpring(mouseY - CURSOR_SIZE / 2, animationConfig);
    });

    return (
    <animate.div
        style={{
        width: CURSOR_SIZE,
        height: CURSOR_SIZE,
        backgroundColor: interpolate(x.value, [-500, 1000], ['red', 'blue']),
        borderRadius: "50%",
        translateX: x.value,
        translateY: y.value,
        }}
    />
    );
};

export default DuckCursor;