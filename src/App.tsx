import { useEffect, useState } from 'react';
import './App.css';
import SourceImagePreview from './components/SourceImagePreview';
import SourceImageUploader from './components/SourceImageUploader';

function App() {
  const [imageUrl, setImageUrl] = useState<string | null>(null);
  const [objectUrl, setObjectUrl] = useState<string | null>(null);

  useEffect(() => {
    return () => {
      if (objectUrl) {
        URL.revokeObjectURL(objectUrl);
      }
    };
  }, [objectUrl]);

  const handleImageSelected = (url: string | null) => {
    if (objectUrl) {
      URL.revokeObjectURL(objectUrl);
    }
    setObjectUrl(url);
    setImageUrl(url);
  };

  return (
    <div className="container">
      <SourceImageUploader onImageSelected={handleImageSelected} />
      <SourceImagePreview imageUrl={imageUrl} />
    </div>
  );
}

export default App;
