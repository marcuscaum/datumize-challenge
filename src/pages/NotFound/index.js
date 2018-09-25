import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => (
  <section>
    <h1>404</h1>
    <h2>Page not found</h2>
    <Link to="/projects">Go to projects</Link>
  </section>
);

export default NotFound;
