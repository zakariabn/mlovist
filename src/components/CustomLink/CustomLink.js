import React from 'react';
import { Link, useMatch, useResolvedPath } from 'react-router-dom';

function CustomLink({ children, to, ...props }) {
  let resolved = useResolvedPath(to);
  let match = useMatch({ path: resolved.pathname, end: true });

  return (
    <div>
      <Link
        style={{ 
          color: match ? "white" : "initial",   
          backgroundColor: match ? "green" : "initial",   
          padding: match ? "1rem" : "1rem",   
        }}
        to={to}
        {...props}
      >
        {children}
      </Link>
      {match && ""}
    </div>
  );
}

export default CustomLink;