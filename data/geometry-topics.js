export const geometryTopics = {
    id: 'geometry',
    title: 'Perimeter, Area, Volume',
    icon: 'Square',
    color: 'text-red-500',
    sections: [
      {
        title: 'Rectangle Perimeter and Area',
        formula: 'Perimeter = 2(length + width)\nArea = length × width',
        example: {
          question: 'A rectangle has length 8m and width 5m. Find its perimeter and area.',
          solution: 'Perimeter = 2(8 + 5) = 2(13) = 26m\nArea = 8 × 5 = 40m²',
          answer: 'Perimeter: 26m, Area: 40m²'
        },
        tips: [
          'Perimeter measures distance around the shape',
          'Area measures space inside the shape',
          'Remember to include units'
        ]
      },
      {
        title: 'Circle Circumference and Area',
        formula: 'Circumference = 2πr or πd\nArea = πr²',
        example: {
          question: 'A circle has radius 4cm. Find its circumference and area (π ≈ 3.14).',
          solution: 'Circumference = 2 × 3.14 × 4 = 25.12cm\nArea = 3.14 × 4² = 50.24cm²',
          answer: 'Circumference: 25.12cm, Area: 50.24cm²'
        },
        tips: [
          'Use 3.14 for π if not given',
          'Square the radius for area',
          'Diameter is twice the radius'
        ]
      },
      {
        title: 'Triangle Area',
        formula: 'Area = ½ × base × height',
        example: {
          question: 'A triangle has base 6m and height 8m. Find its area.',
          solution: 'Area = ½ × 6 × 8 = 24m²',
          answer: '24m²'
        },
        tips: [
          'Height must be perpendicular to base',
          'Any side can be the base',
          'Always multiply by ½'
        ]
      },
      {
        title: 'Rectangular Prism Volume',
        formula: 'Volume = length × width × height',
        example: {
          question: 'A box is 4m long, 3m wide, and 5m high. Find its volume.',
          solution: 'Volume = 4 × 3 × 5 = 60m³',
          answer: '60m³'
        },
        tips: [
          'Volume measures space inside 3D shape',
          'Multiply all three dimensions',
          'Use cubic units (m³)'
        ]
      },
      {
        title: 'Cylinder Volume',
        formula: 'Volume = πr²h',
        example: {
          question: 'A cylinder has radius 3cm and height 10cm. Find its volume (π ≈ 3.14).',
          solution: 'Volume = 3.14 × 3² × 10 = 3.14 × 9 × 10 = 282.6cm³',
          answer: '282.6cm³'
        },
        tips: [
          'Find circle area first (πr²)',
          'Multiply by height',
          'Check units are consistent'
        ]
      },
      {
        title: 'Surface Area',
        formula: 'Rectangular Prism: SA = 2(lw + lh + wh)\nCylinder: SA = 2πr² + 2πrh',
        example: {
          question: 'Find surface area of box with l=4m, w=3m, h=2m.',
          solution: 'SA = 2(4×3 + 4×2 + 3×2) = 2(12 + 8 + 6) = 2(26) = 52m²',
          answer: '52m²'
        },
        tips: [
          'Add area of all faces',
          'Remember both bases for cylinder',
          'Use square units for area'
        ]
      }
    ]
  };