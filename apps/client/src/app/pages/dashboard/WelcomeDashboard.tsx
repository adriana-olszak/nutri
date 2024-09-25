import React from 'react';
import {ChefHat, Users, Calendar, ArrowRight} from 'lucide-react';

export function WelcomeDashboard() {
  return (
    <div>
      <header className="bg-gradient-to-br from-primary-700 via-primary-600 to-primary-500 text-white rounded-lg">

        <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8 lg:flex lg:items-center lg:justify-between">
          <h1 className="text-4xl font-extrabold tracking-tight ">
            <span className="block">Welcome to NutriQ</span>
            <span className="block text-blue-200">
              Revolutionize Your Nutrition Practice
            </span>
          </h1>
          <div className="mt-8 flex lg:mt-0 lg:flex-shrink-0">
            <div className="inline-flex rounded-md shadow">
              <a
                href="#"
                className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-primary-600 bg-white hover:bg-gray-50"
              >
                Upgrade to pro
              </a>
            </div>
            <div className="ml-3 inline-flex rounded-md shadow">
              <a
                href="#"
                className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-primary-700 hover:bg-primary-800"
              >
                Learn More
              </a>
            </div>
          </div>
        </div>
      </header>
      <div className="bg-gray-50 p-6 mt-6 rounded-lg">
        <h2 className="text-xl font-extrabold text-gray-900 sm:text-4xl mb-8">
          Empower Your Nutrition Practice with DietDraft
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <FeatureCard
            icon={<ChefHat className="h-6 w-8 text-primary-500" />}
            title="Customizable AssessmentTools Database"
            description="Add your own recipes or use our extensive collection. Easily tailor meals to your clients' preferences and dietary needs."
            ctaText="Explore Recipes"
            ctaLink="#explore-recipes"
          />
          <FeatureCard
            icon={<Users className="h-6 w-8 text-primary-500" />}
            title="Patient Profile Management"
            description="Keep track of your patients' details, preferences, and allergies. Send regular questionnaires to stay updated on their progress."
            ctaText="Manage Patients"
            ctaLink="#manage-patients"
          />
          <FeatureCard
            icon={<Calendar className="h-6 w-8 text-primary-500" />}
            title="Smart Meal Planning"
            description="Create meal plans for specific nutrition goals. Our app guides you and helps avoid incompatibilities with patient preferences or allergies."
            ctaText="Plan Meals"
            ctaLink="#plan-meals"
          />
        </div>
      </div>



    </div>
  );
}

function FeatureCard({ icon, title, description, ctaText, ctaLink }) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md flex flex-col h-full">
      <div className="mb-4">{icon}</div>
      <h3 className="text-xl font-semibold text-gray-900 mb-2">{title}</h3>
      <p className="text-gray-600 mb-4 flex-grow">{description}</p>
      <a
        href={ctaLink}
        className="inline-flex items-center justify-center px-4 py-2 border border-primary-600 text-sm font-medium rounded-md text-primary-600 bg-transparent hover:bg-primary-50 hover:text-primary-700 transition-colors duration-150 ease-in-out"
      >
        {ctaText}
        <ArrowRight className="ml-2 h-4 w-4" />
      </a>
    </div>
  );
}
