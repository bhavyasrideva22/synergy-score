import { Textarea } from "@/components/ui/textarea";

interface OpenEndedQuestionProps {
  question: string;
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  required?: boolean;
}

export const OpenEndedQuestion = ({
  question,
  value,
  onChange,
  placeholder = "Share your thoughts...",
  required = true
}: OpenEndedQuestionProps) => {
  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-lg font-medium text-foreground mb-4">
          {question}
          {required && <span className="text-destructive ml-1">*</span>}
        </h3>
      </div>
      
      <div className="space-y-4">
        <Textarea
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder={placeholder}
          className="min-h-32 resize-y border-border focus:border-primary focus:ring-primary"
          rows={6}
        />
        
        {value && (
          <div className="text-sm text-muted-foreground">
            {value.length} characters
          </div>
        )}
      </div>
    </div>
  );
};