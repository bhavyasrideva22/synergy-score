import { ReactNode } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface QuestionCardProps {
  children: ReactNode;
  questionNumber: number;
  totalQuestions: number;
  title?: string;
  scenario?: string;
  className?: string;
}

export const QuestionCard = ({ 
  children, 
  questionNumber, 
  totalQuestions, 
  title, 
  scenario,
  className = "" 
}: QuestionCardProps) => {
  return (
    <Card className={`bg-question-bg shadow-medium border-border transition-smooth hover:shadow-large ${className}`}>
      <CardHeader className="bg-gradient-section border-b border-border">
        <div className="flex items-center justify-between">
          <CardTitle className="text-lg font-semibold text-foreground">
            {title || `Question ${questionNumber}`}
          </CardTitle>
          <span className="text-sm font-medium text-muted-foreground bg-muted px-3 py-1 rounded-full">
            {questionNumber}/{totalQuestions}
          </span>
        </div>
        {scenario && (
          <div className="mt-3 p-4 bg-primary-lighter border-l-4 border-primary rounded-r">
            <p className="text-sm text-foreground italic">
              <strong>Scenario:</strong> {scenario}
            </p>
          </div>
        )}
      </CardHeader>
      <CardContent className="p-6">
        {children}
      </CardContent>
    </Card>
  );
};