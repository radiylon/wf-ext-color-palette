# Webflow Designer Extension - Rad Color Palette Generator

A basic Webflow Designer Extension that generates beautiful color palettes using AI. Simply describe the palette you want, and the extension will create a harmonious set of colors that you can save directly to your Webflow project as color variables and collections.

## Features

- 🎨 AI-Powered Color Generation - Generate unique color palettes from natural language descriptions
- 💾 Webflow Integration - Save palettes directly as Webflow color variables
- 📚 Collection Support - Store your palettes in Webflow collections for future reference
- ⚡️ Real-time Preview - See your generated colors instantly with names and hex codes
- 🔄 Multiple Generations - Keep generating until you find the perfect palette

## Tech Stack

- ⚛️ [React](https://reactjs.org/) - For building the user interface
- 🔷 [TypeScript](https://www.typescriptlang.org/) - Type-safe development
- 🎨 [TailwindCSS](https://tailwindcss.com/) - Utility-first styling
- 🤖 [OpenAI API](https://openai.com/api/) - AI-powered color generation
- 🔌 [Webflow Designer Extension API](https://developers.webflow.com/designer/docs/getting-started-designer-extensions) - Deep Webflow integration
- ⚡️ [Vite](https://vitejs.dev/) - Next-gen frontend tooling
- 🔥 [Hot Reloading](https://www.npmjs.com/package/@xatom/wf-app-hot-reload) - Seamless development experience

## Prerequisites

Before you begin, ensure you have:
- Node.js (v18 or higher)
- npm or yarn
- A Webflow account with Designer Extension development access
- An OpenAI API key

## Getting Started

1. Clone this repository:
```bash
git clone [repository-url]
cd wf-ext-color-palette
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Build for production:
```bash
npm run build
```

## Usage

1. Install the extension in your Webflow project
2. Enter your OpenAI API key (this is stored only in your browser session)
3. Describe the color palette you want (e.g., "A warm and energetic palette inspired by sunset")
4. Click "Generate Palette" to create your colors
5. Preview the generated colors with their names and hex codes
6. Click "Save to Webflow" to store the palette as variables and in your collections
7. Generate new palettes until you find the perfect one

## Project Structure

```
├── src/
│   ├── components/     # React components
│   ├── hooks/         # Custom hooks including OpenAI integration
│   ├── types/         # TypeScript type definitions
│   └── App.tsx        # Main application component
├── public/           # Static assets
├── webflow.config.js # Webflow extension configuration
├── vite.config.ts    # Vite configuration
└── tailwind.config.js # TailwindCSS configuration
```

## Development

- Uses Vite for fast development and building
- Hot reloading enabled for rapid iteration
- TailwindCSS for styling
- OpenAI API for color generation
- Webflow Designer Extension API for deep integration

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

[MIT](LICENSE)
