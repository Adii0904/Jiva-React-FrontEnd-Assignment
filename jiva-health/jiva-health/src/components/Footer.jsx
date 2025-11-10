export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-8 text-center">
      <p>© {new Date().getFullYear()} Jiva Health. All rights reserved.</p>
      <p className="text-sm mt-1">Built with ❤️ using React + Tailwind CSS</p>
    </footer>
  );
}
