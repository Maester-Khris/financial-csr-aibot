import { useState } from 'react';
import { AppShell } from './components/AppShell';
import { Landing } from './screens/Landing';
import { Dashboard } from './screens/Dashboard';
import { Chat } from './screens/Chat';
import { Documents } from './screens/Documents';
import { Ledger } from './screens/Ledger';

export type Screen = 'landing' | 'dashboard' | 'chat' | 'documents' | 'ledger';

function App() {
  const [screen, setScreen] = useState<Screen>('landing');

  if (screen === 'landing') {
    return <Landing onEnterApp={() => setScreen('chat')} />;
  }

  return (
    <AppShell active={screen} onNavigate={setScreen}>
      {screen === 'dashboard' && <Dashboard onNavigate={setScreen} />}
      {screen === 'chat' && <Chat />}
      {screen === 'documents' && <Documents />}
      {screen === 'ledger' && <Ledger />}
    </AppShell>
  );
}

export default App;
