import { FloatingDock } from "@/components/ui/floating-dock";
import { Home, User, Briefcase, Mail } from "lucide-react"; // Import icon yang sesuai
import { ThemeToggle } from "@/components/ui/theme-toggle";

export function Navbar() {
  const links = [
    {
      title: "Home",
      icon: (
        <div className="flex h-full w-full items-center justify-center rounded-full transition-colors duration-300 hover:bg-black group">
          <Home className="h-full w-full text-neutral-300 group-hover:text-white" />
        </div>
      ),
      href: "#home",
    },
    {
      title: "About Me",
      icon: (
        <div className="flex h-full w-full items-center justify-center rounded-full transition-colors duration-300 hover:bg-black group">
          <User className="h-full w-full text-neutral-300 group-hover:text-white" />
        </div>
      ),
      href: "#journey-timeline",
    },
    {
      title: "Projects",
      icon: (
        <div className="flex h-full w-full items-center justify-center rounded-full transition-colors duration-300 hover:bg-black group">
          <Briefcase className="h-full w-full text-neutral-300 group-hover:text-white" />
        </div>
      ),
      href: "#projects-section",
    },
    {
      title: "Contact",
      icon: (
        <div className="flex h-full w-full items-center justify-center rounded-full transition-colors duration-300 hover:bg-black group">
          <Mail className="h-full w-full text-neutral-300 group-hover:text-white" />
        </div>
      ),
      href: "#contact",
    },
  ];

  return (
    <>
      {/* 1. Theme Toggle Melayang di Kanan Atas */}
      <div className="fixed top-6 right-6 z-[100]">
        <ThemeToggle />
      </div>

      {/* 2. Floating Dock lu di Bawah */}
      <div className="fixed bottom-10 inset-x-0 z-50 flex items-center justify-center pointer-events-none">
        <div className="relative pointer-events-auto">
          <FloatingDock items={links} />
        </div>
      </div>
    </>
  );
}
