export type Gender = 'female' | 'male';

export type ActivityLevel = 'sedentary' | 'light' | 'moderate' | 'active' | 'very_active';

export type NutritionGoal = 'lose_weight' | 'maintain' | 'gain_muscle';

export interface CalorieCalculatorInput {
  age: number;
  gender: Gender;
  height: number; // cm
  weight: number; // kg
  activityLevel: ActivityLevel;
  goal: NutritionGoal;
}

export interface MacroBreakdown {
  proteinGrams: number;
  proteinKcal: number;
  proteinPercent: number;
  carbGrams: number;
  carbKcal: number;
  carbPercent: number;
  fatGrams: number;
  fatKcal: number;
  fatPercent: number;
}

export interface CalorieCalculatorResult {
  bmr: number;
  tdee: number;
  targetCalories: number;
  waterNeedLiters: number;
  macros: MacroBreakdown;
  tip: string;
}

export type MoodType = 
  | 'stressed'
  | 'fatigued'
  | 'sugar_craving'
  | 'emotional_hunger'
  | 'brain_fog'
  | 'bloated';

export interface MoodNutriItem {
  id: MoodType;
  title: string;
  subtitle: string;
  emoji: string;
  badge: string;
  biochemistryReason: string;
  recommendedFoods: string[];
  foodsToAvoid: string[];
  quickRecipe: {
    name: string;
    prepTime: string;
    ingredients: string[];
    instructions: string;
  };
  mindfulPractice: string;
  color: string;
}

export interface ServiceItem {
  id: string;
  title: string;
  tagline: string;
  duration: string;
  badge?: string;
  description: string;
  features: string[];
  idealFor: string;
}

export interface AppointmentData {
  serviceId: string;
  appointmentType: 'online' | 'in_person';
  date: string;
  timeSlot: string;
  fullName: string;
  email: string;
  phone: string;
  notes: string;
  healthGoals: string;
}

export interface TestimonialItem {
  id: string;
  clientName: string;
  age: number;
  occupation: string;
  achievement: string;
  quote: string;
  timeframe: string;
  tags: string[];
  avatar: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: 'genel' | 'online' | 'yontem';
}
