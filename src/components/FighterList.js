import React from 'react';
import { connect }  from 'react-redux';
import { fetchFighters } from '../actions';
import  FighterTitle  from './FighterListTitle';


class Fighter extends React.Component {
    componentDidMount() {
        this.props.fetchFighters();
    }

    renderList() {
        console.log(this.props.fighters);
        return this.props.fighters.map(fighter => {
            return (
               
            <div className="item" key={fighter.id}>
              <div className="ui card">
                <div className="image">
                    <img src={fighter.image_url} alt="combat athlete" />
                </div>
                <div className="header">
                    {fighter.name}
                 
                <div className="descrition"> 
                  <p>    
                <h4>Style:  {fighter.style}</h4>
                <h4> Wins:  {fighter.wins}</h4>
                <h4>Losses:  {fighter.losses}</h4>
                </p> 
                </div>
              </div> 
            </div>
        </div>
             
          );
        });
      }

    render() {
        return (
        <div>
            <FighterTitle />
            {this.renderList()}
        </div>  
        );  
    }
}
            
const mapStateToProps = state => {
    return { fighters: state.fighters };
  };

export default connect(
    mapStateToProps,
    { fetchFighters},  
  )(Fighter);
  
  