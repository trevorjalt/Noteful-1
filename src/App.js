import React from 'react';
import { Route, Link } from 'react-router-dom';
import STORE from './STORE'
import NavList from './NavList'
import NoteList from './NoteList'
import Main from './Main'
import Note from './Note'

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
            exact path={"/"}
            render={(routerProps) =>
              <Main
                {...routerProps}
                folders={this.state.folders}
                notes={this.state.notes}
              />
            }
          />
          <aside>
            <Route
              path={"/folder/:folderId"}
              render={(routerProps) =>
                <NavList
                  {...routerProps}
                  folders={this.state.folders}
                />
              }
            />
            <Route
              path={"/note/:noteId"}
              render={(routerProps) =>
                <NavList
                  {...routerProps}
                  folders={this.state.folders}
                  notes={this.state.notes}
                />
              }
            />
          </aside>
          <section>
            <Route
              exact path={"/folder/:folderId"}
              render={(routerProps) =>
                <NoteList
                  {...routerProps}
                  notes={this.state.notes} />
              }
            />
            <Route
              path={"/note/:noteId"}
              render={(routerProps) =>
                <Note
                  {...routerProps}
                  notes={this.state.notes}
                />
              }
            />
          </section>
        </main>
      </div>
    );
  }
}

export default App;