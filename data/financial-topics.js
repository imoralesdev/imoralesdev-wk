export const financialTopics = {
    id: 'financial',
    title: 'Tax, Discount, and Interest',
    icon: 'Calculator',
    color: 'text-purple-500',
    sections: [
      {
        title: 'Sales Tax',
        formula: 'Tax Amount = (Tax Rate/100) × Price\nTotal Price = Original Price + Tax Amount',
        example: {
          question: 'An item costs $80 with 7% sales tax. What is the total price?',
          solution: 'Tax Amount = (7/100) × $80 = $5.60\nTotal Price = $80 + $5.60 = $85.60',
          answer: '$85.60'
        },
        tips: [
          'Convert tax percentage to decimal first',
          'Add tax amount to original price for total',
          'Round final answer to nearest cent'
        ]
      },
      {
        title: 'Discounts',
        formula: 'Discount Amount = (Discount Rate/100) × Original Price\nSale Price = Original Price - Discount Amount',
        example: {
          question: 'A $120 item is on sale for 30% off. What is the sale price?',
          solution: 'Discount = (30/100) × $120 = $36\nSale Price = $120 - $36 = $84',
          answer: '$84'
        },
        tips: [
          'Convert discount percentage to decimal',
          'Calculate discount amount first',
          'Subtract discount from original price'
        ]
      },
      {
        title: 'Simple Interest',
        formula: 'Interest = Principal × Rate × Time\nTotal Amount = Principal + Interest',
        example: {
          question: 'You deposit $1,000 at 5% simple interest for 3 years. How much interest do you earn?',
          solution: 'Interest = $1,000 × 0.05 × 3 = $150\nTotal = $1,000 + $150 = $1,150',
          answer: '$150 interest, $1,150 total'
        },
        tips: [
          'Convert interest rate to decimal',
          'Time must be in years',
          'Principal is the starting amount'
        ]
      },
      {
        title: 'Compound Interest',
        formula: 'Amount = Principal × (1 + Rate)^Time',
        example: {
          question: 'Invest $1,000 at 5% compound interest for 3 years. What is the final amount?',
          solution: '$1,000 × (1 + 0.05)³ = $1,000 × 1.157625 = $1,157.63',
          answer: '$1,157.63'
        },
        tips: [
          'Convert interest rate to decimal',
          'Use exponent for number of years',
          'Subtract principal for interest earned'
        ]
      },
      {
        title: 'Finding Original Price Before Tax/Discount',
        formula: 'Original Price = Final Price ÷ (1 + Rate/100) for tax\nOriginal Price = Final Price ÷ (1 - Rate/100) for discount',
        example: {
          question: 'An item costs $85.60 after 7% tax. What was the original price?',
          solution: 'Original Price = $85.60 ÷ 1.07 = $80',
          answer: '$80'
        },
        tips: [
          'Use addition for tax (1 + rate)',
          'Use subtraction for discount (1 - rate)',
          'Convert percentage to decimal first'
        ]
      }
    ]
  };