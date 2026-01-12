# Webflow Designer Extension - Rad Color Palette Generator

A Webflow Designer Extension that generates color palettes using AI. Describe the palette you want, and save it directly to your Webflow project as color variables.

https://github.com/user-attachments/assets/7752bb69-21fb-4298-a4b9-7ff6460f7283

<img width="2832" height="2084" alt="CleanShot 2026-01-12 at 01 46 54@2x" src="https://github.com/user-attachments/assets/d5fb41f7-5b6b-4ba8-8d64-f168dababe25" />

## Features

- **AI Color Generation** - Generate unique palettes from natural language descriptions
- **Webflow Integration** - Save palettes directly as Webflow color variables
- **Collection Support** - Store palettes in Webflow collections for future reference
- **Real-time Preview** - See generated colors instantly with names and hex codes

## Tech Stack

- **Framework**: React, TypeScript, Vite
- **Styling**: Tailwind CSS
- **AI**: OpenAI API
- **Platform**: Webflow Designer Extension API

## Quick Start

**Prerequisites:** Node.js 18+, pnpm, Webflow account with Designer Extension access, OpenAI API key

```bash
pnpm install
pnpm dev
```

## Project Structure

```
src/
├── components/    # React components
├── hooks/         # Custom hooks including OpenAI integration
├── types/         # TypeScript definitions
└── App.tsx        # Main application component
```
