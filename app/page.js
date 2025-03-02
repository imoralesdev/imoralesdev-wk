'use client'

import Link from 'next/link'
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card'
import { 
  BookOpen, 
  Calculator, 
  BrainCircuit,
  ArrowLeftRight,
  Divide,
  Languages,
  NotebookPen
} from 'lucide-react'

export default function Home() {
  return (
    <main className="min-h-screen p-4 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">ASVAB Study Guide</h1>
          <p className="text-gray-600 text-lg">Choose your study section</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Vocabulary Section */}
          <Link href="/vocabulary" className="transform hover:scale-105 transition-transform">
            <Card className="hover:shadow-lg cursor-pointer h-full">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <BookOpen className="h-6 w-6 text-blue-500" />
                  Vocabulary Quiz
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Practice essential ASVAB vocabulary with interactive quizzes and word analysis.
                </p>
              </CardContent>
            </Card>
          </Link>

          <Link href="/vocabulary-asvab" className="transform hover:scale-105 transition-transform">
            <Card className="hover:shadow-lg cursor-pointer h-full">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <NotebookPen className="h-6 w-6 text-blue-500" />
                  ASVAB Vocabulary Quiz
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  With interactive quizzes and word analysis, you may practice ASVAB vocabulary that is actually used on the exam.
                </p>
              </CardContent>
            </Card>
          </Link>

          {/* Math Practice Section */}
          <Link href="/math-warmup" className="transform hover:scale-105 transition-transform">
            <Card className="hover:shadow-lg cursor-pointer h-full">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Calculator className="h-6 w-6 text-green-500" />
                  Math Warmup
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Quick math exercises to sharpen your arithmetic and problem-solving skills.
                </p>
              </CardContent>
            </Card>
          </Link>

          {/* Math Guide Section */}
          <Link href="/math-guide" className="transform hover:scale-105 transition-transform">
            <Card className="hover:shadow-lg cursor-pointer h-full">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <BrainCircuit className="h-6 w-6 text-purple-500" />
                  Math Guide
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Comprehensive guide to all ASVAB math topics with formulas and examples.
                </p>
              </CardContent>
            </Card>
          </Link>

          {/* Unit Conversion Section */}
          <Link href="/conversions" className="transform hover:scale-105 transition-transform">
            <Card className="hover:shadow-lg cursor-pointer h-full">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <ArrowLeftRight className="h-6 w-6 text-teal-500" />
                  Unit Conversions
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Learn and practice essential unit conversions with interactive drills and memory tips.
                </p>
              </CardContent>
            </Card>
          </Link>

          {/* Friendly Fractions Section */}
          <Link href="/fractions" className="transform hover:scale-105 transition-transform">
            <Card className="hover:shadow-lg cursor-pointer h-full">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Divide className="h-6 w-6 text-amber-500" />
                  Friendly Fractions
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Master common fraction-to-percentage conversions with practice drills and memory tips.
                </p>
              </CardContent>
            </Card>
          </Link>

          {/* Prefix Practice Section */}
          <Link href="/prefixes" className="transform hover:scale-105 transition-transform">
            <Card className="hover:shadow-lg cursor-pointer h-full">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Languages className="h-6 w-6 text-indigo-500" />
                  Prefix Practice
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Master common prefixes and their meanings with interactive drills and example words.
                </p>
              </CardContent>
            </Card>
          </Link>
        </div>
      </div>
    </main>
  )
}