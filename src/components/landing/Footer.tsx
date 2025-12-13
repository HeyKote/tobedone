import { Gamepad2 } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-12 bg-secondary/50 border-t border-border/50">
      <div className="container px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-xl gradient-primary flex items-center justify-center">
              <Gamepad2 className="w-5 h-5 text-primary-foreground" />
            </div>
            <span className="text-xl font-bold text-hero">ToBeDone</span>
          </div>

          <nav className="flex flex-wrap items-center justify-center gap-6 text-sm">
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
              О продукте
            </a>
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
              Возможности
            </a>
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
              Тарифы
            </a>
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
              Блог
            </a>
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
              Поддержка
            </a>
          </nav>

          <p className="text-sm text-muted-foreground">
            © 2025 ToBeDone. Все права защищены.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;