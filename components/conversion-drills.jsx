'use client'

import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Check, X, Lightbulb, ArrowLeft, RefreshCw } from 'lucide-react';
import Link from 'next/link';

const ConversionDrills = ({ conversionGroups }) => {
  const [selectedGroup, setSelectedGroup] = useState(null);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [showAnswer, setShowAnswer] = useState(false);
  const [showTip, setShowTip] = useState(false);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [correctAnswers, setCorrectAnswers] = useState(0);
  const [totalAttempts, setTotalAttempts] = useState(0);

  const handleGroupSelect = (index) => {
    setSelectedGroup(index);
    setCurrentQuestionIndex(0);
    setShowAnswer(false);
    setShowTip(false);
    setSelectedAnswer(null);
  };

  const handleAnswer = (answer) => {
    if (selectedAnswer !== null) return;
    
    setSelectedAnswer(answer);
    setTotalAttempts(prev => prev + 1);
    if (answer === getCurrentQuestion().answer) {
      setCorrectAnswers(prev => prev + 1);
    }
  };

  const getCurrentQuestion = () => {
    return conversionGroups[selectedGroup].conversions[currentQuestionIndex];
  };

  const nextQuestion = () => {
    if (currentQuestionIndex < conversionGroups[selectedGroup].conversions.length - 1) {
      setCurrentQuestionIndex(prev => prev + 1);
    } else {
      setCurrentQuestionIndex(0);
    }
    setSelectedAnswer(null);
    setShowAnswer(false);
    setShowTip(false);
  };

  const resetStats = () => {
    setCorrectAnswers(0);
    setTotalAttempts(0);
  };

  return (
    <div className="max-w-3xl mx-auto p-4">
      <div className="mb-6">
        <Link href="/">
          <Button variant="outline" className="flex items-center gap-2">
            <ArrowLeft className="h-4 w-4" />
            Back to Home
          </Button>
        </Link>
      </div>

      <div className="mb-6">
        <h1 className="text-2xl font-bold mb-4">Unit Conversion Practice</h1>
        {selectedGroup === null ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {conversionGroups.map((group, index) => (
              <Button
                key={index}
                onClick={() => handleGroupSelect(index)}
                className="h-24 text-lg"
              >
                {group.title}
              </Button>
            ))}
          </div>
        ) : (
          <Card>
            <CardHeader>
              <div className="flex justify-between items-center">
                <CardTitle>{conversionGroups[selectedGroup].title}</CardTitle>
                <Button
                  variant="outline"
                  onClick={() => setSelectedGroup(null)}
                >
                  Change Category
                </Button>
              </div>
            </CardHeader>
            <CardContent>
              <div className="mb-6">
                <p className="text-lg font-medium mb-4">{getCurrentQuestion().question}</p>
                <div className="grid grid-cols-2 gap-3">
                  {getCurrentQuestion().options.map((option, index) => (
                    <Button
                      key={index}
                      onClick={() => handleAnswer(option)}
                      className={`p-4 ${
                        selectedAnswer === option
                          ? option === getCurrentQuestion().answer
                            ? 'bg-green-500 hover:bg-green-600'
                            : 'bg-red-500 hover:bg-red-600'
                          : selectedAnswer && option === getCurrentQuestion().answer
                          ? 'bg-green-500 hover:bg-green-600'
                          : ''
                      }`}
                      disabled={selectedAnswer !== null}
                    >
                      {option}
                    </Button>
                  ))}
                </div>
              </div>

              <div className="flex gap-2 mb-4">
                <Button
                  variant="outline"
                  onClick={() => setShowTip(!showTip)}
                  className="flex items-center gap-2"
                >
                  <Lightbulb className="h-4 w-4" />
                  {showTip ? 'Hide Tip' : 'Show Tip'}
                </Button>
                {selectedAnswer && (
                  <Button onClick={nextQuestion}>Next Question</Button>
                )}
              </div>

              {showTip && (
                <div className="bg-blue-50 p-4 rounded-lg mb-4">
                  <p className="text-blue-800">{getCurrentQuestion().tip}</p>
                </div>
              )}

              <div className="flex justify-between items-center text-sm text-gray-600">
                <p>Question {currentQuestionIndex + 1} of {conversionGroups[selectedGroup].conversions.length}</p>
                <div className="flex items-center gap-4">
                  <p>Score: {totalAttempts > 0 ? Math.round((correctAnswers/totalAttempts) * 100) : 0}%</p>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={resetStats}
                    className="flex items-center gap-1"
                  >
                    <RefreshCw className="h-3 w-3" />
                    Reset
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  );
};

export default ConversionDrills;