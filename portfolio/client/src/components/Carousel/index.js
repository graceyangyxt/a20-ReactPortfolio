import React from "react";
import { Carousel } from 'react-bootstrap'
import projects from '../../projectcards.json';

function ProjectCarousel(prop) {
  const mapProjects = () => projects.map( project => (
    <Carousel.Item key={ project.id }>
      <img className="d-block w-100" src={ `${ process.env.PUBLIC_URL }/image/${ project.image }` } alt={ project.name } />
    </Carousel.Item>
  ) );

  return (
    <Carousel>
      { mapProjects() }
    </Carousel>
  );
}

export default ProjectCarousel;