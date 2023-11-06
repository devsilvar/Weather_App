export interface Weather {
  coord: { [key: string]: number };
  weather: object[];
  base: string;
  main: { [key: string]: number };
  visibility: number;
  wind: { [key: string]: number };
  cloud: { [key: string]: number };
  dt: number;
  sys: { [key: string]: string };
  timezone: number;
  id: number;
  name: string;
  cod: number;
}
