import React, { useState } from 'react';
import analyzeImage from './azure-image-analysis';
import generateImage from './azure-image-generation';

function App() {
  const [processing, setProcessing] = useState(false);
  const [imageUrl, setImageUrl] = useState('');
  const [analysisResult, setAnalysisResult] = useState(null);
  const [generatedImageUrl, setGeneratedImageUrl] = useState('');

  const handleButtonClick = (action) => {
    setProcessing(true);
  
    if (action === 'analyze') {
      // Analyze the image
      analyzeImage(imageUrl)
        .then((result) => {
          setProcessing(false);
          setAnalysisResult(result);
        })
        .catch((error) => {
          setProcessing(false);
          // Agrega lógica para manejar errores durante el análisis
        });
    } else if (action === 'generate') {
      // Pasa la descripción al llamar a generateImage
      generateImage(imageUrl)
        .then((generatedUrl) => {
          setProcessing(false);
          setGeneratedImageUrl(generatedUrl);
        })
        .catch((error) => {
          setProcessing(false);
          // Agrega lógica para manejar errores durante la generación de imágenes
        });
    }
  };

  const handleInputChange = (event) => {
    setImageUrl(event.target.value);
  };

  const DisplayResults = () => {
    if (analysisResult) {
      return (
        <div>
          <h2>Analysis Result:</h2>
          <img src={imageUrl} alt="Analyzed" />
          <p>Image URL: {imageUrl}</p>
          {/* Display the analysis result in a readable format */}
          <pre>{JSON.stringify(analysisResult, null, 2)}</pre>
        </div>
      );
    }
    if (generatedImageUrl) {
      return (
        <div>
          <h2>Generated Image:</h2>
          <img src={generatedImageUrl} alt="Generated" />
          {/* Display the generated image URL in a readable format */}
          <p>Image URL: {generatedImageUrl}</p>
        </div>
      );
    }
    return null;
  };

  return (
    <div>
      <h1>Azure Vision IA</h1>
      <p>Enter an Image URL or a description:</p>
      <input type="text" placeholder="Enter an Image URL or a description" value={imageUrl} onChange={handleInputChange} />
      <br />
      <button onClick={() => handleButtonClick('analyze')} disabled={processing}>
        {processing ? 'Analyzing...' : 'Analyze'}
      </button>
      <button onClick={() => handleButtonClick('generate')} disabled={processing}>
        {processing ? 'Generating...' : 'Generate'}
      </button>
      <DisplayResults />
    </div>
  );
}

export default App;
