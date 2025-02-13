export const drtTopics = {
    id: 'distance-rate-time',
    title: 'Distance, Rate, and Time',
    icon: 'Timer',
    color: 'text-green-500',
    sections: [
      {
        title: 'Basic Distance Formula',
        formula: 'Distance = Rate × Time',
        example: {
          question: 'A car travels at 60 mph for 3 hours. How far does it travel?',
          solution: 'Distance = 60 mph × 3 hours = 180 miles',
          answer: '180 miles'
        },
        tips: [
          'Always check units match before multiplying',
          'Distance is always Rate times Time'
        ]
      },
      {
        title: 'Finding Rate (Speed)',
        formula: 'Rate = Distance ÷ Time',
        example: {
          question: 'A truck covers 240 miles in 4 hours. What is its speed?',
          solution: 'Rate = 240 miles ÷ 4 hours = 60 mph',
          answer: '60 mph'
        },
        tips: [
          'Divide total distance by total time',
          'Make sure to include units in your answer'
        ]
      },
      {
        title: 'Finding Time',
        formula: 'Time = Distance ÷ Rate',
        example: {
          question: 'A plane flies 900 miles at a speed of 300 mph. How long does it take?',
          solution: 'Time = 900 miles ÷ 300 mph = 3 hours',
          answer: '3 hours'
        },
        tips: [
          'Divide total distance by rate',
          'Check if time needs to be converted to different units'
        ]
      },
      {
        title: 'Two Objects Moving Toward Each Other',
        formula: 'Time = Initial Distance Between Them ÷ (Sum of Their Speeds)',
        example: {
          question: 'Two trains 600 miles apart move toward each other at 80 mph and 100 mph. When will they meet?',
          solution: 'Time = 600 ÷ (80 + 100) = 600 ÷ 180 = 3.33 hours',
          answer: '3 hours and 20 minutes'
        },
        tips: [
          'Add the speeds together when objects move toward each other',
          'The total distance covered is the initial distance between them'
        ]
      },
      {
        title: 'Two Objects Moving in Same Direction',
        formula: 'Time to Catch Up = Initial Distance Between Them ÷ (Difference in Their Speeds)',
        example: {
          question: 'A car traveling 60 mph is 120 miles behind another car traveling 50 mph. How long until they meet?',
          solution: 'Time = 120 ÷ (60 - 50) = 120 ÷ 10 = 12 hours',
          answer: '12 hours'
        },
        tips: [
          'Subtract the speeds when objects move in the same direction',
          'The faster object must be catching up to the slower one'
        ]
      }
    ]
  };