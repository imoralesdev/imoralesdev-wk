'use client'

import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { Check, X, RefreshCw, HelpCircle } from 'lucide-react';
import _ from 'lodash';
import vocabularyData from '../data/index';

const AdPlaceholder = ({ position }) => {
  return (
    <div className="w-full my-4 p-2" aria-label={`Advertisement ${position}`}>
      {/* Ad space reserved for future use */}
    </div>
  );
};

const VocabularyQuiz = () => {
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
    showHint: false,
    showWordParts: false
  });

  const [questionsCount, setQuestionsCount] = useState(20);

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
      showHint: false,
      showWordParts: false
    });
  };

  const resetGame = () => {
    const selectedQuestions = _.sampleSize(vocabularyData, questionsCount);
    const shuffledQuestions = _.shuffle(selectedQuestions);
    console.log(shuffledQuestions)
    const firstQuestion = {
      ...shuffledQuestions[0],
      options: _.shuffle([...shuffledQuestions[0].alternates, shuffledQuestions[0].correct])
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
      usedQuestions: new Set([firstQuestion.word]),
      showHint: false,
      showWordParts: false
    });
  };

  const toggleHint = () => {
    setGameState(prev => ({
      ...prev,
      showHint: !prev.showHint
    }));
  };

  const toggleWordParts = () => {
    setGameState(prev => ({
      ...prev,
      showWordParts: !prev.showWordParts
    }));
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
      bestStreak: newBestStreak,
      showWordParts: true // Show word parts after answering
    }));

    setTimeout(() => {
      if (gameState.questionNumber < questionsCount - 1) {
        const nextQuestionIndex = gameState.questionNumber + 1;
        const nextQuestion = gameState.questions[nextQuestionIndex];
        
        setGameState(prev => ({
          ...prev,
          questionNumber: nextQuestionIndex,
          currentQuestion: {
            ...nextQuestion,
            options: _.shuffle([...nextQuestion.alternates, nextQuestion.correct])
          },
          selectedAnswer: null,
          usedQuestions: new Set([...prev.usedQuestions, nextQuestion.word]),
          showHint: false,
          showWordParts: false
        }));
      } else {
        setGameState(prev => ({
          ...prev,
          showResult: true
        }));
      }
    }, 2000); // Increased delay to give time to read word parts
  };

  const handleEndQuiz = () => {
    setGameState(prev => ({
      ...prev,
      showResult: true
    }));
  };

  return (
    <div className="max-w-2xl mx-auto p-4">
      <div className="text-center mb-6">
        <h1 className="text-2xl font-bold mb-2">ASVAB Vocabulary Quiz</h1>
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
              Test your ASVAB vocabulary knowledge! Match each word with its correct synonym.
              Pay attention to prefixes and suffixes to understand word meanings better.
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
            <p className="mb-4 text-sm text-gray-600">
              Total words: {vocabularyData.length}
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
              <p className="mb-4">Words Completed: {gameState.usedQuestions.size}</p>
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
              <h2 className="text-xl font-bold mb-2">{gameState.currentQuestion.word}</h2>
              <p className="text-gray-600 italic mb-4">Spanish: {gameState.currentQuestion.spanish}</p>
              
              <div className="mb-4 flex justify-center gap-2">
                <Button
                  variant="outline"
                  onClick={toggleHint}
                  className="flex items-center gap-2"
                  disabled={gameState.selectedAnswer !== null}
                >
                  <HelpCircle className="h-4 w-4" />
                  {gameState.showHint ? 'Hide Example' : 'Show Example'}
                </Button>
                <Button
                  variant="outline"
                  onClick={toggleWordParts}
                  className="flex items-center gap-2"
                  disabled={gameState.selectedAnswer !== null && !gameState.showWordParts}
                >
                  <HelpCircle className="h-4 w-4" />
                  {gameState.showWordParts ? 'Hide Word Parts' : 'Show Word Parts'}
                </Button>
              </div>

              {gameState.showHint && (
                <div className="bg-blue-50 p-4 rounded-lg mb-4 text-sm">
                  <p className="text-blue-800">{gameState.currentQuestion.example}</p>
                </div>
              )}

              {gameState.showWordParts && (
                <div className="bg-green-50 p-4 rounded-lg mb-4 text-sm">
                  <p className="font-semibold mb-2">Word Parts:</p>
                  <p className="text-green-800 mb-1">Prefix: {gameState.currentQuestion.prefix}</p>
                  <p className="text-green-800 mb-1">Root: {gameState.currentQuestion.root}</p>
                  <p className="text-green-800 mb-1">Suffix: {gameState.currentQuestion.suffix}</p>
                  <div className="mt-2 pt-2 border-t border-green-200">
                    <p className="text-green-800 font-medium">Combined Meaning:</p>
                    <p className="text-green-800">{gameState.currentQuestion.meaning}</p>
                  </div>
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

export default VocabularyQuiz;