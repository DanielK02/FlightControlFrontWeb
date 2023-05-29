import './App.css';
import { TerminalsTable } from './Components/TerminalsTable';
import { LogsList } from './Components/LogsList';

function App() {
  return (
    <>
    <h1>Daniel's Flight Control</h1>
      <TerminalsTable></TerminalsTable>
      <LogsList></LogsList>
    </>
  );
}

export default App;
