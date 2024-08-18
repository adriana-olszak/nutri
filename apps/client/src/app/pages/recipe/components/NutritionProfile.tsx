import React from 'react';
import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  Legend,
  ResponsiveContainer
} from 'recharts';
import './nutrition-info.scss';
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


const COLORS = ['#6977BC', '#21D19F', '#008CF0', '#368F7B', '#FF8042', '#FFBB28'];

const NutritionProfileCharts = () => {
  const macronutrientData = [
    { name: 'Protein', value: nutritionData.nutritionPerServing.protein },
    { name: 'Carbs', value: nutritionData.nutritionPerServing.totalCarbohydrates },
    { name: 'Fat', value: nutritionData.nutritionPerServing.totalFat },
  ];

  const fatData = [
    { name: 'Saturated Fat', value: nutritionData.nutritionPerServing.saturatedFat },
    { name: 'Other Fat', value: nutritionData.nutritionPerServing.totalFat - nutritionData.nutritionPerServing.saturatedFat },
  ];

  const carbData = [
    { name: 'Dietary Fiber', value: nutritionData.nutritionPerServing.dietaryFiber },
    { name: 'Other Carbs', value: nutritionData.nutritionPerServing.totalCarbohydrates - nutritionData.nutritionPerServing.dietaryFiber },
  ];

  const vitaminsMineralsData = [
    { name: 'Vitamin A', value: nutritionData.percentDailyValues.vitaminA },
    { name: 'Vitamin C', value: nutritionData.percentDailyValues.vitaminC },
    { name: 'Calcium', value: nutritionData.percentDailyValues.calcium },
    { name: 'Iron', value: nutritionData.percentDailyValues.iron },
    { name: 'Potassium', value: nutritionData.percentDailyValues.potassium },
  ];

  const calorieData = [
    { name: 'Calories', value: nutritionData.nutritionPerServing.calories },
    { name: 'Remaining', value: dailyRecommended.calories - nutritionData.nutritionPerServing.calories },
  ];

  const renderPieChart = (data, title) => (
    <article className="donut-chart-container">
      <h3>{title}</h3>
      <ResponsiveContainer width="100%" height={100}>
        <PieChart>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            labelLine={false}
            outerRadius={40}
            innerRadius={30}
            fill="#8884d8"
            dataKey="value"
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]}/>
            ))}
          </Pie>
          <Tooltip/>
        </PieChart>
      </ResponsiveContainer>
      <div className="donut-legend">
        {data.map((entry, index) => (
          <div key={`legend-${index}`} className="legend-item">
            <span className="color-box" style={{backgroundColor: COLORS[index % COLORS.length]}}></span>
            <span>{entry.name}</span>
          </div>
        ))}
      </div>
    </article>
  );

  return (
    <div className='nutrition-grid'>
      {renderPieChart(calorieData, 'Calories')}
      {renderPieChart(macronutrientData, 'Macronutrients')}
      {renderPieChart(fatData, 'Fat Breakdown')}
      {renderPieChart(carbData, 'Carbohydrate Breakdown')}
      {renderPieChart(vitaminsMineralsData, 'Vitamins & Minerals')}
    </div>
  );
};

export default NutritionProfileCharts;
