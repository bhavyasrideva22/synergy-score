import { useState, useCallback } from "react";
import { AssessmentData, AssessmentResponse } from "@/types/assessment";
import { assessmentSections } from "@/data/assessmentData";

export const useAssessment = () => {
  const [assessmentData, setAssessmentData] = useState<AssessmentData>({
    sections: assessmentSections,
    responses: {},
    currentSection: 0,
    currentQuestion: 0,
    isComplete: false,
    results: undefined
  });

  const updateResponse = useCallback((questionId: string, value: string | number) => {
    setAssessmentData(prev => ({
      ...prev,
      responses: {
        ...prev.responses,
        [questionId]: value
      }
    }));
  }, []);

  const nextQuestion = useCallback(() => {
    setAssessmentData(prev => {
      const currentSection = prev.sections[prev.currentSection];
      const isLastQuestion = prev.currentQuestion >= currentSection.questions.length - 1;
      const isLastSection = prev.currentSection >= prev.sections.length - 1;

      if (isLastQuestion && isLastSection) {
        return {
          ...prev,
          isComplete: true
        };
      }

      if (isLastQuestion) {
        return {
          ...prev,
          currentSection: prev.currentSection + 1,
          currentQuestion: 0
        };
      }

      return {
        ...prev,
        currentQuestion: prev.currentQuestion + 1
      };
    });
  }, []);

  const previousQuestion = useCallback(() => {
    setAssessmentData(prev => {
      const isFirstQuestion = prev.currentQuestion === 0;
      const isFirstSection = prev.currentSection === 0;

      if (isFirstQuestion && isFirstSection) {
        return prev;
      }

      if (isFirstQuestion) {
        const prevSection = prev.sections[prev.currentSection - 1];
        return {
          ...prev,
          currentSection: prev.currentSection - 1,
          currentQuestion: prevSection.questions.length - 1
        };
      }

      return {
        ...prev,
        currentQuestion: prev.currentQuestion - 1
      };
    });
  }, []);

  const goToSection = useCallback((sectionIndex: number) => {
    setAssessmentData(prev => ({
      ...prev,
      currentSection: sectionIndex,
      currentQuestion: 0
    }));
  }, []);

  const calculateProgress = useCallback(() => {
    const totalQuestions = assessmentData.sections.reduce(
      (total, section) => total + section.questions.length, 
      0
    );
    
    const answeredQuestions = Object.keys(assessmentData.responses).length;
    
    return totalQuestions > 0 ? (answeredQuestions / totalQuestions) * 100 : 0;
  }, [assessmentData.responses, assessmentData.sections]);

  const getCurrentQuestion = useCallback(() => {
    const currentSection = assessmentData.sections[assessmentData.currentSection];
    if (!currentSection || assessmentData.currentQuestion >= currentSection.questions.length) {
      return null;
    }
    return currentSection.questions[assessmentData.currentQuestion];
  }, [assessmentData.currentSection, assessmentData.currentQuestion, assessmentData.sections]);

  const isCurrentQuestionAnswered = useCallback(() => {
    const currentQuestion = getCurrentQuestion();
    if (!currentQuestion) return false;
    
    return assessmentData.responses.hasOwnProperty(currentQuestion.id);
  }, [assessmentData.responses, getCurrentQuestion]);

  return {
    assessmentData,
    updateResponse,
    nextQuestion,
    previousQuestion,
    goToSection,
    calculateProgress,
    getCurrentQuestion,
    isCurrentQuestionAnswered
  };
};