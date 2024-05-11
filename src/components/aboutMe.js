import React from 'react';

const Github = () => {
    return(
        <div className="my-4">   
            <a href="https://github.com/johnnythai/" className="aboutme-description text-sky-800 hover:text-sky-600">
                <h3>Github</h3>
            </a>
            <p>Source code for all my projects!</p>
        </div>
    )
}

const AboutMe = () => {
    return(
        <div className="my-4">
            <a href="https://www.linkedin.com/in/johnny-thai-797409171/" className="aboutme-description text-sky-800 hover:text-sky-600">
                <h3>LinkedIn</h3>
            </a>
            <p>
	    	Experienced banking professional with a background in retail banking and bank operations. 
	    	Passion for technology and software, with a keen interest in leveraging these skills to drive development and innovation.
	    </p>
        </div>
    )
}

const AboutMeSection = () => {
    return(
        <div className="aboutme flex columns-2 justify-center align-center">
            <h2 className="aboutme-header w-40 text-xl font-semibold text-center py-6 pl-6 pr-3 mr-3 border-r">About Me</h2>
            <div className="aboutme-content w-10/12">
                <AboutMe />
                <Github />
            </div>
        </div>
    )
}

export default AboutMeSection;
