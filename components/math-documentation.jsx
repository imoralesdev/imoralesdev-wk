'use client'

import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { 
  Percent, Timer, Calculator, Square, 
  BarChart3, Dice5, Scale, ChevronDown, 
  ChevronRight, BookOpen, ArrowLeft, ArrowsUpDown 
} from 'lucide-react';
import Link from 'next/link';
import { 
  percentageTopics, drtTopics, financialTopics, 
  geometryTopics, statisticsTopics, probabilityTopics, 
  proportionTopics, unitConversionTopics
} from '../data/math-topics';

const getIcon = () => {
  switch (topic.icon) {
    case 'Percent':
      return <Percent className="h-5 w-5 md:h-6 md:w-6" />;
    case 'Timer':
      return <Timer className="h-5 w-5 md:h-6 md:w-6" />;
    case 'Calculator':
      return <Calculator className="h-5 w-5 md:h-6 md:w-6" />;
    case 'Square':
      return <Square className="h-5 w-5 md:h-6 md:w-6" />;
    case 'BarChart3':
      return <BarChart3 className="h-5 w-5 md:h-6 md:w-6" />;
    case 'Dice5':
      return <Dice5 className="h-5 w-5 md:h-6 md:w-6" />;
    case 'Scale':
      return <Scale className="h-5 w-5 md:h-6 md:w-6" />;
    case 'ArrowsUpDown':
      return <ArrowsUpDown className="h-5 w-5 md:h-6 md:w-6" />;
    default:
      return <BookOpen className="h-5 w-5 md:h-6 md:w-6" />;
  }
};

const FormulaDisplay = ({ formula }) => {
  return (
    <div className="font-mono bg-gray-50 p-3 rounded-lg overflow-x-auto">
      {formula.split('\n').map((line, index) => (
        <div key={index} className="flex items-center space-x-2 my-1">
          <span className="text-gray-800 whitespace-pre font-medium">
            {line}
          </span>
        </div>
      ))}
    </div>
  );
};

const TopicSection = ({ section }) => {
  const [isOpen, setIsOpen] = useState(false);

  const formatFormula = (formula) => {
    // Replace text operators with mathematical symbols
    return formula
      .replace(/×/g, '·')  // multiplication dot
      .replace(/->/g, '→') // arrow
      .replace(/≈/g, '≅')  // approximately equal
      .replace(/=/g, '＝')  // equal sign
      .replace(/\*/g, '×') // multiplication
      .replace(/square/g, '²')  // squared
      .replace(/cubic/g, '³');  // cubed
  };

  return (
    <div className="mb-4 w-full">
      <Button
        variant="outline"
        className="w-full flex justify-between items-center px-3 py-2 text-sm md:text-base"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="text-left my-10 inline-block">{section.title}</span>
        {isOpen ? (
          <ChevronDown className="h-4 w-4 flex-shrink-0 ml-2" />
        ) : (
          <ChevronRight className="h-4 w-4 flex-shrink-0 ml-2" />
        )}
      </Button>
      
      {isOpen && (
        <div className="mt-2 p-3 md:p-4 bg-white rounded-lg shadow-sm">
          {section.formula && (
            <div className="mb-3">
              <p className="font-semibold text-gray-700 text-sm md:text-base">Formula:</p>
              <FormulaDisplay formula={section.formula} />
            </div>
          )}
          
          {section.example && (
            <div className="mb-3">
              <p className="font-semibold text-gray-700 text-sm md:text-base">Example:</p>
              <div className="bg-gray-50 p-2 md:p-3 rounded mt-1">
                <p className="mb-2 text-sm md:text-base">{section.example.question}</p>
                <FormulaDisplay formula={section.formula} />
                <p className="font-bold text-gray-800 text-sm md:text-base">Answer: {section.example.answer}</p>
              </div>
            </div>
          )}

          {section.tips && (
            <div>
              <p className="font-semibold text-gray-700 text-sm md:text-base">Tips:</p>
              <ul className="list-disc list-inside mt-1 text-gray-600 text-sm md:text-base">
                {section.tips.map((tip, index) => (
                  <li key={index} className="ml-2 mb-1">{tip}</li>
                ))}
              </ul>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

const Topic = ({ topic }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  
  const getIcon = () => {
    switch (topic.icon) {
      case 'Percent': return <Percent className="h-5 w-5 md:h-6 md:w-6" />;
      case 'Timer': return <Timer className="h-5 w-5 md:h-6 md:w-6" />;
      case 'Calculator': return <Calculator className="h-5 w-5 md:h-6 md:w-6" />;
      case 'Square': return <Square className="h-5 w-5 md:h-6 md:w-6" />;
      case 'BarChart3': return <BarChart3 className="h-5 w-5 md:h-6 md:w-6" />;
      case 'Dice5': return <Dice5 className="h-5 w-5 md:h-6 md:w-6" />;
      case 'Scale': return <Scale className="h-5 w-5 md:h-6 md:w-6" />;
      default: return <BookOpen className="h-5 w-5 md:h-6 md:w-6" />;
    }
  };

  return (
    <Card className="mb-4 md:mb-6 hover:shadow-md transition-shadow w-full">
      <CardHeader 
        className="cursor-pointer py-3 md:py-4"
        onClick={() => setIsExpanded(!isExpanded)}
      >
        <CardTitle className="flex items-center justify-between text-base md:text-lg">
          <div className="flex items-center gap-2">
            <div className={topic.color}>{getIcon()}</div>
            <span className="text-sm md:text-base">{topic.title}</span>
          </div>
          {isExpanded ? (
            <ChevronDown className="h-4 w-4 flex-shrink-0" />
          ) : (
            <ChevronRight className="h-4 w-4 flex-shrink-0" />
          )}
        </CardTitle>
      </CardHeader>
      {isExpanded && (
        <CardContent className="pt-0">
          <div className="space-y-3 md:space-y-4">
            {topic.sections.map((section, index) => (
              <TopicSection key={index} section={section} />
            ))}
          </div>
        </CardContent>
      )}
    </Card>
  );
};

const MathDocumentation = () => {
  const topics = [
    percentageTopics,
    drtTopics,
    financialTopics,
    geometryTopics,
    statisticsTopics,
    probabilityTopics,
    proportionTopics,
    unitConversionTopics
  ];

  return (
    <div className="w-full max-w-4xl mx-auto px-4 py-6">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6 md:mb-8">
        <Link href="/" className="mb-4 md:mb-0">
          <Button variant="outline" className="flex items-center gap-2 text-sm md:text-base">
            <ArrowLeft className="h-4 w-4" />
            Back to Home
          </Button>
        </Link>
        <h1 className="text-2xl md:text-3xl font-bold text-center md:text-left">
          ASVAB Math Guide
        </h1>
      </div>
      
      <div className="space-y-4 md:space-y-6">
        {topics.map(topic => (
          <Topic key={topic.id} topic={topic} />
        ))}
      </div>
    </div>
  );
};

export default MathDocumentation;