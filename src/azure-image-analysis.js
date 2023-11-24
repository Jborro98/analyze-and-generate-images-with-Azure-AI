
async function analyzeImage(imageUrl) {
  const apiKey = '7936937cc9e940a285d4b51f8956b51f'; // Replace with your Azure AI Vision API key
  const endpoint = 'https://react-app-image-analyze.cognitiveservices.azure.com/computervision/imageanalysis:analyze?api-version=2023-02-01'; // Replace with your Azure AI Vision API endpoint

  const requestBody = {
    url: imageUrl
  };

  const response = await fetch(endpoint, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Ocp-Apim-Subscription-Key': apiKey
    },
    body: JSON.stringify(requestBody)
  });

  const result = await response.json();
  return result;
}

export default analyzeImage;
