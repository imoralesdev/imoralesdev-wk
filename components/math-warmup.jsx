'use client'

import React, { useState } from 'react';
import Link from 'next/link';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { Check, X, RefreshCw, ArrowLeft } from 'lucide-react';
import _ from 'lodash';

// Function to generate random numbers within a range
const getRandomNumber = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

// Function to generate math problems
const generateProblem = (type) => {
  switch (type) {
    case 'addition':
      const num1 = getRandomNumber(10, 99);
      const num2 = getRandomNumber(10, 99);
      return {
        question: `${num1} + ${num2} = ?`,
        correct: num1 + num2,
        type: 'addition',
        alternates: [
          num1 + num2 + getRandomNumber(1, 10),
          num1 + num2 - getRandomNumber(1, 10),
          num1 + num2 + getRandomNumber(-5, 5)
        ]
      };

    case 'subtraction':
      const minuend = getRandomNumber(50, 99);
      const subtrahend = getRandomNumber(10, minuend - 1);
      return {
        question: `${minuend} - ${subtrahend} = ?`,
        correct: minuend - subtrahend,
        type: 'subtraction',
        alternates: [
          minuend - subtrahend + getRandomNumber(1, 10),
          minuend - subtrahend - getRandomNumber(1, 10),
          minuend - subtrahend + getRandomNumber(-5, 5)
        ]
      };

    case 'multiplication':
      const factor1 = getRandomNumber(2, 12);
      const factor2 = getRandomNumber(2, 12);
      return {
        question: `${factor1} × ${factor2} = ?`,
        correct: factor1 * factor2,
        type: 'multiplication',
        alternates: [
          factor1 * factor2 + factor1,
          factor1 * factor2 - factor2,
          factor1 * factor2 + getRandomNumber(-5, 5)
        ]
      };

    case 'division':
      const divisor = getRandomNumber(2, 12);
      const quotient = getRandomNumber(2, 12);
      const dividend = divisor * quotient;
      return {
        question: `${dividend} ÷ ${divisor} = ?`,
        correct: quotient,
        type: 'division',
        alternates: [
          quotient + 1,
          quotient - 1,
          quotient + getRandomNumber(2, 3)
        ]
      };

    case 'square':
      const base = getRandomNumber(2, 12);
      return {
        question: `${base}² = ?`,
        correct: base * base,
        type: 'square',
        alternates: [
          (base + 1) * (base + 1),
          (base - 1) * (base - 1),
          base * base + base
        ]
      };

    case 'squareRoot':
      const square = getRandomNumber(2, 10);
      const squareNum = square * square;
      return {
        question: `√${squareNum} = ?`,
        correct: square,
        type: 'squareRoot',
        alternates: [
          square + 1,
          square - 1,
          square + 2
        ]
      };

    case 'geometry':
      const length = getRandomNumber(5, 15);
      const width = getRandomNumber(5, 15);
      const area = length * width;
      return {
        question: `If a rectangle has length ${length} and width ${width}, what is its area?`,
        correct: area,
        type: 'geometry',
        alternates: [
          area + length,
          area - width,
          area + getRandomNumber(-5, 5)
        ]
      };
  }
};

const MathWarmup = () => {
  const mathTypes = ['addition', 'subtraction', 'multiplication', 'division', 'square', 'squareRoot', 'geometry'];
  
  const [gameState, setGameState] = useState({
    questions: [],
    currentQuestion: null,
    score: 0,
    questionNumber: 0,
    showResult: false,
    selectedAnswer: null,
    gameStarted: false,
    streak: 0,
    bestStreak: 0
  });

  const [questionsCount, setQuestionsCount] = useState(20);

  const generateQuestions = (count) => {
    const questions = [];
    for (let i = 0; i < count; i++) {
      const type = mathTypes[getRandomNumber(0, mathTypes.length - 1)];
      const problem = generateProblem(type);
      questions.push({
        ...problem,
        options: _.shuffle([problem.correct, ...problem.alternates])
      });
    }
    return questions;
  };

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
      bestStreak: 0
    });
  };

  const resetGame = () => {
    const questions = generateQuestions(questionsCount);
    setGameState({
      questions,
      currentQuestion: questions[0],
      score: 0,
      questionNumber: 0,
      showResult: false,
      selectedAnswer: null,
      gameStarted: true,
      streak: 0,
      bestStreak: 0
    });
  };

  const handleAnswer = (answer) => {
    if (gameState.selectedAnswer !== null) return;
    
    const correct = answer === gameState.currentQuestion.correct;
    const newStreak = correct ? gameState.streak + 1 : 0;
    const newBestStreak = Math.max(gameState.bestStreak, newStreak);
    
    setGameState(prev => ({
      ...prev,
      selectedAnswer: answer,
      score: correct ? prev.score + 10 : prev.score,
      streak: newStreak,
      bestStreak: newBestStreak
    }));

    setTimeout(() => {
      if (gameState.questionNumber < questionsCount - 1) {
        setGameState(prev => ({
          ...prev,
          questionNumber: prev.questionNumber + 1,
          currentQuestion: prev.questions[prev.questionNumber + 1],
          selectedAnswer: null
        }));
      } else {
        setGameState(prev => ({
          ...prev,
          showResult: true
        }));
      }
    }, 1500);
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
        <h1 className="text-2xl md:text-3xl font-bold text-center md:text-left mt-10">Math Mental Warmup</h1>
        {gameState.gameStarted && (
          <div className="flex justify-center gap-6 mb-4">
            <div className="text-lg">Score: {gameState.score}</div>
            <div className="text-lg">Current Streak: {gameState.streak}</div>
            <div className="text-lg">Best Streak: {gameState.bestStreak}</div>
          </div>
        )}
      </div>

      {!gameState.gameStarted ? (
        <Card className="text-center p-6">
          <CardContent>
            <p className="mb-4">
              Practice your mental math skills with these quick exercises!
              Includes addition, subtraction, multiplication, division, squares, and basic geometry.
            </p>
            <div className="mb-6">
              <p className="text-sm text-gray-600 mb-2">Select number of questions:</p>
              <select 
                className="block mx-auto px-4 py-2 border rounded-md shadow-sm focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                value={questionsCount}
                onChange={(e) => setQuestionsCount(Number(e.target.value))}
              >
                <option value={20}>20 Questions</option>
                <option value={40}>40 Questions</option>
                <option value={60}>60 Questions</option>
              </select>
            </div>
            <Button onClick={resetGame} className="mt-4">
              Start Practice
            </Button>
          </CardContent>
        </Card>
      ) : gameState.showResult ? (
        <Card className="text-center p-6">
          <CardContent>
            <h2 className="text-xl font-bold mb-4">Practice Complete!</h2>
            <p className="mb-2">Final Score: {gameState.score}</p>
            <p className="mb-2">Best Streak: {gameState.bestStreak}</p>
            <Button onClick={resetToInitial} className="mt-4">
              Practice Again
            </Button>
          </CardContent>
        </Card>
      ) : (
        <Card className="mb-4">
          <CardHeader>
            <CardTitle className="text-center">
              Question {gameState.questionNumber + 1} of {questionsCount}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-center mb-6">
              <h2 className="text-2xl font-bold mb-6">{gameState.currentQuestion.question}</h2>
            </div>
            
            <div className="grid grid-cols-1 gap-3">
              {gameState.currentQuestion.options.map((option, index) => (
                <Button
                  key={index}
                  onClick={() => handleAnswer(option)}
                  className={`p-4 text-lg ${
                    gameState.selectedAnswer === option
                      ? option === gameState.currentQuestion.correct
                        ? 'bg-green-500 hover:bg-green-600'
                        : 'bg-red-500 hover:bg-red-600'
                      : gameState.selectedAnswer && option === gameState.currentQuestion.correct
                      ? 'bg-green-500 hover:bg-green-600'
                      : ''
                  }`}
                  disabled={gameState.selectedAnswer !== null}
                >
                  {option}
                  {gameState.selectedAnswer === option && (
                    <span className="ml-2">
                      {option === gameState.currentQuestion.correct ? (
                        <Check className="h-5 w-4" />
                      ) : (
                        <X className="h-5 w-4" />
                      )}
                    </span>
                  )}
                </Button>
              ))}
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  );
};

export default MathWarmup;