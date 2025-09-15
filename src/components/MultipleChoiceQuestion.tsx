import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";

interface Option {
  value: string;
  label: string;
  description?: string;
}

interface MultipleChoiceQuestionProps {
  question: string;
  options: Option[];
  value: string;
  onChange: (value: string) => void;
  required?: boolean;
}

export const MultipleChoiceQuestion = ({
  question,
  options,
  value,
  onChange,
  required = true
}: MultipleChoiceQuestionProps) => {
  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-lg font-medium text-foreground mb-4">
          {question}
          {required && <span className="text-destructive ml-1">*</span>}
        </h3>
      </div>
      
      <RadioGroup 
        value={value} 
        onValueChange={onChange}
        className="space-y-3"
      >
        {options.map((option) => (
          <div key={option.value} className="flex items-start space-x-3">
            <RadioGroupItem 
              value={option.value} 
              id={option.value}
              className="mt-1 border-border data-[state=checked]:border-primary data-[state=checked]:bg-primary"
            />
            <div className="flex-1">
              <Label 
                htmlFor={option.value}
                className="text-base font-medium text-foreground cursor-pointer hover:text-primary transition-smooth"
              >
                {option.label}
              </Label>
              {option.description && (
                <p className="text-sm text-muted-foreground mt-1">
                  {option.description}
                </p>
              )}
            </div>
          </div>
        ))}
      </RadioGroup>
    </div>
  );
};