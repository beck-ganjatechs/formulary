import React from 'react'
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom'
import Login from './components/Login'
import HowItWorks from './components/HowItWorks'
import PracticePage from './components/PracticePage'
import BusinessDetailsPage from './components/BusinessDetailsPage'
import BrandLogoColorPage from './components/BrandLogoColorPage'
import IntakeQuestionMaster from './components/IntakeQuestionMaster'
import FormularyPage from './components/FormularyPage'
import Layout from './components/Layout'
import { AuthProvider, useAuth } from './context/AuthContext'

const ProtectedRoute = ({ children }: { children: React.ReactNode }) => {
  const { isAuthenticated } = useAuth()
  return isAuthenticated ? <>{children}</> : <Navigate to="/login" replace />
}

function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/how-it-works" element={<HowItWorks />} />
          <Route
            path="/"
            element={
              <ProtectedRoute>
                <Layout />
              </ProtectedRoute>
            }
          >
            <Route path="practice" element={<PracticePage />} />
            <Route path="business-details" element={<BusinessDetailsPage />} />
            <Route path="brand-logo-color" element={<BrandLogoColorPage />} />
            <Route path="intake-questions" element={<IntakeQuestionMaster />} />
            <Route path="formulary" element={<FormularyPage />} />
          </Route>
        </Routes>
      </Router>
    </AuthProvider>
  )
}

export default App