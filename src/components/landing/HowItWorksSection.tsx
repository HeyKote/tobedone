import { motion } from "framer-motion";
import { Target, Plus, Gift, TrendingUp } from "lucide-react";

const steps = [
  {
    number: "01",
    icon: Target,
    title: "Получите дневную цель",
    description: "Каждый день приложение формирует персональное задание на основе ваших целей и текущего состояния"
  },
  {
    number: "02",
    icon: Plus,
    title: "Добавьте активность",
    description: "Быстро фиксируйте тренировки и приёмы пищи — умный ввод экономит ваше время"
  },
  {
    number: "03",
    icon: Gift,
    title: "Получите награду",
    description: "За каждое выполненное действие — XP, достижения и бонусы. Чувствуйте прогресс каждый день"
  },
  {
    number: "04",
    icon: TrendingUp,
    title: "Растите в уровне",
    description: "Открывайте новые возможности, участвуйте в челленджах и становитесь лучшей версией себя"
  }
];

const HowItWorksSection = () => {
  return (
    <section className="py-20 md:py-32 bg-secondary/30">
      <div className="container px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            Как это работает
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-hero mb-6">
            4 простых шага к здоровому образу жизни
          </h2>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="relative"
            >
              {/* Connecting line */}
              {index < steps.length - 1 && (
                <div className="absolute left-6 md:left-8 top-20 w-0.5 h-16 bg-gradient-to-b from-primary/50 to-primary/10" />
              )}
              
              <div className="flex gap-4 md:gap-6 mb-8">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 md:w-16 md:h-16 rounded-2xl gradient-primary flex items-center justify-center shadow-glow">
                    <step.icon className="w-6 h-6 md:w-8 md:h-8 text-primary-foreground" />
                  </div>
                </div>
                <div className="card-elevated rounded-2xl p-6 flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-sm font-bold text-primary">{step.number}</span>
                    <h3 className="text-xl font-semibold text-hero">{step.title}</h3>
                  </div>
                  <p className="text-muted-foreground">{step.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;