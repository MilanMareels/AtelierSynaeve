export default function Footer() {
  return (
    <footer className="fixed bottom-0 left-0 w-full z-50 flex flex-col md:flex-row justify-between items-center py-8 text-[10px] uppercase tracking-widest text-white bg-transparent p-8 syncopate">
      <a href="#" className="hover:underline">
        Instagram
      </a>
      <a href="https://www.lannie.be" target="_blank" rel="noreferrer">
        <p className="my-4 md:my-0 text-center">© 2026 Atelier Synaeve. Ontworpen en ontwikkeld door Lannie</p>
      </a>
      <a href="/privacy" className="hover:underline">
        Privacy Policy
      </a>
    </footer>
  );
}
