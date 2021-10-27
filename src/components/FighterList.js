import React from 'react';
import { connect }  from 'react-redux';
import { fetchFighters } from '../actions';


class Fighter extends React.Component {
    componentDidMount() {
        this.props.fetchFighters();
    }

    render() {
        return <h1>Fighters go here </h1>
    }
}
const mapStateToProps = state => {
    return { posts: state.fighters };
  };

export default connect(
    mapStateToProps,
    { fetchFighters},  
  )(Fighter);
  
  