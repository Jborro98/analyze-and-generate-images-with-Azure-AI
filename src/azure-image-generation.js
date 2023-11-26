const openai = require('openai');

openai.apiKey = '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'; // Reemplaza con tu clave de API de OpenAI

async function generateImage(description) {
  try {
    const response = await openai.ImageCompletion.create({
      prompt: `Generate an image that depicts: ${description}`,
      n: 1, // Puedes ajustar este número según tus necesidades
    });

    const imageUrl = response.data[0].url;
    return imageUrl;
  } catch (error) {
    console.error('Error al generar la imagen:', error.message);
    throw error;
  }
}

module.exports = generateImage;