import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    ships: [],
    ship: {},
};

export const shipSlice = createSlice({
    name: 'ship',
    initialState,
    reducers: {
        setShips: (state, { payload }) => {
            console.log(state)
            console.log(payload)
            console.log('setShips');
            state.ships = payload;
            console.log("AFTER PAYLOAD: ", state)
        },
        setShip: (state, { payload }) => {
            console.log(state)
            console.log(payload)
            console.log('setShip');
            state.ship = payload;
        },
        resetShip: (state) => {
            console.log(state)
            console.log('resetShip');
            state.ship = {};
        },
    },
});

export const shipReducer = shipSlice.reducer;

export const { setShips, setShip, resetShip } = shipSlice.actions;