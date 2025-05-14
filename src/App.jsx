import './App.css';
import TextForm from './components/TextForm.jsx';
import ListForm from './components/ListForm.jsx';
import { PDFViewer } from '@react-pdf/renderer';
import ResumePane from './components/ResumePane.jsx';
import { useState } from 'react';

function App() {
  const fakeUser = {
    name: 'Fake name',
    phone: 'XXX-XXX-XXXX',
    email: 'XXX@XX.XXX',
    address: 'XXXXX, XX',
  }
  const [userData, setUserData] = useState({ ...fakeUser });
  const [educationData, setEducationData] = useState();
  const [experienceData, setExperienceData] = useState();
  const [pdfData, setPdfData] = useState({
    userData: { ...fakeUser },
    educationData: educationData,
    experienceData: experienceData,
  });

  const generatePDF = () => {
    let newPdfData = { ...pdfData }
    newPdfData.userData = userData;
    newPdfData.educationData = educationData;
    newPdfData.experienceData = experienceData;
    setPdfData(newPdfData);
  }

  const handleUserData = (data) => {
    setUserData(data);
  }

  const handleEducationData = (data) => {
    let newData = [...data];
    setEducationData(newData);
  }

  const handleExperienceData = (data) => {
    let newData = [...data];
    setExperienceData(newData);
  }

  return (
    <>
      <div className='info-container'>
        <TextForm title='Personal Info' handleData={handleUserData} data={userData}/>
        <ListForm title='Education' formType='education' handleData={handleEducationData} data={educationData}/>
        <ListForm title='Work Experience' formType='experience' handleData={handleExperienceData} data={experienceData}/>
        <button onClick={generatePDF} className='generate-pdf-button'>Generate PDF</button>
      </div>
      <PDFViewer className='pdf-viewer'>
        <ResumePane userData={pdfData.userData} educationData={pdfData.educationData} experienceData={pdfData.experienceData}/>
      </PDFViewer>
    </>
  )
}

export default App
