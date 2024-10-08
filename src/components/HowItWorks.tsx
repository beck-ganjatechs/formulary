import React from 'react'

const HowItWorks: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-extrabold text-gray-900 mb-6">How It Works</h1>
        <div className="prose prose-lg">
          {/* This content will be managed by the admin */}
          <p>
            Welcome to our Organization Admin Dashboard. This platform is designed to help you
            manage your healthcare organization efficiently. Here's a quick overview of how it
            works:
          </p>
          <ol>
            <li>Set up your practice details</li>
            <li>Configure your business information</li>
            <li>Customize your brand appearance</li>
            <li>Manage intake questions for patients</li>
            <li>Set up and maintain your formulary</li>
          </ol>
          <p>
            For more detailed information on each step, please refer to our comprehensive user
            guide or contact our support team.
          </p>
        </div>
      </div>
    </div>
  )
}

export default HowItWorks