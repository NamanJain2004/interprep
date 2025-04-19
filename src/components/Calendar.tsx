"use client";

import * as React from "react";
import { format } from "date-fns";
import { DayPicker, DayPickerSingleProps } from "react-day-picker";
import { cn } from "@/lib/utils";
import "react-day-picker/dist/style.css";

interface CalendarProps extends Omit<DayPickerSingleProps, "mode"> {
  className?: string;
}

const Calendar: React.FC<CalendarProps> = ({ className, selected, onSelect, ...props }) => {
  return (
    <div className={cn(
      "p-4 rounded-md border bg-white shadow-sm w-full max-w-xs sm:max-w-sm md:max-w-md",
      "flex flex-col items-center", // Center on small screens
      className
    )}>
      <DayPicker
        mode="single"
        selected={selected}
        onSelect={onSelect}
        {...props}
        className="rounded-md w-full"
      />
      {selected && (
        <p className="mt-2 text-sm text-gray-600 text-center">
          Selected Date: {format(selected, "PP")}
        </p>
      )}
    </div>
  );
};

export default Calendar;



