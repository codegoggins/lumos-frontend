import { useState } from "react";
import { LuFlame, LuCircle, LuChevronLeft, LuChevronRight } from "react-icons/lu";
import { PiCheckCircleFill } from "react-icons/pi";

const MONTH_NAMES = [
  "January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December",
];

const activeDays: Record<string, Set<number>> = {
  "2026-3": new Set([1, 2, 3, 5, 6, 7, 8, 10, 11, 12, 14, 15, 16]),
  "2026-2": new Set([1, 3, 4, 5, 7, 8, 10, 11, 14, 15, 18, 19, 20, 22, 25, 26, 27, 28]),
  "2026-1": new Set([2, 3, 5, 6, 8, 12, 13, 14, 19, 20, 21, 26, 27]),
};

const getStreakDays = (year: number, month: number) => {
  const today = new Date();
  const isCurrentMonth =
    year === today.getFullYear() && month === today.getMonth();
  const currentDay = today.getDate();
  const daysInMonth = new Date(year, month + 1, 0).getDate();
  const active = activeDays[`${year}-${month + 1}`] ?? new Set<number>();

  return Array.from({ length: daysInMonth }, (_, i) => ({
    day: i + 1,
    active: active.has(i + 1),
    today: isCurrentMonth && i + 1 === currentDay,
    future: isCurrentMonth ? i + 1 > currentDay : year > today.getFullYear() || (year === today.getFullYear() && month > today.getMonth()),
  }));
};

const getFirstDayOffset = (year: number, month: number) => {
  const day = new Date(year, month, 1).getDay();
  return day === 0 ? 6 : day - 1;
};

const StreakCalendar = () => {
  const today = new Date();
  const [year, setYear] = useState(today.getFullYear());
  const [month, setMonth] = useState(today.getMonth());

  const isCurrentMonth =
    year === today.getFullYear() && month === today.getMonth();

  const goToPrev = () => {
    if (month === 0) {
      setMonth(11);
      setYear((y) => y - 1);
    } else {
      setMonth((m) => m - 1);
    }
  };

  const goToNext = () => {
    if (isCurrentMonth) return;
    if (month === 11) {
      setMonth(0);
      setYear((y) => y + 1);
    } else {
      setMonth((m) => m + 1);
    }
  };

  const days = getStreakDays(year, month);
  const offset = getFirstDayOffset(year, month);
  const streakCount = days.filter((d) => d.active).length;

  return (
    <div className="bg-white rounded-2xl shadow-sm p-4 flex flex-col gap-3">
      <div className="flex items-center justify-between">
        <h3 className="text-xs font-semibold text-text-primary">
          Streak Calendar
        </h3>
        <div className="flex items-center gap-1">
          <LuFlame className="text-orange-500 text-sm" />
          <span className="text-xs font-bold text-orange-500">
            {streakCount} days
          </span>
        </div>
      </div>

      <div className="flex items-center justify-between">
        <button
          onClick={goToPrev}
          className="p-1 rounded-lg hover:bg-bg-secondary text-text-muted hover:text-text-primary transition-colors cursor-pointer"
        >
          <LuChevronLeft className="text-sm" />
        </button>
        <span className="text-xs font-semibold text-text-primary">
          {MONTH_NAMES[month]} {year}
        </span>
        <button
          onClick={goToNext}
          disabled={isCurrentMonth}
          className={`p-1 rounded-lg transition-colors cursor-pointer ${
            isCurrentMonth
              ? "text-border cursor-not-allowed"
              : "hover:bg-bg-secondary text-text-muted hover:text-text-primary"
          }`}
        >
          <LuChevronRight className="text-sm" />
        </button>
      </div>

      <div className="grid grid-cols-7 gap-x-1 gap-y-2">
        {["M", "T", "W", "T", "F", "S", "S"].map((d, i) => (
          <span
            key={i}
            className="text-center text-[10px] text-text-muted font-medium"
          >
            {d}
          </span>
        ))}
        {Array.from({ length: offset }).map((_, i) => (
          <div key={`empty-${i}`} />
        ))}
        {days.map((day) => (
          <div key={day.day} className="flex justify-center py-0.5">
            {day.future ? (
              <LuCircle className="text-lg text-border" />
            ) : day.active ? (
              <PiCheckCircleFill className="text-lg text-primary" />
            ) : (
              <LuCircle className="text-lg text-border-dark" />
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default StreakCalendar;
