import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../../auth/AuthContext';

function AuthenticatedNav() {
  const { signOut } = useAuth();

  return (
    <div>
      <Link to="/"><button>Home</button></Link>
      <Link to="/reminiscenceroom"><button>Reminiscence Room</button></Link>
      <Link to="/writingdesk"><button>Writing Room</button></Link>
      <Link to="/readingroom"><button>Reading Room</button></Link>
      <button onClick={signOut}>Logout</button>
    </div>
  );
}

export default AuthenticatedNav;
