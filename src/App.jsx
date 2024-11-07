import Form from "./Components/Form";

function App() {
  const style = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    border: '2px solid black',
    padding: '20px',
    width: '300px',
    margin: 'auto'

  }
  return (
    <div className="App" style={style}>
      <h1>Forulario de registro</h1>
      <Form></Form>
    </div>
  );
}

export default App;
