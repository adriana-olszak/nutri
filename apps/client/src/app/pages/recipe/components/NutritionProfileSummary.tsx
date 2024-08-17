import React from 'react';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
} from 'recharts';

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
  { name: 'Protein', amount: nutritionData.nutritionPerServing.protein, daily: dailyRecommended.protein },
  { name: 'Carbs', amount: nutritionData.nutritionPerServing.totalCarbohydrates, daily: dailyRecommended.totalCarbohydrates },
  { name: 'Fat', amount: nutritionData.nutritionPerServing.totalFat, daily: dailyRecommended.totalFat },
].map(item => ({
  ...item,
  percentOfDaily: (item.amount / item.daily) * 100,
  calories: item.name === 'Protein' || item.name === 'Carbs' ? item.amount * 4 : item.amount * 9
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

const COLORS = ['#6977BC', '#21D19F', '#008CF0', '#368F7B'];

const NutritionProfileCharts = () => {
  const totalCalories = macronutrientData.reduce((sum, item) => sum + item.calories, 0);
  const percentDailyCalories = (totalCalories / dailyRecommended.calories) * 100;
  console.log(percentDailyCalories)
  const calorieData = [
    {
      name: 'Calories',
      value: percentDailyCalories,
      fill: '#B3BBDE'
    }   , {
      name: 'remaining',
      value: 100,
      fill: '#E1E2E9'
    }
  ];
  return (
    <div className="w-full">
      <h2 className="text-xl font-extrabold text-gray-900 mb-1">Nutrition Dashboard</h2>
      <p className="text-base text-gray-500 mb-4">Here's a breakdown of your nutritional information.</p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Macronutrient Distribution */}
        <div className="relative">
          <div className="absolute inset-0 bg-indigo-200 rounded-lg transform translate-x-1 translate-y-1"></div>
          <div className="relative bg-white border-2 border-indigo-200 rounded-lg p-5 h-full">
            <h3 className="text-lg font-bold text-gray-800 mb-3">Macronutrient Distribution</h3>
            <div className="h-64">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={macronutrientData}
                    cx="50%"
                    cy="50%"
                    innerRadius={60}
                    outerRadius={80}
                    fill="#8884d8"
                    paddingAngle={5}
                    dataKey="calories"
                  >
                    {macronutrientData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]}/>
                    ))}
                  </Pie>
                  <Tooltip
                    formatter={(value, name, props) => [
                      `${value?.toFixed(1)} cal (${((value / totalCalories) * 100).toFixed(1)}%)`,
                      `${name} - ${props.payload.amount.toFixed(1)}g`
                    ]}
                  />
                  <Legend/>
                </PieChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>

        {/* Calories per Serving */}
        <div className="relative">
          <div className="absolute inset-0 bg-purple-200 rounded-lg transform translate-x-1 translate-y-1"></div>
          <div className="relative bg-white border-2 border-purple-200 rounded-lg p-5 h-full">
            <h3 className="text-lg font-bold text-gray-800 mb-3">Calories per Serving</h3>
            <div className="h-64">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={calorieData}
                    cx="50%"
                    cy="50%"
                    paddingAngle={5}
                    dataKey="value"
                    startAngle={180}
                    endAngle={0}
                    innerRadius={60}
                    outerRadius={80}
                  >
                    {['#8E99CD', '#E1E2E9'].map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]}/>
                    ))}
                  </Pie>
                  <Tooltip/>
                  <Legend/>
                </PieChart>
              </ResponsiveContainer>
            </div>
            <p className="text-center mt-4 text-sm">
              This meal provides {totalCalories.toFixed(1)} out of {dailyRecommended.calories} recommended daily
              calories
              ({percentDailyCalories.toFixed(1)}%)
            </p>
          </div>
        </div>

        {/* Macronutrients (% of Daily Needs) */}
        <div className="relative">
          <div className="absolute inset-0 bg-blue-400 rounded-lg transform translate-x-1 translate-y-1"></div>
          <div className="relative bg-white border-2 border-blue-400 rounded-lg p-5 h-full">
            <h3 className="text-lg font-bold text-gray-800 mb-3">Macronutrients (% of Daily Needs)</h3>
            <div className="h-64">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart layout="vertical" data={macronutrientData}>
                  <CartesianGrid strokeDasharray="3 3"/>
                  <XAxis type="number" domain={[0, 100]}/>
                  <YAxis dataKey="name" type="category" width={100}/>
                  <Tooltip
                    formatter={(value, name, props) => [`${value.toFixed(1)}%`, `${props.payload.amount.toFixed(1)}g / ${props.payload.daily}g`]}
                  />
                  <Legend/>
                  <Bar dataKey="percentOfDaily" fill="#8884d8" name="% of Daily Needs"/>
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>

        {/* Nutrition Summary */}
        <div className="relative">
          <div className="absolute inset-0 bg-green-200 rounded-lg transform translate-x-1 translate-y-1"></div>
          <div className="relative bg-white border-2 border-green-200 rounded-lg p-5 h-full">
            <h3 className="text-lg font-bold text-gray-800 mb-3">Nutrition Summary</h3>
            <div className="h-64">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart layout="vertical" data={macronutrientData}>
                  <CartesianGrid strokeDasharray="3 3"/>
                  <XAxis type="number"/>
                  <YAxis dataKey="name" type="category" width={100}/>
                  <Tooltip
                    formatter={(value, name, props) => [`${value.toFixed(1)}g`, name]}
                  />
                  <Legend/>
                  <Bar dataKey="amount" fill="#82ca9d" name="Amount (g)"/>
                </BarChart>
              </ResponsiveContainer>
            </div>
            <p className="text-center mt-4 text-lg font-semibold">Total Calories: {totalCalories.toFixed(1)}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NutritionProfileCharts;
