import './App.css';
import TextForm from './components/TextForm.jsx';
import ListForm from './components/ListForm.jsx';

function App() {
  return (
    <>
      <TextForm title='Personal Info'/>
      <ListForm title='Education'/>
      <ListForm title='Work Experience'/>
    </>
  )
}

export default App
