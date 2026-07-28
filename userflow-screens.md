# Beacon — Screen & Tab Userflow

More specific flow mapped from `userflow.md` and the Figma bottom-nav variants.

## Roles → Tab bar variant

| Role | Tabs | Figma variant |
|------|------|----------------|
| Patient | 5 | Long bar (right) |
| Dietician / Psychiatrist | 4 | 4-icon bar (top-left) |
| Friend | 3 | Bear + calendar + chat |
| Family | 3 | Rabbit + calendar + chat |

Profile is the left animal icon (role mascot). Active tab = blue icon + soft pill behind it.

---

## Shared auth & setup

### Login
1. Enter email + password → Submit  
2. On success → role setup (if first time) or Home (tab root)

### Register
1. First / Middle / Last name  
2. Email, Birthday  
3. User type: Patient | Dietician | Psychiatrist | Friend | Family  
4. Password + confirm  
5. Contact info → Submit → Setup

### Setup — Patient
1. Show invitation code  
2. List people already linked to this patient  
3. Continue → Patient Home

### Setup — Non-patient
1. Enter invitation code → Submit  
2. On success → role Home

---

## Patient Home (5 tabs)

Order (left → right), matching Figma:

| Tab | Icon meaning | Screen job |
|-----|--------------|------------|
| Profile | Owl (mascot) | Name, email, role, Settings |
| Calendar | Calendar | Scheduled sessions (+ food calendar if you add toggle later) |
| Group | People | Members, contacts, roles; family/friend can propose removal |
| Post Food | Crossed rackets | Patient (+ Dietician elsewhere): open camera → send meal |
| Messages | Chat bubbles | Messenger-style threads |

### Also on Patient Home (not a tab)
- Notifications: upcoming session, new messages  
- Tap notification → Calendar or Messages

### Patient screen notes
- **Group:** list people, contact info, relationship/role; propose removal (family/friend only)  
- **Post Food:** camera → meal upload  
- **Messages:** recreate messenger (threads → chat)  
- **Profile:** settings entry point  

---

## Dietician / Psychiatrist Home (4 tabs)

| Tab | Icon meaning | Screen job |
|-----|--------------|------------|
| Patients | Owl / role mascot | Patient list, status, talk schedule, removal proposals |
| Calendar | Calendar | Session calendar; toggle Food Calendar; filter by patient |
| Schedule | Pencil / edit | Pick patient, date, weekly toggle → create session |
| Messages | Chat | Messenger |

### Also
- Notifications: messages, meal uploaded (Dietician), upcoming sessions  
- **Food Calendar** (from Calendar toggle): meals, date, add weight  
- **Meal detail:** patient, photo, date/time  
- Profile content can live under Patients header/avatar or a later 5th tab if you add it in Figma  

---

## Friend Home (3 tabs)

| Tab | Icon meaning | Screen job |
|-----|--------------|------------|
| Profile | Bear | Settings, name, email, role |
| Calendar | Calendar | Session ↔ Food calendar toggle; meals; add weight |
| Messages | Chat | Messenger |

---

## Family Home (3 tabs)

Same as Friend, but Profile mascot = **Rabbit**.

---

## Cross-cutting screens

| Screen | Who | Entry |
|--------|-----|--------|
| Notifications sheet/list | All | Bell / system push |
| Chat thread | All | Messages tab |
| Meal detail | Dietician, Family, Friend, Patient | Food calendar / Post Food |
| Settings | All | Profile |

---

## Navigation rules

1. Bottom bar is always visible on Home tabs (hide on Login/Register/Setup and full-screen camera).  
2. Active tab: blue icon + light rounded pill; inactive: dark grey outline.  
3. Bar style: floating pill, frosted glass over the app background.  
4. Role is chosen at register (or from account); tab config is selected from that role once.  
5. Post Food is Patient-primary; Dietician may open meals from Food Calendar instead of a Post Food tab.

---

## Iconify checklist (fill after Figma inspect)

Paste exact Iconify IDs from Figma (format `collection:icon-name`):

| Slot | Patient | Clinician | Friend | Family |
|------|---------|-----------|--------|--------|
| Profile mascot | `…` | `…` | `…` | `…` |
| Calendar | `…` | `…` | `…` | `…` |
| Group / Patients | `…` | `…` | — | — |
| Post Food / Schedule | `…` | `…` | — | — |
| Messages | `…` | `…` | `…` | `…` |

Design tokens to copy from Figma Inspect (not exports):

- Active icon color  
- Inactive icon color  
- Pill / active chip fill  
- Bar fill + blur / opacity  
- Bar height, horizontal padding, corner radius  
- Icon size, gap between items  
