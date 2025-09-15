import { AssessmentSection } from "@/types/assessment";

export const assessmentSections: AssessmentSection[] = [
  {
    id: "introduction",
    title: "Welcome",
    description: "Introduction to the CCI Assessment",
    icon: "🧭",
    questions: []
  },
  {
    id: "communication",
    title: "Communication Intelligence",
    description: "Measure clarity, listening style, tone awareness, and feedback handling",
    icon: "🗣️",
    questions: [
      {
        id: "comm-1",
        type: "multiple-choice",
        question: "You need to explain a complex project update to a team unfamiliar with the technical details. How do you approach this?",
        scenario: "You're presenting quarterly results to a mixed audience of technical and non-technical stakeholders.",
        options: [
          {
            value: "A",
            label: "Use simple analogies and check for understanding",
            description: "Focus on making complex concepts accessible to everyone"
          },
          {
            value: "B",
            label: "Give detailed technical info assuming they will ask questions",
            description: "Provide comprehensive information and let the audience seek clarification"
          },
          {
            value: "C",
            label: "Provide a written report without extra explanation",
            description: "Let the documentation speak for itself"
          },
          {
            value: "D",
            label: "Use technical terms but slow down your speech",
            description: "Maintain technical accuracy while adjusting delivery pace"
          }
        ],
        required: true
      },
      {
        id: "comm-2",
        type: "likert",
        question: "I fully focus without interrupting when others are speaking",
        scale: 7,
        lowLabel: "Never",
        highLabel: "Always",
        required: true
      },
      {
        id: "comm-3",
        type: "multiple-choice",
        question: "You need to give critical feedback to a sensitive colleague. What tone do you choose?",
        scenario: "A team member consistently misses deadlines and it's affecting the project.",
        options: [
          {
            value: "A",
            label: "Warm and supportive with constructive suggestions",
            description: "Focus on growth and improvement opportunities"
          },
          {
            value: "B",
            label: "Direct and blunt to avoid confusion",
            description: "Clear, straightforward communication about the issues"
          },
          {
            value: "C",
            label: "Neutral and factual only",
            description: "Stick to objective observations and data"
          },
          {
            value: "D",
            label: "Avoid giving feedback in person",
            description: "Use written communication or involve a manager"
          }
        ],
        required: true
      },
      {
        id: "comm-4",
        type: "likert",
        question: "I receive feedback without becoming defensive",
        scale: 7,
        lowLabel: "Strongly Disagree",
        highLabel: "Strongly Agree",
        required: true
      },
      {
        id: "comm-5",
        type: "multiple-choice",
        question: "You notice a misunderstanding during a conversation. What do you do?",
        options: [
          {
            value: "A",
            label: "Pause and clarify immediately",
            description: "Address the confusion right away"
          },
          {
            value: "B",
            label: "Let it pass, assume it will resolve",
            description: "Trust that clarity will emerge naturally"
          },
          {
            value: "C",
            label: "Ask questions later in private",
            description: "Follow up after the meeting to clarify"
          },
          {
            value: "D",
            label: "Ignore to keep conversation smooth",
            description: "Prioritize flow over perfect understanding"
          }
        ],
        required: true
      }
    ]
  },
  {
    id: "collaboration",
    title: "Collaboration Intelligence",
    description: "Measure team adaptability, trust-building, conflict management, and shared ownership",
    icon: "🤝",
    questions: [
      {
        id: "collab-1",
        type: "likert",
        question: "I quickly adapt my role to meet the team's needs",
        scale: 7,
        lowLabel: "Strongly Disagree",
        highLabel: "Strongly Agree",
        required: true
      },
      {
        id: "collab-2",
        type: "multiple-choice",
        question: "A team member missed a deadline. How do you respond?",
        scenario: "An important project deliverable is delayed due to a teammate's missed deadline.",
        options: [
          {
            value: "A",
            label: "Check in privately to understand and offer help",
            description: "Focus on support and understanding the root cause"
          },
          {
            value: "B",
            label: "Call out missed deadlines in team meetings",
            description: "Address the issue transparently with the full team"
          },
          {
            value: "C",
            label: "Take over their work without discussion",
            description: "Ensure the project moves forward by stepping in"
          },
          {
            value: "D",
            label: "Avoid addressing it unless it recurs",
            description: "Give them another chance before taking action"
          }
        ],
        required: true
      },
      {
        id: "collab-3",
        type: "multiple-choice",
        question: "You disagree with a colleague on project direction. What's your approach?",
        scenario: "Your team is split on whether to use a new technology or stick with the current solution.",
        options: [
          {
            value: "A",
            label: "Find a compromise after listening",
            description: "Seek middle ground through active discussion"
          },
          {
            value: "B",
            label: "Stand firm and defend your point",
            description: "Advocate strongly for your preferred approach"
          },
          {
            value: "C",
            label: "Avoid confrontation and let others decide",
            description: "Step back and let the team reach consensus"
          },
          {
            value: "D",
            label: "Seek mediation from a third party",
            description: "Involve a manager or neutral party to help decide"
          }
        ],
        required: true
      },
      {
        id: "collab-4",
        type: "likert",
        question: "I willingly share credit with teammates and support their success",
        scale: 7,
        lowLabel: "Strongly Disagree",
        highLabel: "Strongly Agree",
        required: true
      }
    ]
  }
];