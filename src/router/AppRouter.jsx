import { Routes, Route } from 'react-router-dom'
import Dashboard from '../pages/Dashboard'
import Clients from '../pages/Clients'
import Workflows from '../pages/Workflows'
import Analytics from '../pages/Analytics'
import Login from '../pages/Login'
import ProtectedRoute from '../auth/ProtectedRoute'

export default function AppRouter() {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/" element={
        <ProtectedRoute>
          <Dashboard />
        </ProtectedRoute>
      } />
      <Route path="/clients" element={
        <ProtectedRoute>
          <Clients />
        </ProtectedRoute>
      } />
      <Route path="/workflows" element={
        <ProtectedRoute>
          <Workflows />
        </ProtectedRoute>
      } />
      <Route path="/analytics" element={
        <ProtectedRoute>
          <Analytics />
        </ProtectedRoute>
      } />
    </Routes>
  )
}
