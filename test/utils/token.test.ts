import { describe, expect, test } from '@jest/globals';
import { IChatRequestMessage } from '../../src/intellichat/types';
import { countGPTTokens } from '../../src/utils/token';

describe('utils/token', () => {
  test('countGPTTokens', () => {
    const exampleMessages = [
      {
        role: 'system',
        content:
          'You are a helpful, pattern-following assistant that translates corporate jargon into plain English.',
      },
      {
        role: 'system',
        name: 'example_user',
        content: 'New synergies will help drive top-line growth.',
      },
      {
        role: 'system',
        name: 'example_assistant',
        content: 'Things working well together will increase revenue.',
      },
      {
        role: 'system',
        name: 'example_user',
        content:
          "Let's circle back when we have more bandwidth to touch base on opportunities for increased leverage.",
      },
      {
        role: 'system',
        name: 'example_assistant',
        content:
          "Let's talk later when we're less busy about how to do better.",
      },
      {
        role: 'user',
        content:
          "This late pivot means we don't have time to boil the ocean for the client deliverable.",
      },
    ] as IChatRequestMessage[];
    const numTokens = countGPTTokens(exampleMessages, 'gpt-4');
    expect(numTokens).toBe(129);
  });
});
