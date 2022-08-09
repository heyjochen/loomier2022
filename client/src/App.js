import { Route, Routes } from 'react-router-dom';
import { Home } from './pages/Home';
import { Dashboard } from './pages/Dashboard';
import { Projects } from './components/Projects';
import { Create } from './components/Create';
import { Profile } from './components/Profile';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="dashboard" element={<Dashboard />}>
        {/* <Route path="profile" element={<Profile />} /> */}
        <Route path="projects" element={<Projects />} />
        <Route path="create" element={<Create />} />
        <Route path="profile" element={<Profile />} />
      </Route>
    </Routes>
  );
}

export default App;
