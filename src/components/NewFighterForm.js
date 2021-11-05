import React from 'react';
import { connect } from 'react-redux';
import  addFighter   from '../actions/addFighter';


class NewFighterForm extends React.Component {

    handleSubmit(event){
        event.preventDefault();
        let name = event.target.firstName.value;
        let style = event.target.fightingStyle.value;
        let wins = event.target.wins.value;
        let losses = event.target.losses.value;
        this.props.addFighter(name, style, wins, losses);
    }
    


    render(){
        return (
            <form  onSubmit={this.handleSubmit}className="ui form">
              <div className="field">
                <label>Fighter Name</label>
                <input type="text" name="first-name" placeholder="First Name" />
              </div>
              <div className="field">
                <label>Style</label>
                <input type="text" name="fighting-style"  placeholder="Fighting Style" />
              </div>
              <div className="field">
                <label>Wins</label>
                <input type="text" name="wins" placeholder="Wins" />
              </div>
              <div className="field">
                <label>Losses</label>
                <input type="text" name="Losses"  placeholder="Losses" />
              </div>
              <button className="ui button" type="submit" >Submit</button>
            </form>

        );
    };
}

const mapStateToProps = (state) => {
      return {
          firstName: state.firstName,
          style: state.style,
          wins: state.wins,
          losses: state.losses
  };

};
 
export default  connect(
    mapStateToProps,
    { addFighter },
)(NewFighterForm);

    
//export default NewFighterForm;

//////const mapStateToProps = (state) => {
  ////  return {
  ////      firstName: state.firstName,
  ////      style: state.style,
  ////      wins: state.wins,
  ////      losses: state.losses
  ////  };

//};
 
//export default  connect(
//    mapStateToProps,
//    { addFighter },
//)(NewFighterForm);


