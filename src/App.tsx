//import { useState } from 'react'
import './App.css'
import SourceImagePreview from "./components/SourceImagePreview";
import SourceImageUploader from "./components/SourceImageUploader";

function App() {
  return (
    <div className="container">
      <SourceImagePreview />
      <SourceImageUploader />
    </div>
  );
}

export default App;
