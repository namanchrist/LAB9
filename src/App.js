// src/App.js
import React from 'react';
import ImageGallery from './components/ImageGallery';
import LoginForm from './components/LoginForm';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>Tourism Image Gallery</h1>
      <ImageGallery />
      <h2>Login</h2>
      <LoginForm />
    </div>
  );
}

export default App;
