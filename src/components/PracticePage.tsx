import React, { useState } from 'react'
import { savePracticeDetails } from '../lib/pocketbase'

interface PracticeDetails {
  companyName: string
  selectedStates: string[]
  selectedSpecialties: string[]
}

const PracticePage: React.FC = () => {
  const [companyName, setCompanyName] = useState('')
  const [selectedStates, setSelectedStates] = useState<string[]>([])
  const [selectedSpecialties, setSelectedSpecialties] = useState<string[]>([])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    const practiceData: PracticeDetails = { companyName, selectedStates, selectedSpecialties }
    const savedRecord = await savePracticeDetails(practiceData)
    if (savedRecord) {
      console.log('Practice details saved successfully:', savedRecord)
      // You can add a success message or redirect the user here
    } else {
      console.error('Failed to save practice details')
      // You can show an error message to the user here
    }
  }

  return (
    <div className="max-w-2xl mx-auto mt-8">
      <h1 className="text-2xl font-bold mb-4">Practice Details</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="companyName" className="block text-sm font-medium text-gray-700">
            Company Name
          </label>
          <input
            type="text"
            id="companyName"
            value={companyName}
            onChange={(e) => setCompanyName(e.target.value)}
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
            required
          />
        </div>
        {/* Add inputs for states and specialties here */}
        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
        >
          Save Practice Details
        </button>
      </form>
    </div>
  )
}

export default PracticePage