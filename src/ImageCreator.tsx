import React, { useState } from 'react';
import axios from 'axios';

const ImageCreator: React.FC = () => {
  const [prompt, setPrompt] = useState('');
  const [isLoading, setLoading] = useState(false);
  const [imageURL, setImageURL] = useState<string | null>(null);

  const handleSubmit = async () => {
    setLoading(true);

    try {
      const response = await axios.post('https://api.openai.com/v1/images', {
        prompt,
        n: 1,
        size: '1024x1024',
      }, {
        headers: {
          'Authorization': `Bearer ${process.env.OPENAI_API_KEY}`,
        },
      });

      const imageUrl = response.data.data[0].url;
      setImageURL(imageUrl);
    } catch (error) {
      console.error(error);
    }

    setLoading(false);
  };

  return (
    <div style={{ padding: '20px' }}>
      <input
        type="text"
        value={prompt}
        onChange={(e) => setPrompt(e.target.value)}
        placeholder="Enter prompt"
      />
      <button onClick={handleSubmit} disabled={isLoading}>
        {isLoading ? 'Loading...' : 'Submit'}
      </button>
      {imageURL && (
        <div>
          <a href={imageURL} download>
            Click to download the image
          </a>
          <img src={imageURL} alt="Generated" />
        </div>
      )}
    </div>
  );
};

export default ImageCreator;
