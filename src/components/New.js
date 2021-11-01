import React from "react";
import {fetchFighters} from "../actions";
import { connect } from 'react-redux';

class New extends React.Component {
    componentDidMount() {
        debugger
        this.props.fetchFighters();
    }

    renderList() {
        
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
        return <div>{this.renderList()} </div>; 
    };
};


export default connect(
    null,
    { fetchFighters},  
  )(New);
  