import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react'
import { login as pbLogin, logout as pbLogout, isLoggedIn, getCurrentUser } from '../lib/pocketbase'

interface AuthContextType {
  isAuthenticated: boolean
  user: any
  login: (email: string, password: string) => Promise<{ success: boolean; error?: string }>
  logout: () => void
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

export const AuthProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(isLoggedIn())
  const [user, setUser] = useState(getCurrentUser())

  useEffect(() => {
    setIsAuthenticated(isLoggedIn())
    setUser(getCurrentUser())
  }, [])

  const login = async (email: string, password: string) => {
    const result = await pbLogin(email, password)
    if (result.success) {
      setIsAuthenticated(true)
      setUser(result.data.record)
      return { success: true }
    }
    return { success: false, error: result.error }
  }

  const logout = () => {
    pbLogout()
    setIsAuthenticated(false)
    setUser(null)
  }

  return (
    <AuthContext.Provider value={{ isAuthenticated, user, login, logout }}>
      {children}
    </AuthContext.Provider>
  )
}

export const useAuth = () => {
  const context = useContext(AuthContext)
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider')
  }
  return context
}