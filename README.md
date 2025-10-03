# SuperPlane UI

A collection of reusable UI components built with [shadcn/ui](https://ui.shadcn.com/), React, TypeScript, and Tailwind CSS. This project uses Storybook for component documentation and development.

## Features

- 🎨 **shadcn/ui Components** - Beautiful, accessible components based on Radix UI
- ⚡ **Vite** - Fast build tool and development server
- 📖 **Storybook** - Component documentation and interactive playground
- 🎭 **TypeScript** - Type-safe component development
- 🎨 **Tailwind CSS** - Utility-first CSS framework

## Components

This library includes the following shadcn/ui components with Storybook stories:

- **Button** - Multiple variants (default, destructive, outline, secondary, ghost, link) and sizes
- **Card** - Container component with header, content, and footer sections
- **Input** - Form input component with various types
- **Badge** - Small status indicators with multiple variants
- **Alert** - Contextual feedback messages with default and destructive variants

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

```bash
# Install dependencies
npm install
```

### Development

```bash
# Run Storybook
npm run storybook

# Build the project
npm run build

# Run the development server
npm run dev
```

### Building Storybook

```bash
# Build static Storybook site
npm run build-storybook
```

## Project Structure

```
superplane-ui/
├── .storybook/          # Storybook configuration
├── src/
│   ├── components/
│   │   └── ui/          # shadcn/ui components
│   │       ├── button.tsx
│   │       ├── card.tsx
│   │       ├── input.tsx
│   │       ├── badge.tsx
│   │       └── alert.tsx
│   ├── lib/
│   │   └── utils.ts     # Utility functions
│   ├── stories/         # Storybook stories
│   │   ├── Button.stories.tsx
│   │   ├── Card.stories.tsx
│   │   ├── Input.stories.tsx
│   │   ├── Badge.stories.tsx
│   │   └── Alert.stories.tsx
│   ├── App.tsx
│   ├── main.tsx
│   └── index.css        # Global styles with Tailwind
├── package.json
├── tsconfig.json
├── vite.config.ts
└── tailwind.config.js
```

## Usage

Import components in your React application:

```tsx
import { Button } from './components/ui/button'
import { Card, CardHeader, CardTitle, CardContent } from './components/ui/card'

function App() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Hello World</CardTitle>
      </CardHeader>
      <CardContent>
        <Button>Click me</Button>
      </CardContent>
    </Card>
  )
}
```

## Technologies

- **React 18** - UI library
- **TypeScript** - Type safety
- **Vite** - Build tool
- **Tailwind CSS** - Styling
- **shadcn/ui** - Component library
- **Storybook 7** - Component documentation
- **class-variance-authority** - Component variants
- **clsx** & **tailwind-merge** - Utility for merging Tailwind classes

## License

MIT