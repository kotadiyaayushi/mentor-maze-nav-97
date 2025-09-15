import { ReactNode } from 'react';
import { NavLink } from 'react-router-dom';
import { LucideIcon } from 'lucide-react';

interface SidebarItem {
  icon: LucideIcon;
  label: string;
  path: string;
}

interface SidebarProps {
  items: SidebarItem[];
  collapsed: boolean;
  basePath: string;
  className?: string;
}

const Sidebar = ({ items, collapsed, basePath, className = '' }: SidebarProps) => {
  return (
    <aside className={`sidebar ${collapsed ? 'collapsed' : ''} ${className}`}>
      <nav className="sidebar-nav">
        {items.map((item) => (
          <NavLink
            key={item.path}
            to={`${basePath}${item.path}`}
            className={({ isActive }) =>
              `sidebar-item ${isActive ? 'active' : ''}`
            }
          >
            <item.icon size={20} className="flex-shrink-0" />
            {!collapsed && (
              <span className="ml-3 transition-all duration-200">{item.label}</span>
            )}
          </NavLink>
        ))}
      </nav>
    </aside>
  );
};

export default Sidebar;