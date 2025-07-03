import React from 'react';
import { Button } from '@/components/ui/button';

export default function OscarLandingPage() {
  return (
    <div className="min-h-screen bg-white text-gray-800">
      {/* Header */}
      <header className="flex justify-between items-center p-6 shadow-md">
        <div className="flex items-center space-x-2">
          <img src="/raccoon-logo.png" alt="OSCAR logo" className="h-10 w-10" />
          <span className="text-2xl font-bold text-green-700">OSCAR</span>
        </div>
        <nav className="space-x-4">
          <a href="#features" className="text-sm text-gray-700 hover:text-orange-600">Features</a>
          <a href="#signup" className="text-sm text-gray-700 hover:text-orange-600">Sign Up</a>
          <a href="#login" className="text-sm text-gray-700 hover:text-orange-600">Driver Login</a>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="flex flex-col md:flex-row items-center justify-between px-8 py-20 bg-green-50">
        <div className="max-w-xl mb-10 md:mb-0">
          <h1 className="text-4xl md:text-5xl font-bold text-green-900 mb-6">
            Take a Photo, <br /> We Pick Up the Trash
          </h1>
          <p className="text-lg text-gray-700 mb-6">
            Whether it’s bagged, loose, or bulk—OSCAR handles it all. Convenient, fast, and eco-friendly trash pickup for Baltimore.
          </p>
          <div className="space-x-4">
            <Button className="bg-orange-500 hover:bg-orange-600 text-white">Sign Up</Button>
            <Button variant="outline">Driver Login</Button>
          </div>
        </div>
        <div className="flex flex-col items-center space-y-6">
          <img src="/camera-trash-logo.png" alt="Camera Trash Logo" className="h-32" />
          <img src="/oscar-wordmark.png" alt="Wordmark Logo" className="h-12" />
        </div>
      </section>

      {/* Features */}
      <section id="features" className="px-8 py-16 bg-white text-center">
        <h2 className="text-3xl font-bold text-green-800 mb-8">Why Use OSCAR?</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-semibold text-orange-600 mb-2">Snap & Schedule</h3>
            <p className="text-sm text-gray-600">Upload a photo of your trash and schedule a pickup within minutes.</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-orange-600 mb-2">Trusted Local Drivers</h3>
            <p className="text-sm text-gray-600">Our verified drivers are ready to serve Baltimore neighborhoods fast.</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-orange-600 mb-2">Eco-Friendly Disposal</h3>
            <p className="text-sm text-gray-600">We partner with local recyclers and composters to minimize waste.</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="px-8 py-8 bg-green-700 text-white text-center">
        <p>&copy; {new Date().getFullYear()} OSCAR Trash Pickup. All rights reserved.</p>
      </footer>
    </div>
  );
}
