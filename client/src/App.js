import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom'; // Import Routes
import LandingPage from './components/landingPage/LandingPage';
import Navbar from './components/navigation/navbar/Navbar';
import UserProfile from './pages/userProfile/UserProfile';
import Dashboard from './components/dashbord/Dashboard';
import AddCourse from './components/dashbord/instructor/AddCourse';
import CourseView from './pages/courseView/CourseView';
import EnrollCourse from './components/dashbord/student/EnrollCourse';

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <main>
        <Routes> {/* Wrap your Routes */}
          <Route path="/" element={<LandingPage />} /> 
          <Route path="/user-profile" element={<UserProfile />} />
          <Route path='/user-dashboard' element={<Dashboard/>} />

          {/* course-service routes */}
          <Route path='/add-course' element={<AddCourse/>} />
          <Route path='/view-course/:id' element={<CourseView/>} />

            {/* learner-service routes */}
            <Route path='/enroll-course' element={<EnrollCourse/>} />
        </Routes>
      </main>
    </BrowserRouter>
  )
}

export default App;
