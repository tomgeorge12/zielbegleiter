import { useRouteError } from 'react-router-dom';
import logo from '../logo.svg';

const ErrorBoundary = () => {
  const error:any = useRouteError();
  
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
        Sorry, an unexpected error has occurred.
        </p>
        <i>{error.statusText || error.message}</i>
      </header>
    </div>
  );
}

export default ErrorBoundary;
