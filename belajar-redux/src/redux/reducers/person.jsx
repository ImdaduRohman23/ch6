import { ADD } from "../actions/person";
const initialState = [
    {
        id: 1,
        name: 'Imdadu Rohman',
        addres: 'di sini',
        phoneNumber: '0823232323',
        photo: 'https://images.unsplash.com/photo-1660135921532-86b698da6cd8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80',
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