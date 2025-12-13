import { motion } from "framer-motion";
import { useState } from "react";

import mockupOnboarding from "@/assets/mockup-onboarding.png";
import mockupDashboard from "@/assets/mockup-dashboard.png";
import mockupCalories from "@/assets/mockup-calories.png";
import mockupWorkout from "@/assets/mockup-workout.png";
import mockupRewards from "@/assets/mockup-rewards.png";
import mockupAnalytics from "@/assets/mockup-analytics.png";

const mockups = [
  {
    id: "onboarding",
    title: "Онбординг",
    description: "Дружелюбное знакомство с приложением и обещание ценности",
    image: mockupOnboarding
  },
  {
    id: "dashboard",
    title: "Главный экран",
    description: "Дневные задания, стрики и прогресс — всё на одном экране",
    image: mockupDashboard
  },
  {
    id: "calories",
    title: "Трекинг питания",
    description: "Быстрый ввод еды с умным поиском и подсчётом макросов",
    image: mockupCalories
  },
  {
    id: "workout",
    title: "Тренировки",
    description: "Фиксируйте упражнения, подходы и отслеживайте время",
    image: mockupWorkout
  },
  {
    id: "rewards",
    title: "Награды",
    description: "Достижения, бейджи и бонусы за выполненные цели",
    image: mockupRewards
  },
  {
    id: "analytics",
    title: "Аналитика",
    description: "Визуализация прогресса за неделю, месяц и всё время",
    image: mockupAnalytics
  }
];

const MockupsSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="py-20 md:py-32 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 gradient-hero opacity-50" />
      
      <div className="container px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            Продукт
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-hero mb-6">
            Посмотрите ToBeDone <span className="text-gradient">в действии</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Интуитивный интерфейс, который делает трекинг приятным
          </p>
        </motion.div>

        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-center max-w-6xl mx-auto">
          {/* Phone mockup */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative flex-shrink-0"
          >
            <div className="relative w-72 md:w-80">
              {/* Phone frame glow */}
              <div className="absolute -inset-4 rounded-[3rem] bg-primary/20 blur-2xl" />
              
              {/* Phone image */}
              <motion.img
                key={activeIndex}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3 }}
                src={mockups[activeIndex].image}
                alt={mockups[activeIndex].title}
                className="relative w-full rounded-[2rem] shadow-elevated"
              />
            </div>
          </motion.div>

          {/* Screen selector */}
          <div className="flex-1 w-full">
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
              {mockups.map((mockup, index) => (
                <motion.button
                  key={mockup.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  onClick={() => setActiveIndex(index)}
                  className={`text-left p-4 rounded-xl border-2 transition-all duration-300 ${
                    activeIndex === index
                      ? 'border-primary bg-primary/5 shadow-glow'
                      : 'border-border/50 bg-card hover:border-primary/30'
                  }`}
                >
                  <h4 className={`font-semibold mb-1 ${
                    activeIndex === index ? 'text-primary' : 'text-hero'
                  }`}>
                    {mockup.title}
                  </h4>
                  <p className="text-xs text-muted-foreground line-clamp-2">
                    {mockup.description}
                  </p>
                </motion.button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MockupsSection;