import { MessageCircle } from "lucide-react";

export default function FloatingButton() {
  return (
    <a
      href="https://wa.me/5537999999999"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Falar pelo WhatsApp"
      className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-green-500 text-white shadow-lg transition hover:scale-110 hover:bg-green-600"
    >
      <MessageCircle size={28} />
    </a>
  );
}