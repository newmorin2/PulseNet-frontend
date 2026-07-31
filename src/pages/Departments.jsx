import React, { useEffect, useState } from 'react'
import api from '../services/api'
import Navbar from '../components/Navbar'
import DepartmentCard from '../components/DepartmentCard'

const Departments = () => {
  const [departments, setDepartments] = useState([])

  useEffect(() => {
    api
      .get('/departments/')
      .then((response) => {
        setDepartments(response.data)
      })
      .catch((error) => {
        console.error('Error fetching departments:', error)
      })
  }, [])

  return (
    <div className="departments-page">
      <Navbar />
      <div className="departments-container">
        <h1>Our Medical Departments</h1>

        <p className="departments-intro">
          PulseNet Hospital provides specialized medical services through our
          experienced healthcare professionals and modern facilities.
        </p>

        <div className="departments-grid">
          {departments.length > 0 ? (
            departments.map((department) => (
              <DepartmentCard
                key={department.id}
                department={department}
              />
            ))
          ) : (
            <p>No departments available.</p>
          )}
        </div>
      </div>
    </div>
  )
}

export default Departments