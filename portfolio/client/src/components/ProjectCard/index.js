import React from "react";
import "./style.css";
// import projects from '../../projectcards.json';

function ProjectCard(props) {
  return (
    <div className="card">
       {/* <img alt={props.name} src={props.image} /> */}
       <img alt={props.name} src={`${ process.env.PUBLIC_URL }/image/${props.image}`} />
       {/* <img alt={ project.name } src={ `${ process.env.PUBLIC_URL }/image/${ project.image }` } /> */}

       <p className="card-header" href={props.href}><u>{props.name}</u></p>
       <p className="card-text">{props.mypart}</p>
    </div>
  );
}

export default ProjectCard;
