import axios from "axios";

const apiURL = 'https://api.github.com/users/krisnafirdaus';

export const fetchData = (data) => {
    return {
        type: "FETCH_GITHUB_DATA",
        data,
    }
};

export const fetchGitHubData = () => {
    return (dispatch) => {
        return axios
            .get(apiURL)
            .then((response) => {
                dispatch(fetchData(response.data));
            })
            .catch((error) => {
                throw error
            });
    }
};