import { useState } from "react";
import DashNavbar from "../../../components/dashNav";
import { events, EventType } from "./events";

export default function Schedule() {
  const days = [1, 2, 3];
  const colors = ["#8d5fe8", "#FF3D71", "#1E86FF", "#FFB800"];
  const colors70 = ["#8d5fe8B3", "#FF3D71B3", "#1E86FFB3", "#FFB800B3"];
  const [selectedDay, setSelectedDay] = useState(1);

  // value, index but value isn't needed
  const times = Array.from({ length: 96 }, (_, i) => {
    const hour = Math.floor(i / 4);
    const min = (i % 4) * 15;
    const period = hour < 12 ? "am" : "pm";
    const displayHour = hour % 12 || 12; // 12-hour format conversion
    return `${displayHour}:${min === 0 ? "00" : min} ${period}`;
  });

  const calculatePosition = (timeStr: string) => {
    // timeStr expected format "HH:MM" (ignoring AM/PM for simplicity)
    const hour = parseInt(timeStr.split(":")[0]);
    const minute = parseInt(timeStr.split(":")[1]);
    return (hour * 4 + minute / 15) * 5;
  };

  function convertTimeTo12(timeStr: string) {
    const time = parseInt(timeStr.split(":")[0]);
    if (time > 13) {
      return time - 12 + ":" + timeStr.split(":")[1] + " pm";
    } else {
      return time + ":" + timeStr.split(":")[1] + " am";
    }
  }

  const assignColumns = (events: EventType[]) => {
    const columns: number[][] = [[], [], []];

    return events.map((event) => {
      const startPos = calculatePosition(event.startTime);
      const endPos = calculatePosition(event.endTime);

      // Find the first available column that doesn't have an overlapping event
      let assignedColumn = 0;
      let overlapping = false;
      for (let col = 0; col < 3; col++) {
        const lastEventEnd = columns[col].length
          ? columns[col][columns[col].length - 1]
          : -1;
        if (lastEventEnd <= startPos) {
          assignedColumn = col;
          event.column = assignedColumn;
          break;
        } else {
          overlapping = true;
        }
      }

      event.span = overlapping ? 1 : 3;
      // Store this event's end time in the column so future events can avoid overlap
      columns[assignedColumn].push(endPos);

      return { ...event };
    });
  };

  const sortedImportantEvents = assignColumns(
    // assigns column to the events for this day
    events.filter((event) => event.day === selectedDay)
  );

  return (
    <div
      className="relative min-h-screen w-[200vw] md:w-full md:overflow-x-hidden bg-linear-to-b from-neo-green-1/60 via-neo-green-4/50 to-neo-green-1/90 font-manrope">
      <div className="w-full flex flex-row items-center justify-center pt-5">
        {/* Day Tabs */}
        <div className="space-x-4 mb-4 flex flex-row">
          <h1 className="w-full md:text-2xl text-xl text-transparent bg-clip-text bg-linear-to-r from-neo-green-3 via-neo-green-2 to-neo-green-6 animate-gradient-x-slow p-5 shadow-black/80 drop-shadow-sm">
            neo
          </h1>

          {days.map((day) => (
            <button
              key={day}
              className={`px-10 py-2 rounded-lg flex w-full flex-col items-center justify-center ${
                selectedDay === day
                  ? "bg-neo-green-4 text-neo-green-2"
                  : "bg-neo-green-1/15 text-neo-green-3"
              }`}
              onClick={() => setSelectedDay(day)}
            >
              day {day}
            </button>
          ))}

          <h1 className="w-full md:text-2xl text-xl text-transparent bg-clip-text bg-linear-to-r from-neo-green-3 via-neo-green-2 to-neo-green-6 animate-gradient-x-slow p-5 shadow-black/80 drop-shadow-sm">
            schedule
          </h1>
        </div>
      </div>

      {/* legend */}
      <div className="w-full h-10 flex flex-row items-center justify-center text-neo-green-3 my-5">
        <div className="px-5 flex flex-row gap-2">
          <div
            className="h-5 w-5 rounded-sm"
            style={{
              backgroundColor: `${colors[1]}`,
              // x,y,blur,spread
              boxShadow: `0 1px 3px ${colors70[1]}`,
            }}
          ></div>
          <h1>important</h1>
        </div>
        <div className="px-5 flex flex-row gap-2">
          <div
            className="h-5 w-5 rounded-sm"
            style={{
              backgroundColor: `${colors[0]}`,
              // x,y,blur,spread
              boxShadow: `0 1px 3px ${colors70[0]}`,
            }}
          ></div>
          <h1>food</h1>
        </div>
        <div className="px-5 flex flex-row gap-2">
          <div
            className="h-5 w-5 rounded-sm"
            style={{
              backgroundColor: `${colors[2]}`,
              // x,y,blur,spread
              boxShadow: `0 1px 3px ${colors70[2]}`,
            }}
          ></div>
          <h1>general</h1>
        </div>
        <div className="px-5   flex flex-row gap-2">
          <div
            className="h-5 w-5 rounded-sm"
            style={{
              backgroundColor: `${colors[3]}`,
              // x,y,blur,spread
              boxShadow: `0 1px 3px ${colors70[3]}`,
            }}
          ></div>
          <h1>activity</h1>
        </div>
      </div>

      {/* events */}
      <div className="grid grid-cols-4 gap-2 pb-15">
        {/* Time Column */}
        <div className="col-span-1 flex flex-col rounded-r-2xl ">
          {times.map((time, index) => (
            <div
              key={index}
              className="h-20 flex items-center justify-center bg-linear-to-r from-neo-green-2/40 via-neo-green-2/30 to-neo-green-2/10 text-neo-green-3 border-neo-green-1/10 border-1"
            >
              {time}
            </div>
          ))}
        </div>

        {/* Important Events Column */}
        <div className="col-span-1 relative">
          {sortedImportantEvents
            .filter((event) => event.day === selectedDay)
            .map((event, idx) => {
              const top = calculatePosition(event.startTime);
              const bottom = calculatePosition(event.endTime) + 5;
              const columnWidth = `${95 * event.span}%`;
              const leftOffset = `calc(${event.column} * ${columnWidth})`;
              return (
                <div
                  key={idx}
                  className="absolute mx-2 text-white p-4 rounded-lg shadow-md flex flex-col border-1"
                  style={{
                    top: `${top}rem`,
                    height: `${bottom - top}rem`,
                    width: columnWidth,
                    left: leftOffset,
                    borderColor:
                      event.type === "food"
                        ? colors[0]
                        : event.type === "important"
                        ? colors[1]
                        : event.type === "activity"
                        ? colors[2]
                        : event.type === "general"
                        ? colors[3]
                        : "",
                    backgroundColor:
                      event.type === "food"
                        ? colors70[0]
                        : event.type === "important"
                        ? colors70[1]
                        : event.type === "activity"
                        ? colors70[2]
                        : event.type === "general"
                        ? colors70[3]
                        : "",
                    // x,y,blur,spread
                    boxShadow: `0 4px 6px ${
                      event.type === "food"
                        ? colors70[0]
                        : event.type === "important"
                        ? colors70[1]
                        : event.type === "activity"
                        ? colors70[2]
                        : event.type === "general"
                        ? colors70[3]
                        : "black"
                    }`,
                  }}
                >
                  <span>
                    {event.icon} {event.name}
                  </span>
                  <span className="pt-1">{event.location}</span>
                  <span className="pt-1">{event.desc}</span>
                  <span className="h-full flex items-end">
                    {" "}
                    {convertTimeTo12(event.startTime)} -{" "}
                    {convertTimeTo12(event.endTime)}
                  </span>
                </div>
              );
            })}
        </div>
      </div>

      <DashNavbar />
    </div>
  );
}
