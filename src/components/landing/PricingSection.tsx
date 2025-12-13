import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Check, Zap, Crown, Star } from "lucide-react";

const plans = [
  {
    name: "Free",
    price: "0",
    description: "Отличный старт для знакомства с приложением",
    icon: Zap,
    features: [
      "Базовый трекинг калорий и тренировок",
      "Ежедневные игровые задания",
      "Стрики и базовые достижения",
      "Базовая аналитика за неделю"
    ],
    popular: false,
    buttonVariant: "outline" as const
  },
  {
    name: "Pro",
    price: "299",
    period: "/ месяц",
    description: "Для тех, кто хочет серьёзных результатов",
    icon: Star,
    features: [
      "Всё из Free",
      "Адаптивные планы тренировок",
      "Персональные планы питания",
      "Продвинутая аналитика",
      "Эксклюзивные челленджи",
      "Приоритетная поддержка"
    ],
    popular: true,
    buttonVariant: "hero" as const
  },
  {
    name: "Elite",
    price: "799",
    period: "/ месяц",
    description: "Максимум возможностей и персонализации",
    icon: Crown,
    features: [
      "Всё из Pro",
      "Персональный AI-коуч",
      "Индивидуальные рекомендации",
      "Специальные фитнес-пакеты",
      "Расширенные отчёты",
      "Эксклюзивный контент",
      "VIP-поддержка 24/7"
    ],
    popular: false,
    buttonVariant: "accent" as const
  }
];

const PricingSection = () => {
  return (
    <section className="py-20 md:py-32 relative overflow-hidden">
      {/* Background */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] rounded-full bg-primary/5 blur-3xl" />
      
      <div className="container px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            Тарифы
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-hero mb-6">
            Выберите свой <span className="text-gradient">путь к цели</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Начните бесплатно и переходите на Pro, когда будете готовы
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`relative rounded-3xl p-6 md:p-8 ${
                plan.popular 
                  ? 'bg-card border-2 border-primary shadow-glow scale-105' 
                  : 'card-elevated'
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <span className="gradient-primary text-primary-foreground text-sm font-semibold px-4 py-1.5 rounded-full">
                    Популярный
                  </span>
                </div>
              )}

              <div className="flex items-center gap-3 mb-4">
                <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${
                  plan.popular ? 'gradient-primary' : 'bg-primary/10'
                }`}>
                  <plan.icon className={`w-5 h-5 ${plan.popular ? 'text-primary-foreground' : 'text-primary'}`} />
                </div>
                <h3 className="text-xl font-bold text-hero">{plan.name}</h3>
              </div>

              <div className="mb-4">
                <span className="text-4xl font-bold text-hero">₽{plan.price}</span>
                {plan.period && <span className="text-muted-foreground">{plan.period}</span>}
              </div>

              <p className="text-muted-foreground mb-6">{plan.description}</p>

              <ul className="space-y-3 mb-8">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-foreground">{feature}</span>
                  </li>
                ))}
              </ul>

              <Button variant={plan.buttonVariant} size="lg" className="w-full">
                {plan.price === "0" ? "Начать бесплатно" : "Выбрать план"}
              </Button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;