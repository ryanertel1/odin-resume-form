import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import TextBox from './components/TextBox.jsx'
import { MdEmail } from 'react-icons/md'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <TextBox icon={<MdEmail />} type={'text'} placeholder={'empty'}/>
    <TextBox type={'text'} placeholder={'Placeholder'} />
  </StrictMode>,
)
