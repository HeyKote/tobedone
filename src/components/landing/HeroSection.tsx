import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Gamepad2, Sparkles, Zap } from "lucide-react";
import mockupDashboard from "@/assets/mockup-dashboard.png";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen overflow-hidden gradient-hero">
      {/* Background decorations */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-96 h-96 rounded-full bg-primary/10 blur-3xl animate-pulse-soft" />
        <div className="absolute top-1/2 -left-20 w-72 h-72 rounded-full bg-accent/10 blur-3xl animate-pulse-soft" style={{ animationDelay: '1s' }} />
        <div className="absolute bottom-20 right-1/4 w-64 h-64 rounded-full bg-primary/5 blur-3xl animate-pulse-soft" style={{ animationDelay: '2s' }} />
      </div>

      <div className="container relative z-10 px-4 py-20 md:py-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <div className="flex flex-col items-center lg:items-start text-center lg:text-left">
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary mb-8"
            >
              <Sparkles className="w-4 h-4" />
              <span className="text-sm font-medium">Фитнес как игра</span>
            </motion.div>

            {/* Main heading */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl md:text-6xl lg:text-7xl font-bold text-hero leading-tight mb-6"
            >
              Ваш тиммейт
              <br />
              <span className="text-gradient">в мире фитнеса</span>
            </motion.h1>

            {/* Subheading */}
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg md:text-xl text-muted-foreground max-w-2xl mb-10"
            >
              ToBeDone — приложение, которое ощущается как игра: 
              простые задания, быстрые победы и умный трекинг без рутины
            </motion.p>

            {/* CTA buttons */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Button variant="hero" size="xl">
                <Zap className="w-5 h-5" />
                Начать бесплатно
              </Button>
              <Button variant="outline" size="xl">
                <Gamepad2 className="w-5 h-5" />
                Как это работает
              </Button>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="grid grid-cols-3 gap-8 md:gap-16 mt-16 pt-8 border-t border-border/50 w-full"
            >
              <div className="text-center lg:text-left">
                <p className="text-3xl md:text-4xl font-bold text-gradient">10K+</p>
                <p className="text-sm text-muted-foreground mt-1">Пользователей</p>
              </div>
              <div className="text-center lg:text-left">
                <p className="text-3xl md:text-4xl font-bold text-gradient">4.9</p>
                <p className="text-sm text-muted-foreground mt-1">Рейтинг</p>
              </div>
              <div className="text-center lg:text-left">
                <p className="text-3xl md:text-4xl font-bold text-gradient">85%</p>
                <p className="text-sm text-muted-foreground mt-1">Удержание</p>
              </div>
            </motion.div>
          </div>

          {/* Right mockup */}
          <motion.div
            initial={{ opacity: 0, x: 50, rotateY: -10 }}
            animate={{ opacity: 1, x: 0, rotateY: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative flex justify-center lg:justify-end"
          >
            <div className="relative">
              {/* Glow effect behind phone */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/30 to-accent/30 blur-3xl scale-110 rounded-full" />
              
              {/* Phone mockup */}
              <div className="relative z-10 rounded-[2.5rem] overflow-hidden shadow-2xl shadow-primary/20 border-4 border-foreground/10 bg-background">
                <img 
                  src={mockupDashboard} 
                  alt="ToBeDone Dashboard - главный экран приложения" 
                  className="w-64 md:w-80 h-auto"
                />
              </div>
              
              {/* Floating decorations */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-4 -right-4 w-16 h-16 bg-accent/20 rounded-2xl backdrop-blur-sm border border-accent/30 flex items-center justify-center"
              >
                <Sparkles className="w-8 h-8 text-accent" />
              </motion.div>
              
              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute -bottom-4 -left-4 w-14 h-14 bg-primary/20 rounded-xl backdrop-blur-sm border border-primary/30 flex items-center justify-center"
              >
                <Zap className="w-6 h-6 text-primary" />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;