export const percentageTopics = {
    id: 'percentages',
    title: 'Percentages',
    icon: 'Percent',
    color: 'text-blue-500',
    sections: [
      {
        title: 'Finding a Percentage of a Number',
        formula: 'Part = (Percentage/100) × Total',
        example: {
          question: 'What is 20% of 150?',
          solution: '20/100 × 150 = 0.2 × 150 = 30',
          answer: '30'
        },
        tips: [
          'Convert the percentage to a decimal by dividing by 100',
          'Multiply the decimal by the total amount'
        ]
      },
      {
        title: 'Finding What Percent One Number is of Another',
        formula: 'Percentage = (Part/Total) × 100',
        example: {
          question: 'What percent of 200 is 50?',
          solution: '(50/200) × 100 = 0.25 × 100 = 25%',
          answer: '25%'
        },
        tips: [
          'Divide the part by the total',
          'Multiply by 100 to convert to percentage'
        ]
      },
      {
        title: 'Finding the Whole Given a Part and a Percentage',
        formula: 'Total = Part/(Percentage/100)',
        example: {
          question: '50 is 25% of what number?',
          solution: '50/(25/100) = 50/0.25 = 200',
          answer: '200'
        },
        tips: [
          'Convert the percentage to a decimal',
          'Divide the part by the decimal'
        ]
      },
      {
        title: 'Percent Increase',
        formula: 'New Value = Original Value × (1 + Percentage/100)',
        example: {
          question: 'A price of $80 increases by 15%. What is the new price?',
          solution: '80 × (1 + 15/100) = 80 × 1.15 = 92',
          answer: '$92'
        },
        tips: [
          'Add 1 to the decimal form of the percentage',
          'Multiply by the original value'
        ]
      },
      {
        title: 'Percent Decrease',
        formula: 'New Value = Original Value × (1 - Percentage/100)',
        example: {
          question: 'A $120 item is on sale for 30% off. What is the sale price?',
          solution: '120 × (1 - 30/100) = 120 × 0.7 = 84',
          answer: '$84'
        },
        tips: [
          'Subtract the decimal form of the percentage from 1',
          'Multiply by the original value'
        ]
      }
    ]
  };