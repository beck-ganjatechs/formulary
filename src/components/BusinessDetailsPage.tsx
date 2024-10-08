import React, { useState } from 'react'
import { saveBusinessDetails } from '../lib/pocketbase'

const BusinessDetailsPage: React.FC = () => {
  // ... (keep the existing state declarations)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    const businessData = { businessName, businessAddress, phoneNumber, website, taxId }
    const savedRecord = await saveBusinessDetails(businessData)
    if (savedRecord) {
      console.log('Business details saved successfully:', savedRecord)
      // You can add a success message or redirect the user here
    } else {
      console.error('Failed to save business details')
      // You can show an error message to the user here
    }
  }

  // ... (keep the rest of the component code)
}

export default BusinessDetailsPage