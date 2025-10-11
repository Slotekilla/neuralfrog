import React from "react";

const Whitepaper: React.FC = () => {
  return (
    <section
      id="whitepaper"
      className="relative z-10 flex flex-col items-center justify-center py-20 bg-black text-white"
    >
      <h2 className="text-3xl font-bold mb-6">NeuralFrog ($NRF) Whitepaper</h2>

      <div className="w-full flex justify-center">
        <iframe
          src="https://gamma.app/embed/bz3gulkxjwjh1go"
          className="w-full max-w-[700px] h-[450px] border-0"
          title="NeuralFrog ($NRF)"
          loading="lazy"
          // ⬇️ v Reactu uporabi allowFullScreen (ne allow="fullscreen")
          allowFullScreen
          // pomaga, če brskalnik ali vtičnik omejuje referer
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>

      {/* Fallback link, če je embed blokiran */}
      <p className="mt-4 text-sm opacity-70">
        If the embed doesn’t load,{" "}
        <a
          href="https://gamma.app/embed/bz3gulkxjwjh1go"
          target="_blank"
          rel="noreferrer"
          className="underline"
        >
          open the whitepaper in a new tab
        </a>.
      </p>
    </section>
  );
};

export default Whitepaper;
