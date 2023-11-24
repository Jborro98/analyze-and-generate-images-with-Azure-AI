
async function analyzeImage(imageUrl) {
  const apiKey = '8aaf863761b443449b7eb12f8cd3efa0';
  const endpoint = 'https://react-app-image-analyze.cognitiveservices.azure.com/computervision/imageanalysis:analyze?api-version=2023-04-01-preview&features=caption';

  const requestBody = {
    url: imageUrl
  };

  const response = await fetch(endpoint, {
    method: 'POST',
    headers: {
      'Content-Type': "application/json",
      'Ocp-Apim-Subscription-Key': apiKey
    },
    body: JSON.stringify(requestBody)
  });

  const result = await response.json();
  return result;
}

export default analyzeImage;
