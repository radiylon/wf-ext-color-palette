import { useState, useEffect } from 'react';
import { useOpenAI } from './hooks/useOpenAI';
import { Color } from './types';

const MAX_CHARS = 200;

function App() {
  const [description, setDescription] = useState("");
  const [apiKey, setApiKey] = useState("");
  const [palette, setPalette] = useState<Color[]>([]);
  const { generatePalette, isLoading, error } = useOpenAI({ apiKey });

  useEffect(() => {
    void (async () => {
      await webflow.setExtensionSize('large');
    })();
  }, []);
  
  const handleInputChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const text = e.target.value;
    if (text.length <= MAX_CHARS) {
      setDescription(text);
    }
  };

  const handleApiKeyChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setApiKey(e.target.value.trim());
  };

  const handleGenerate = async () => {
    if (!apiKey) {
      await webflow.notify({ type: "Error", message: "Please enter your OpenAI API key" });
      return;
    }

    try {
      const result = await generatePalette({ description });
      setPalette(result.colors);
      await webflow.notify({ type: "Success", message: "Color palette generated!" });
    } catch {
      await webflow.notify({ 
        type: "Error", 
        message: error || "Failed to generate palette. Please try again." 
      });
    }
  };

  const handleSave = async () => {
    if (!palette.length) return;

    try {
      // TODO: Implement saving to Webflow
      console.log('COLOR PALETTE', palette);
      await webflow.notify({ type: "Success", message: "Palette saved to Webflow!" });
    } catch {
      await webflow.notify({ 
        type: "Error", 
        message: "Failed to save palette to Webflow. Please try again." 
      });
    }
  };

  return (
    <div className="p-4 flex flex-col items-center max-w-2xl mx-auto bg-gray-900 text-white min-h-screen">
      <h1 className="text-3xl font-bold mb-4 text-blue-400">Color Palette Generator</h1>
      <p className="text-gray-300 mb-8 text-center">Describe your desired color palette and we'll generate it using AI. Save the palette to use it in your Webflow project.</p>
      
      <div className="w-full mb-6">
        <label className="block text-blue-300 mb-2 font-medium">
          API Key
        </label>
        <input
          type="password"
          value={apiKey}
          onChange={handleApiKeyChange}
          placeholder="Enter your OpenAI API key"
          className="w-full p-3 rounded bg-gray-800 border border-gray-700 text-white placeholder-gray-400 focus:outline-none focus:border-blue-400 focus:ring-1 focus:ring-blue-400 transition-colors"
        />
        <div className="mt-2 text-gray-400 text-sm text-center">
          Your API key is required to generate palettes. It will not be stored or transmitted anywhere except to OpenAI.
        </div>
      </div>

      <div className="w-full mb-6">
        <label className="block text-blue-300 mb-2 font-medium">
          Color Palette Description
        </label>
        <textarea
          value={description}
          onChange={handleInputChange}
          placeholder="Example: A warm and energetic palette inspired by sunset..."
          className="w-full p-3 rounded bg-gray-800 border border-gray-700 text-white placeholder-gray-400 focus:outline-none focus:border-blue-400 focus:ring-1 focus:ring-blue-400 transition-colors min-h-[100px]"
        />
        <span className="text-gray-400 text-sm text-right block hover:text-blue-400 transition-colors">{description.length}/{MAX_CHARS}</span>
      </div>

      {palette.length > 0 && (
        <div className="w-full mb-6">
          <div className="grid grid-cols-6 gap-4">
            {palette.map((color, index) => (
              <div key={index} className="flex flex-col items-center">
                <span className="text-xs text-gray-400 mb-1">{color.hexcode}</span>
                <div 
                  className="w-full aspect-square rounded shadow-lg mb-2" 
                  style={{ backgroundColor: color.hexcode }}
                />
                <span className="text-sm text-gray-300">{color.name}</span>
              </div>
            ))}
          </div>
        </div>
      )}

      <div className="w-full flex gap-4">
        <button 
          onClick={handleGenerate}
          disabled={isLoading || description.length === 0 || !apiKey}
          className={`flex-1 py-3 px-4 rounded font-medium text-white transition-all
            ${isLoading || !apiKey || description.length === 0 
              ? 'bg-gray-600 cursor-not-allowed opacity-70' 
              : 'bg-blue-500 hover:bg-blue-400 shadow-lg hover:shadow-blue-500/50'
            }`}
        >
          {isLoading ? "Generating..." : "Generate Palette"}
        </button>

        {palette.length > 0 && (
          <button 
            onClick={handleSave}
            className="flex-1 py-3 px-4 rounded font-medium text-white bg-green-500 hover:bg-green-400 shadow-lg hover:shadow-green-500/50 transition-all"
          >
            Save to Webflow
          </button>
        )}
      </div>
    </div>
  );
}

export default App
