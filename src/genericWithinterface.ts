// generic in interface
interface Develoer<T, X> {
  name: string;
  salary: number;
  device: {
    brand: string;
    model: string;
    realeseYear: string;
  };

  SmartWatch: T;
  bike?: X;
}

const poorDeveloper: Develoer<
  {
    heartrate: string;
    stopwatch: boolean;
  },
  {
    brand: string;
    model: string;
  }
> = {
  name: "jhon",
  salary: 200000,
  device: {
    brand: "Apple",
    model: "iPhone 12",
    realeseYear: "2020",
  },
  SmartWatch: {
    heartrate: "80 bpm",
    stopwatch: true,
  },
  bike: {
    brand: "Trek",
    model: "X-Caliber 9.9",
  },
};
const reachDeveloper: Develoer<
  {
    heartrate: string;
    callsuport: boolean;
    calculetor: boolean;
    Aifeatures: string[];
  },
  {
    brand: string;
    model: string;
  }
> = {
  name: "jhon",
  salary: 200000,
  device: {
    brand: "Apple",
    model: "MacBook Pro",
    realeseYear: "2028",
  },
  SmartWatch: {
    heartrate: "80 bpm",

    callsuport: true,
    calculetor: true,
    Aifeatures: ["heart rate monitoring", "sleep tracking", "fitness tracking"],
  },
};
