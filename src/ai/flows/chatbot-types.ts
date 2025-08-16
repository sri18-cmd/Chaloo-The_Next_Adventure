/**
 * @fileOverview Defines the data structures for the chatbot flow.
 */
import {z} from 'genkit';

export const ChatbotInputSchema = z.object({
  history: z.array(
    z.object({
      role: z.enum(['user', 'model']),
      content: z.string(),
    })
  ),
  message: z.string(),
});
export type ChatbotInput = z.infer<typeof ChatbotInputSchema>;

export const ChatbotOutputSchema = z.object({
  response: z.string(),
});
export type ChatbotOutput = z.infer<typeof ChatbotOutputSchema>;
