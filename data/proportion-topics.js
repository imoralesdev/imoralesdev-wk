export const proportionTopics = {
    id: 'proportion',
    title: 'Proportions and Ratios',
    icon: 'Scale',
    color: 'text-orange-500',
    sections: [
      {
        title: 'Basic Proportions',
        formula: 'a/b = c/d\nCross multiply: a × d = b × c',
        example: {
          question: 'If 3/4 = x/8, what is x?',
          solution: '3/4 = x/8\n3 × 8 = 4 × x\n24 = 4x\nx = 6',
          answer: '6'
        },
        tips: [
          'Cross multiply to solve',
          'Keep units consistent',
          'Check if answer makes sense'
        ]
      },
      {
        title: 'Direct Proportion',
        formula: 'y = kx, where k is constant\ny₁/x₁ = y₂/x₂',
        example: {
          question: 'If 2 cups flour makes 6 cookies, how many cups for 15 cookies?',
          solution: '2/6 = x/15\n2 × 15 = 6x\n30 = 6x\nx = 5',
          answer: '5 cups'
        },
        tips: [
          'As one increases, other increases',
          'Ratios remain equal',
          'Can use cross multiplication'
        ]
      },
      {
        title: 'Inverse Proportion',
        formula: 'y = k/x, where k is constant\ny₁ × x₁ = y₂ × x₂',
        example: {
          question: 'If 4 workers take 12 hours, how long for 6 workers?',
          solution: '4 × 12 = 6 × x\n48 = 6x\nx = 8',
          answer: '8 hours'
        },
        tips: [
          'As one increases, other decreases',
          'Products remain equal',
          'Often used in work problems'
        ]
      },
      {
        title: 'Scale and Map Problems',
        formula: 'Model Size/Actual Size = Scale Ratio',
        example: {
          question: 'Map scale is 1:100,000. If distance on map is 5cm, what is actual distance?',
          solution: '1/100,000 = 5/x\n1x = 5 × 100,000\nx = 500,000 cm = 5 km',
          answer: '5 kilometers'
        },
        tips: [
          'Keep units consistent',
          'May need unit conversion',
          'Common in maps and models'
        ]
      },
      {
        title: 'Rate Problems',
        formula: 'Rate = Amount/Time\nAmount = Rate × Time',
        example: {
          question: 'If a car travels 240 miles in 4 hours, what is the speed?',
          solution: 'Rate = 240 miles/4 hours = 60 miles per hour',
          answer: '60 mph'
        },
        tips: [
          'Rate is a special proportion',
          'Check units match',
          'Common in speed problems'
        ]
      },
      {
        title: 'Ratio Word Problems',
        formula: 'Part:Part or Part:Whole',
        example: {
          question: 'Ratio of boys:girls is 3:5. If there are 40 students total, how many boys?',
          solution: '3:5 means 3 parts boys, 5 parts total\n8 parts = 40 students\n1 part = 5 students\n3 parts = 15 boys',
          answer: '15 boys'
        },
        tips: [
          'Identify if part:part or part:whole',
          'Find value of one part',
          'Multiply to find answer'
        ]
      }
    ]
  };