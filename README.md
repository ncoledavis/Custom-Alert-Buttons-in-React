# Alert Button Toolbar

A React application that demonstrates custom reusable components, props, event handling, and component composition by building an interactive toolbar of alert buttons.
https://youtu.be/2Xj54opbdLs
## How to Run

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Start the development server:**
   ```bash
   npm run dev
   ```

3. **Open in browser:**
   Navigate to `http://localhost:5173` (or the URL shown in your terminal).

## Requirements and How They Were Satisfied

### 1. AlertButton Component

**Requirement:** Implement an `AlertButton` component that takes `message` and `children` as props.

**Implementation (`src/AlertButton.jsx`):**
- Created a reusable `AlertButton` component that accepts two props:
  - `message` — the text displayed in the browser alert when clicked.
  - `children` — the visible button label rendered inside the `<button>` tags.
- Attached an `onClick` event handler that calls `alert(message)` to display the message prop content.
- Renders `{children}` inside the button so each instance can have unique visible text.

### 2. Toolbar Component

**Requirement:** Develop a `Toolbar` component that renders multiple `AlertButton` components with unique messages and labels.

**Implementation (`src/Toolbar.jsx`):**
- Created a `Toolbar` component that renders three `AlertButton` instances:
  - **Play** — alerts "Now playing your favorite track!"
  - **Upload** — alerts "Uploading your file..."
  - **Download** — alerts "Downloading content..."
- Each button has a unique `message` prop and unique `children` text, demonstrating dynamic behavior through props.

### 3. App Integration

**Requirement:** Render the toolbar in the application.

**Implementation (`src/App.jsx`):**
- Stripped out the default Vite/React boilerplate and replaced it with a clean, custom-styled page.
- Imports and renders the `Toolbar` component as the main content.
- Page includes a heading and subtitle for context.

### 4. Testing / Validation

**Requirement:** Clicking each button triggers an alert with the correct message corresponding to that button.

**Validation:**
- Run `npm run dev` and open `http://localhost:5173`.
- Click **Play** → alert shows "Now playing your favorite track!"
- Click **Upload** → alert shows "Uploading your file..."
- Click **Download** → alert shows "Downloading content..."
- Each button triggers its own unique alert, confirming props are passed and handled correctly.

## Project Structure

```
src/
├── AlertButton.jsx   — Reusable button component (message + children props)
├── Toolbar.jsx       — Composes multiple AlertButton instances
├── App.jsx           — Main app shell that renders the Toolbar
├── App.css           — Styles for the app layout and buttons
├── index.css         — Global base styles and dark mode support
└── main.jsx          — React entry point
```

## Technologies

- React (via Vite)
- JavaScript (JSX)
- CSS with dark mode support via `prefers-color-scheme`
