import React from 'react';
import {Header} from './components/layout/Header';
import {Content} from './components/layout/Content';
import {ProjectsProvider, SelectedProjectProvider} from './context';
import './App.scss';


export const App = () => {
  return(
    <SelectedProjectProvider>
      <ProjectsProvider>
        <div className="App">
          <header className="App-header">
            <Header/>
            <Content/> 
          </header>
       </div>
      </ProjectsProvider>
    </SelectedProjectProvider>
    
  );
}



