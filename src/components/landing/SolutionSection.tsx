import { motion } from "framer-motion";
import { Trophy, Brain, Utensils, Heart, Moon } from "lucide-react";

const solutions = [
  {
    icon: Trophy,
    title: "Геймификация и быстрые победы",
    description: "Превращаем каждое действие в маленькую победу. XP, достижения и стрики мотивируют продолжать",
    color: "primary"
  },
  {
    icon: Brain,
    title: "Адаптация под ваше состояние",
    description: "Приложение анализирует сон и восстановление, учитывает усталость и настроение — предлагает задания, которые вы реально выполните",
    color: "accent"
  },
  {
    icon: Utensils,
    title: "Всё в одном месте",
    description: "Питание и тренировки в едином пространстве. Никаких переключений между приложениями",
    color: "primary"
  },
  {
    icon: Heart,
    title: "Поддержка, а не контроль",
    description: "ToBeDone — ваш тиммейт, который поддерживает и адаптируется, а не критикует за пропуски",
    color: "accent"
  }
];

const SolutionSection = () => {
  return (
    <section className="py-20 md:py-32 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-primary/5 blur-3xl" />
      <div className="absolute bottom-0 left-0 w-72 h-72 rounded-full bg-accent/5 blur-3xl" />
      
      <div className="container px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            Решение
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-hero mb-6">
            ToBeDone делает фитнес <span className="text-gradient">игрой</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Мы переосмыслили подход к трекингу — теперь это не обязанность, а удовольствие
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {solutions.map((solution, index) => (
            <motion.div
              key={solution.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="card-elevated rounded-2xl p-6 md:p-8 group hover:glow-primary transition-all duration-300"
            >
              <div className="flex items-start gap-4">
                <div className={`flex-shrink-0 w-12 h-12 rounded-xl flex items-center justify-center transition-all duration-300 ${
                  solution.color === 'primary' 
                    ? 'bg-primary/10 group-hover:bg-primary group-hover:text-primary-foreground' 
                    : 'bg-accent/10 group-hover:bg-accent group-hover:text-accent-foreground'
                }`}>
                  <solution.icon className={`w-6 h-6 ${solution.color === 'primary' ? 'text-primary group-hover:text-primary-foreground' : 'text-accent group-hover:text-accent-foreground'}`} />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-hero mb-2">
                    {solution.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {solution.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SolutionSection;