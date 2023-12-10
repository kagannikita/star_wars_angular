export interface Data {
  count: number;
  next?: string;
  previous?: string;
  results: Character[];
}
export interface Character {
  gender: string;
  hair_color: string;
  height: number;
  mass: number;
  name: string;
  skin_color: string;
  url: string;
}
