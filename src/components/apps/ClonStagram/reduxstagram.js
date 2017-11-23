import React, {Component} from 'react';
import { render } from 'react-dom';

// Import css
import css from './styles/style.styl';

// Import Components
import App from './components/App';
import Single from './components/Single';
import PhotoGrid from './components/PhotoGrid';

// import react router deps
import { Router, Route,  } from 'react-router-dom';

// import { Provider } from 'react-redux';
// import store, { history } from './store';

// const router = (
//   <Provider store={store}>
//     <Router history={history}>
//       <Route path="/" component={App}>
//         <IndexRoute component={PhotoGrid}></IndexRoute>
//         <Route path="/view/:postId" component={Single}></Route>
//       </Route>
//     </Router>
//   </Provider>
// )
//
// render(router, document.getElementById('root'));


class reduxstagram extends Component {
  render() {
    return (
        <div>
          <Route path="/" component={App}>
            <Route path="/main" component={PhotoGrid}></Route>
            <Route path="/view/:postId" component={Single}></Route>
          </Route>
        </div>
    );
  }
}

reduxstagram.propTypes = {};
reduxstagram.defaultProps = {};

export default reduxstagram;
