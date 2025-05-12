export type EventType = {
  name: string;
  startTime: string;
  endTime: string;
  desc: string;
  location: string;
  day: number;
  type: string;
  icon: string;
  column: number; //assigned in schedule.tsx
  span: number; //1,2,3
};

// types: important, general, food, activity
// 6pm = 18:00
export const events: EventType[] = [
  {
    name: "Dinner",
    startTime: "18:00",
    endTime: "19:30",
    desc: "shawarma is serving",
    location: "foyer",
    day: 1,
    type: "food",
    icon: "🍽",
    column: NaN,
    span: 3,
  },
  {
    name: "test",
    startTime: "1:00",
    endTime: "2:30",
    desc: "touch matthew",
    location: "foyer",
    day: 1,
    type: "important",
    icon: "🍽",
    column: NaN,
    span: 3,
  },
  {
    name: "test",
    startTime: "2:00",
    endTime: "2:30",
    desc: "touch matthew",
    location: "foyer",
    day: 1,
    type: "important",
    icon: "🐵",
    column: NaN,
    span: 3,
  },
  {
    name: "test",
    startTime: "2:00",
    endTime: "2:30",
    desc: "touch matthew",
    location: "foyer",
    day: 1,
    type: "important",
    icon: "🐵",
    column: NaN,
    span: 3,
  },
];
