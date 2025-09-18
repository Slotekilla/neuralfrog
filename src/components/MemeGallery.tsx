import React from 'react';
import { Share2, Download } from 'lucide-react';

const MemeGallery: React.FC = () => {
  const memeImages = [
    {
      src: '/cb942dbe-4cc8-413a-91f1-a1b1a4faffc6.png',
      title: 'Neuro Predicting Gains',
      description: 'When AI meets trading expertise 📈'
    },
    {
      src: '/8d5e2d4a-3bd8-42e0-b26a-a7545b3c6d3d.png',
      title: 'Evolution Chamber',
      description: 'Neuro evolving with community votes 🧬'
    },
    {
      src: '/d49b5ef9-3d23-4648-bd4d-d94757e4edaf.png',
      title: 'To the Moon',
      description: 'Next stop: lunar surface 🚀'
    }
  ];

  const handleShare = (image: typeof memeImages[0]) => {
    if (navigator.share) {
      navigator.share({
        title: `${image.title} - $NEURALFROG`,
        text: image.description,
        url: window.location.href
      });
    } else {
      // Fallback for browsers that don't support Web Share API
      navigator.clipboard.writeText(`${image.title} - Check out $NEURALFROG: ${window.location.href}`);
    }
  };

  return (
    <section className="py-20 px-4 bg-gradient-to-b from-gray-900 to-black">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-black font-orbitron text-green-400 mb-6">
            Viral Meme Gallery
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-green-400 to-cyan-400 mx-auto rounded-full mb-6"></div>
          <p className="text-xl text-gray-300">Share these memes and spread the $NRF revolution</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {memeImages.map((image, index) => (
            <div 
              key={index}
              className="group bg-black/70 backdrop-blur-sm border border-green-400/30 rounded-xl overflow-hidden hover:border-green-400/60 transition-all duration-300 transform hover:scale-105"
            >
              <div className="relative overflow-hidden">
                <img 
                  src={image.src}
                  alt={image.title}
                  className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                {/* Overlay Actions */}
                <div className="absolute top-4 right-4 flex space-x-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <button 
                    onClick={() => handleShare(image)}
                    className="bg-black/70 text-green-400 p-2 rounded-full hover:bg-green-400 hover:text-black transition-colors duration-200"
                    title="Share"
                  >
                    <Share2 size={20} />
                  </button>
                  <a 
                    href={image.src}
                    download={`${image.title}.png`}
                    className="bg-black/70 text-green-400 p-2 rounded-full hover:bg-green-400 hover:text-black transition-colors duration-200"
                    title="Download"
                  >
                    <Download size={20} />
                  </a>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-2 font-orbitron">{image.title}</h3>
                <p className="text-gray-300 text-sm mb-4">{image.description}</p>
                
                <div className="flex space-x-3">
                  <button 
                    onClick={() => handleShare(image)}
                    className="flex-1 bg-green-400/10 text-green-400 px-4 py-2 rounded-lg hover:bg-green-400/20 transition-colors duration-200 flex items-center justify-center space-x-2"
                  >
                    <Share2 size={16} />
                    <span>Share</span>
                  </button>
                  <a 
                    href={image.src}
                    download={`${image.title}.png`}
                    className="flex-1 bg-cyan-400/10 text-cyan-400 px-4 py-2 rounded-lg hover:bg-cyan-400/20 transition-colors duration-200 flex items-center justify-center space-x-2"
                  >
                    <Download size={16} />
                    <span>Download</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-400 mb-4">Want to create your own NeuralFrog memes?</p>
          <div className="space-x-4">
            <span className="text-green-400 font-semibold">#NeuralFrog</span>
            <span className="text-cyan-400 font-semibold">#AIFrog</span>
            <span className="text-purple-400 font-semibold">#SolanaMemes</span>
            <span className="text-orange-400 font-semibold">#CryptoPredictions</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MemeGallery;