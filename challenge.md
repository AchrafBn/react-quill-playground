# React Cleanup Function Challenge

Practice implementing proper cleanup in React components using `useEffect`.

## Why Cleanup Functions Matter

When components unmount or dependencies change, you need to clean up:
- Timers (setTimeout, setInterval)
- Event listeners
- Subscriptions
- Network requests
- WebSocket connections

**Forgetting cleanup = memory leaks!**

---

## Challenge 1: Stop the Clock ⏰

**Goal:** Create a digital clock that updates every second. When hidden, it should stop updating.

**Requirements:**
- Display current time (HH:MM:SS)
- Updates every second using `setInterval`
- Must properly clear interval on unmount
- Add a show/hide button to test cleanup

**Test:** Check the console - you should NOT see ticks after hiding the component!

---

## Challenge 2: Mouse Tracker 🖱️

**Goal:** Track and display mouse position on the screen.

**Requirements:**
- Display mouse X and Y coordinates
- Use `window.addEventListener('mousemove', handler)`
- Remove listener when component unmounts
- Add show/hide functionality

**Test:** After hiding, mouse movements should not trigger any listeners (check with a console.log).

---

## Challenge 3: Multiple Timers ⏱️

**Goal:** Create a component with multiple independent timers.

**Requirements:**
- 3 counters that increment at different intervals (500ms, 1000ms, 2000ms)
- Each uses its own `setInterval`
- All must be cleaned up properly on unmount

**Bonus:** Use separate `useEffect` hooks for each timer.

---

## Challenge 4: Window Resize Observer 📐

**Goal:** Display current window dimensions.

**Requirements:**
- Show window width and height
- Update on window resize using `addEventListener('resize', handler)`
- Clean up the event listener
- Should handle rapid resizing without issues

---

## Challenge 5: Fetch with Cleanup 🌐

**Goal:** Fetch data from an API and handle component unmount during fetch.

**Requirements:**
- Fetch data from: `https://jsonplaceholder.typicode.com/posts/1`
- Handle the case where component unmounts before fetch completes
- Use AbortController to cancel the request
- Display loading state

**Test:** Quickly hide the component after showing it - should not set state on unmounted component.

---

## Challenge 6: Countdown Timer ⏳

**Goal:** Create a countdown timer that stops at 0.

**Requirements:**
- Start at 10 seconds
- Count down every second
- Stop at 0
- Include Start/Stop/Reset buttons
- Clean up interval properly

---

## Challenge 7: Subscription Simulator 📡

**Goal:** Simulate a real-time subscription (like WebSocket or SSE).

**Requirements:**
- Create a mock subscription that emits random numbers every 2 seconds
- Display the received values
- Unsubscribe when component unmounts
- Show connection status

**Example pattern:**
```javascript
const subscription = subscribe((data) => {
  // handle data
});
return () => subscription.unsubscribe();
```

---

## Challenge 8: The Ultimate Combo 🎯

**Goal:** Combine multiple cleanup scenarios in one component.

**Requirements:**
- Mouse position tracker
- Timer counting seconds
- Window resize listener
- All must clean up independently
- Use multiple `useEffect` hooks

**Test:** Verify in console that ALL cleanups execute when unmounting.

---

## Debugging Tips 🔍

1. Add `console.log()` in cleanup functions to verify they run
2. Check browser DevTools console for warnings about memory leaks
3. Use React DevTools to monitor component mounting/unmounting
4. Watch for "Can't perform a React state update on unmounted component" warnings

---

## Bonus Challenge: Build a Cleanup Debugger 🐛

Create a custom hook `useCleanupLogger(componentName)` that:
- Logs when component mounts
- Logs when component unmounts
- Returns how long the component was mounted

Use it in all your challenge components!

---

## Common Mistakes ❌

```javascript
// ❌ BAD - No cleanup
useEffect(() => {
  setInterval(() => console.log('tick'), 1000);
}, []);

// ✅ GOOD - With cleanup
useEffect(() => {
  const id = setInterval(() => console.log('tick'), 1000);
  return () => clearInterval(id);
}, []);
```

```javascript
// ❌ BAD - Lost reference
useEffect(() => {
  setTimeout(() => console.log('delayed'), 5000);
  return () => clearTimeout(???); // What ID?
}, []);

// ✅ GOOD - Stored reference
useEffect(() => {
  const timeoutId = setTimeout(() => console.log('delayed'), 5000);
  return () => clearTimeout(timeoutId);
}, []);
```

---

## Getting Started

Pick a challenge and create a new component in `src/components/`. 
Import and add show/hide functionality in `App.tsx` to test the cleanup!

Happy coding! 🚀

