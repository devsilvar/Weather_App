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

export interface weatherProp {
  city: string;
  Days: any;
  weathers: Weather;
  setLoader: any;
  AdjustWeather: (text: string) => void;
  getStateLocation: (text: string) => void;
  ToastState: string;
  etToastState: any;
}
