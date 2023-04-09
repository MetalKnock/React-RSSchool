import { API_BASE, ApiPath } from '../config/constants';
import { Character, GetCharacters } from './types';

const getCharacters = async () => {
  const response = await fetch(`${API_BASE}${ApiPath.character}`);
  const result: GetCharacters | null = await response.json();
  return { result };
};

const searchCharacter = async (query: string) => {
  const response = await fetch(`${API_BASE}${ApiPath.character}${query}`);
  const result: GetCharacters | null = await response.json();
  return { result };
};

export { getCharacters, searchCharacter };
