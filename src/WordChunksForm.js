import React from 'react';

class WordChunksForm extends React.Component {

  render(){

    return {
      <form>
        <label>
          Words:
          <input type="textarea" name="chunks" />
        </label>
        <input type="submit" value="Submit" />
      </form>
    };
  }
}
