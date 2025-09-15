import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";

interface LikertScaleQuestionProps {
  question: string;
  value: string;
  onChange: (value: string) => void;
  lowLabel?: string;
  highLabel?: string;
  scale?: number;
  required?: boolean;
}

export const LikertScaleQuestion = ({
  question,
  value,
  onChange,
  lowLabel = "Strongly Disagree",
  highLabel = "Strongly Agree",
  scale = 7,
  required = true
}: LikertScaleQuestionProps) => {
  const scaleOptions = Array.from({ length: scale }, (_, i) => ({
    value: (i + 1).toString(),
    label: (i + 1).toString()
  }));

  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-lg font-medium text-foreground mb-4">
          {question}
          {required && <span className="text-destructive ml-1">*</span>}
        </h3>
      </div>
      
      <div className="space-y-4">
        {/* Scale Labels */}
        <div className="flex justify-between text-sm text-muted-foreground mb-2">
          <span>{lowLabel}</span>
          <span>{highLabel}</span>
        </div>
        
        {/* Scale Options */}
        <RadioGroup 
          value={value} 
          onValueChange={onChange}
          className="flex justify-between items-center"
        >
          {scaleOptions.map((option) => (
            <div key={option.value} className="flex flex-col items-center space-y-2">
              <RadioGroupItem 
                value={option.value} 
                id={`scale-${option.value}`}
                className="border-border data-[state=checked]:border-primary data-[state=checked]:bg-primary w-5 h-5"
              />
              <Label 
                htmlFor={`scale-${option.value}`}
                className="text-sm font-medium text-muted-foreground cursor-pointer hover:text-primary transition-smooth"
              >
                {option.label}
              </Label>
            </div>
          ))}
        </RadioGroup>
        
        {/* Value indicator */}
        {value && (
          <div className="text-center mt-4">
            <div className="inline-flex items-center gap-2 bg-primary-lighter px-4 py-2 rounded-full">
              <span className="text-sm font-medium text-primary">
                Selected: {value}
              </span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};