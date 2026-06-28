import type { ChangeEvent } from 'react';

interface SourceImageUploaderProps {
  onImageSelected: (imageUrl: string | null) => void;
}

export default function SourceImageUploader({ onImageSelected }: SourceImageUploaderProps) {
  const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0] ?? null;
    if (!file) {
      onImageSelected(null);
      return;
    }

    const imageUrl = URL.createObjectURL(file);
    onImageSelected(imageUrl);
  };

  return (
    <div>
      <label htmlFor="fileUpload">Choose an image</label>
      <input
        type="file"
        id="fileUpload"
        accept="image/*"
        onChange={handleFileChange}
      />
    </div>
  );
}