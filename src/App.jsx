import './App.css';
import TextForm from './components/TextForm.jsx';
import ListForm from './components/ListForm.jsx';

function App() {
  return (
    <>
      <div className='info-container'>
        <TextForm title='Personal Info'/>
        <ListForm title='Education' formType='education'/>
        <ListForm title='Work Experience' formType='experience'/>
      </div>
    </>
  )
}

export default App
