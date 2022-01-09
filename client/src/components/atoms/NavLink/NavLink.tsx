import React from 'react';
import { Link, useMatch, useResolvedPath } from 'react-router-dom';
import type { LinkProps } from 'react-router-dom';

function NavLink({ children, to, ...props }: LinkProps) {
  const resolved = useResolvedPath(to);
  const match = useMatch({ path: resolved.pathname, end: true });

  return (
    <Link
      className={
        match
          ? 'bg-red-500 dark:bg-green-600 w-36 md:w-20 h-8 rounded-lg flex justify-center items-center '
          : 'border-2 border-green-700 w-36 md:w-20 h-8 rounded-lg flex justify-center items-center'
      }
      to={to}
      {...props}
    >
      {children}
    </Link>
  );
}

export default NavLink;
