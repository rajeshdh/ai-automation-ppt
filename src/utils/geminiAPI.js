// Gemini API Integration
const GEMINI_API_KEY = import.meta.env.VITE_GEMINI_API_KEY || '';

export const callGemini = async (prompt, context = '') => {
  if (!GEMINI_API_KEY) {
    // Return mock response for demo
    return getMockResponse(prompt);
  }

  try {
    const response = await fetch(
      `https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent?key=${GEMINI_API_KEY}`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          contents: [{
            parts: [{
              text: context ? `${context}\n\n${prompt}` : prompt
            }]
          }],
          generationConfig: {
            temperature: 0.7,
            maxOutputTokens: 1024,
          }
        }),
      }
    );

    const data = await response.json();

    if (data.candidates && data.candidates[0]?.content?.parts?.[0]?.text) {
      return data.candidates[0].content.parts[0].text;
    }

    throw new Error('Invalid response from Gemini API');
  } catch (error) {
    console.error('Gemini API Error:', error);
    return getMockResponse(prompt);
  }
};

// Mock responses for demo mode (when API key is not available)
const getMockResponse = (prompt) => {
  const lowerPrompt = prompt.toLowerCase();

  if (lowerPrompt.includes('grading') || lowerPrompt.includes('assignment')) {
    return `Subject: Your Email Automation Workflow Feedback

Dear Student,

Thank you for submitting your Email Automation Workflow assignment! Here's your detailed feedback:

**GRADE: 18/20 points**

**Breakdown:**
• Workflow completes without errors: 5/5 points ✅
• Gemini AI integration works correctly: 4/5 points
• Action items are extracted: 4/4 points ✅
• Output is sent/saved properly: 4/4 points ✅
• Code quality and documentation: 1/2 points

**Strengths:**
• Excellent implementation of the core workflow
• Clean JSON structure and proper error handling
• AI integration is working well
• Action item extraction is accurate

**Areas for Improvement:**
• Add more detailed comments in the workflow
• Consider adding retry logic for API failures
• Documentation could be more comprehensive

**Next Steps:**
1. Add inline comments to explain complex nodes
2. Implement exponential backoff for API retries
3. Create a README file with setup instructions

Keep up the great work! Your workflow shows strong understanding of automation concepts.

Best regards,
Rajesh Dhiman`;
  }

  if (lowerPrompt.includes('summarize') || lowerPrompt.includes('summary')) {
    return `📧 Email Summary:

Key Points:
• Meeting scheduled for next Tuesday at 2 PM
• Review research proposal before the meeting
• Prepare presentation slides
• Budget approval pending

Action Items:
1. Confirm attendance by Friday
2. Submit revised dataset by Monday
3. Book conference room

Priority: High
Estimated Time: 2 hours preparation needed`;
  }

  if (lowerPrompt.includes('paper') || lowerPrompt.includes('research')) {
    return `📚 Relevant Research Papers:

1. "Deep Learning for Healthcare Analytics" (2024)
   - Authors: Smith et al.
   - Citations: 156
   - Key Finding: 94% accuracy in disease prediction

2. "AI-Driven Automation in Research" (2023)
   - Authors: Johnson & Lee
   - Citations: 203
   - Key Finding: 60% time reduction in data analysis

3. "Neural Networks for Medical Imaging" (2024)
   - Authors: Chen et al.
   - Citations: 89
   - Key Finding: Improved diagnosis accuracy by 23%

Recommendation: Start with Smith et al. (2024) for foundational understanding.`;
  }

  if (lowerPrompt.includes('extract') || lowerPrompt.includes('analyze')) {
    return `🔍 Analysis Results:

Main Topics Identified:
• Machine Learning Applications
• Healthcare Data Processing
• Predictive Analytics

Keywords Extracted:
- Deep learning
- Neural networks
- Medical imaging
- Diagnosis accuracy

Sentiment: Positive (confidence: 87%)
Complexity Level: Advanced
Recommended for: Researchers in AI/Healthcare domain`;
  }

  return `✨ AI Response:

I've processed your request. Here are the insights:

• Analysis completed successfully
• Key patterns identified in the data
• Recommendations generated based on best practices

This is a demo response. Connect your Gemini API key to see real AI-powered results!`;
};

export const summarizeEmail = async (emailContent) => {
  const prompt = `Summarize this email in a concise, structured format with key points and action items:

${emailContent}

Format the response with:
- Key Points (bullet points)
- Action Items (numbered list)
- Priority level
- Estimated time needed`;

  return await callGemini(prompt);
};

export const findRelevantPapers = async (topic, keywords) => {
  const prompt = `As a research assistant, suggest 3 relevant academic papers for this research topic:

Topic: ${topic}
Keywords: ${keywords.join(', ')}

For each paper, provide:
- Title
- Authors
- Year
- Citation count (estimated)
- Key finding (1 sentence)

Format as a numbered list with clear structure.`;

  return await callGemini(prompt);
};

export const analyzeText = async (text) => {
  const prompt = `Analyze this text and provide:
1. Main topics (bullet points)
2. Key keywords (comma-separated)
3. Sentiment analysis
4. Complexity level
5. Target audience recommendation

Text to analyze:
${text}`;

  return await callGemini(prompt);
};

export const extractKeyInfo = async (content, fields) => {
  const prompt = `Extract the following information from this content:
${fields.map(f => `- ${f}`).join('\n')}

Content:
${content}

Provide the extracted information in a clear, structured format.`;

  return await callGemini(prompt);
};

export const gradeAssignment = async (assignment, submission) => {
  const prompt = `You are an expert instructor grading a student's automation workflow assignment.

Assignment Details:
- Title: ${assignment.title}
- Points: ${assignment.points}
- Requirements: ${assignment.requirements.join(', ')}

Student Submission:
- Name: ${submission.studentName}
- Email: ${submission.studentEmail}
- Description: ${submission.description}
- Workflow JSON: ${submission.workflowJSON.substring(0, 500)}...

Grading Criteria (total ${assignment.points} points):
${assignment.gradingCriteria.map(c => `- ${c.name}: ${c.points} points`).join('\n')}

Please provide:
1. A detailed grade breakdown for each criterion
2. Total score out of ${assignment.points}
3. Specific strengths in the submission
4. Areas for improvement
5. Actionable next steps

Format your response as a professional email that will be sent to the student.
Start with "Dear ${submission.studentName}," and be encouraging yet constructive.

Use this structure:
---
Subject: Your ${assignment.title} Feedback

Dear ${submission.studentName},

Thank you for submitting your ${assignment.title} assignment! Here's your detailed feedback:

**GRADE: [X]/${assignment.points} points**

**Breakdown:**
[List each criterion with score]

**Strengths:**
[What they did well]

**Areas for Improvement:**
[What could be better]

**Next Steps:**
[Specific actions to improve]

Keep up the great work!

Best regards,
Rajesh Dhiman
---`;

  const feedback = await callGemini(prompt);

  // Extract score if available
  const scoreMatch = feedback.match(/GRADE:\s*(\d+)/i);
  const score = scoreMatch ? parseInt(scoreMatch[1]) : null;

  return {
    feedback,
    score,
    maxScore: assignment.points,
  };
};
