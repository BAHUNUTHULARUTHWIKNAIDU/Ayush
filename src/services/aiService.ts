// AI Career Copilot & Simulation Service Abstraction
// Designed for plug-and-play LLM endpoint connection

export interface CopilotMessage {
  id: string;
  sender: 'user' | 'assistant';
  text: string;
  timestamp: string;
  suggestedPrompts?: string[];
  actionLink?: { label: string; tab: string };
}

export const generateAIResponse = async (
  query: string, 
  studentContext: {
    skills: { name: string; score: number }[];
    targetCareer: string;
    gaps: { skillName: string; gap: number }[];
  }
): Promise<CopilotMessage> => {
  const lower = query.toLowerCase();

  // Simulate realistic network latency
  await new Promise(resolve => setTimeout(resolve, 600));

  if (lower.includes('missing') || lower.includes('gap') || lower.includes('barrier')) {
    return {
      id: `msg-${Date.now()}`,
      sender: 'assistant',
      text: `Based on your goal for **Clinical Research**, your largest employability barrier is **Data Analysis (42%)**, where industry benchmarks require at least **70%**. You also have a secondary gap in **Research Methodology (58% vs 80%)**.\n\nClosing these two competencies will increase your overall career readiness from **78% to 91%** and unlock 3 additional high-stipend fellowships.`,
      timestamp: 'Just now',
      suggestedPrompts: [
        'How can I improve my readiness quickly?',
        'What happens if I learn Data Analysis?',
        'Which project should I complete?'
      ],
      actionLink: { label: 'View Skill Gap Analysis', tab: 'gaps' }
    };
  }

  if (lower.includes('improve') || lower.includes('readiness') || lower.includes('action')) {
    return {
      id: `msg-${Date.now()}`,
      sender: 'assistant',
      text: `To maximize readiness this month, I recommend this targeted 2-step sequence:\n1. Complete the **AYUSH Clinical Data Analysis** course (12 hrs) in the Learning Hub.\n2. Submit your **Panchakarma Inpatient Registry data script** for verification by Dr. Priya Nair.\n\nCompleting these will elevate your profile to **Faculty Verified** tier and increase your AI match score with Vaidya Analytics to 98%.`,
      timestamp: 'Just now',
      suggestedPrompts: [
        'Which internship is best for me?',
        'What happens if I learn Data Analysis?'
      ],
      actionLink: { label: 'Go to Career Roadmap', tab: 'roadmap' }
    };
  }

  if (lower.includes('what happens if') || lower.includes('data analysis')) {
    return {
      id: `msg-${Date.now()}`,
      sender: 'assistant',
      text: `🔬 **Simulation Result:**\nIf you upgrade **Data Analysis from 42% to 75%**:\n- Overall Clinical Research Readiness: **78% ➔ 87% (+9%)**\n- Match with *Clinical Research Intern (Vaidya Analytics)*: **92% ➔ 98%**\n- Unlocks: *Tele-AYUSH Health Informatics Analyst* (previously 65% match, now eligible with high probability).`,
      timestamp: 'Just now',
      suggestedPrompts: [
        'Launch Career What-If Simulator',
        'Which project should I complete?'
      ],
      actionLink: { label: 'Open What-If Simulator', tab: 'simulator' }
    };
  }

  if (lower.includes('internship') || lower.includes('opportunity') || lower.includes('best')) {
    return {
      id: `msg-${Date.now()}`,
      sender: 'assistant',
      text: `Your top recommendation right now is **Clinical Research Intern at AYUSH Research Org & Vaidya Analytics** (92% AI Match). \n\n**Why you match:**\n- Ayurvedic Pharmacology (88% vs 80% req) ✓\n- Panchakarma Therapy (76% vs 70% req) ✓\n- Faculty-verified endorsement from AIIA ✓\n\nStipend: ₹25,000/month (Hybrid Bengaluru). Apply before the Sep 15 deadline!`,
      timestamp: 'Just now',
      suggestedPrompts: [
        'Show transparent match breakdown',
        'What skills am I missing for clinical research?'
      ],
      actionLink: { label: 'View Opportunities', tab: 'opportunities' }
    };
  }

  // Default fallback answer
  return {
    id: `msg-${Date.now()}`,
    sender: 'assistant',
    text: `As your AYUSH Career Copilot, I analyze real-time industry demands from top AYUSH manufacturers, clinical trial organizations, and NABH institutions against your active AIIA coursework. \n\nYou are currently on track for **Clinical Research** at **78% readiness**. Ask me about closing your skill gaps, simulated career projections, or specific internships!`,
    timestamp: 'Just now',
    suggestedPrompts: [
      'What skills am I missing for clinical research?',
      'What happens if I learn Data Analysis?',
      'Which internship is best for me?'
    ]
  };
};

export const calculateWhatIfReadiness = (
  baseReadiness: number,
  addedSkills: { dataAnalysis: boolean; researchMethodology: boolean; projectCompleted: boolean }
): { projectedReadiness: number; unlockedOpportunities: number } => {
  let score = baseReadiness;
  let unlocked = 0;

  if (addedSkills.dataAnalysis) {
    score += 8;
    unlocked += 1;
  }
  if (addedSkills.researchMethodology) {
    score += 7;
    unlocked += 1;
  }
  if (addedSkills.projectCompleted) {
    score += 6;
    unlocked += 1;
  }

  return {
    projectedReadiness: Math.min(98, score),
    unlockedOpportunities: unlocked
  };
};
