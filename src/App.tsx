import { HelmetProvider } from 'react-helmet-async';
import Layout from './components/Layout';

export default function App() {
  return (
    <HelmetProvider>
      <Layout />
    </HelmetProvider>
  );
}
