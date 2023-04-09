import { API_BASE, ApiPath } from '../config/constants';
import { GetCharacters } from './types';

const searchCharacters = async (query: string) => {
  const response = await fetch(`${API_BASE}${ApiPath.character}${query}`);
  const result: GetCharacters | null = await response.json();
  const { status } = response;
  return { result, status };
};

export { searchCharacters };
