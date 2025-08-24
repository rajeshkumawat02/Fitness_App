import React from 'react'
import { Metadata } from 'next'
import './profile.css'

export const metadata: Metadata = {
  title: 'Profile - Fitness Freak',
  description: 'Manage your fitness profile and settings',
}

const ProfilePage = () => {
  return (
    <div className="profile-container">
      <div className="profile-header">
        <h1>User Profile</h1>
      </div>
      
      <div className="profile-content">
        <div className="profile-section">
          <h2>Personal Information</h2>
          <div className="form-grid">
            <div className="form-group">
              <label>Full Name</label>
              <input 
                type="text" 
                placeholder="Enter your full name"
                className="form-input"
              />
            </div>
            <div className="form-group">
              <label>Email</label>
              <input 
                type="email" 
                placeholder="Enter your email"
                className="form-input"
              />
            </div>
            <div className="form-group">
              <label>Phone</label>
              <input 
                type="tel" 
                placeholder="Enter your phone number"
                className="form-input"
              />
            </div>
            <div className="form-group">
              <label>Date of Birth</label>
              <input 
                type="date"
                className="form-input"
              />
            </div>
          </div>
        </div>
        
        <div className="profile-section">
          <h2>Fitness Goals</h2>
          <div className="form-grid">
            <div className="form-group">
              <label>Current Goal</label>
              <select className="form-input">
                <option value="weightLoss">Weight Loss</option>
                <option value="weightGain">Weight Gain</option>
                <option value="muscleGain">Muscle Gain</option>
                <option value="maintenance">Maintenance</option>
              </select>
            </div>
            <div className="form-group">
              <label>Activity Level</label>
              <select className="form-input">
                <option value="sedentary">Sedentary</option>
                <option value="lightly">Lightly Active</option>
                <option value="moderately">Moderately Active</option>
                <option value="very">Very Active</option>
              </select>
            </div>
            <div className="form-group">
              <label>Height (cm)</label>
              <input 
                type="number" 
                placeholder="Enter height"
                className="form-input"
              />
            </div>
            <div className="form-group">
              <label>Weight (kg)</label>
              <input 
                type="number" 
                placeholder="Enter weight"
                className="form-input"
              />
            </div>
          </div>
        </div>
        
        <div className="profile-section">
          <h2>Account Settings</h2>
          <div className="button-group">
            <button className="btn-primary">Update Profile</button>
            <button className="btn-secondary">Change Password</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProfilePage
