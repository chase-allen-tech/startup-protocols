import { AsterControllerProvider } from './context';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import Page404 from './pages/Page404';
import Dashboard from "./pages/dashboard";

const App = () => {

  return <>
    <BrowserRouter>
      <AsterControllerProvider>
        <Routes>
          <Route path='*' element={<Page404 />} />
          <Route path="/" exact element={<Navigate to="/dashboard" replace />} />
          <Route path="/dashboard" element={<Dashboard />} />
          {/* <Route path="sample">
            <Route index element={<Sample />} />
            <Route path="other" element={<SampleOther />} />
            <Route path=":sampleId" element={<Sample />} />
          </Route> */}
        </Routes>
      </AsterControllerProvider>
    </BrowserRouter>
  </>;
};

export default App;
