import {FitnessLevel} from "@nutri/store/tableViews/types";

export type Patient = {
  id: string;
  name: string;
  age: number;
  height: number; // in cm
  weight: number; // in kg
  bmi: number;
  fitnessLevel: FitnessLevel;
  dietaryPreferences: string[];
  dietaryRestrictions: string[];
  diagnosedHealthProblems: string[];
  allergies: string[];
};
