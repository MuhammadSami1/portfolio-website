"use client";

import { useState } from "react";
import { Card3D } from "@/components/3d-card";
import { Calendar, Clock, CheckCircle2 } from "lucide-react";

export function AvailabilityCalendar() {
  const [selectedMonth] = useState(new Date().getMonth());
  const [selectedYear] = useState(new Date().getFullYear());

  // Generate days for the current month
  const daysInMonth = new Date(selectedYear, selectedMonth + 1, 0).getDate();
  const firstDayOfMonth = new Date(selectedYear, selectedMonth, 1).getDay();

  // Simulate availability data (0 = unavailable, 1 = partially available, 2 = fully available)
  const availabilityData: Record<number, number> = {
    1: 2,
    2: 2,
    3: 2,
    4: 2,
    5: 0,
    6: 0,
    7: 2,
    8: 2,
    9: 2,
    10: 2,
    11: 2,
    12: 0,
    13: 0,
    14: 2,
    15: 2,
    16: 2,
    17: 2,
    18: 2,
    19: 0,
    20: 0,
    21: 2,
    22: 2,
    23: 2,
    24: 2,
    25: 1,
    26: 0,
    27: 0,
    28: 2,
    29: 2,
    30: 2,
    31: 1,
  };

  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const dayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

  // Create calendar grid
  const calendarDays = [];

  // Add empty cells for days before the first day of the month
  for (let i = 0; i < firstDayOfMonth; i++) {
    calendarDays.push(<div key={`empty-${i}`} className="h-9"></div>);
  }

  // Add cells for each day of the month
  for (let day = 1; day <= daysInMonth; day++) {
    const availability = availabilityData[day] || 0;
    let availabilityClass = "";
    let availabilityLabel = "";

    if (availability === 0) {
      availabilityClass =
        "bg-red-100 dark:bg-red-900/20 text-red-800 dark:text-red-300";
      availabilityLabel = "Unavailable";
    } else if (availability === 1) {
      availabilityClass =
        "bg-yellow-100 dark:bg-yellow-900/20 text-yellow-800 dark:text-yellow-300";
      availabilityLabel = "Partially Available";
    } else {
      availabilityClass =
        "bg-green-100 dark:bg-green-900/20 text-green-800 dark:text-green-300";
      availabilityLabel = "Available";
    }

    calendarDays.push(
      <div
        key={day}
        className={`h-9 rounded-md flex items-center justify-center text-sm ${availabilityClass}`}
        title={availabilityLabel}
      >
        {day}
      </div>,
    );
  }

  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700 shadow-lg">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-semibold gradient-text flex items-center">
          <Calendar className="mr-2 h-5 w-5" />
          Availability
        </h3>
        <div className="text-sm text-gray-600 dark:text-gray-400">
          {monthNames[selectedMonth]} {selectedYear}
        </div>
      </div>

      {/* Calendar grid */}
      <div className="grid grid-cols-7 gap-1">
        {/* Day names */}
        {dayNames.map((day) => (
          <div
            key={day}
            className="h-8 flex items-center justify-center text-xs font-medium text-gray-500 dark:text-gray-400"
          >
            {day}
          </div>
        ))}

        {/* Calendar days */}
        {calendarDays}
      </div>

      {/* Legend */}
      <div className="mt-4 flex flex-wrap gap-3 text-xs">
        <div className="flex items-center">
          <div className="w-3 h-3 rounded-full bg-green-100 dark:bg-green-900/20 mr-1"></div>
          <span className="text-gray-600 dark:text-gray-400">Available</span>
        </div>
        <div className="flex items-center">
          <div className="w-3 h-3 rounded-full bg-yellow-100 dark:bg-yellow-900/20 mr-1"></div>
          <span className="text-gray-600 dark:text-gray-400">
            Partially Available
          </span>
        </div>
        <div className="flex items-center">
          <div className="w-3 h-3 rounded-full bg-red-100 dark:bg-red-900/20 mr-1"></div>
          <span className="text-gray-600 dark:text-gray-400">Unavailable</span>
        </div>
      </div>

      {/* Working hours */}
      <div className="mt-4 pt-4 border-t border-gray-200 dark:border-gray-700">
        <div className="flex items-center mb-2">
          <Clock className="mr-2 h-4 w-4 text-gray-600 dark:text-gray-400" />
          <span className="text-sm font-medium">Working Hours</span>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm text-gray-600 dark:text-gray-400">
          <div className="flex items-center">
            <CheckCircle2 className="mr-2 h-3 w-3 text-green-500" />
            <span>Monday - Friday: 4 AM - 1 PM (UTC)</span>
          </div>
          <div className="flex items-center">
            <CheckCircle2 className="mr-2 h-3 w-3 text-green-500" />
            <span>Response Time: Within 24 hours</span>
          </div>
        </div>
      </div>
    </div>
  );
}
