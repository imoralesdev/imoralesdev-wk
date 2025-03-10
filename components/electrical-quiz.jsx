'use client'

import React, { useState } from 'react';
import Link from 'next/link';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Check, X, RefreshCw, HelpCircle, ArrowLeft } from 'lucide-react';
import _ from 'lodash';
import electricalData from '../data/electrical-questions';

const AdPlaceholder = ({ position }) => {
  return (
    <div className="w-full my-4 p-2" aria-label={`Advertisement ${position}`}>
      {/* Ad space reserved for future use */}
    </div>
  );
};

const ElectricalQuiz = () => {
  const [gameState, setGameState] = useState({
    questions: [],
    currentQuestion: null,
    score: 0,
    questionNumber: 0,
    showResult: false,
    selectedAnswer: null,
    gameStarted: false,
    streak: 0,
    bestStreak: 0,
    usedQuestions: new Set(),
    showExplanation: false
  });

  const [questionsCount, setQuestionsCount] = useState(10);

  const resetToInitial = () => {
    setGameState({
      questions: [],
      currentQuestion: null,
      score: 0,
      questionNumber: 0,
      showResult: false,
      selectedAnswer: null,
      gameStarted: false,
      streak: 0,
      bestStreak: 0,
      usedQuestions: new Set(),
      showExplanation: false
    });
  };

  const resetGame = () => {
    const selectedQuestions = _.sampleSize(electricalData.questions, questionsCount);
    const shuffledQuestions = _.shuffle(selectedQuestions);
    
    // For the first question, shuffle the options
    const firstQuestion = {
      ...shuffledQuestions[0],
      // Create a shuffled copy of the options array
      options: _.shuffle([...shuffledQuestions[0].options])
    };
    
    setGameState({
      questions: shuffledQuestions,
      currentQuestion: firstQuestion,
      score: 0,
      questionNumber: 0,
      showResult: false,
      selectedAnswer: null,
      gameStarted: true,
      streak: 0,
      bestStreak: 0,
      usedQuestions: new Set([shuffledQuestions[0].id]),
      showExplanation: false
    });
  };

  const toggleExplanation = () => {
    setGameState(prev => ({
      ...prev,
      showExplanation: !prev.showExplanation
    }));
  };

  const handleAnswer = (answer) => {
    if (gameState.selectedAnswer !== null) return;
    
    // Check if the selected answer matches the correct answer string
    const correct = answer === gameState.currentQuestion.correct_answer;
    const newStreak = correct ? gameState.streak + 1 : 0;
    const newBestStreak = Math.max(gameState.bestStreak, newStreak);
    
    setGameState(prev => ({
      ...prev,
      selectedAnswer: answer,
      score: correct ? prev.score + 10 : prev.score,
      streak: newStreak,
      bestStreak: newBestStreak,
      showExplanation: false // Changed to false to hide explanation after answering
    }));

    setTimeout(() => {
      if (gameState.questionNumber < questionsCount - 1) {
        const nextQuestionIndex = gameState.questionNumber + 1;
        const nextQuestion = gameState.questions[nextQuestionIndex];
        
        // Shuffle the options for the next question
        const nextQuestionWithShuffledOptions = {
          ...nextQuestion,
          options: _.shuffle([...nextQuestion.options])
        };
        
        setGameState(prev => ({
          ...prev,
          questionNumber: nextQuestionIndex,
          currentQuestion: nextQuestionWithShuffledOptions,
          selectedAnswer: null,
          usedQuestions: new Set([...prev.usedQuestions, nextQuestion.id]),
          showExplanation: false
        }));
      } else {
        setGameState(prev => ({
          ...prev,
          showResult: true
        }));
      }
    }, 3000); // Increased delay to give time to read explanation
  };

  const handleEndQuiz = () => {
    setGameState(prev => ({
      ...prev,
      showResult: true
    }));
  };

  const calculatePercentage = () => {
    if (questionsCount === 0) return 0;
    return Math.round((gameState.score / (questionsCount * 10)) * 100);
  };

  return (
    <div className="max-w-2xl mx-auto p-4">
      <Link href="/" className="mb-4 md:mb-0">
          <Button variant="outline" className="flex items-center gap-2 text-sm md:text-base">
            <ArrowLeft className="h-4 w-4" />
            Back to Home
          </Button>
        </Link>
      <div className="text-center mb-6">
        <h1 className="text-2xl md:text-3xl font-bold text-center md:text-left mt-10">Electrical Concepts Quiz</h1>
        {gameState.gameStarted && (
          <div className="flex justify-center gap-6 mb-4">
            <div className="text-lg">Score: {gameState.score}</div>
            <div className="text-lg">Current Streak: {gameState.streak}</div>
            <div className="text-lg">Best Streak: {gameState.bestStreak}</div>
          </div>
        )}
      </div>

      <AdPlaceholder position="top" />

      {!gameState.gameStarted ? (
        <Card className="text-center p-6">
          <CardContent>
            <p className="mb-4">
              Test your knowledge of electrical concepts and principles! Choose the correct answer for each question
              to improve your understanding of electricity and electronics.
            </p>
            <div className="mb-6">
              <p className="text-sm text-gray-600 mb-2">Select number of questions:</p>
              <select 
                className="block mx-auto px-4 py-2 border rounded-md shadow-sm focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                value={questionsCount}
                onChange={(e) => setQuestionsCount(Number(e.target.value))}
              >
                <option value={10}>10 Questions</option>
                <option value={20}>20 Questions</option>
                <option value={30}>30 Questions</option>
              </select>
            </div>
            <p className="mb-4 text-sm text-gray-600">
              Total questions: {electricalData.questions.length}
              <br />
              Questions per quiz: {questionsCount}
            </p>
            <Button onClick={resetGame} className="mt-4">
              Start Quiz
            </Button>
          </CardContent>
        </Card>
      ) : gameState.showResult ? (
        <>
          <AdPlaceholder position="middle" />
          
          <Card className="text-center p-6">
            <CardContent>
              <h2 className="text-xl font-bold mb-4">Quiz Complete!</h2>
              <p className="mb-2">Final Score: {gameState.score} points</p>
              <p className="mb-2">Percentage: {calculatePercentage()}%</p>
              <p className="mb-2">Best Streak: {gameState.bestStreak}</p>
              <p className="mb-4">Questions Completed: {gameState.usedQuestions.size}</p>
              <Button onClick={resetToInitial} className="mt-4">
                Play Again
              </Button>
            </CardContent>
          </Card>
        </>
      ) : (
        <Card className="mb-4">
          <CardHeader>
            <CardTitle className="text-center">
              Question {gameState.questionNumber + 1} of {questionsCount}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-center mb-6">
              <h2 className="text-xl font-bold mb-4">{gameState.currentQuestion.question}</h2>
              
              {!gameState.showExplanation && gameState.selectedAnswer === null && (
                <div className="mb-4 flex justify-center">
                  <Button
                    variant="outline"
                    onClick={toggleExplanation}
                    className="flex items-center gap-2"
                    disabled={gameState.selectedAnswer !== null}
                  >
                    <HelpCircle className="h-4 w-4" />
                    Show Hint
                  </Button>
                </div>
              )}

              {gameState.showExplanation && gameState.selectedAnswer === null && (
                <div className="bg-blue-50 p-4 rounded-lg mb-4 text-sm">
                  <p className="text-blue-800 mb-2 font-medium">Explanation:</p>
                  <p className="text-blue-800">{gameState.currentQuestion.explanation}</p>
                </div>
              )}
            </div>
            
            <div className="grid grid-cols-1 gap-3">
              {gameState.currentQuestion.options.map((option, index) => {
                const isCorrect = option === gameState.currentQuestion.correct_answer;
                
                return (
                  <Button
                    key={index}
                    onClick={() => handleAnswer(option)}
                    className={`p-4 text-lg justify-start ${
                      gameState.selectedAnswer === option
                        ? isCorrect
                          ? 'bg-green-500 hover:bg-green-600'
                          : 'bg-red-500 hover:bg-red-600'
                        : gameState.selectedAnswer && isCorrect
                        ? 'bg-green-500 hover:bg-green-600'
                        : ''
                    }`}
                    disabled={gameState.selectedAnswer !== null}
                  >
                    {option}
                    {gameState.selectedAnswer === option && (
                      <span className="ml-2">
                        {isCorrect ? (
                          <Check className="h-5 w-4" />
                        ) : (
                          <X className="h-5 w-4" />
                        )}
                      </span>
                    )}
                  </Button>
                );
              })}
            </div>
          </CardContent>
        </Card>
      )}

      <AdPlaceholder position="bottom" />

      {gameState.gameStarted && !gameState.showResult && (
        <div className="flex justify-center mt-4">
          <Button
            variant="outline"
            onClick={handleEndQuiz}
            className="flex items-center gap-2"
          >
            <RefreshCw className="h-4 w-4" />
            End Quiz
          </Button>
        </div>
      )}
    </div>
  );
};

export default ElectricalQuiz;