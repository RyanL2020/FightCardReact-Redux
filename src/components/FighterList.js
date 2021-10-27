import React from 'react';
import { connect }  from 'react-redux';
import { fetchFighters } from '../actions';


class Fighter extends React.Component {
    componentDidMount() {
        this.props.fetchFighters();
    }
    renderList() {
        return this.props.posts.map(fighter => {
          return (
            <div>                                 
                  <h2>{fighter.name}</h2>
                  <p>{fighter.style}</p>
            </div>
          );
        });
      }

    render() {
        return <div>{this.renderList()}</div>    
    }
}
const mapStateToProps = state => {
    return { posts: state.fighters };
  };

export default connect(
    mapStateToProps,
    { fetchFighters},  
  )(Fighter);
  
  