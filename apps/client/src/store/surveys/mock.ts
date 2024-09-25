export const mock = [
  {
    id: "survey_001",
    title: "Patient Satisfaction Survey",
    description: "Help us improve our services by sharing your experience",
    createdAt: "2024-06-15T10:00:00Z",
    updatedAt: "2024-06-15T10:00:00Z",
    status: "published",
    author: "Dr. Smith",
    responseCount: 150,
    structure: [
      {
        id: "section_001",
        type: "section",
        title: "General Information",
        description: "Please provide some basic information about yourself.",
        hasDescription: true,
        questions: [
          {
            id: "q001",
            type: "input",
            question: "What is your age?",
            description: "",
            options: []
          },
          {
            id: "q002",
            type: "multiSelect",
            question: "What services did you use during your visit?",
            description: "Select all that apply",
            options: ["Consultation", "Lab Test", "X-Ray", "Prescription", "Follow-up"]
          }
        ]
      },
      {
        id: "section_002",
        type: "section",
        title: "Your Experience",
        description: "Please rate your experience with our services.",
        hasDescription: true,
        questions: [
          {
            id: "q003",
            type: "input",
            question: "On a scale of 1-10, how would you rate your overall experience?",
            description: "1 being very poor, 10 being excellent",
            options: []
          },
          {
            id: "q004",
            type: "textarea",
            question: "What aspects of our service could be improved?",
            description: "",
            options: []
          }
        ]
      }
    ]
  },
  {
    id: "survey_002",
    title: "Dietary Habits Assessment",
    description: "Help us understand your eating habits to provide better nutritional advice",
    createdAt: "2024-06-20T14:30:00Z",
    updatedAt: "2024-06-21T09:15:00Z",
    status: "draft",
    author: "Nutritionist Jane Doe",
    responseCount: 0,
    structure: [
      {
        id: "section_001",
        type: "section",
        title: "Daily Intake",
        description: "Please provide information about your typical daily food intake.",
        hasDescription: true,
        questions: [
          {
            id: "q001",
            type: "multiSelect",
            question: "How many meals do you typically eat per day?",
            description: "",
            options: ["1", "2", "3", "4", "5 or more"]
          },
          {
            id: "q002",
            type: "textarea",
            question: "Describe your typical breakfast",
            description: "",
            options: []
          }
        ]
      },
      {
        id: "section_002",
        type: "section",
        title: "Dietary Restrictions",
        description: "Tell us about any dietary restrictions or preferences you have.",
        hasDescription: true,
        questions: [
          {
            id: "q003",
            type: "multiSelect",
            question: "Do you follow any specific diet?",
            description: "Select all that apply",
            options: ["Vegetarian", "Vegan", "Gluten-free", "Keto", "Paleo", "None"]
          },
          {
            id: "q004",
            type: "textarea",
            question: "List any food allergies or intolerances you have",
            description: "",
            options: []
          }
        ]
      }
    ]
  },
  {
    id: "survey_003",
    title: "Fitness Goals Questionnaire",
    description: "Help us understand your fitness goals to create a personalized workout plan",
    createdAt: "2024-07-01T08:45:00Z",
    updatedAt: "2024-07-01T08:45:00Z",
    status: "closed",
    author: "Fitness Trainer Mike Johnson",
    responseCount: 75,
    structure: [
      {
        id: "section_001",
        type: "section",
        title: "Current Fitness Level",
        description: "Please provide information about your current fitness routine.",
        hasDescription: true,
        questions: [
          {
            id: "q001",
            type: "multiSelect",
            question: "How often do you exercise per week?",
            description: "",
            options: ["0-1 times", "2-3 times", "4-5 times", "6 or more times"]
          },
          {
            id: "q002",
            type: "input",
            question: "What is your current weight (in kg)?",
            description: "",
            options: []
          }
        ]
      },
      {
        id: "section_002",
        type: "section",
        title: "Fitness Goals",
        description: "Tell us about your fitness goals.",
        hasDescription: true,
        questions: [
          {
            id: "q003",
            type: "multiSelect",
            question: "What are your primary fitness goals?",
            description: "Select all that apply",
            options: ["Weight loss", "Muscle gain", "Improve cardiovascular health", "Increase flexibility", "Improve overall fitness"]
          },
          {
            id: "q004",
            type: "textarea",
            question: "Describe any specific fitness achievements you'd like to accomplish",
            description: "",
            options: []
          }
        ]
      }
    ]
  }
];
