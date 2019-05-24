import React, {Component} from 'react';
import Layout from './components-dumb/Layout/Layout';
import BurgerBuilder from './container-smart/BurgerBuilder/BurgerBuilder';


class App extends Component {
  render () {
    return (
      <div>
        <Layout>
          <BurgerBuilder />
        </Layout>
      </div>
    );
  }
}

export default App;
