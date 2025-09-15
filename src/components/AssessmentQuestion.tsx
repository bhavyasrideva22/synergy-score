import { AssessmentQuestion as QuestionType } from "@/types/assessment";
import { QuestionCard } from "./QuestionCard";
import { MultipleChoiceQuestion } from "./MultipleChoiceQuestion";
import { LikertScaleQuestion } from "./LikertScaleQuestion";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface AssessmentQuestionProps {
  question: QuestionType;
  questionNumber: number;
  totalQuestions: number;
  value: string | number | undefined;
  onChange: (value: string | number) => void;
  onNext: () => void;
  onPrevious: () => void;
  canGoNext: boolean;
  canGoPrevious: boolean;
}

export const AssessmentQuestion = ({
  question,
  questionNumber,
  totalQuestions,
  value,
  onChange,
  onNext,
  onPrevious,
  canGoNext,
  canGoPrevious
}: AssessmentQuestionProps) => {
  const renderQuestionContent = () => {
    const stringValue = value?.toString() || "";
    
    switch (question.type) {
      case "multiple-choice":
        return (
          <MultipleChoiceQuestion
            question={question.question}
            options={question.options || []}
            value={stringValue}
            onChange={onChange}
            required={question.required}
          />
        );
      
      case "likert":
        return (
          <LikertScaleQuestion
            question={question.question}
            value={stringValue}
            onChange={onChange}
            lowLabel={question.lowLabel}
            highLabel={question.highLabel}
            scale={question.scale}
            required={question.required}
          />
        );
      
      default:
        return (
          <div className="text-center text-muted-foreground">
            Question type not implemented yet
          </div>
        );
    }
  };

  const isAnswered = value !== undefined && value !== "";

  return (
    <div className="max-w-4xl mx-auto space-y-6">
      <QuestionCard
        questionNumber={questionNumber}
        totalQuestions={totalQuestions}
        scenario={question.scenario}
      >
        {renderQuestionContent()}
      </QuestionCard>

      {/* Navigation */}
      <div className="flex justify-between items-center">
        <Button
          onClick={onPrevious}
          disabled={!canGoPrevious}
          variant="outline"
          className="flex items-center gap-2"
        >
          <ChevronLeft className="w-4 h-4" />
          Previous
        </Button>

        <div className="flex items-center gap-2">
          {question.required && !isAnswered && (
            <span className="text-sm text-muted-foreground">
              * Required
            </span>
          )}
        </div>

        <Button
          onClick={onNext}
          disabled={!canGoNext || (question.required && !isAnswered)}
          className="flex items-center gap-2 bg-gradient-primary text-white hover:opacity-90 transition-smooth"
        >
          Next
          <ChevronRight className="w-4 h-4" />
        </Button>
      </div>
    </div>
  );
};