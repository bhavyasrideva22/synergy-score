import { useState } from "react";
import { useAssessment } from "@/hooks/useAssessment";
import { AssessmentLayout } from "@/components/AssessmentLayout";
import { AssessmentIntroduction } from "@/components/AssessmentIntroduction";
import { AssessmentQuestion } from "@/components/AssessmentQuestion";

const Index = () => {
  const [hasStarted, setHasStarted] = useState(false);
  const {
    assessmentData,
    updateResponse,
    nextQuestion,
    previousQuestion,
    calculateProgress,
    getCurrentQuestion,
    isCurrentQuestionAnswered
  } = useAssessment();

  const handleStart = () => {
    setHasStarted(true);
  };

  const handleAnswerChange = (value: string | number) => {
    const currentQuestion = getCurrentQuestion();
    if (currentQuestion) {
      updateResponse(currentQuestion.id, value);
    }
  };

  const currentQuestion = getCurrentQuestion();
  const currentSection = assessmentData.sections[assessmentData.currentSection];
  const progress = calculateProgress();

  // Show introduction if not started
  if (!hasStarted) {
    return (
      <div className="min-h-screen bg-background py-12">
        <AssessmentIntroduction onStart={handleStart} />
      </div>
    );
  }

  // Show completion message if done
  if (assessmentData.isComplete) {
    return (
      <AssessmentLayout
        currentSection={assessmentData.currentSection + 1}
        totalSections={assessmentData.sections.length}
        sectionTitle="Complete"
        progress={100}
      >
        <div className="max-w-2xl mx-auto text-center space-y-6">
          <div className="bg-gradient-primary text-white p-8 rounded-xl shadow-large">
            <h1 className="text-3xl font-bold mb-4">Assessment Complete!</h1>
            <p className="text-xl text-white/90">
              Thank you for completing the CCI Assessment. Your personalized results are being processed.
            </p>
          </div>
        </div>
      </AssessmentLayout>
    );
  }

  // Show current question
  if (!currentQuestion || !currentSection) {
    return <div>Loading...</div>;
  }

  return (
    <AssessmentLayout
      currentSection={assessmentData.currentSection + 1}
      totalSections={assessmentData.sections.length}
      sectionTitle={currentSection.title}
      progress={progress}
    >
      <AssessmentQuestion
        question={currentQuestion}
        questionNumber={assessmentData.currentQuestion + 1}
        totalQuestions={currentSection.questions.length}
        value={assessmentData.responses[currentQuestion.id]}
        onChange={handleAnswerChange}
        onNext={nextQuestion}
        onPrevious={previousQuestion}
        canGoNext={true}
        canGoPrevious={assessmentData.currentSection > 0 || assessmentData.currentQuestion > 0}
      />
    </AssessmentLayout>
  );
};

export default Index;
