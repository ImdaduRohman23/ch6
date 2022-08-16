export default function GithubReducer(state = [], action) {
    console.log(action);
    switch (action.type) {
        case "FETCH_GITHUB_DATA":
            return action.data;
        default:
            return state;
    }
}