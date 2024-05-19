
import './App.css';
// Styles
import './styles/index.css';
import './styles/navigation/top-navigation-bar/index.css'
import './styles/navigation/footer/index.css'

import { Navigate, Route, Routes, useLocation } from 'react-router-dom';
import { routes } from './config';
import { hideFooter, hideTopNavBar, isAuthenticated } from './utils';
import { Footer, TopNavBar } from './components';
function App() {
  const location = useLocation(); // Get URL
  const pageHasTopNavBar = hideTopNavBar(location, routes); // bool for checking if the page should have top nav or not, same case with the others
  const pageHasFooter = hideFooter(location, routes);
  return (
    <div>
      {pageHasTopNavBar && <TopNavBar /> /* Render TopNav if the page is included in the hideTopNavBar paths */} 
      
      <div className={`page-content ${pageHasTopNavBar && 'contains-tn'}`}>
        <Routes>
          {
            routes.map(
              route => (
                route.protected ? (
                  <Route key={route.path} path={route.path} element={isAuthenticated() ? route.component : <Navigate to="/" />} />
                ) : (
                  <Route key={route.path} path={route.path} element={!isAuthenticated() ? route.component : <Navigate to="/"/> } /> // Protected route, add the appropriate navigation route in the 'to' attribute
                ) 
              )
            )
          }
        </Routes>
        {pageHasFooter && <Footer /> /* Render TopNav if the page is included in the hideFooter paths */}
      </div>
      
    </div>
  );
}

export default App;
