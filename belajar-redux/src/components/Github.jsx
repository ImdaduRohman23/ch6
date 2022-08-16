import React from "react";
import { connect} from "react-redux";

const GitHub = (props) => {
    return (
        <div>
            <h1>Name: {props.data.name}</h1>
        </div>
    )
};

const mapStoreToPropos = (state) => {
    console.log(state);
    return {
        data: state.GithubReducer,
    }
}

export default connect(mapStoreToPropos, null)(GitHub);