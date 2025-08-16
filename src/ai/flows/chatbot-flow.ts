
'use server';
/**
 * @fileOverview A chatbot flow for the Chaloo travel website.
 */

import {ai} from '@/ai/genkit';
import {destinations} from '@/lib/data';
import {
  ChatbotInputSchema,
  ChatbotOutputSchema,
  type ChatbotInput,
  type ChatbotOutput,
} from './chatbot-types';

// Convert destination data to a string format that can be used in the prompt
const destinationContext = destinations
  .map(d => {
    return `
Name: ${d.name}
Location: ${d.location}
Brief: ${d.brief}
Description: ${d.description}
Price Per Night: ₹${d.pricePerNight}
Rating: ${d.rating}
Tags: ${d.tags?.join(', ') || 'N/A'}
`;
  })
  .join('\n---\n');

const prompt = ai.definePrompt({
  name: 'chatbotPrompt',
  input: {schema: ChatbotInputSchema},
  output: {schema: ChatbotOutputSchema},
  model: 'googleai/gemini-2.0-flash',
  prompt: `You are a friendly and helpful travel assistant for a website called "Chaloo".
Your goal is to help users plan their next adventure by answering questions about the travel destinations offered.
Use the information provided below about the available destinations to answer the user's questions.
If a question is not related to travel or the destinations, politely decline to answer and steer the conversation back to planning a trip with Chaloo.
Keep your answers concise and helpful.

Here is the list of available destinations:
---
${destinationContext}
---

Here is the conversation history:
{{#each history}}
{{this.role}}: {{this.content}}
{{/each}}

New User Message: {{message}}
`,
});

const chatbotFlow = ai.defineFlow(
  {
    name: 'chatbotFlow',
    inputSchema: ChatbotInputSchema,
    outputSchema: ChatbotOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);

export async function askChatbot(input: ChatbotInput): Promise<ChatbotOutput> {
  return chatbotFlow(input);
}
