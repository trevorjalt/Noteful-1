import React from 'react';
import { Route, Link } from 'react-router-dom';
import STORE from './STORE'
import NavList from './NavList'
import NoteList from './NoteList'

class App extends React.Component {

  state = {
    folders: [],
    notes: []
  }

  componentDidMount() {
    this.setState({
      folders: STORE.folders,
      notes: STORE.notes
    })
  }


  render() {
    return (
      <div className='App'>
        <header className="App-header">
          <h1>
            <Link to="/">Noteful</Link>
          </h1>
        </header>
        <main className='App'>
          <Route
            path="/"
            render={() =>
              <NavList
                folders={this.state.folders} />
            }
          />
          <Route
            path="/"
            render={() =>
              <NoteList
                notes={this.state.notes} />
            }
          />
          {/* <Route
            path="/folder/:folderId"
            render={() =>
              <NavList
                notes={this.state.folders} />
            }
          /> */}
        </main>
      </div>
    );
  }
}

export default App;