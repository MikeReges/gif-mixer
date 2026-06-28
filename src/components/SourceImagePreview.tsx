interface SourceImagePreviewProps {
  imageUrl: string | null;
}

export default function SourceImagePreview({ imageUrl }: SourceImagePreviewProps) {
  return (
    <div>
      {imageUrl ? (
        <img src={imageUrl} alt="Uploaded preview" style={{ maxWidth: '100%', height: 'auto' }} />
      ) : (
        <div>No image selected</div>
      )}
    </div>
  );
}
