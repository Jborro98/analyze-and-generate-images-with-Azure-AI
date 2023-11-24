async function analyzeImage(imageUrl) {
    const apiKey = '7936937cc9e940a285d4b51f8956b51f';
    const endpoint = 'https://react-app-image-analyze.cognitiveservices.azure.com/vision/v4.0/analyze';

    const params = new URLSearchParams({
        visualFeatures: 'Categories,Description,Color',
        details: 'Landmarks',
        language: 'en',
    });

    const url = `${endpoint}?${params.toString()}`;

    const response = await fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Ocp-Apim-Subscription-Key': apiKey,
        },
        body: JSON.stringify({ url: imageUrl }),
    });

    return response.json();
}

export default analyzeImage;
