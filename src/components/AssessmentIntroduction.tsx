import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CheckCircle, Clock, Users, MessageCircle } from "lucide-react";

interface AssessmentIntroductionProps {
  onStart: () => void;
}

export const AssessmentIntroduction = ({ onStart }: AssessmentIntroductionProps) => {
  const features = [
    {
      icon: <MessageCircle className="w-5 h-5" />,
      title: "Communication Intelligence",
      description: "Assess your clarity, listening skills, and feedback handling"
    },
    {
      icon: <Users className="w-5 h-5" />,
      title: "Collaboration Skills",
      description: "Evaluate team adaptability, trust-building, and conflict resolution"
    },
    {
      icon: <CheckCircle className="w-5 h-5" />,
      title: "Personalized Insights",
      description: "Receive detailed results with growth recommendations"
    },
    {
      icon: <Clock className="w-5 h-5" />,
      title: "20-30 Minutes",
      description: "Complete assessment at your own pace"
    }
  ];

  return (
    <div className="max-w-4xl mx-auto space-y-8">
      {/* Hero Section */}
      <div className="text-center space-y-6">
        <div className="bg-gradient-primary text-white p-8 rounded-xl shadow-large">
          <h1 className="text-4xl font-bold mb-4">
            Collaboration & Communication Intelligence Assessment
          </h1>
          <p className="text-xl text-white/90 max-w-2xl mx-auto">
            Discover your unique communication style and collaboration strengths. 
            Build stronger relationships and enhance team productivity.
          </p>
        </div>
      </div>

      {/* Why This Matters */}
      <Card className="bg-gradient-card shadow-medium border-border">
        <CardHeader>
          <CardTitle className="text-2xl text-center text-foreground">
            Why Collaboration & Communication Matter Today
          </CardTitle>
        </CardHeader>
        <CardContent className="prose prose-lg max-w-none text-foreground">
          <p>
            In today's fast-paced, interconnected world, your ability to collaborate and communicate 
            effectively isn't just a nice-to-have — it's essential. Collaboration & Communication 
            Intelligence (CCI) goes beyond basic soft skills. It involves understanding group dynamics, 
            practicing empathy, expressing ideas clearly, and navigating complex interpersonal situations 
            with confidence.
          </p>
          <p>
            This assessment will help you discover your unique communication style, how you contribute 
            within teams, and how agile you are across different social contexts. Whether you're working 
            in-person or remotely, in leadership or peer roles, this insight will empower you to influence 
            with empathy and collaborate with purpose.
          </p>
        </CardContent>
      </Card>

      {/* Features Grid */}
      <div className="grid md:grid-cols-2 gap-6">
        {features.map((feature, index) => (
          <Card key={index} className="bg-question-bg shadow-soft border-border hover:shadow-medium transition-smooth">
            <CardContent className="p-6">
              <div className="flex items-start space-x-4">
                <div className="bg-primary text-primary-foreground p-3 rounded-lg">
                  {feature.icon}
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground">
                    {feature.description}
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* CTA Section */}
      <Card className="bg-gradient-section shadow-medium border-border">
        <CardContent className="p-8 text-center">
          <h3 className="text-xl font-semibold text-foreground mb-4">
            Ready to Discover Your CCI Profile?
          </h3>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Take the first step toward building stronger relationships, leading more effectively, 
            and enhancing team productivity. Your personalized results await.
          </p>
          <Button 
            onClick={onStart}
            size="lg"
            className="bg-gradient-primary text-white hover:opacity-90 transition-smooth shadow-primary font-semibold px-8 py-3"
          >
            Start Assessment
          </Button>
        </CardContent>
      </Card>
    </div>
  );
};