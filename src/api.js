// Groq API Configuration
const GROQ_API_KEY = process.env.REACT_APP_API_KEY;
const GROQ_API_URL = 'https://api.groq.com/openai/v1/chat/completions';

// Main AI function - handles all AI requests
export async function callAI(prompt, conversationHistory = []) {
  if (!GROQ_API_KEY) {
    throw new Error('API key is missing. Please add REACT_APP_API_KEY to your .env file');
  }

  try {
    // Build messages array with conversation history
    const messages = [
      {
        role: 'system',
        content: 'You are a helpful AI assistant that provides clear, accurate, and professional responses.'
      },
      ...conversationHistory,
      {
        role: 'user',
        content: prompt
      }
    ];

    const response = await fetch(GROQ_API_URL, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${GROQ_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        model: 'llama-3.3-70b-versatile',
        messages: messages,
        temperature: 0.7,
        max_tokens: 2000,
        top_p: 1,
        stream: false
      }),
    });

    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}));
      throw new Error(errorData.error?.message || `API Error: ${response.status} ${response.statusText}`);
    }

    const data = await response.json();
    return data.choices[0]?.message?.content || 'No response generated';
  } catch (error) {
    console.error('API Error:', error);
    throw error;
  }
}

// Text Analysis Function
export async function analyzeText(text) {
  const prompt = `Analyze the following text and provide:
1. Readability Score (0-100)
2. Tone (Professional/Casual/Formal/etc.)
3. Word Count
4. Sentence Count
5. Key Insights
6. Suggestions for improvement

Text: "${text}"

Respond in JSON format:
{
  "readability": number,
  "tone": "string",
  "wordCount": number,
  "sentenceCount": number,
  "insights": ["insight1", "insight2", "insight3"],
  "suggestions": ["suggestion1", "suggestion2", "suggestion3"]
}`;

  try {
    const response = await callAI(prompt);
    // Try to parse JSON from response
    const jsonMatch = response.match(/\{[\s\S]*\}/);
    if (jsonMatch) {
      return JSON.parse(jsonMatch[0]);
    }
    throw new Error('Invalid response format');
  } catch (error) {
    console.error('Text Analysis Error:', error);
    throw error;
  }
}

// Resume Review Function
export async function reviewResume(resumeText) {
  const prompt = `Review this resume and provide:
1. ATS Score (0-100)
2. Overall Rating (0-10)
3. Strengths (3-5 points)
4. Weaknesses (3-5 points)
5. Specific Recommendations (3-5 points)

Resume: "${resumeText}"

Respond in JSON format:
{
  "atsScore": number,
  "overallRating": number,
  "strengths": ["strength1", "strength2", "strength3"],
  "weaknesses": ["weakness1", "weakness2", "weakness3"],
  "recommendations": ["rec1", "rec2", "rec3"]
}`;

  try {
    const response = await callAI(prompt);
    const jsonMatch = response.match(/\{[\s\S]*\}/);
    if (jsonMatch) {
      return JSON.parse(jsonMatch[0]);
    }
    throw new Error('Invalid response format');
  } catch (error) {
    console.error('Resume Review Error:', error);
    throw error;
  }
}

// Rewrite Text Function
export async function rewriteText(text, style = 'professional') {
  const prompt = `Rewrite the following text in a ${style} style. Make it clear, engaging, and well-structured.

Original text: "${text}"

Provide only the rewritten text without any explanations.`;

  try {
    return await callAI(prompt);
  } catch (error) {
    console.error('Rewrite Error:', error);
    throw error;
  }
}

// Extract Keywords Function
export async function extractKeywords(text) {
  const prompt = `Extract the most important keywords and phrases from this text. Provide 10-15 keywords ranked by importance.

Text: "${text}"

Respond in JSON format:
{
  "keywords": [
    {"word": "keyword1", "importance": "high"},
    {"word": "keyword2", "importance": "medium"},
    {"word": "keyword3", "importance": "high"}
  ]
}`;

  try {
    const response = await callAI(prompt);
    const jsonMatch = response.match(/\{[\s\S]*\}/);
    if (jsonMatch) {
      return JSON.parse(jsonMatch[0]);
    }
    throw new Error('Invalid response format');
  } catch (error) {
    console.error('Keyword Extraction Error:', error);
    throw error;
  }
}

// Fix Grammar Function
export async function fixGrammar(text) {
  const prompt = `Fix all grammar, spelling, and punctuation errors in this text. Also improve clarity and flow.

Original text: "${text}"

Respond in JSON format:
{
  "correctedText": "the corrected text here",
  "errors": [
    {"type": "grammar", "original": "wrong text", "correction": "correct text"},
    {"type": "spelling", "original": "wrong word", "correction": "correct word"}
  ]
}`;

  try {
    const response = await callAI(prompt);
    const jsonMatch = response.match(/\{[\s\S]*\}/);
    if (jsonMatch) {
      return JSON.parse(jsonMatch[0]);
    }
    throw new Error('Invalid response format');
  } catch (error) {
    console.error('Grammar Fix Error:', error);
    throw error;
  }
}
