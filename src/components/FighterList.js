import React from 'react';
import { connect }  from 'react-redux';
import  { fetchFighters } from '../actions/index.js';
import  FighterTitle  from './FighterListTitle';
import NewFighterForm from './NewFighterForm';


class FighterList extends React.Component {
    componentDidMount() {
        this.props.fetchFighters();
    }

    renderList() {
        
        return this.props.fighters.fighters.map(fighter => { console.log(fighter)
            return (
               
               
                <div className="ui card" key={fighter.id}>
                 <div className="image">
                    <img src={fighter.image_url} alt="combat athlete" />
                </div> 
                <div className="header">
                    {fighter.name}
                 
                <div className="descrition"> 
                  <p>    
                Style:  {fighter.style}
                <br/>
                Wins:  {fighter.wins}
                <br/>
                Losses:  {fighter.losses}
                </p> 
                </div>
              </div> 
            </div>
        
               
          );
        });
      }

    render() {
        return (
        <div>
            <div>      
            <FighterTitle />
            </div>
            <NewFighterForm />
            {this.renderList()}
        </div>  
        );  
    }
}
            
const mapStateToProps = state => {
    return { 
        fighters: state.fighters, 
        loading: state.loading
    };
  };

export default connect(
    mapStateToProps,
    { fetchFighters},  
  )(FighterList);
  
  