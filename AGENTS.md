# Beacon — Agent Instructions

Recovery-support mobile app. Users pick a role animal and get a role-specific home with shared chats.

## Roles

| Role | Animal | Entry | Tabs |
|------|--------|-------|------|
| Patient | Penguin | `Patient` | Home, Calendar, Group, Food (PostFood stack), Messages |
| Professional | Owl | `Professional` | Home, Calendar, Create Session, Messages |
| Friend | Bunny | `FriendsHome` (`role: friend`) | Home, Calendar, Messages |
| Family | Bear | `FriendsHome` (`role: family`) | Home, Calendar, Messages |

Root stack: `App.js` → SelectUser → SelectSupporter / Patient / FriendsHome / Professional.

## Stack

- Expo SDK 57, React Native, NativeWind v4, React Navigation (native stack + bottom tabs)
- Geom fonts loaded in `App.js`; use classes like `font-geom-medium`, `font-geom-regular`, `font-geom-light`
- SVG via `react-native-svg-transformer`
- Android: immersive nav bar, `softwareKeyboardLayoutMode: "pan"`, bottom safe-area frozen to 0

## Key paths

```
src/navigation/          # screens + role entry (patient/, professional/, friends/)
src/components/
  patient|professional|friends/Tabs.js   # role bottom tab bars
  chats/ChatsScreen.js, ChatThreadScreen.js
  Background.js          # static shared background — use on every interface screen
  friends/FriendsHomeScreen.js, modals, updatesData.js
src/hooks/useChatsLayout.js, useSelectLayout.js
assets/Icons/            # UI icons (prefer currentColor fills)
assets/Navigation/       # tab bar animal / nav icons
assets/Fonts/            # Geom family
```

Shared messages: `src/navigation/MessagesStack.js` → ChatsList + ChatThread. Role `Messages.js` files re-export this stack.

## Run

```bash
npx expo start
npx expo run:android
# or: npm start / npm run android
```

Native rebuild needed after `app.json` / native config changes.

## Conventions

### Bottom tabs

Match existing `Tabs.js` patterns (do not invent a new nav style):

- Floating glass bar: `rgba(255,255,255,0.38)`, border `#D0D2D1`, radius 30, `bottom: 35`
- Active pill: `rgba(255,255,255,0.55)` with outer corners 30 / inner 15
- Icon tint: active `#32759F`, inactive `#5A5A5A` via SVG `color` + `currentColor`
- Hide tab bar when nested route is `ChatThread`
- Widths today: friends 280, professional 320, patient 332 — keep side margins similar unless design says otherwise

### Layout / UI fidelity

- Design frame ~430×932 (`useChatsLayout`: `s()` / `sx()`)
- When given Figma-like sizes (tab bar, chat header/composer, gaps), match them; scale with layout hooks
- Accent `#32759F`; content text often `#262626`

### Screens

- Wrap interfaces with `<Background />` + content in a `z-10` layer
- Prefer editing existing role/chat files over new abstractions
- SVG icons: use `currentColor` so tab/header tinting works

### Chat

- List: `ChatsScreen.js`; thread: `ChatThreadScreen.js`
- Header overlays messages; composer lifts with keyboard; keep header visible while typing

## Do / don’t

**Do**

- Follow the closest existing role’s Tabs / screen pattern
- Reuse `MessagesStack`, `Background`, layout hooks, Geom classes
- Keep changes scoped to the request

**Don’t**

- Invent a new bottom-nav or chat layout language
- Commit or push unless the user asks
- Add markdown/docs unless asked
- Hardcode icon fills that break active/inactive tint
- Expand scope with drive-by refactors
