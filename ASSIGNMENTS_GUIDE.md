# 📝 Assignment System Guide

## Overview

The workshop now includes an **AI-powered assignment submission and grading system** that allows you to:

1. **Assign workflows** to participants
2. **Collect submissions** through the presentation
3. **Auto-grade with Gemini AI** and provide instant feedback
4. **Track all submissions** in real-time

---

## How It Works

### For Participants (Students)

1. **View Assignments** on Slide #15
2. **Click on an assignment** to see requirements
3. **Build the workflow** in n8n or Zapier
4. **Export as JSON** from their tool
5. **Submit through the form** with:
   - Name & Email
   - Workflow JSON
   - Description
   - Optional: Live URL & Screenshots
6. **Receive instant AI feedback** via email

### For You (Instructor)

1. **Present Slide #15** to show assignments
2. **Participants submit** during or after the workshop
3. **AI grades automatically** using Gemini
4. **Feedback sent via email** (simulated for now)
5. **Review submissions** in browser console

---

## 3 Built-In Assignments

### Assignment 1: Email Automation (Beginner)
**Points:** 20
**Duration:** 30-45 min
**Difficulty:** Beginner

**Requirements:**
- Email trigger (webhook/Gmail)
- Gemini AI summarization
- Action item extraction
- Send to Slack/Notion
- Error handling

**Grading Criteria:**
- Workflow completion (5 pts)
- AI integration (5 pts)
- Action items (4 pts)
- Output handling (4 pts)
- Code quality (2 pts)

---

### Assignment 2: Research Paper Discovery (Intermediate)
**Points:** 30
**Duration:** 45-60 min
**Difficulty:** Intermediate

**Requirements:**
- arXiv/PubMed API integration
- Filter by date (last 30 days)
- AI ranking by relevance
- Metadata extraction
- Database storage
- Daily digest email

**Grading Criteria:**
- API integration (6 pts)
- Filtering logic (5 pts)
- AI ranking (7 pts)
- Data storage (6 pts)
- Email digest (4 pts)
- Documentation (2 pts)

---

### Assignment 3: Complete Research Assistant (Advanced)
**Points:** 50
**Duration:** 90-120 min
**Difficulty:** Advanced

**Requirements:**
- Multi-source monitoring
- Custom filtering
- AI analysis & insights
- Summary report generation
- Database with categorization
- Team notifications
- Error handling & retry logic
- Scheduled automation

**Grading Criteria:**
- Multi-source collection (10 pts)
- Advanced filtering (8 pts)
- AI analysis (10 pts)
- Report quality (8 pts)
- Database integration (6 pts)
- Notifications (4 pts)
- Error handling (4 pts)

**Total Points Available:** 100 points

---

## AI Grading System

### How It Works

When a student submits:

```javascript
1. Submission captured with all data
2. Gemini AI receives:
   - Assignment requirements
   - Grading criteria
   - Student's workflow JSON
   - Description
3. AI analyzes and generates:
   - Grade breakdown per criterion
   - Total score
   - Strengths
   - Areas for improvement
   - Next steps
4. Formatted as professional email
5. "Sent" to student email
```

### AI Prompt Structure

The AI receives a detailed prompt like:

```
You are an expert instructor grading automation workflows.

Assignment: Email Automation Workflow
Points: 20

Requirements:
- Email trigger working
- AI summarization
- Action items extracted
...

Student Submission:
- Name: Dr. Jane Smith
- Workflow JSON: {...}
- Description: My workflow...

Grade each criterion and provide constructive feedback...
```

### Example AI Feedback

```
Subject: Your Email Automation Workflow Feedback

Dear Dr. Jane Smith,

Thank you for submitting your assignment!

**GRADE: 18/20 points**

**Breakdown:**
✅ Workflow completion: 5/5
✅ AI integration: 4/5
✅ Action items: 4/4
✅ Output handling: 4/4
⚠️ Code quality: 1/2

**Strengths:**
- Excellent workflow structure
- Clean error handling
- AI integration works well

**Areas for Improvement:**
- Add more inline comments
- Include retry logic for APIs

**Next Steps:**
1. Add documentation
2. Implement exponential backoff
3. Create a README

Best regards,
Rajesh Dhiman
```

---

## Technical Implementation

### File Structure

```
src/
├── components/
│   └── Assignments/
│       ├── AssignmentSystem.jsx    # Main system
│       ├── AssignmentCard.jsx      # Each assignment
│       └── Assignments.css         # Styling
├── utils/
│   └── geminiAPI.js               # gradeAssignment()
```

### Key Functions

**Submit Assignment:**
```javascript
const handleSubmit = async (assignmentId, submissionData) => {
  // Save submission
  // Grade with AI
  // Send feedback email (simulated)
}
```

**AI Grading:**
```javascript
export const gradeAssignment = async (assignment, submission) => {
  // Build detailed prompt
  // Call Gemini API
  // Extract score
  // Return formatted feedback
}
```

### Data Storage

Currently, submissions are stored in React state (in-memory). For production:

**Option 1: Firebase**
```javascript
import { db } from './firebase';
await db.collection('submissions').add(submission);
```

**Option 2: Local Storage**
```javascript
localStorage.setItem('submissions', JSON.stringify(submissions));
```

**Option 3: Backend API**
```javascript
await fetch('/api/submissions', {
  method: 'POST',
  body: JSON.stringify(submission)
});
```

---

## Email Integration

### Current: Simulated
- `console.log()` the email
- Shows alert to user
- Feedback visible in console

### Production: Real Emails

**Option 1: SendGrid**
```javascript
import sgMail from '@sendgrid/mail';

const sendFeedback = async (email, feedback) => {
  await sgMail.send({
    to: email,
    from: 'rajesh@eunixtech.com',
    subject: 'Your Assignment Feedback',
    text: feedback.feedback
  });
};
```

**Option 2: n8n Webhook**
```javascript
const sendViaWebhook = async (email, feedback) => {
  await fetch('https://your-n8n.com/webhook/send-email', {
    method: 'POST',
    body: JSON.stringify({ email, feedback })
  });
};
```

**Option 3: Zapier**
- Create a Zap: Webhook → Gmail/Email
- Send submissions to webhook
- Zapier sends email

---

## Customization

### Add More Assignments

Edit `src/components/Assignments/AssignmentSystem.jsx`:

```javascript
const ASSIGNMENTS = [
  {
    id: 'assignment-4',
    number: 4,
    title: 'Your Custom Assignment',
    shortDesc: 'Brief description',
    difficulty: 'intermediate',
    duration: '60 min',
    points: 35,
    requirements: [
      'Requirement 1',
      'Requirement 2',
    ],
    objectives: ['Learn X', 'Master Y'],
    gradingCriteria: [
      { name: 'Criterion 1', points: 10 },
      { name: 'Criterion 2', points: 25 },
    ],
    hints: ['Hint 1', 'Hint 2'],
  },
  // ... rest
];
```

### Modify Grading Rubric

The AI will follow your criteria. Be specific:

```javascript
gradingCriteria: [
  { name: 'All nodes connected properly', points: 5 },
  { name: 'Error handling implemented', points: 3 },
  { name: 'Uses best practices', points: 2 },
]
```

### Change AI Grading Prompt

Edit `src/utils/geminiAPI.js` in `gradeAssignment()`:

```javascript
const prompt = `Your custom instructions...

Be strict/lenient on [criteria]...
Focus on [aspects]...
`;
```

---

## Tracking Submissions

### During Workshop

**Browser Console:**
```javascript
// See all submissions
console.log(submissions);

// See specific assignment
console.log(submissions['assignment-1']);
```

**React DevTools:**
- Install React DevTools extension
- Inspect `AssignmentSystem` component
- View `submissions` state

### After Workshop

**Export Submissions:**

Add this button to AssignmentSystem.jsx:

```javascript
const exportSubmissions = () => {
  const data = JSON.stringify(submissions, null, 2);
  const blob = new Blob([data], { type: 'application/json' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = 'workshop-submissions.json';
  a.click();
};

// In render:
<button onClick={exportSubmissions}>
  Export All Submissions
</button>
```

---

## Best Practices

### Before Workshop

1. **Test the grading** with sample submissions
2. **Verify Gemini API** is working
3. **Prepare backup** in case AI fails
4. **Have manual grading rubric** ready

### During Workshop

1. **Monitor submissions** in console
2. **Help stuck participants** debug
3. **Encourage testing** before submitting
4. **Remind about JSON export** from n8n

### After Workshop

1. **Export all submissions** for records
2. **Review AI grades** manually
3. **Send follow-up emails** if needed
4. **Share best submissions** as examples

---

## Troubleshooting

### Submission Not Working?

**Check:**
1. Gemini API key is set
2. Console for error messages
3. Network tab for failed requests
4. Form validation errors

### AI Grading Failed?

**Falls back to:**
- Mock response with generic feedback
- Alert shown to user
- Submission still saved
- Manual grading needed

### Email Not Received?

**Current Implementation:**
- Emails are simulated (console.log)
- Shows alert confirmation
- Check browser console for "email"

**To Fix:**
- Implement real email service (see above)
- Or use n8n/Zapier webhook

---

## Metrics & Analytics

### Track Success Rates

```javascript
const stats = {
  totalAssignments: ASSIGNMENTS.length,
  submitted: Object.keys(submissions).length,
  avgScore: calculateAverage(submissions),
  completionRate: (submitted / totalAssignments) * 100
};
```

### Popular Assignments

```javascript
const popularityCount = {};
submissions.forEach(s => {
  popularityCount[s.assignmentId] =
    (popularityCount[s.assignmentId] || 0) + 1;
});
```

---

## Future Enhancements

### Planned Features

- [ ] Instructor dashboard (separate view)
- [ ] Real-time submission feed
- [ ] Peer review system
- [ ] Leaderboard
- [ ] Badges & certificates
- [ ] Team submissions
- [ ] Video submission support
- [ ] Live workflow testing
- [ ] Integration with LMS
- [ ] Plagiarism detection

---

## FAQ

**Q: Can students see others' submissions?**
A: No, submissions are isolated per session.

**Q: Are grades final?**
A: AI provides initial feedback. You can review and adjust.

**Q: What if AI is too harsh/lenient?**
A: Adjust the grading prompt in geminiAPI.js

**Q: Can I disable AI grading?**
A: Yes, comment out the AI call and use manual grading.

**Q: How do I collect submissions after workshop?**
A: Export from browser console or add export button.

**Q: Can participants resubmit?**
A: Currently no. Add logic to allow resubmissions.

---

## Support

**Issues?** Check:
1. [2HOUR_WORKSHOP_GUIDE.md](2HOUR_WORKSHOP_GUIDE.md)
2. [SETUP_YOUR_API_KEY.md](SETUP_YOUR_API_KEY.md)
3. Browser console for errors
4. Network tab for API failures

**Need Help?**
- Email: rajesh@eunixtech.com
- Check Gemini API status
- Review n8n documentation

---

**Your assignment system is ready! Students can now submit and get instant AI feedback.** 🎓✨
