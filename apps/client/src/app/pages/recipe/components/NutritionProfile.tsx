import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const nutritionData = {
  "servingSize": "1 cup (250ml)",
  "servingsPerRecipe": 6,
  "nutritionPerServing": {
    "calories": 215,
    "totalFat": 14.5,
    "saturatedFat": 6.5,
    "transFat": 0,
    "cholesterol": 30,
    "sodium": 430,
    "totalCarbohydrates": 20,
    "dietaryFiber": 3,
    "sugars": 8,
    "protein": 4
  },
  "percentDailyValues": {
    "totalFat": 19,
    "saturatedFat": 33,
    "cholesterol": 10,
    "sodium": 19,
    "totalCarbohydrates": 7,
    "dietaryFiber": 11,
    "protein": 8,
    "vitaminA": 120,
    "vitaminC": 15,
    "calcium": 6,
    "iron": 8,
    "potassium": 10
  }
};

const dailyRecommended = {
  "calories": 2000,
  "totalFat": 65,
  "saturatedFat": 20,
  "cholesterol": 300,
  "sodium": 2300,
  "totalCarbohydrates": 300,
  "dietaryFiber": 25,
  "protein": 50
};

const macronutrientData = [
  { name: 'Calories', amount: nutritionData.nutritionPerServing.calories, daily: dailyRecommended.calories },
  { name: 'Protein', amount: nutritionData.nutritionPerServing.protein, daily: dailyRecommended.protein },
  { name: 'Carbs', amount: nutritionData.nutritionPerServing.totalCarbohydrates, daily: dailyRecommended.totalCarbohydrates },
  { name: 'Fat', amount: nutritionData.nutritionPerServing.totalFat, daily: dailyRecommended.totalFat },
].map(item => ({
  ...item,
  percentOfDaily: (item.amount / item.daily) * 100
}));

const fatData = [
  { name: 'Total Fat', amount: nutritionData.nutritionPerServing.totalFat, daily: dailyRecommended.totalFat },
  { name: 'Saturated Fat', amount: nutritionData.nutritionPerServing.saturatedFat, daily: dailyRecommended.saturatedFat },
].map(item => ({
  ...item,
  percentOfDaily: (item.amount / item.daily) * 100
}));

const carbData = [
  { name: 'Total Carbs', amount: nutritionData.nutritionPerServing.totalCarbohydrates, daily: dailyRecommended.totalCarbohydrates },
  { name: 'Dietary Fiber', amount: nutritionData.nutritionPerServing.dietaryFiber, daily: dailyRecommended.dietaryFiber },
].map(item => ({
  ...item,
  percentOfDaily: (item.amount / item.daily) * 100
}));

const vitaminsMineralsData = Object.entries(nutritionData.percentDailyValues)
  .filter(([name]) => ['vitaminA', 'vitaminC', 'calcium', 'iron', 'potassium'].includes(name))
  .map(([name, value]) => ({
    name: name.charAt(0).toUpperCase() + name.slice(1),
    percentOfDaily: value
  }));

const NutritionProfileCharts = () => {
  return (
    <div className="relative flex flex-col justify-between h-full max-w-6xl px-10 mx-auto xl:px-0 mt-5">
      <div className="w-full">
        <div className="flex flex-col w-full mb-10 sm:flex-row">
          <div className="w-full mb-10 sm:mb-0 sm:w-1/2">
            <div className="relative h-full ml-0 mr-0 sm:mr-10">
              <span className="absolute top-0 left-0 w-full h-full mt-1 ml-1 bg-airForceBlue-200 rounded-lg"></span>
              <div className="relative h-full p-5 bg-white border-2 border-airForceBlue-200 rounded-lg">
                <div className="flex items-center -mt-1">
                  <h3 className="my-2 ml-3 text-lg font-bold text-gray-800">Macronutrients (% of Daily Needs)</h3>
                </div>
                <p className="mt-3 mb-1 text-xs font-medium text-airForceBlue-200 uppercase">------------</p>
                <div className="">
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart layout="vertical" data={macronutrientData}>
                      <CartesianGrid strokeDasharray="3 3"/>
                      <XAxis type="number" domain={[0, 100]}/>
                      <YAxis dataKey="name" type="category" width={100}/>
                      <Tooltip
                        formatter={(value, name, props) => [`${value.toFixed(1)}%`, `${props.payload.amount.toFixed(1)}g / ${props.payload.daily}g`]}
                      />
                      <Legend/>
                      <Bar dataKey="percentOfDaily" fill="#47616B" name="% of Daily Needs" width={10}/>
                    </BarChart>
                  </ResponsiveContainer>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full sm:w-1/2">
            <div className="relative h-full ml-0 md:mr-10">
              <span className="absolute top-0 left-0 w-full h-full mt-1 ml-1 bg-lavender-200 rounded-lg"></span>
              <div className="relative h-full p-5 bg-white border-2 border-lavender-200 rounded-lg">
                <div className="flex items-center -mt-1">
                  <h3 className="my-2 ml-3 text-lg font-bold text-gray-800">Fat Breakdown (% of Daily Needs)</h3>
                </div>
                <p className="mt-3 mb-1 text-xs font-medium text-lavender-200 uppercase">------------</p>
                <div className="h-64">
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart layout="vertical" data={fatData}>
                      <CartesianGrid strokeDasharray="3 3"/>
                      <XAxis type="number" domain={[0, 100]}/>
                      <YAxis dataKey="name" type="category" width={100}/>
                      <Tooltip
                        formatter={(value, name, props) => [`${value.toFixed(1)}%`, `${props.payload.amount.toFixed(1)}g / ${props.payload.daily}g`]}
                      />
                      <Legend/>
                      <Bar dataKey="percentOfDaily" fill="#6977BC" name="% of Daily Needs"/>
                    </BarChart>
                  </ResponsiveContainer>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col w-full mb-5 sm:flex-row">
          <div className="w-full mb-10 sm:mb-0 sm:w-1/2">
            <div className="relative h-full ml-0 mr-0 sm:mr-10">
              <span className="absolute top-0 left-0 w-full h-full mt-1 ml-1 bg-blue-200 rounded-lg"></span>
              <div className="relative h-full p-5 bg-white border-2 border-blue-200 rounded-lg">
                <div className="flex items-center -mt-1">
                  <h3 className="my-2 ml-3 text-lg font-bold text-gray-800">Carbohydrate Breakdown (% of Daily
                    Needs)</h3>
                </div>
                <p className="mt-3 mb-1 text-xs font-medium text-blue-200 uppercase">------------</p>
                <div className="h-64">
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart layout="vertical" data={carbData}>
                      <CartesianGrid strokeDasharray="3 3"/>
                      <XAxis type="number" domain={[0, 100]}/>
                      <YAxis dataKey="name" type="category" width={100}/>
                      <Tooltip
                        formatter={(value, name, props) => [`${value.toFixed(1)}%`, `${props.payload.amount.toFixed(1)}g / ${props.payload.daily}g`]}
                      />
                      <Legend/>
                      <Bar dataKey="percentOfDaily" fill="#FFBB28" name="% of Daily Needs"/>
                    </BarChart>
                  </ResponsiveContainer>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full sm:w-1/2">
            <div className="relative h-full ml-0 md:mr-10">
              <span className="absolute top-0 left-0 w-full h-full mt-1 ml-1 bg-keppel-200 rounded-lg"></span>
              <div className="relative h-full p-5 bg-white border-2 border-keppel-200 rounded-lg">
                <div className="flex items-center -mt-1">
                  <h3 className="my-2 ml-3 text-lg font-bold text-gray-800">Vitamins and Minerals (% of Daily
                    Needs)</h3>
                </div>
                <p className="mt-3 mb-1 text-xs font-medium text-keppel-200 uppercase">------------</p>
                <div className="h-64">
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart layout="vertical" data={vitaminsMineralsData}>
                      <CartesianGrid strokeDasharray="3 3"/>
                      <XAxis type="number" domain={[0, 'dataMax']}/>
                      <YAxis dataKey="name" type="category" width={100}/>
                      <Tooltip/>
                      <Legend/>
                      <Bar dataKey="percentOfDaily" fill="#FF8042" name="% of Daily Needs"/>
                    </BarChart>
                  </ResponsiveContainer>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NutritionProfileCharts;
