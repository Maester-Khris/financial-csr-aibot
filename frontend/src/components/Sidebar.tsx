import type { Screen } from '../App';
import { ChatIcon, DashboardIcon, DocumentsIcon, LedgerIcon } from './Icons';
import './Sidebar.css';

type NavItem = {
  id: Screen;
  label: string;
  icon: React.ComponentType<{ size?: number; className?: string }>;
  badge?: string;
};

const NAV_ITEMS: NavItem[] = [
  { id: 'dashboard', label: 'Dashboard', icon: DashboardIcon },
  { id: 'chat', label: 'Chat', icon: ChatIcon, badge: '2 active' },
  { id: 'documents', label: 'Documents', icon: DocumentsIcon, badge: '3' },
  { id: 'ledger', label: 'Ledger', icon: LedgerIcon },
];

type SidebarProps = {
  active: Screen;
  onNavigate: (screen: Screen) => void;
};

export function Sidebar({ active, onNavigate }: SidebarProps) {
  return (
    <nav className="sidebar">
      <div className="sidebar__brand">
        <span className="sidebar__brand-mark" aria-hidden="true" />
        <div>
          <div className="sidebar__brand-name">Ledger Assistant</div>
          <div className="sidebar__brand-sub mono">PROD-INDEX v1.4</div>
        </div>
      </div>

      <ul className="sidebar__nav">
        {NAV_ITEMS.map((item) => {
          const Icon = item.icon;
          const isActive = item.id === active;
          return (
            <li key={item.id}>
              <button
                type="button"
                className={`sidebar__nav-item${isActive ? ' sidebar__nav-item--active' : ''}`}
                onClick={() => onNavigate(item.id)}
                aria-current={isActive ? 'page' : undefined}
              >
                <Icon size={18} />
                <span className="sidebar__nav-label">{item.label}</span>
                {item.badge && <span className="sidebar__nav-badge mono">{item.badge}</span>}
              </button>
            </li>
          );
        })}
      </ul>

      <div className="sidebar__footer">
        <span className="sidebar__status-dot" aria-hidden="true" />
        <div>
          <div className="sidebar__footer-name">alex.turner@clarityledger.com</div>
          <div className="sidebar__footer-role mono">Senior Controller</div>
        </div>
      </div>
    </nav>
  );
}
