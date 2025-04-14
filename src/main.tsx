import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import Login from './pages/LoginPage.tsx'
import Signup from './pages/SignupPage.tsx'
import { Toaster } from 'sonner'
import AuthProvider from './context/AuthProvider.tsx'
import AuthRoute from './components/Authroute.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/" element={<AuthRoute><App /></AuthRoute>} />
          <Route path="/login" element={<AuthRoute redirectIfAuthenticated><Login /></AuthRoute>} />
          <Route path="/signup" element={<AuthRoute redirectIfAuthenticated><Signup /></AuthRoute>} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </Router>
      <Toaster theme="dark" richColors position="top-center" />
    </AuthProvider>
  </StrictMode>
)
