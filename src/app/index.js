import React from 'react';
import { render } from 'react-dom';

import { Header } from './components/Header';
import { Home } from  './components/Home';


class App extends  React.Component {
    render() {
        return (
          <div className="container">
              <h1>Main Component</h1>

          </div>
        );
    }

}

render(<App />, window.document.getElementById('root'));