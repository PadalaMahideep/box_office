import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import Home from './pages/Home';
import Starred from './pages/Starred';
import MainLayout from './components/MainLayout';
import Show from './pages/Show';
import { GlobalTheme } from './theme';

const queryClient = new QueryClient();
function App() {
  return (
    <div>
      <QueryClientProvider client={queryClient}>
        <GlobalTheme>
          <BrowserRouter>
            <Routes>
              <Route element={<MainLayout />}>
                <Route path="/" element={<Home />} />
                <Route path="staredpage" element={<Starred />} />
              </Route>

              <Route path="/show/:showId" element={<Show />} />

              <Route path="*" element={<div>Page Not Found</div>} />
            </Routes>
          </BrowserRouter>
        </GlobalTheme>
      </QueryClientProvider>
    </div>
  );
}

export default App;
