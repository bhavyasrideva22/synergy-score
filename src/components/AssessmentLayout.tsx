import { ReactNode } from "react";
import { Progress } from "@/components/ui/progress";

interface AssessmentLayoutProps {
  children: ReactNode;
  currentSection: number;
  totalSections: number;
  sectionTitle: string;
  progress: number;
}

export const AssessmentLayout = ({ 
  children, 
  currentSection, 
  totalSections, 
  sectionTitle, 
  progress 
}: AssessmentLayoutProps) => {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="bg-gradient-card border-b border-border shadow-soft">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h1 className="text-2xl font-bold text-foreground">
                CCI Assessment
              </h1>
              <p className="text-muted-foreground">
                Collaboration & Communication Intelligence
              </p>
            </div>
            <div className="text-right">
              <div className="text-sm text-muted-foreground">
                Section {currentSection} of {totalSections}
              </div>
              <div className="text-lg font-semibold text-primary">
                {sectionTitle}
              </div>
            </div>
          </div>
          
          {/* Progress Bar */}
          <div className="space-y-2">
            <div className="flex justify-between text-sm text-muted-foreground">
              <span>Progress</span>
              <span>{Math.round(progress)}% Complete</span>
            </div>
            <Progress 
              value={progress} 
              className="h-2 bg-progress-bg"
            />
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        {children}
      </main>
    </div>
  );
};