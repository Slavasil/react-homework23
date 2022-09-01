import useJsonFetch from './useJsonFetch.js';

function ErrorFetch() {
  const [data, loading, error] = useJsonFetch('http://localhost:7070/error');

  return (
    <div>
      {loading ? 'Данные загружаются...' : error == null ? ('Данные: ' + JSON.stringify(data)) : ('Ошибка: ' + error)}
    </div>
  );
}

export default ErrorFetch;