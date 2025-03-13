'use client'

import React, { useState } from 'react';
import Link from 'next/link';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Check, X, RefreshCw, HelpCircle, ArrowLeft, BookOpen } from 'lucide-react';
import _ from 'lodash';
import { prefixGroups } from '../data/prefix-drills';

const AdPlaceholder = ({ position }) => {
  return (
    <div className="w-full my-4 p-2" aria-label={`Advertisement ${position}`}>
      {/* Ad space reserved for future use */}
    </div>
  );
};

const PrefixQuiz = () => {
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
    showHint: false
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
      showHint: false
    });
  };

  const resetGame = () => {
    // Get all prefix/suffix questions from the first group
    const allPrefixes = prefixGroups[0].conversions;
    
    // Select random questions based on questionsCount
    const selectedQuestions = _.sampleSize(allPrefixes, questionsCount);
    const shuffledQuestions = _.shuffle(selectedQuestions);
    
    const firstQuestion = {
      ...shuffledQuestions[0],
      // No need to shuffle options as they are already in the data
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
      usedQuestions: new Set([firstQuestion.question]),
      showHint: false
    });
  };

  const toggleHint = () => {
    setGameState(prev => ({
      ...prev,
      showHint: !prev.showHint
    }));
  };

  const handleAnswer = (answer) => {
    if (gameState.selectedAnswer !== null) return;
    
    const correct = answer === gameState.currentQuestion.answer;
    const newStreak = correct ? gameState.streak + 1 : 0;
    const newBestStreak = Math.max(gameState.bestStreak, newStreak);
    
    setGameState(prev => ({
      ...prev,
      selectedAnswer: answer,
      score: correct ? prev.score + 10 : prev.score,
      streak: newStreak,
      bestStreak: newBestStreak,
      showHint: true // Show hint/examples after answering
    }));

    setTimeout(() => {
      if (gameState.questionNumber < questionsCount - 1) {
        const nextQuestionIndex = gameState.questionNumber + 1;
        const nextQuestion = gameState.questions[nextQuestionIndex];
        
        setGameState(prev => ({
          ...prev,
          questionNumber: nextQuestionIndex,
          currentQuestion: nextQuestion,
          selectedAnswer: null,
          usedQuestions: new Set([...prev.usedQuestions, nextQuestion.question]),
          showHint: false
        }));
      } else {
        setGameState(prev => ({
          ...prev,
          showResult: true
        }));
      }
    }, 2000);
  };

  const handleEndQuiz = () => {
    setGameState(prev => ({
      ...prev,
      showResult: true
    }));
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
        <h1 className="text-2xl md:text-3xl font-bold text-center md:text-left mt-10">ASVAB Prefixes & Suffixes Quiz</h1>
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
              Test your knowledge of prefixes and suffixes! Understanding these word parts will help you
              decode the meaning of unfamiliar words on the ASVAB test.
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
              Total prefixes & suffixes: {prefixGroups[0].conversions.length}
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
              <p className="mb-2">Final Score: {gameState.score}</p>
              <p className="mb-2">Best Streak: {gameState.bestStreak}</p>
              <p className="mb-4">Prefixes/Suffixes Completed: {gameState.usedQuestions.size}</p>
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
              
              {gameState.showHint && gameState.selectedAnswer && (
                <div className="bg-blue-50 p-4 rounded-lg mb-4 text-sm">
                  <p className="text-blue-800 font-medium mb-2">
                    Correct Answer: <span className="font-bold">{gameState.currentQuestion.answer}</span>
                  </p>
                  
                  {gameState.currentQuestion.tip && (
                    <p className="text-blue-700 mb-2">{gameState.currentQuestion.tip}</p>
                  )}
                  
                  {gameState.currentQuestion.examples && gameState.currentQuestion.examples.length > 0 && (
                    <div>
                      <p className="font-medium text-blue-800">Examples:</p>
                      <ul className="list-disc pl-5">
                        {gameState.currentQuestion.examples.map((example, idx) => (
                          <li key={idx} className="text-blue-700">{example}</li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              )}
            </div>
            
            <div className="grid grid-cols-1 gap-3">
              {gameState.currentQuestion.options.map((option, index) => (
                <Button
                  key={index}
                  onClick={() => handleAnswer(option)}
                  className={`p-4 text-lg ${
                    gameState.selectedAnswer === option
                      ? option === gameState.currentQuestion.answer
                        ? 'bg-green-500 hover:bg-green-600'
                        : 'bg-red-500 hover:bg-red-600'
                      : gameState.selectedAnswer && option === gameState.currentQuestion.answer
                      ? 'bg-green-500 hover:bg-green-600'
                      : ''
                  }`}
                  disabled={gameState.selectedAnswer !== null}
                >
                  {option}
                  {gameState.selectedAnswer === option && (
                    <span className="ml-2">
                      {option === gameState.currentQuestion.answer ? (
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

export default PrefixQuiz;