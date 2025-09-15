export interface AssessmentQuestion {
  id: string;
  type: 'multiple-choice' | 'likert' | 'open-ended' | 'scenario';
  question: string;
  options?: Array<{
    value: string;
    label: string;
    description?: string;
  }>;
  scenario?: string;
  scale?: number;
  lowLabel?: string;
  highLabel?: string;
  required?: boolean;
}

export interface AssessmentSection {
  id: string;
  title: string;
  description: string;
  icon: string;
  questions: AssessmentQuestion[];
}

export interface AssessmentResponse {
  questionId: string;
  value: string | number;
  timestamp: Date;
}

export interface AssessmentResults {
  sectionId: string;
  score: number;
  label: string;
  strengths: string[];
  blindSpots: string[];
  responses: AssessmentResponse[];
}

export interface AssessmentData {
  sections: AssessmentSection[];
  responses: Record<string, string | number>;
  currentSection: number;
  currentQuestion: number;
  isComplete: boolean;
  results?: AssessmentResults[];
}