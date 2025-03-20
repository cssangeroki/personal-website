import { createContext, useContext } from "react";

export enum Directions {
    Up = "up",
    Down = "down",
    Left = "left",
    Right = "right",
    Idle = "idle"
}

export enum Speeds {
    Slow = "slow",
    Normal = "normal",
    Fast = "fast"
}

export enum DuckCursorActions {
    SetDivPosition,
    SetTargetPosition,
    SetDirection,
    SetSpeed,
    SetTension
}

// #region Duck Cursor Context and Reducer functions

// Reducer values and states
export enum FollowCursorActions {
    ToggleCursorFollow,
    SetTargetCoordinate
}
export interface DuckCursorAnimationState {
    followCursor: boolean;
    targetCoordinate: { x: number; y: number };
}
export const duckCursorInitialState: DuckCursorAnimationState = {
    followCursor: false,
    targetCoordinate: { x: 0, y: 0 },
};

// Reducer for two state values, followCursor & targetCoordinate
export const followCoordinateReducer = (state: any, action: any): DuckCursorAnimationState => {
    switch (action.type) {
        case FollowCursorActions.ToggleCursorFollow:
        return { ...state, followCursor: !state.followCursor };
        case FollowCursorActions.SetTargetCoordinate:
        return { ...state, targetCoordinate: action.payload };
        default:
        return state;
    }
}

// Create ContextType and Context
export type FollowCursorContextType = {
    state: DuckCursorAnimationState;
    dispatch: React.Dispatch<FollowCursorActions>;
}
export const FollowCursorContext = createContext<FollowCursorContextType>({
    state: duckCursorInitialState,
    dispatch: () => {},
});

// Exported Method to Use Context
export const useFollowCursorContext = () => {
    const context = useContext(FollowCursorContext);
    if (!context) {
      throw new Error("useFollowCursorContext must be used within an FollowCursorContextProvider");
    }
    return context;
};

// #endregion
