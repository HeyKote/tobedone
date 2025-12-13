import { motion } from "framer-motion";
import { XCircle, Clock, Frown, Gauge } from "lucide-react";

const problems = [
  {
    icon: Gauge,
    title: "Перегруженные интерфейсы",
    description: "Слишком много функций, графиков и настроек — хочется просто тренироваться, а не разбираться в сложном приложении"
  },
  {
    icon: Clock,
    title: "Отнимают много времени",
    description: "Заполнение каждого приёма пищи и тренировки превращается в рутину, которая убивает мотивацию"
  },
  {
    icon: Frown,
    title: "Нет ощущения прогресса",
    description: "Сухие цифры и графики не дают эмоциональной отдачи — непонятно, движешься ты к цели или нет"
  },
  {
    icon: XCircle,
    title: "Трекинг как контроль",
    description: "Приложения заставляют чувствовать себя виноватым за пропуски, вместо того чтобы поддерживать"
  }
];

const ProblemSection = () => {
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
          <span className="inline-block px-4 py-1.5 rounded-full bg-destructive/10 text-destructive text-sm font-medium mb-4">
            Проблема
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-hero mb-6">
            Почему люди бросают фитнес-приложения?
          </h2>
          <p className="text-lg text-muted-foreground">
            87% пользователей прекращают использовать фитнес-трекеры в первый месяц
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {problems.map((problem, index) => (
            <motion.div
              key={problem.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="card-elevated rounded-2xl p-6 md:p-8 group hover:border-destructive/30 transition-colors"
            >
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-destructive/10 flex items-center justify-center group-hover:bg-destructive/20 transition-colors">
                  <problem.icon className="w-6 h-6 text-destructive" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-hero mb-2">
                    {problem.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {problem.description}
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

export default ProblemSection;