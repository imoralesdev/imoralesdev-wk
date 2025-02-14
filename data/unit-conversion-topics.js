export const unitConversionTopics = {
    id: 'unit-conversions',
    title: 'Unit Conversions',
    icon: 'ArrowsUpDown',
    color: 'text-teal-500',
    sections: [
      {
        title: 'Length/Distance Conversions',
        formula: `1 foot = 12 inches
  1 yard = 3 feet = 36 inches
  1 mile = 5,280 feet = 1,760 yards
  1 meter = 100 centimeters
  1 kilometer = 1,000 meters
  1 mile ≈ 1.61 kilometers`,
        example: {
          question: 'Convert 5.5 yards to feet.',
          solution: '5.5 yards × (3 feet/1 yard) = 16.5 feet',
          answer: '16.5 feet'
        },
        tips: [
          'Memorize common conversions like 12 inches = 1 foot',
          'For metric, moving decimal point right means ÷ 10, left means × 10',
          'Use logical steps: yards → feet → inches'
        ]
      },
      {
        title: 'Weight/Mass Conversions',
        formula: `1 pound = 16 ounces
  1 ton = 2,000 pounds
  1 kilogram = 1,000 grams
  1 pound ≈ 454 grams
  1 kilogram ≈ 2.2 pounds`,
        example: {
          question: 'Convert 3.5 pounds to ounces.',
          solution: '3.5 pounds × (16 ounces/1 pound) = 56 ounces',
          answer: '56 ounces'
        },
        tips: [
          'Remember 16 ounces = 1 pound',
          'For metric weights, use powers of 1,000',
          'Use 2.2 for quick pound/kilogram conversions'
        ]
      },
      {
        title: 'Volume/Capacity Conversions',
        formula: `1 cup = 8 fluid ounces
  1 pint = 2 cups
  1 quart = 2 pints = 4 cups
  1 gallon = 4 quarts = 16 cups
  1 liter = 1,000 milliliters
  1 gallon ≈ 3.78 liters`,
        example: {
          question: 'How many cups are in 2.5 quarts?',
          solution: '2.5 quarts × (4 cups/1 quart) = 10 cups',
          answer: '10 cups'
        },
        tips: [
          'Learn the relationship: cup → pint → quart → gallon',
          'Each step up doubles the previous unit',
          'For metric volumes, work with powers of 10'
        ]
      },
      {
        title: 'Temperature Conversions',
        formula: `°F to °C: (°F - 32) × 5/9
  °C to °F: (°C × 9/5) + 32
  Common points:
  Water freezes: 32°F = 0°C
  Water boils: 212°F = 100°C
  Room temp: 72°F ≈ 22°C`,
        example: {
          question: 'Convert 68°F to Celsius.',
          solution: '(68 - 32) × 5/9 = 36 × 5/9 = 20°C',
          answer: '20°C'
        },
        tips: [
          'Remember freezing (32°F = 0°C) and boiling (212°F = 100°C)',
          'Always subtract/add 32 first when converting from/to Fahrenheit',
          'Use 5/9 for F→C and 9/5 for C→F'
        ]
      },
      {
        title: 'Time Conversions',
        formula: `1 minute = 60 seconds
  1 hour = 60 minutes = 3,600 seconds
  1 day = 24 hours = 1,440 minutes
  1 week = 7 days = 168 hours
  1 year = 365 days (366 in leap years)`,
        example: {
          question: 'Convert 2.5 hours to minutes.',
          solution: '2.5 hours × (60 minutes/1 hour) = 150 minutes',
          answer: '150 minutes'
        },
        tips: [
          'Memorize that hours and minutes work in 60s',
          'For days, remember 24 hours',
          'Be careful with decimal times'
        ]
      },
      {
        title: 'Speed Conversions',
        formula: `1 mph = 1.467 feet per second
  1 mph = 1.61 km/h
  1 knot = 1.15 mph
  1 m/s = 3.28 feet/s`,
        example: {
          question: 'Convert 65 mph to kilometers per hour.',
          solution: '65 mph × (1.61 km/h / 1 mph) = 104.65 km/h',
          answer: '104.65 km/h'
        },
        tips: [
          'Remember mph to km/h multiplier is 1.61',
          'Use unit fractions to cancel units',
          'Speed conversions often combine distance and time conversions'
        ]
      },
      {
        title: 'Area Conversions',
        formula: `1 square foot = 144 square inches
  1 square yard = 9 square feet
  1 acre = 43,560 square feet
  1 square mile = 640 acres
  1 square meter = 10,000 square centimeters`,
        example: {
          question: 'Convert 2 square yards to square feet.',
          solution: '2 square yards × (9 square feet/1 square yard) = 18 square feet',
          answer: '18 square feet'
        },
        tips: [
          'Square conversions use the length conversion squared',
          'Remember common equivalents like 9 ft² = 1 yd²',
          'Be careful with squared units in calculations'
        ]
      }
    ]
  };