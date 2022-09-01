import './App.css';
import DataFetch from './DataFetch';
import ErrorFetch from './ErrorFetch';
import LoadingFetch from './LoadingFetch';

function App() {
  return (
    <>
      <DataFetch/>
      <LoadingFetch/>
      <ErrorFetch/>
    </>
  );
}

export default App;
