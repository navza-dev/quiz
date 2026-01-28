
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import * as LucideIcons from 'lucide-react';
import { QUIZ_DATA, CAREER_RESULTS } from './constants/QuizData';

const App = () => {
  const [step, setStep] = useState('home'); // home, quiz, result
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [scores, setScores] = useState({ technical: 0, creative: 0, people: 0, logistics: 0 });
  const [result, setResult] = useState(null);

  const startQuiz = () => {
    setStep('quiz');
    setCurrentQuestion(0);
    setScores({ technical: 0, creative: 0, people: 0, logistics: 0 });
  };

  const handleAnswer = (type) => {
    const newScores = { ...scores, [type]: scores[type] + 1 };
    setScores(newScores);

    if (currentQuestion < QUIZ_DATA.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      calculateResult(newScores);
    }
  };

  const calculateResult = (finalScores) => {
    const winner = Object.keys(finalScores).reduce((a, b) => 
      finalScores[a] >= finalScores[b] ? a : b
    );
    setResult(CAREER_RESULTS[winner]);
    setStep('result');
  };

  const DynamicIcon = ({ name, ...props }) => {
    const Icon = LucideIcons[name];
    return Icon ? <Icon {...props} /> : null;
  };

  return (
    <div className="app-container">
      <AnimatePresence mode="wait">
        {step === 'home' && (
          <motion.div
            key="home"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="glass p-8 text-center max-w-2xl mx-auto"
            style={{ padding: '60px' }}
          >
            <LucideIcons.Sparkles className="mx-auto mb-6 text-indigo-400" size={64} />
            <h1 className="text-5xl font-bold mb-6">Discover Your <span className="gradient-text">Future Path</span></h1>
            <p className="text-slate-400 text-lg mb-8 leading-relaxed">
              Take our interactive quiz to find the career that matches your personality, skills, and passion.
            </p>
            <button onClick={startQuiz} className="primary-btn">
              Start Discovery
            </button>
          </motion.div>
        )}

        {step === 'quiz' && (
          <motion.div
            key="quiz"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            className="glass p-8 max-w-xl mx-auto"
            style={{ padding: '40px' }}
          >
            <div className="progress-container">
              <div 
                className="progress-bar" 
                style={{ width: `${((currentQuestion + 1) / QUIZ_DATA.length) * 100}%` }}
              ></div>
            </div>
            
            <span className="text-indigo-400 font-medium mb-2 block">
              Question {currentQuestion + 1} of {QUIZ_DATA.length}
            </span>
            <h2 className="text-2xl font-bold mb-8">{QUIZ_DATA[currentQuestion].question}</h2>
            
            <div className="options-list">
              {QUIZ_DATA[currentQuestion].options.map((option, idx) => (
                <button
                  key={idx}
                  onClick={() => handleAnswer(option.type)}
                  className="option-btn"
                >
                  {option.text}
                </button>
              ))}
            </div>
          </motion.div>
        )}

        {step === 'result' && (
          <motion.div
            key="result"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="glass p-8 text-center max-w-2xl mx-auto"
            style={{ padding: '60px' }}
          >
            <div className="bg-indigo-500/20 w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-8">
              <DynamicIcon name={result.icon} size={48} className="text-indigo-400" />
            </div>
            <h2 className="text-slate-400 uppercase tracking-widest text-sm font-bold mb-2">Your Career Identity</h2>
            <h1 className="text-4xl font-bold mb-6 gradient-text">{result.title}</h1>
            <p className="text-slate-300 text-lg mb-8 leading-relaxed">
              {result.description}
            </p>
            
            <div className="grid grid-cols-2 gap-4 mb-8 text-left">
              {result.careers.map((c, i) => (
                <div key={i} className="bg-white/5 p-3 rounded-lg border border-white/10 flex items-center gap-2">
                  <LucideIcons.CheckCircle2 size={16} className="text-indigo-400" />
                  <span className="text-sm">{c}</span>
                </div>
              ))}
            </div>

            <button onClick={() => setStep('home')} className="primary-btn">
              Retake Quiz
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default App;
