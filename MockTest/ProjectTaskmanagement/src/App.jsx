import { useState } from "react";

import ProjectsSideBar from "./components/ProjectsSideBar";
import NewProject from "./components/NewProject";

import NoProjectSelected from "./components/NoProjectSelected";

import SelectedProject from "./components/SelectedProject";

function App() {
  const [projectState, setProjectState] = useState({
    selectedProjectId: undefined,
    projects: [],
    tasks: [],
  });

  // add task
  const handleAddTask = (text) => {
    setProjectState((prevState) => {
      const newTask = {
        text: text,
        projectId: prevState.selectedProjectId,
        id: Math.random(),
      };
      return {
        ...prevState,
        tasks: [newTask, ...prevState.tasks],
      };
    });
  };
  //delete task
  const handleDeleteTask = (id) => {
    setProjectState((prevState) => {
      return {
        ...prevState,

        tasks: prevState.tasks.filter((task) => task.id !== id),
      };
    });
  };

  //Adding start NewProject layout
  const handleStartAddProject = () => {
    setProjectState((prevState) => {
      return {
        ...prevState,
        selectedProjectId: null, //adding new project
      };
    });
  };
  //end Adding New Project
  const handleAddProject = (projectData) => {
    console.log(projectData);
    setProjectState((prevState) => {
      const newProject = {
        ...projectData,
        id: Math.random(),
      };
      return {
        ...prevState,
        selectedProjectId: undefined,
        projects: [...prevState.projects, newProject],
      };
    });
  };
  console.log(projectState);

  //cancel new project creation
  const handleCancelAddProject = () => {
    setProjectState((prevState) => {
      return {
        ...prevState,
        selectedProjectId: undefined,
      };
    });
  };
  //select project
  const handleSelectProject = (id) => {
    // console.log(id);
    setProjectState((prevState) => {
      return {
        ...prevState,
        selectedProjectId: id,
      };
    });
  };

  //delete project
  const handleDeleteProject = () => {
    setProjectState((prevState) => {
      return {
        ...prevState,
        selectedProjectId: undefined,
        projects: prevState.projects.filter(
          (project) => project.id !== prevState.selectedProjectId
        ),
      };
    });
  };

  const selectedProject = projectState.projects.find(
    (project) => project.id === projectState.selectedProjectId
  );

  let content = (
    <SelectedProject
      project={selectedProject}
      onDelete={handleDeleteProject}
      onAddTask={handleAddTask}
      onDeleteTask={handleDeleteTask}
      tasks={projectState.tasks}
    />
  );
  if (projectState.selectedProjectId === null) {
    content = (
      <NewProject onAdd={handleAddProject} onCancel={handleCancelAddProject} />
    );
  } else if (projectState.selectedProjectId === undefined) {
    content = <NoProjectSelected onStartAddProject={handleStartAddProject} />;
  }

  // console.log(content);
  return (
    <>
      {/* <h1 className="text-3xl font-bold underline">Project Management</h1> */}
      <main className="h-screen flex gap-8">
        <ProjectsSideBar
          onStartAddProject={handleStartAddProject}
          projects={projectState.projects}
          onSelectProject={handleSelectProject}
          selectedProjectId={projectState.selectedProjectId}
        />
        {/* <NewProject /> */}
        {content}
      </main>
    </>
  );
}

export default App;
