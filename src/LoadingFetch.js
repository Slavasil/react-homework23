import useJsonFetch from './useJsonFetch.js';

function LoadingFetch() {
  const [data, loading, error] = useJsonFetch('http://localhost:7070/loading');

  return (
    <div>
    {loading ? 'Данные загружаются...' : error == null ? ('Данные: ' + JSON.stringify(data)) : ('Ошибка: ' + error)}
    </div>
  );
}

export default LoadingFetch;