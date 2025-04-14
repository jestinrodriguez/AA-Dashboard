import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import Login from './pages/LoginPage.tsx'
import Signup from './pages/SignupPage.tsx'
import { Toaster } from 'sonner'
import AuthProvider from './context/AuthProvider.tsx'
import AuthRoutes from './components/AuthRoutes.tsx'


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/" element={<AuthRoutes><App /></AuthRoutes>} />
          <Route path="/login" element={<AuthRoutes redirectIfAuthenticated><Login /></AuthRoutes>} />
          <Route path="/signup" element={<AuthRoutes redirectIfAuthenticated><Signup /></AuthRoutes>} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </Router>
      <Toaster theme="dark" richColors position="top-center" />
    </AuthProvider>
  </StrictMode>
)
