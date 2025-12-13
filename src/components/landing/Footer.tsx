import { Gamepad2, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

const footerLinks = [
  { href: "#product", label: "Продукт" },
  { href: "#solution", label: "Решение" },
  { href: "#how-it-works", label: "Как это работает" },
  { href: "#features", label: "Возможности" },
  { href: "#pricing", label: "Тарифы" }
];

const Footer = () => {
  return (
    <footer className="py-12 bg-secondary/50 border-t border-border/50">
      <div className="container px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-xl gradient-primary flex items-center justify-center">
              <Gamepad2 className="w-5 h-5 text-primary-foreground" />
            </div>
            <span className="text-xl font-bold text-hero">ToBeDone</span>
          </div>

          <div className="flex flex-col items-center md:items-end gap-4 text-center md:text-right">
            <nav className="flex flex-wrap items-center justify-center gap-4 text-sm">
              {footerLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </nav>
            <Button
              variant="outline"
              size="sm"
              className="gap-2"
              onClick={() => window.location.href = 'mailto:hello@tobedone.app?subject=Контакт%20с%20ToBeDone&body=Здравствуйте!'}
            >
              <Mail className="w-4 h-4" />
              Контакты
            </Button>
            <p className="text-sm text-muted-foreground">
              © 2025 ToBeDone. Все права защищены.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
