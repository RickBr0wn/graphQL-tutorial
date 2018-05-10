import React from 'react'

// Components
import BookList from './Components/BookList'

class App extends React.Component {
  render() {
    return (
      <div id="main">
        <h1>Rick's Reading List</h1>
        <BookList />
      </div>
    );
  }
}

export default App;
