import { Switch, Route } from 'react-router-dom';
import NotFound from './components/NotFound/NotFound';
import SearchTerm from './components/Search/SearchBar';

const Routes = () => {
  return (
    <Switch>
      <Route path='/' component={SearchTerm} />
      <Route path='*' component={NotFound} />
    </Switch>
  );
};
export default Routes;
