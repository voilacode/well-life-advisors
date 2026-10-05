/**
 * Main App Component - FBCA Architecture
 * Feature-Based Component Architecture with auto-discovery routing
 */

import { BrowserRouter as Router, Navigate } from 'react-router-dom';
import { ThemeProvider } from '@bloomneo/uikit';
import { PageRouter } from './lib/page-router';

function App() {
  return (
    <ThemeProvider theme="base" mode="light" forceConfig={true}>
      <Router basename="/">
        {/* Single-page site: unknown URLs go home instead of the UIKit-styled 404 */}
        <PageRouter notFound={<Navigate to="/" replace />} />
      </Router>
    </ThemeProvider>
  );
}

export default App;
