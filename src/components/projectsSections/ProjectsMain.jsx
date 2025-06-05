import React from 'react'
import ProjectsText from './ProjectsText';
import SingleProjects from './SingleProjects';

const projects = [{
  name: '',
  year:'', 
  align:'',
  image:'',
  
}]
const ProjectsMain = () => {
  return (
    <div>
      <ProjectsText/>
      <div>
        <SingleProjects/>
      </div>
    </div>
  )
}

export default ProjectsMain
