import useTime from './hooks/useTime';

function App() {
  const day = useTime('day');
  const hour = useTime('hour');

  return (
    <div style={{ padding: '2rem', fontFamily: 'Arial, sans-serif' }}>
      <h2>Today</h2>
      <h3>Day: {day}</h3>
      <h3>Hour: {hour}</h3>
    </div>
  );
}

export default App;
