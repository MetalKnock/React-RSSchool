interface Origin {
  name: string;
  url: string;
}

interface Location {
  name: string;
  url: string;
}

interface Character {
  id: number;
  name: string;
  status: string;
  species: string;
  type: string;
  gender: string;
  origin: Origin;
  location: Location;
  image: string;
  episode: Array<string>;
  url: string;
  created: string;
}
interface Human {
  id: string;
  name: string;
  birthday: string;
  country: string;
  agreement: boolean;
  gender: string;
  avatar: string;
}

export { Character, Human };
