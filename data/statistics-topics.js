export const statisticsTopics = {
    id: 'statistics',
    title: 'Basic Statistics',
    icon: 'BarChart3',
    color: 'text-yellow-500',
    sections: [
      {
        title: 'Mean (Average)',
        formula: 'Mean = (Sum of all values) ÷ (Number of values)',
        example: {
          question: 'Find the mean of: 85, 90, 75, 80, 100',
          solution: 'Mean = (85 + 90 + 75 + 80 + 100) ÷ 5 = 430 ÷ 5 = 86',
          answer: '86'
        },
        tips: [
          'Add all numbers first',
          'Divide by how many numbers there are',
          'Can include decimal points'
        ]
      },
      {
        title: 'Median (Middle Value)',
        formula: 'Order numbers from least to greatest.\nIf odd count: middle number\nIf even count: average of two middle numbers',
        example: {
          question: 'Find the median of: 15, 10, 20, 25, 30',
          solution: 'Order: 10, 15, 20, 25, 30\nMiddle number is 20',
          answer: '20'
        },
        tips: [
          'Always order numbers first',
          'For even count, average middle two',
          'Position is (n+1) ÷ 2'
        ]
      },
      {
        title: 'Mode (Most Frequent)',
        formula: 'Count frequency of each value.\nMode is value that appears most often',
        example: {
          question: 'Find the mode of: 4, 5, 6, 4, 7, 8, 4',
          solution: '4 appears three times\n5, 6, 7, 8 appear once each',
          answer: '4'
        },
        tips: [
          'Count how often each number appears',
          'Can have more than one mode',
          'Some data may have no mode'
        ]
      },
      {
        title: 'Range',
        formula: 'Range = Highest value - Lowest value',
        example: {
          question: 'Find the range of: 25, 40, 35, 20, 15',
          solution: 'Highest = 40, Lowest = 15\nRange = 40 - 15 = 25',
          answer: '25'
        },
        tips: [
          'Find highest and lowest values',
          'Subtract lowest from highest',
          'Range shows spread of data'
        ]
      },
      {
        title: 'Weighted Average',
        formula: 'Weighted Average = (Sum of value × weight) ÷ (Sum of weights)',
        example: {
          question: 'Find weighted average: Math(90, weight 4), English(85, weight 3), Science(80, weight 2)',
          solution: '(90×4 + 85×3 + 80×2) ÷ (4+3+2) = (360+255+160) ÷ 9 = 775 ÷ 9 = 86.11',
          answer: '86.11'
        },
        tips: [
          'Multiply each value by its weight',
          'Add all weighted values',
          'Divide by sum of weights'
        ]
      }
    ]
  };