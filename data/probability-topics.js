export const probabilityTopics = {
    id: 'probability',
    title: 'Probability and Counting',
    icon: 'Dice5',
    color: 'text-indigo-500',
    sections: [
      {
        title: 'Basic Probability',
        formula: 'P(Event) = (Number of Favorable Outcomes) ÷ (Total Possible Outcomes)',
        example: {
          question: 'A bag has 4 red, 5 blue, and 6 green marbles. What is the probability of drawing blue?',
          solution: 'Favorable outcomes (blue) = 5\nTotal outcomes = 4 + 5 + 6 = 15\nP(Blue) = 5/15 = 1/3',
          answer: '1/3 or approximately 0.333'
        },
        tips: [
          'Count favorable outcomes carefully',
          'Include all possible outcomes in total',
          'Probability is always between 0 and 1'
        ]
      },
      {
        title: 'Multiple Independent Events',
        formula: 'P(A and B) = P(A) × P(B)',
        example: {
          question: 'What is probability of getting heads on a coin AND rolling a 6 on a die?',
          solution: 'P(Heads) = 1/2\nP(Rolling 6) = 1/6\nP(Both) = 1/2 × 1/6 = 1/12',
          answer: '1/12'
        },
        tips: [
          'Events must be independent',
          'Multiply individual probabilities',
          'Answer is smaller than individual probabilities'
        ]
      },
      {
        title: 'Mutually Exclusive Events',
        formula: 'P(A or B) = P(A) + P(B)',
        example: {
          question: 'Rolling a die, what is probability of getting 1 OR 6?',
          solution: 'P(1) = 1/6\nP(6) = 1/6\nP(1 or 6) = 1/6 + 1/6 = 2/6 = 1/3',
          answer: '1/3'
        },
        tips: [
          'Events cannot happen together',
          'Add individual probabilities',
          'Check events are truly exclusive'
        ]
      },
      {
        title: 'Fundamental Counting Principle',
        formula: 'Total Outcomes = Choice1 × Choice2 × Choice3...',
        example: {
          question: 'A menu has 3 appetizers, 4 main courses, and 2 desserts. How many different meals possible?',
          solution: 'Total combinations = 3 × 4 × 2 = 24',
          answer: '24 different meals'
        },
        tips: [
          'Multiply number of choices for each decision',
          'Order matters in counting',
          'Each choice must be independent'
        ]
      },
      {
        title: 'Permutations (Order Matters)',
        formula: 'P(n,r) = n!/(n-r)!',
        example: {
          question: 'How many ways can 3 people be seated in 5 chairs?',
          solution: 'P(5,3) = 5!/(5-3)! = 5!/2! = (5×4×3×2×1)/(2×1) = 60',
          answer: '60 ways'
        },
        tips: [
          'Use when order matters',
          'n is total items',
          'r is items being arranged'
        ]
      },
      {
        title: "Combinations (Order Doesn't Matter)",
        formula: 'C(n,r) = n!/[r!(n-r)!]',
        example: {
          question: 'How many different teams of 3 can be chosen from 7 players?',
          solution: 'C(7,3) = 7!/[3!(7-3)!] = 7!/(3!×4!) = 35',
          answer: '35 combinations'
        },
        tips: [
          "Use when order doesn't matter",
          'Always less than permutations',
          'Common for team/group selection'
        ]
      }
    ]
  };