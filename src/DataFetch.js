import useJsonFetch from './useJsonFetch.js';

function DataFetch() {
  const [data, loading, error] = useJsonFetch('http://localhost:7070/data');

  return (
    <div>
      {loading ? 'Данные загружаются...' : error == null ? ('Данные: ' + JSON.stringify(data)) : ('Ошибка: ' + error)}
    </div>
  );
}

export default DataFetch;