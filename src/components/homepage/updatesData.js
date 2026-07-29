/** dayOffset: 0=Sun … 6=Sat relative to the current week */

export const UPDATES = [
  // Sunday
  {
    id: "u5",
    from: "Clinic",
    filter: "Clinic",
    title: "Care note shared",
    body: "A short progress note was shared with your circle.",
    time: "Sun",
    icon: "note-text-outline",
    dayOffset: 0,
    details: {
      summary:
        "Clinic shared a progress note summarizing recent engagement and next steps for support.",
      notes: [
        "Positive engagement with meal logging this week.",
        "Recommend continuing check-ins after talk sessions.",
        "Family/friend encouragement noted as helpful.",
      ],
      action: "Read the full note and keep supporting consistent routines.",
    },
  },
  {
    id: "u7",
    from: "Dietician",
    filter: "Dietician",
    title: "Hydration reminder",
    body: "Encourage steady water intake through the afternoon.",
    time: "Sun",
    icon: "cup-water",
    dayOffset: 0,
    details: {
      summary:
        "Dietician asked the circle to gently support hydration goals for the day.",
      notes: [
        "Target remains about 2 liters.",
        "Prefer water or herbal tea over sugary drinks.",
        "Small sips across the day work better than large gulps.",
      ],
      action: "Send a kind check-in mid-afternoon if helpful.",
    },
  },

  // Monday
  {
    id: "u4",
    from: "Dietician",
    filter: "Dietician",
    title: "Weight check-in",
    body: "Please review the latest weight entry when you can.",
    time: "Mon",
    icon: "scale-bathroom",
    dayOffset: 1,
    details: {
      summary:
        "A new weight check-in was submitted. Review the trend and note any questions for the next session.",
      notes: [
        "Entry recorded Monday morning.",
        "Compared with last week’s average.",
        "Dietician left a short note requesting circle awareness.",
      ],
      action: "Open the food calendar for full weight history.",
    },
  },
  {
    id: "u8",
    from: "Penguin",
    filter: "Logs",
    title: "Lunch logged",
    body: "Rice bowl with vegetables was added to the log.",
    time: "1:20 PM",
    icon: "food-outline",
    dayOffset: 1,
    details: {
      summary: "Penguin logged lunch with a balanced plate and noted feeling steady afterward.",
      notes: [
        "Meal: rice, tofu, and mixed vegetables.",
        "Logged at 1:20 PM.",
        "No distress markers attached to this entry.",
      ],
      action: "Celebrate consistency with a short supportive message.",
    },
  },
  {
    id: "u9",
    from: "Psychiatrist",
    filter: "Psychiatrist",
    title: "Mood check prompt",
    body: "A brief mood reflection was suggested for this evening.",
    time: "Mon",
    icon: "emoticon-outline",
    dayOffset: 1,
    details: {
      summary:
        "Psychiatrist suggested a short evening mood reflection to notice patterns before the next session.",
      notes: [
        "Prompt: What felt manageable today?",
        "Optional 5-minute journaling.",
        "No score required — qualitative notes are enough.",
      ],
      action: "Gently remind Penguin about the optional reflection.",
    },
  },

  // Tuesday
  {
    id: "u3",
    from: "Penguin",
    filter: "Logs",
    title: "Breakfast logged",
    body: "Oatmeal and fruit were added to today’s food log.",
    time: "Yesterday",
    icon: "check-circle-outline",
    dayOffset: 2,
    details: {
      summary:
        "Penguin logged breakfast for the day. This entry helps the care circle track regular meals.",
      notes: [
        "Meal: oatmeal with banana and berries.",
        "Logged at 8:40 AM.",
        "No skipped-meal flag for this entry.",
      ],
      action: "Send a short encouragement if you’d like to support today’s progress.",
    },
  },
  {
    id: "u10",
    from: "Dietician",
    filter: "Dietician",
    title: "Snack idea shared",
    body: "Yogurt with fruit was suggested for afternoon.",
    time: "11:05 AM",
    icon: "food-apple-outline",
    dayOffset: 2,
    details: {
      summary:
        "Dietician shared a practical afternoon snack option aligned with this week’s plan.",
      notes: [
        "Snack: plain yogurt + berries.",
        "Timing: mid-afternoon energy dip.",
        "Portion guidance included in the meal plan.",
      ],
      action: "Check whether the snack was logged later today.",
    },
  },
  {
    id: "u11",
    from: "Clinic",
    filter: "Clinic",
    title: "Appointment confirmed",
    body: "Thursday clinic follow-up is confirmed.",
    time: "Tue",
    icon: "calendar-check",
    dayOffset: 2,
    details: {
      summary: "Clinic confirmed the Thursday follow-up visit and shared arrival instructions.",
      notes: [
        "Arrival 10 minutes early recommended.",
        "Bring any recent food log questions.",
        "Support person welcome if preferred.",
      ],
      action: "Add a reminder and offer to help with transport if needed.",
    },
  },

  // Wednesday
  {
    id: "u1",
    from: "Dietician",
    filter: "Dietician",
    title: "Meal plan updated",
    body: "New lunch options were added for this week.",
    time: "2h ago",
    icon: "food-apple-outline",
    dayOffset: 3,
    details: {
      summary:
        "Your dietician revised this week’s meal plan with lighter lunch options and clearer portion guidance.",
      notes: [
        "Added grilled chicken salad and rice bowl alternatives for Wed–Fri.",
        "Snack suggestions now include yogurt + fruit instead of packaged sweets.",
        "Hydration goal set to 2 liters/day.",
      ],
      action: "Review the new lunch options before tomorrow’s meals.",
    },
  },
  {
    id: "u12",
    from: "Penguin",
    filter: "Logs",
    title: "Dinner logged",
    body: "Soup and toast were added after evening meal.",
    time: "7:45 PM",
    icon: "food-outline",
    dayOffset: 3,
    details: {
      summary: "Penguin logged dinner and noted the meal felt manageable.",
      notes: [
        "Meal: vegetable soup with toast.",
        "Logged at 7:45 PM.",
        "Satiety noted as comfortable.",
      ],
      action: "Acknowledge the completed day of meals if you want to support.",
    },
  },
  {
    id: "u13",
    from: "Psychiatrist",
    filter: "Psychiatrist",
    title: "Coping tip shared",
    body: "A grounding exercise was shared for busy days.",
    time: "Wed",
    icon: "head-heart-outline",
    dayOffset: 3,
    details: {
      summary:
        "Psychiatrist shared a short grounding exercise to use when the day feels overwhelming.",
      notes: [
        "Technique: 5-4-3-2-1 sensory grounding.",
        "Takes about 2 minutes.",
        "Can be used before meals if anxiety rises.",
      ],
      action: "Try the exercise together or send a supportive reminder.",
    },
  },

  // Thursday
  {
    id: "u2",
    from: "Psychiatrist",
    filter: "Psychiatrist",
    title: "Session reminder",
    body: "Talk session tomorrow at 3:00 PM.",
    time: "5h ago",
    icon: "calendar-clock-outline",
    dayOffset: 4,
    details: {
      summary:
        "Upcoming talk session with the psychiatrist. Please join on time and bring any questions from the week.",
      notes: [
        "Session length: 45 minutes.",
        "Format: video call (link shared in Messages).",
        "Focus: coping strategies and weekly check-in.",
      ],
      action: "Confirm attendance or reschedule at least 12 hours ahead.",
    },
  },
  {
    id: "u14",
    from: "Clinic",
    filter: "Clinic",
    title: "Visit summary",
    body: "Thursday follow-up notes are now available.",
    time: "4:10 PM",
    icon: "clipboard-text-outline",
    dayOffset: 4,
    details: {
      summary: "Clinic posted a short follow-up summary after today’s visit.",
      notes: [
        "Overall progress described as steady.",
        "Continue current meal structure.",
        "Next check-in scheduled for next week.",
      ],
      action: "Read the summary and ask the care team if anything is unclear.",
    },
  },
  {
    id: "u15",
    from: "Dietician",
    filter: "Dietician",
    title: "Dinner swap approved",
    body: "Pasta with soft vegetables is approved for tonight.",
    time: "Thu",
    icon: "food-variant",
    dayOffset: 4,
    details: {
      summary:
        "Dietician approved a flexible dinner swap that still fits recovery goals.",
      notes: [
        "Option: pasta with soft cooked vegetables.",
        "Keep portion within the shared guide.",
        "Dessert not required tonight.",
      ],
      action: "Support the planned dinner without adding pressure.",
    },
  },

  // Friday
  {
    id: "u6",
    from: "Clinic",
    filter: "Clinic",
    title: "Lab results ready",
    body: "Recent lab results are available for review.",
    time: "Fri",
    icon: "flask-outline",
    dayOffset: 5,
    details: {
      summary:
        "Clinic uploaded recent lab results. A clinician will discuss anything notable in the next appointment.",
      notes: [
        "Results uploaded Friday afternoon.",
        "No urgent flags in the preliminary summary.",
        "Full PDF available in clinic records.",
      ],
      action: "Message the care team if you have questions before the next visit.",
    },
  },
  {
    id: "u16",
    from: "Penguin",
    filter: "Logs",
    title: "Snack logged",
    body: "Yogurt was logged as an afternoon snack.",
    time: "3:30 PM",
    icon: "check-circle-outline",
    dayOffset: 5,
    details: {
      summary: "Penguin logged the suggested afternoon snack from the meal plan.",
      notes: [
        "Snack: yogurt.",
        "Logged at 3:30 PM.",
        "Matches dietician recommendation from earlier this week.",
      ],
      action: "Give a quick positive acknowledgment if you’d like.",
    },
  },
  {
    id: "u17",
    from: "Dietician",
    filter: "Dietician",
    title: "Weekend plan preview",
    body: "A lighter weekend meal outline was posted.",
    time: "Fri",
    icon: "calendar-outline",
    dayOffset: 5,
    details: {
      summary:
        "Dietician posted a weekend meal outline to reduce decision fatigue over Saturday and Sunday.",
      notes: [
        "Keeps breakfast structure familiar.",
        "Flexible lunch options listed.",
        "Hydration reminders included.",
      ],
      action: "Glance through the weekend outline together if helpful.",
    },
  },

  // Saturday
  {
    id: "u18",
    from: "Psychiatrist",
    filter: "Psychiatrist",
    title: "Weekend grounding",
    body: "A short weekend reset exercise was shared.",
    time: "Sat",
    icon: "spa-outline",
    dayOffset: 6,
    details: {
      summary:
        "Psychiatrist shared a brief weekend reset to help keep routines gentle and predictable.",
      notes: [
        "10-minute walk or stretch suggested.",
        "Optional gratitude note at night.",
        "No performance pressure — keep it light.",
      ],
      action: "Invite Penguin to do the reset together if they want company.",
    },
  },
  {
    id: "u19",
    from: "Penguin",
    filter: "Logs",
    title: "Breakfast logged",
    body: "Toast and eggs were added to the weekend log.",
    time: "9:15 AM",
    icon: "food-outline",
    dayOffset: 6,
    details: {
      summary: "Penguin logged a weekend breakfast and kept the morning routine going.",
      notes: [
        "Meal: toast and eggs.",
        "Logged at 9:15 AM.",
        "Morning routine marked complete.",
      ],
      action: "Celebrate the consistency with a short supportive note.",
    },
  },
];

export function toDateKey(date) {
  const y = date.getFullYear();
  const m = String(date.getMonth() + 1).padStart(2, "0");
  const d = String(date.getDate()).padStart(2, "0");
  return `${y}-${m}-${d}`;
}

export function startOfWeek(date) {
  const d = new Date(date);
  d.setHours(0, 0, 0, 0);
  d.setDate(d.getDate() - d.getDay());
  return d;
}

export function getWeekDays(reference = new Date()) {
  const start = startOfWeek(reference);
  const DAY_LABELS = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

  return DAY_LABELS.map((label, index) => {
    const date = new Date(start);
    date.setDate(start.getDate() + index);
    const dateKey = toDateKey(date);
    const hasUpdates = UPDATES.some((item) => item.dayOffset === index);

    return {
      label,
      date,
      dateKey,
      dayNumber: date.getDate(),
      dayOffset: index,
      isToday: date.toDateString() === reference.toDateString(),
      hasMarker: hasUpdates,
    };
  });
}

export function getUpdateById(id) {
  return UPDATES.find((item) => item.id === id) ?? null;
}
