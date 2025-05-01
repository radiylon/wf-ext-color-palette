import { useState, useCallback } from 'react';
import OpenAI from 'openai';
import dedent from 'dedent';
import { ColorPalette } from '../types';

interface PaletteGenerationParams {
  description: string;
}

interface UseOpenAIOptions {
  apiKey: string;
}

export function useOpenAI({ apiKey }: UseOpenAIOptions) {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // Initialize OpenAI client
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const client = new OpenAI({
    apiKey,
    dangerouslyAllowBrowser: true // Required for client-side usage
  });

  const generatePalette = useCallback(async (params: PaletteGenerationParams): Promise<ColorPalette> => {
    setIsLoading(true);
    setError(null);

    try {
      const completion = await client.chat.completions.create({
        model: "gpt-4.1-nano",
        messages: [
          {
            role: "system",
            content: dedent`
              You are a color palette generation expert. Generate exactly 6 colors based on the description provided.
              Return the response in a strict JSON format with no additional text:
              {
                "colors": [
                  { "name": "color name", "hexcode": "#HEXCODE" },
                  ...repeat for all 6 colors...
                ]
              }
              
              Rules:
              - Always return exactly 6 colors
              - Hex codes must be valid 6-character codes (e.g. #FF0000)
              - Color names should be clear and descriptive
              - Names should not contain special characters
              - Response must be valid JSON
            `
          },
          {
            role: "user",
            content: params.description
          }
        ],
        response_format: { type: "json_object" }
      });

      const content = completion.choices[0]?.message?.content || '{"colors":[]}';
      const palette = JSON.parse(content) as ColorPalette;
      
      if (!palette.colors || palette.colors.length !== 6) {
        throw new Error('Invalid palette generated');
      }

      return palette;
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'Failed to generate palette';
      setError(errorMessage);
      throw new Error(errorMessage);
    } finally {
      setIsLoading(false);
    }
  }, [client]);

  return {
    generatePalette,
    isLoading,
    error
  };
} 