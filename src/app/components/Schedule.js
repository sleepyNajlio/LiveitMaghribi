'use client'; 
import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaCalendarAlt, FaUserAlt } from 'react-icons/fa';

const Schedule = () => {
  const [activeTab, setActiveTab] = useState('Lundi');

  const scheduleData = [
    { day: 'Lundi', time: '09:00 - 10:00', course: 'Yoga', coach: 'Sarah', id: 1 },
    { day: 'Lundi', time: '10:00 - 11:00', course: 'Pilates', coach: 'Amina', id: 2 },
    { day: 'Lundi', time: '12:00 - 13:00', course: 'Cardio', coach: 'Imène', id: 3 },
    { day: 'Lundi', time: '14:00 - 15:00', course: 'Zumba', coach: 'Khadija', id: 4 },
    { day: 'Lundi', time: '16:00 - 17:00', course: 'HIIT', coach: 'Leila', id: 5 },
    { day: 'Mardi', time: '09:00 - 10:00', course: 'Cardio', coach: 'Sofia', id: 6 },
    { day: 'Mardi', time: '10:00 - 11:00', course: 'Pilates', coach: 'Imène', id: 7 },
    { day: 'Mardi', time: '12:00 - 13:00', course: 'Yoga', coach: 'Sarah', id: 8 },
    { day: 'Mardi', time: '14:00 - 15:00', course: 'Stretching', coach: 'Leila', id: 9 },
    { day: 'Mercredi', time: '09:00 - 10:00', course: 'Zumba', coach: 'Khadija', id: 10 },
    { day: 'Mercredi', time: '11:00 - 12:00', course: 'HIIT', coach: 'Rachida', id: 11 },
    { day: 'Mercredi', time: '13:00 - 14:00', course: 'Boxe', coach: 'Imène', id: 12 },
    { day: 'Jeudi', time: '09:00 - 10:00', course: 'CrossFit', coach: 'Samira', id: 13 },
    { day: 'Jeudi', time: '11:00 - 12:00', course: 'Yoga', coach: 'Sarah', id: 14 },
    { day: 'Jeudi', time: '13:00 - 14:00', course: 'Cardio', coach: 'Sofia', id: 15 },
    { day: 'Vendredi', time: '11:00 - 12:00', course: 'Yoga', coach: 'Sarah', id: 16 },
    { day: 'Vendredi', time: '13:00 - 14:00', course: 'Cardio', coach: 'Sofia', id: 17 }
  ];

  const containerVariants = {
    initial: { opacity: 0 },
    animate: { opacity: 1, transition: { duration: 1 } },
  };

  const itemVariants = {
    initial: { opacity: 0, y: 50 },
    animate: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <section id="schedule" className="bg-black text-white py-16 px-6 lg:px-48">
      <div className="container mx-auto space-y-16">
       
        <motion.h2
          className="text-4xl font-extrabold text-yellow-500 text-center"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Programme des Cours Collectifs
        </motion.h2>

     
        <div className="flex flex-wrap justify-center gap-4 sm:flex-col sm:space-y-4 md:flex-row md:space-x-4">
          {['Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi'].map((day) => (
            <motion.button
              key={day}
              onClick={() => setActiveTab(day)}
              className={`py-2 px-6 text-lg font-bold transition-colors duration-300 w-full sm:w-auto ${
                activeTab === day
                  ? 'bg-yellow-500 text-black rounded-lg'
                  : 'bg-gray-800 text-yellow-500 rounded-lg'
              }`}
              whileHover={{ scale: 1.1 }}
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              {day}
            </motion.button>
          ))}
        </div>

      
        <motion.div
          className="mt-8"
          variants={containerVariants}
          initial="initial"
          animate="animate"
        >
          {scheduleData
            .filter((entry) => entry.day === activeTab)
            .map((entry) => (
              <motion.div
                key={entry.id}
                className="bg-gray-800 p-6 rounded-lg shadow-lg mt-4"
                variants={itemVariants}
                whileHover={{ scale: 1.05 }}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <div className="flex items-center justify-between">
                  <motion.div
                    className="flex items-center space-x-3"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                  >
                    <FaCalendarAlt className="text-yellow-500 text-xl" />
                    <motion.p
                      className="text-lg"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.6, delay: 0.4 }}
                    >
                      {entry.time}
                    </motion.p>
                  </motion.div>
                  <motion.div
                    className="text-lg text-yellow-500"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.6, delay: 0.6 }}
                  >
                    {entry.course}
                  </motion.div>
                  <motion.div
                    className="flex items-center space-x-3"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.6, delay: 0.8 }}
                  >
                    <motion.p
                      className="text-lg"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.6, delay: 1 }}
                    >
                      {entry.coach}
                    </motion.p>
                  </motion.div>
                </div>
              </motion.div>
            ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Schedule;
