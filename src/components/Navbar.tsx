
import { Link, useNavigate } from 'react-router-dom';
import { removeToken, isLoggedIn } from '../utils/auth';

export default function Navbar() {
  const navigate = useNavigate();

  const handleLogout = () => {
    removeToken();
    navigate('/login');
  };

  const logged = isLoggedIn();

  return (
    <nav className="bg-white shadow p-3">
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex gap-4 items-center">
          <Link to="/dashboard" className="font-semibold">TechStore</Link>
          <Link to="/dashboard" className="text-sm text-gray-700">Dashboard</Link>
          <Link to="/products/new" className="text-sm text-gray-700">Crear</Link>
        </div>
        <div>
          {logged ? (
            <button onClick={handleLogout} className="text-sm text-red-600">Cerrar sesión</button>
          ) : (
            <Link to="/login" className="text-sm text-gray-700">Iniciar sesión</Link>
          )}
        </div>
      </div>
    </nav>
  );
}
