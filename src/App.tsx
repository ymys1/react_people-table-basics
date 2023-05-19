import { Navigate, Route, Routes } from 'react-router-dom';
import './App.scss';
import { NavBar } from './NavBar';
import { HomePage } from './HomePage';
import { PeoplePage } from './PeoplePage';
import { NotFoundPage } from './NotFoundPage';

export const App = () => (
  <div data-cy="app">
    <NavBar />

    <main className="section">
      <div className="container">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/home" element={<Navigate to="/" replace />} />

          <Route path="people">
            <Route index element={<PeoplePage />} />
            <Route path=":personSlug" element={<PeoplePage />} />
          </Route>

          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </div>
    </main>
  </div>
);
