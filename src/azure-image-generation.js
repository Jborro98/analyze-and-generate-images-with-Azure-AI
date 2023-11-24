// azure-image-generation.js

async function generateImage(description) {
    try {
        // Make a POST request to the Azure AI API
        const response = await fetch('https://api.azureai.com/v2/images/generate', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': '8aaf863761b443449b7eb12f8cd3efa0' // Replace with your actual API key
            },
            body: JSON.stringify({
                description: description
            })
        });

        // Process the response and return the generated image
        const imageData = await response.json();
        return imageData.url;  // Assuming the URL is present in the response
    } catch (error) {
        // Handle any errors that occur during the API call
        console.error('Error generating image:', error);
        throw error;
    }
}

export default generateImage;
