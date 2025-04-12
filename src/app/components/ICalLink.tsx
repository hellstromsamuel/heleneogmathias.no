import Link from "next/link";
import React from "react";

function ICalLink() {
  const eventName = "Helene og Mathias' Bryllup";
  const location = "Asak kirke, Halden";
  const startDate = "20250802T140000"; // August 2, 2025, 14:00 (YYYYMMDDTHHMMSS)
  const endDate = "20250802T230000"; // August 2, 2025, 23:00 (assuming end time)
  const description =
    "Vielse i Asak kirke kl 14:00. Fest på Gimle misjonshus kl 17:00.";

  // Generate iCal data
  const icalData = [
    "BEGIN:VCALENDAR",
    "VERSION:2.0",
    "PRODID:-//hacksw/handcal//NONSGML v1.0//EN",
    "CALSCALE:GREGORIAN",
    "BEGIN:VEVENT",
    `SUMMARY:${eventName}`,
    `LOCATION:${location}`,
    `DESCRIPTION:${description}`,
    `DTSTART:${startDate}`,
    `DTEND:${endDate}`,
    "END:VEVENT",
    "END:VCALENDAR",
  ].join("\n");

  // Create a data URI for the iCal file
  const dataUri = `data:text/calendar;charset=utf-8,${encodeURIComponent(
    icalData
  )}`;

  return (
    <div className="w-max">
      <Link
        href={dataUri}
        download="Helene-og-Mathias-Bryllup.ics"
        className="underline text-blue-600 flex items-center gap-2"
      >
        Legg til i kalender
      </Link>
    </div>
  );
}

export default ICalLink;
