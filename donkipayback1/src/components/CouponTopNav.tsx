import { Link, useLocation } from 'react-router-dom';

export default function CouponTopNav() {
  const location = useLocation();
  const currentPath = location.pathname;

  const navItems = [
    { path: '/donki', label: '돈키호테' },
    { path: '/drugstore', label: '드럭스토어' },
    { path: '/department', label: '백화점' },
    { path: '/electronics', label: '전자상가' },
  ];

  return (
    <nav className="bg-white border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-2xl mx-auto px-4">
        <div className="flex items-center justify-between overflow-x-auto whitespace-nowrap hide-scrollbar">
          {navItems.map((item) => {
            const isActive = currentPath === item.path;
            return (
              <Link
                key={item.path}
                to={item.path}
                className={`py-4 px-3 text-sm font-medium border-b-2 transition-colors ${
                  isActive
                    ? 'border-black text-black'
                    : 'border-transparent text-gray-500 hover:text-black'
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </div>
      </div>
    </nav>
  );
}
