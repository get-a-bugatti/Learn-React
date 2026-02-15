# Simple React interview question - React Batching + Fiber Notes :

## 🧠 Why this happens

React **does not update state immediately**.

Because of **Fiber**, React:

- Collects multiple state updates
- Groups them together
- Updates once

This is called:

⚡ **Batching**

So inside one function, React waits before updating.

---

## ❌ Problem Case

```js
function addValue() {
  setCounter(counter + 1);
  setCounter(counter + 1);
  setCounter(counter + 1);
}
```

You expect:
+3

But you get:
+1

---

## 🤯 Why?

Because React sees this:
All 3 updates are using the SAME old value.

Example:

If:
```
counter = 0
```

React sees:
```js
setCounter(0 + 1);
setCounter(0 + 1);
setCounter(0 + 1);
```

Not:
```js
setCounter(1);
setCounter(2);
setCounter(3);
```

Due to **batching**, React doesn't update immediately.

So:
- All updates read stale value
- Final result = 1

---

## 🧵 Fiber's Role
Fiber schedules updates later.
So inside the same event:

- State is NOT updated instantly
- All updates are queued

---

## ✅ Solution: Functional Update

Use:

```js
setCounter(prev => prev + 1);
```

Now React updates step-by-step using the latest value.

---

## ✔️ Correct Version

```js
function addValue() {
  setCounter(prev => prev + 1);
  setCounter(prev => prev + 1);
  setCounter(prev => prev + 1);
}
```

Now React processes:

```
0 → 1 → 2 → 3
```

Because:

- Each update uses latest value
- Not the stale one

---

## 🧠 Mental Model

### Normal update

```
setCounter(counter + 1)
❌ Uses old value
❌ Breaks in batching
```

### Functional update

```
setCounter(prev => prev + 1)
✅ Uses latest value
✅ Works with batching
```

---

## ⚡ Rule to Remember

If next state depends on previous state:

👉 ALWAYS use functional update

---

## 🪄 One-line Summary

React batches updates → direct updates reuse stale state → functional updates always get fresh state.
