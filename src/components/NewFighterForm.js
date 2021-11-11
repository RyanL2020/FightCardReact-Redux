import React from 'react';
import { connect } from 'react-redux';
import  addFighter   from '../actions/addFighter';


class NewFighterForm extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            firstName: " ",
            style:  " ",
            wins: 0 ,
            losses: 0 
            
        }
        this._change = this._handleInputChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)

    }

    _handleInputChange(event) {
        this.setState({ value: event.target.value })
    }

    handleSubmit(event){
        event.preventDefault();
        let imageUrl = event.target.imageUrl.value;
        let name = event.target.name.value;
        let style = event.target.style.value;
        let wins = event.target.wins.value;
        let losses = event.target.losses.value;
        const newFighter = {
            imageUrl,
            name,
            style,
            wins,
            losses
        }
        this.props.addFighter(newFighter);
    }
    


    render(){
        return (
            
            <form  onSubmit={this.handleSubmit}className="ui form">
              <div className="field">
                  <label>fighter Image</label>
                  <input type="text" name="imageUrl" value={this.imageUrl.value} onChange={this._change} />
                <label>Fighter Name</label>
                <input type="text" name="name" value={this.name.value} onChange={this._change} placeholder="First Name" />
              </div>
              <div className="field">
                <label>Style</label>
                <input type="text" name="style" value={this.style.value} onChange={this._change}  placeholder="Fighting Style" />
              </div>
              <div className="field">
                <label>Wins</label>
                <input type="text" name="wins" value={this.wins.value} onChange={this._change} placeholder="Wins" />
              </div>
              <div className="field">
                <label>Losses</label>
                <input type="text" name="Losses" value={this.losses.value} onChange={this._change}   placeholder="Losses" />
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


