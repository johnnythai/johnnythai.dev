import React from 'react';

const Project2 = () => {
    return(
        <>
            <a href="https://fis.johnnythai.dev" className="project card basis-80 border my-4">
                <h3 className="text-lg mb-3">Sandbox Application for FIS Horizon API</h3>
                <p className="leading-6">ReactJS. Express. NodeJS.</p>
            </a>
        </>
    )
}

const Project1 = () => {
    return(
        <>
            <a href="https://alpaca.johnnythai.dev" className="project card basis-80 border my-4">
                <h3 className="text-lg mb-3">Alpaca Web Application</h3>
                <p className="leading-6">Stream market data.</p>
            </a>
        </>
    )
}

const ProjectsHeader = () => {
    return(
        <div className="project-header w-40 text-xl font-semibold text-center py-6 pl-6 pr-3 mr-3 border-r">
            <h2>Projects</h2>
        </div>
    )
}

const Projects = () => {    
    return(
        <div className="projects flex columns-2 justify-center align-center my-6">
            <ProjectsHeader />
            <div className="cards grid-cols-2 flex flex-wrap align-center justify-left w-10/12">
                <Project1 />
            </div>
        </div>
    )
}

export default Projects;
