import PocketBase from 'pocketbase'

// Use an environment variable for the PocketBase URL
const POCKETBASE_URL = import.meta.env.VITE_POCKETBASE_URL || 'http://127.0.0.1:8090'

export const pb = new PocketBase(POCKETBASE_URL)

export const login = async (email: string, password: string) => {
  try {
    const authData = await pb.collection('users').authWithPassword(email, password)
    return { success: true, data: authData }
  } catch (error) {
    console.error('Login error:', error)
    if (error instanceof Error) {
      return { success: false, error: error.message }
    }
    return { success: false, error: 'An unknown error occurred' }
  }
}

export const logout = () => {
  pb.authStore.clear()
}

export const isLoggedIn = () => pb.authStore.isValid

export const getCurrentUser = () => pb.authStore.model

export const savePracticeDetails = async (practiceData: any) => {
  try {
    const record = await pb.collection('practices').create(practiceData)
    return record
  } catch (error) {
    console.error('Error saving practice details:', error)
    return null
  }
}

export const saveBusinessDetails = async (businessData: any) => {
  try {
    const record = await pb.collection('business_details').create(businessData)
    return record
  } catch (error) {
    console.error('Error saving business details:', error)
    return null
  }
}

export const saveBrandSettings = async (brandData: any) => {
  try {
    const record = await pb.collection('brand_settings').create(brandData)
    return record
  } catch (error) {
    console.error('Error saving brand settings:', error)
    return null
  }
}

export const saveIntakeQuestion = async (questionData: any) => {
  try {
    const record = await pb.collection('intake_questions').create(questionData)
    return record
  } catch (error) {
    console.error('Error saving intake question:', error)
    return null
  }
}

export const saveFormulary = async (formularyData: any) => {
  try {
    const record = await pb.collection('formularies').create(formularyData)
    return record
  } catch (error) {
    console.error('Error saving formulary:', error)
    return null
  }
}