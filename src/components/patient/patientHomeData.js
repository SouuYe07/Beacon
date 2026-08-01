/** Patient homepage — care dashboard mock data */

export const TODAY_CARDS = [
  {
    id: "session",
    title: "Next session",
    subtitle: "Today · 3:00 PM with Dr. Sam Okonkwo",
    icon: "calendar-clock-outline",
    tab: "Calendar",
  },
  {
    id: "meal",
    title: "Meal reminder",
    subtitle: "Log lunch when you’re ready",
    icon: "food-apple-outline",
    tab: "Food",
  },
];

/** Care updates shown on the patient home (from care circle → patient) */
export const CARE_UPDATES = [
  {
    id: "cu1",
    from: "Dr. Olivia Hart",
    role: "Dietician",
    title: "Lunch ideas for this week",
    body: "Shared three gentle lunch options that match your current plan.",
    time: "12 m",
    icon: "food-apple-outline",
    details: {
      summary:
        "Your dietician shared three gentle lunch options that fit this week’s plan and energy goals.",
      notes: [
        "Option A: rice bowl with tofu and soft vegetables.",
        "Option B: warm soup with bread on the side.",
        "Option C: yogurt parfait with fruit if mornings feel lighter.",
      ],
      action: "Pick one option for lunch today, or message Olivia with questions.",
    },
  },
  {
    id: "cu2",
    from: "Mom Rivera",
    role: "Family",
    title: "Thinking of you",
    body: "Left a short note after your morning check-in. Proud of you.",
    time: "1 h",
    icon: "heart-outline",
    details: {
      summary:
        "Mom left an encouraging note after seeing your morning check-in. No pressure — just support.",
      notes: [
        "She’s proud of your consistency this week.",
        "Offer to help with dinner prep if you want company.",
        "You can reply whenever you feel ready.",
      ],
      action: "Open Messages if you’d like to send a short reply.",
    },
  },
  {
    id: "cu3",
    from: "Dr. Sam Okonkwo",
    role: "Psychiatrist",
    title: "Session prep",
    body: "Optional reflection prompt before today’s 3:00 PM session.",
    time: "3 h",
    icon: "notebook-outline",
    details: {
      summary:
        "Optional reflection before today’s 3:00 PM session — use only if it feels helpful.",
      notes: [
        "What felt manageable today?",
        "Was there a moment you wanted support?",
        "Anything you’d like to bring into the session?",
      ],
      action: "Jot a quick note, or just show up as you are.",
    },
  },
  {
    id: "cu4",
    from: "Maya Chen",
    role: "Friend",
    title: "Message waiting",
    body: "Sent a check-in in Messages when you have a moment.",
    time: "Yesterday",
    icon: "message-outline",
    details: {
      summary:
        "Maya sent a friendly check-in in Messages. There’s no rush to respond.",
      notes: [
        "Message is waiting in your chats list.",
        "She’s around this evening if you want to talk.",
        "A short reply is enough whenever you’re ready.",
      ],
      action: "Open Messages to read and reply.",
    },
  },
];

/** Day offsets (0=Sun … 6=Sat) with session and/or meal markers this week */
export const WEEK_MARKERS = {
  0: { session: false, meal: true },
  1: { session: true, meal: true },
  2: { session: false, meal: true },
  3: { session: true, meal: false },
  4: { session: false, meal: true },
  5: { session: true, meal: true },
  6: { session: false, meal: false },
};
