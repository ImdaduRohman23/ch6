import axios from "axios";

const apiURL = 'https://api.github.com/users/krisnafirdaus';

// export const fetchData = (data) => {
//     return {
//         type: "FETCH_GITHUB_DATA",
//         data,
//     }
// };

export const fetchGitHubData = () => {
    return (dispatch) => {
        dispatch({
            type: "FETCH_GITHUB_PENDING",
        });

        return axios
            .get(apiURL)
            .then((response) => {
                dispatch({
                    type: "FETCH_GITHUB_SUCCESS",
                    data: response.data,
                });
            })
            .catch((error) => {
                throw error
            });
    }
};