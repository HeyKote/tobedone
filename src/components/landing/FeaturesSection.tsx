import { motion } from "framer-motion";
import { Apple, Dumbbell, Gamepad2, BarChart3, Smartphone, Moon } from "lucide-react";

const features = [
  {
    icon: Apple,
    title: "Подсчёт калорий",
    description: "Умный поиск продуктов, сканер штрих-кодов и автоматический расчёт КБЖУ"
  },
  {
    icon: Dumbbell,
    title: "Трекинг тренировок",
    description: "Библиотека упражнений, готовые программы и таймер для отдыха между подходами"
  },
  {
    icon: Gamepad2,
    title: "Геймификация",
    description: "XP за каждое действие, ежедневные стрики, достижения и сезонные челленджи"
  },
  {
    icon: BarChart3,
    title: "Аналитика прогресса",
    description: "Наглядные графики веса, калорий и активности за любой период"
  },
  {
    icon: Moon,
    title: "Сон и восстановление",
    description: "Трекинг качества сна, анализ восстановления и рекомендации для оптимальной нагрузки"
  },
  {
    icon: Smartphone,
    title: "Интеграции",
    description: "Синхронизация с Apple Health и Google Fit для автоматического сбора данных"
  }
];

const FeaturesSection = () => {
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
            Возможности
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-hero mb-6">
            Всё необходимое <span className="text-gradient">в одном месте</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="card-elevated rounded-2xl p-6 md:p-8 text-center group hover:glow-primary transition-all duration-300"
            >
              <div className="w-16 h-16 rounded-2xl gradient-primary flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <feature.icon className="w-8 h-8 text-primary-foreground" />
              </div>
              <h3 className="text-xl font-semibold text-hero mb-3">
                {feature.title}
              </h3>
              <p className="text-muted-foreground">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;