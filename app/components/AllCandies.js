import React from 'react';

import {connect} from "react-redux";

import {createSetCandiesAction, createThunkActionToFetchCandies} from "../reducers";

class AllCandies extends React.Component {
    componentDidMount() {
        this.props.getCandies();
    }
    render() {
        const {theCandies} = this.props;
        return (
            <div>
                {theCandies.map(candy => {
                    return (<div>
                        <h3>{candy.name}</h3>
                        <h5>Quantity: {candy.quantity}</h5>
                        <img className="candy-image" src={candy.imageUrl} />
                    </div>);
                })}
                <button onClick={this.props.rawSetCandies}>Set test candies</button>
            </div>
        );
    }
}

// Single Responsibiility Principle connector
const connector = connect(
    (fullReduxState) => { // mapStateToProps
        return {
            theCandies: fullReduxState.candies
        };
    },
    (dispatch) => {
        return {
            rawSetCandies: () => {
                dispatch(createSetCandiesAction([{id: 1, name: "testingagain"}]));
            },
            getCandies: () => {
                const thunk = createThunkActionToFetchCandies();
                dispatch(thunk);
            }
        };
    }
);

export default connector(AllCandies);