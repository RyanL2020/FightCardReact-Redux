import React from 'react';
import { connect }  from 'react-redux';
import { fetchFighters } from '../actions';
import  FighterTitle  from './FighterListTitle';
import NewFighterForm from './NewFighterForm';


class Fighter extends React.Component {
    componentDidMount() {
        this.props.fetchFighters();
    }

    renderList() {
        console.log(this.props.fighters);
        return this.props.fighters.map(fighter => {
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
            <FighterTitle />
            <NewFighterForm />
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
  
  