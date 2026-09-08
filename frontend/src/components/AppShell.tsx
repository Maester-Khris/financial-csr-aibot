import type { ReactNode } from 'react';
import type { Screen } from '../App';
import { Sidebar } from './Sidebar';
import './AppShell.css';

type AppShellProps = {
  active: Screen;
  onNavigate: (screen: Screen) => void;
  children: ReactNode;
};

export function AppShell({ active, onNavigate, children }: AppShellProps) {
  return (
    <div className="app-shell">
      <Sidebar active={active} onNavigate={onNavigate} />
      <main className="app-shell__content">{children}</main>
    </div>
  );
}
