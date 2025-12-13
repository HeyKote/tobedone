import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Zap, Gamepad2 } from "lucide-react";

const CTASection = () => {
  return (
    <section className="py-16 md:py-28 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 gradient-primary opacity-95" />
      
      {/* Decorative elements */}
      <div className="absolute top-10 left-10 w-32 h-32 rounded-full bg-white/10 blur-2xl" />
      <div className="absolute bottom-10 right-10 w-48 h-48 rounded-full bg-white/10 blur-2xl" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full bg-white/5 blur-3xl" />
      
      <div className="container px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto"
        >
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, type: "spring" }}
            className="w-20 h-20 rounded-3xl bg-white/20 flex items-center justify-center mx-auto mb-8"
          >
            <Gamepad2 className="w-10 h-10 text-primary-foreground" />
          </motion.div>

          <h2 className="text-3xl md:text-5xl font-bold text-primary-foreground mb-6">
            Готовы сделать фитнес игрой?
          </h2>
          
          <p className="text-lg md:text-xl text-primary-foreground/80 mb-10 max-w-2xl mx-auto">
            Присоединяйтесь к тысячам пользователей, которые уже превратили рутину в приключение
          </p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex justify-center"
          >
            <Button 
              size="xl" 
              className="bg-white text-primary hover:bg-white/90 shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300"
            >
              <Zap className="w-5 h-5" />
              Начать бесплатно
            </Button>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="mt-8 text-primary-foreground/60 text-sm"
          >
            Бесплатная версия навсегда
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;
