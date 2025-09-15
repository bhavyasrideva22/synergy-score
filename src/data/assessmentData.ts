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
        id: "comm-2b",
        type: "likert",
        question: "I reflect back what I hear to confirm understanding",
        scale: 7,
        lowLabel: "Never",
        highLabel: "Always",
        required: true
      },
      {
        id: "comm-2c",
        type: "likert",
        question: "I frequently interrupt to clarify points",
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
      },
      {
        id: "comm-6",
        type: "multiple-choice",
        question: "How do you think your team perceives your communication style?",
        options: [
          { value: "empathic", label: "Empathic", description: "Understanding and supportive" },
          { value: "direct", label: "Direct", description: "Clear and straightforward" },
          { value: "reserved", label: "Reserved", description: "Thoughtful and measured" },
          { value: "enthusiastic", label: "Enthusiastic", description: "Energetic and engaging" }
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
      },
      {
        id: "collab-5",
        type: "multiple-choice",
        question: "You're given a leadership role but the team is resistant. What's your first move?",
        scenario: "You've been promoted to lead a team that preferred another candidate for the position.",
        options: [
          {
            value: "A",
            label: "Build rapport by listening to concerns",
            description: "Understand their perspective and address resistance"
          },
          {
            value: "B",
            label: "Set clear goals and expectations firmly",
            description: "Establish authority through clear direction"
          },
          {
            value: "C",
            label: "Delegate immediately to avoid conflict",
            description: "Let them maintain autonomy while you observe"
          },
          {
            value: "D",
            label: "Withdraw and let others lead",
            description: "Take a backseat approach to avoid tension"
          }
        ],
        required: true
      },
      {
        id: "collab-6",
        type: "likert",
        question: "I value diversity in team perspectives",
        scale: 7,
        lowLabel: "Strongly Disagree",
        highLabel: "Strongly Agree",
        required: true
      },
      {
        id: "collab-7",
        type: "likert",
        question: "I feel comfortable asking for help when needed",
        scale: 7,
        lowLabel: "Strongly Disagree",
        highLabel: "Strongly Agree",
        required: true
      },
      {
        id: "collab-8",
        type: "multiple-choice",
        question: "A teammate monopolizes meetings. Your choice?",
        scenario: "One team member consistently dominates discussions, leaving little room for others to contribute.",
        options: [
          {
            value: "A",
            label: "Talk to them privately",
            description: "Address the behavior one-on-one"
          },
          {
            value: "B",
            label: "Bring it up in the next meeting",
            description: "Address it openly with the group"
          },
          {
            value: "C",
            label: "Ignore to keep harmony",
            description: "Avoid confrontation to maintain team peace"
          },
          {
            value: "D",
            label: "Speak more to balance it out",
            description: "Increase your own participation to create balance"
          }
        ],
        required: true
      }
    ]
  },
  {
    id: "contextual",
    title: "Contextual Social Intelligence",
    description: "Evaluate application of CCI skills in diverse contexts",
    icon: "🧠",
    questions: [
      {
        id: "context-1",
        type: "likert",
        question: "In 1-on-1 settings: I demonstrate empathy during conversations",
        scale: 7,
        lowLabel: "Never",
        highLabel: "Always",
        required: true
      },
      {
        id: "context-2",
        type: "likert",
        question: "In 1-on-1 settings: I clarify to avoid misunderstanding",
        scale: 7,
        lowLabel: "Never",
        highLabel: "Always",
        required: true
      },
      {
        id: "context-3",
        type: "likert",
        question: "In group meetings: I contribute ideas actively",
        scale: 7,
        lowLabel: "Never",
        highLabel: "Always",
        required: true
      },
      {
        id: "context-4",
        type: "likert",
        question: "In group meetings: I help build team cohesion",
        scale: 7,
        lowLabel: "Never",
        highLabel: "Always",
        required: true
      },
      {
        id: "context-5",
        type: "likert",
        question: "In conflict situations: I manage my tone under tension",
        scale: 7,
        lowLabel: "Very Poorly",
        highLabel: "Very Well",
        required: true
      },
      {
        id: "context-6",
        type: "likert",
        question: "In conflict situations: I stay fair without escalating",
        scale: 7,
        lowLabel: "Very Poorly",
        highLabel: "Very Well",
        required: true
      },
      {
        id: "context-7",
        type: "likert",
        question: "In digital environments: I am timely and clear in async communication",
        scale: 7,
        lowLabel: "Never",
        highLabel: "Always",
        required: true
      },
      {
        id: "context-8",
        type: "likert",
        question: "In digital environments: I follow etiquette in emails and chats",
        scale: 7,
        lowLabel: "Never",
        highLabel: "Always",
        required: true
      }
    ]
  },
  {
    id: "coach",
    title: "COACH Framework Assessment",
    description: "Comprehensive evaluation using our specialized diagnostic model",
    icon: "🎯",
    questions: [
      {
        id: "coach-c1",
        type: "likert",
        question: "Clarity & Comprehension: I explain ideas clearly to diverse audiences",
        scale: 7,
        lowLabel: "Strongly Disagree",
        highLabel: "Strongly Agree",
        required: true
      },
      {
        id: "coach-c2",
        type: "likert",
        question: "Clarity & Comprehension: I adapt my communication style based on my audience",
        scale: 7,
        lowLabel: "Strongly Disagree",
        highLabel: "Strongly Agree",
        required: true
      },
      {
        id: "coach-o1",
        type: "multiple-choice",
        question: "Openness & Feedback: You receive tough feedback about your work approach. How do you respond?",
        scenario: "Your manager tells you that your recent project approach was ineffective and needs significant changes.",
        options: [
          {
            value: "A",
            label: "Thank them and ask clarifying questions",
            description: "Remain open and seek to understand"
          },
          {
            value: "B",
            label: "Defend your approach with reasoning",
            description: "Explain your perspective and methodology"
          },
          {
            value: "C",
            label: "Accept it but feel frustrated internally",
            description: "Comply outwardly while processing emotions"
          },
          {
            value: "D",
            label: "Ask for specific examples and alternatives",
            description: "Seek concrete guidance for improvement"
          }
        ],
        required: true
      },
      {
        id: "coach-o2",
        type: "likert",
        question: "Openness & Feedback: I actively seek feedback to improve my performance",
        scale: 7,
        lowLabel: "Strongly Disagree",
        highLabel: "Strongly Agree",
        required: true
      },
      {
        id: "coach-a1",
        type: "likert",
        question: "Alignment & Empathy: I consider teammates' feelings when making decisions",
        scale: 7,
        lowLabel: "Strongly Disagree",
        highLabel: "Strongly Agree",
        required: true
      },
      {
        id: "coach-a2",
        type: "likert",
        question: "Alignment & Empathy: I can sense when someone is uncomfortable in group settings",
        scale: 7,
        lowLabel: "Strongly Disagree",
        highLabel: "Strongly Agree",
        required: true
      },
      {
        id: "coach-c3",
        type: "multiple-choice",
        question: "Conflict Navigation: Two team members are in heated disagreement during a meeting. What do you do?",
        scenario: "A project planning meeting turns tense when two colleagues strongly disagree about resource allocation.",
        options: [
          {
            value: "A",
            label: "Suggest a break and mediate privately",
            description: "De-escalate and address the conflict separately"
          },
          {
            value: "B",
            label: "Ask each to explain their perspective",
            description: "Facilitate understanding between parties"
          },
          {
            value: "C",
            label: "Redirect to focus on project goals",
            description: "Shift attention back to shared objectives"
          },
          {
            value: "D",
            label: "Let them work it out themselves",
            description: "Allow them to resolve it independently"
          }
        ],
        required: true
      },
      {
        id: "coach-c4",
        type: "likert",
        question: "Conflict Navigation: I resolve conflicts constructively",
        scale: 7,
        lowLabel: "Strongly Disagree",
        highLabel: "Strongly Agree",
        required: true
      },
      {
        id: "coach-h1",
        type: "likert",
        question: "Harmony & Follow-Through: I consistently follow through on my commitments",
        scale: 7,
        lowLabel: "Strongly Disagree",
        highLabel: "Strongly Agree",
        required: true
      },
      {
        id: "coach-h2",
        type: "likert",
        question: "Harmony & Follow-Through: I help maintain positive team morale",
        scale: 7,
        lowLabel: "Strongly Disagree",
        highLabel: "Strongly Agree",
        required: true
      }
    ]
  }
];