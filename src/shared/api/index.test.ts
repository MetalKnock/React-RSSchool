import { describe, expect } from 'vitest';
import { searchCharacters } from '.';
import { characters } from './mock';

describe('SearchBar', () => {
  it('search correctly', async () => {
    const rate = await searchCharacters(`?name=${characters[7].name}`);
    expect(rate.result?.results).toEqual([characters[7]]);
  });
});
