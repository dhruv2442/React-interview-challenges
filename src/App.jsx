import { useState } from 'react';
import './App.css';
import Accordian from './Projects/Accordian/Acccordian';
import DependentDropdown from './Projects/DependentDropdown/DependentDropdown';
import EMICalc from './Projects/EMICalc/EMICalc';
import FileExplorer from './Projects/File Explorer/FileExplorer';
import Pagination from './Projects/Pagination/Pagination';
import TrelloBoard from './Projects/TrelloBoard/TrelloBoard';
function App() {
  const [project, setProject] = useState('');
  const handleSetProject = (proj) => {
    if (proj == project) {
      setProject('');
    } else {
      setProject(proj);
    }
  };

  return (
    <>
      <div className='MainWrapper'>
        <FileExplorer project={project} setProject={handleSetProject} />
        {/* <Pagination/> */}
        {/* <EMICalc/> */}
        <TrelloBoard project={project} setProject={handleSetProject} />
        <DependentDropdown project={project} setProject={handleSetProject} />
        <Accordian project={project} setProject={handleSetProject} />
      </div>
    </>
  );
}

export default App;
