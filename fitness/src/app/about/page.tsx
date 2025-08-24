import React from 'react'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'About - Fitness Freak',
  description: 'Learn more about Fitness Freak and our mission',
}

const AboutPage = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-4xl mx-auto px-4">
        <h1 className="text-4xl font-bold text-gray-900 mb-8 text-center">About Fitness Freak</h1>
        
        <div className="bg-white rounded-lg shadow-md p-8">
          <div className="prose max-w-none">
            <h2 className="text-2xl font-semibold mb-4">Our Mission</h2>
            <p className="text-gray-700 mb-4">
              At Fitness Freak, we believe that everyone deserves to live a healthy, active lifestyle. 
              Our platform is designed to make fitness tracking simple, enjoyable, and effective.
            </p>
            
            <h2 className="text-2xl font-semibold mb-4">What We Offer</h2>
            <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-4">
              <li>Comprehensive workout tracking and planning</li>
              <li>Calorie intake monitoring</li>
              <li>Weight and body measurements tracking</li>
              <li>Sleep and water intake monitoring</li>
              <li>Personalized fitness goals and recommendations</li>
              <li>Progress visualization with charts and reports</li>
            </ul>
            
            <h2 className="text-2xl font-semibold mb-4">Our Features</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-yellow-50 p-4 rounded-lg">
                <h3 className="font-semibold text-yellow-800">Workout Plans</h3>
                <p className="text-sm text-yellow-700">Custom workout plans tailored to your fitness level and goals</p>
              </div>
              <div className="bg-green-50 p-4 rounded-lg">
                <h3 className="font-semibold text-green-800">Nutrition Tracking</h3>
                <p className="text-sm text-green-700">Track your daily calorie intake and nutritional information</p>
              </div>
              <div className="bg-blue-50 p-4 rounded-lg">
                <h3 className="font-semibold text-blue-800">Progress Reports</h3>
                <p className="text-sm text-blue-700">Visual reports showing your fitness journey over time</p>
              </div>
              <div className="bg-purple-50 p-4 rounded-lg">
                <h3 className="font-semibold text-purple-800">Goal Setting</h3>
                <p className="text-sm text-purple-700">Set and track personalized fitness goals</p>
              </div>
            </div>
            
            <h2 className="text-2xl font-semibold mb-4 mt-8">Get Started Today</h2>
            <p className="text-gray-700 mb-4">
              Join thousands of users who are already transforming their lives with Fitness Freak. 
              Sign up today and take the first step towards a healthier you!
            </p>
            
            <div className="text-center mt-8">
              <button className="bg-yellow-500 text-white px-6 py-3 rounded-lg hover:bg-yellow-600 transition-colors">
                Start Your Fitness Journey
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AboutPage
