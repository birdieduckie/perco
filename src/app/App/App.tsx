import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom'

import { Main } from 'screens/Main/Main'
import {PostScreen} from "../../screens/PostScreen/PostScreen";



export const App = () => {
  return (
    <Routes>
        <Route path='/' element={<Main />} />
        <Route path='/post/:id' element={<PostScreen />} />
        <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}


