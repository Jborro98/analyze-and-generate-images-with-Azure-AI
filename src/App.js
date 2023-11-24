import React, { useState } from 'react';
import analyzeImage from './azure-image-analysis';


function App() {
  const [processing, setProcessing] = useState(false);
  const [imageUrl, setImageUrl] = useState('');
  const [analysisResult, setAnalysisResult] = useState(null);
  
  const handleAnalyzeClick = () => {
    setProcessing(true);
    analyzeImage(imageUrl)
      .then((result) => {
        setProcessing(false);
        setAnalysisResult(result);
      })
      .catch((error) => {
        setProcessing(false);
        // Add logic to handle error during analysis
      });
  };

  const handleInputChange = (event) => {
    setImageUrl(event.target.value);
  };

  const DisplayResults = () => {
    if (analysisResult) {
      return (
        <div>
          <h2>Analysis Result:</h2>
          <p>Image URL: {imageUrl}</p>
          {/* Display the analysis result in a readable format */}
          <pre>{JSON.stringify(analysisResult, null, 2)}</pre>
        </div>
      );
    }
    return null;
  };

  return (
    <div>
      <h1>Azure Vision IA</h1>
      <p>Enter an Image URL or a description:</p>
      <input type="text" placeholder="Enter an Image URL" value={imageUrl} onChange={handleInputChange} />
      <br /> {/* Add a line break */}
      <button onClick={handleAnalyzeClick} disabled={processing}>
        {processing ? 'Analyzing...' : 'Analyze'}
      </button>
      <button>Generate</button>
      <DisplayResults />
    </div>
  );
}

export default App;