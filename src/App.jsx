import React from 'react';
import WhatsAppButton from './components/WhatsAppButton';
import ServiceCard from './components/ServiceCard';

export default function App() {
  const services = [
    {
      title: "Jingle Iklan",
      description: "Jingle iklan yang menarik untuk meningkatkan brand awareness produk atau jasa Anda."
    },
    {
      title: "Background Music",
      description: "Background music untuk video, presentasi, atau konten multimedia lainnya."
    },
    {
      title: "Music Production",
      description: "Produksi musik profesional untuk berbagai kebutuhan dan genre."
    },
    {
      title: "Sound Design",
      description: "Sound design untuk game, aplikasi, atau kebutuhan multimedia lainnya."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-900 to-purple-900 text-white">
      <div className="container mx-auto px-4 py-12 flex flex-col items-center min-h-screen">
        {/* Header */}
        <header className="text-center mb-12">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 text-yellow-400">Maulana Music</h1>
          <p className="text-xl md:text-2xl text-blue-200">Jasa Pembuatan Music dan Jingle</p>
        </header>

        {/* Main content */}
        <main className="w-full max-w-4xl">
          {/* Hero section */}
          <div className="bg-black/30 backdrop-blur-sm rounded-xl p-8 mb-12 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Kreasi Musik Berkualitas</h2>
            <p className="text-lg md:text-xl mb-8">
              Kami menyediakan jasa pembuatan musik dan jingle profesional untuk kebutuhan Anda.
              Dengan pengalaman dan kreativitas, kami menciptakan karya musik yang sesuai dengan keinginan Anda.
            </p>
            <div className="text-5xl md:text-6xl font-bold text-yellow-400 mb-6">
              Hanya 30 rb saja!
            </div>
            <WhatsAppButton />
          </div>

          {/* Services */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {services.map((service, index) => (
              <ServiceCard 
                key={index}
                title={service.title}
                description={service.description}
              />
            ))}
          </div>

          {/* CTA Section */}
          <div className="bg-black/30 backdrop-blur-sm rounded-xl p-8 text-center mb-12">
            <h2 className="text-3xl font-bold mb-6">Hubungi Kami Sekarang</h2>
            <p className="text-xl mb-8">Dapatkan penawaran spesial untuk pemesanan pertama Anda!</p>
            <WhatsAppButton />
          </div>
        </main>

        {/* Footer */}
        <footer className="w-full text-center mt-auto pt-8">
          <div className="mb-4">
            <a 
              href="https://www.zapt.ai" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-sm text-blue-200 hover:text-blue-100 transition-colors"
            >
              Made on ZAPT
            </a>
          </div>
          <p className="text-sm text-blue-200">© 2024 Maulana Music. All Rights Reserved.</p>
        </footer>
      </div>
    </div>
  );
}