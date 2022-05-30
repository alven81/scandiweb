import {SET_CURRENCY} from "../actions/actions";

const initialState = {
    data: [0]
};

export default function reduxCurrencyReducer(state = initialState, action) {
    switch (action.type) {
        case SET_CURRENCY: {
            return {
                ...state,
                data: action.payload
            }
        }
        default: {
            return state;
        }
    }
}