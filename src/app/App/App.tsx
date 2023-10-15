import React from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'

import { Main } from 'screens/Main/Main'


export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  )
}
