import { ADD } from "../actions/person";
const initialState = [
    {
        id: 1,
        name: 'Imdadu Rohman',
        addres: 'di sini',
        phoneNumber: '0823232323'
    }
];

export default function (state = initialState, action) {
    switch (action.type) {
        case ADD:
            return [...state, action.payload];
        default:
            return state;
    }
}