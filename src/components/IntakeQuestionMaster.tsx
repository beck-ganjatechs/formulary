import React, { useState } from 'react'
import { PlusCircle, Trash2, Edit } from 'lucide-react'
import { saveIntakeQuestion } from '../lib/pocketbase'

// ... (keep the existing type definitions and state declarations)

const IntakeQuestionMaster: React.FC = () => {
  // ... (keep the existing state declarations and functions)

  const addQuestion = async () => {
    if (newQuestion.text.trim() === '') return
    if (editingIndex !== null) {
      const updatedQuestions = [...questions]
      updatedQuestions[editingIndex] = { ...newQuestion, id: questions[editingIndex].id }
      setQuestions(updatedQuestions)
      setEditingIndex(null)
    } else {
      const savedQuestion = await saveIntakeQuestion(newQuestion)
      if (savedQuestion) {
        setQuestions([...questions, { ...savedQuestion, id: savedQuestion.id }])
      } else {
        console.error('Failed to save intake question')
        // You can show an error message to the user here
      }
    }
    setNewQuestion({ id: 0, type: 'freeText', text: '', options: [] })
  }

  // ... (keep the rest of the component code)
}

export default IntakeQuestionMaster