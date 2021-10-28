import React from 'react';


class NewFighterForm extends React.Component {
    render(){
        return (
            <form className="ui form">
              <div className="field">
                <label>Fighter Name</label>
                <input type="text" name="first-name" placeholder="First Name" />
              </div>
              <div className="field">
                <label>Style</label>
                <input type="text" name="fighting-style" placeholder="Fighting Style" />
              </div>
              <div className="field">
                <label>Wins</label>
                <input type="text" name="wins" placeholder="Wins" />
              </div>
              <div className="field">
                <label>Losses</label>
                <input type="text" name="Losses" placeholder="Losses" />
              </div>
              <button className="ui button" type="submit">Submit</button>
            </form>

        );
    }
}

export default NewFighterForm;