'use client'

import ConversionDrills from '../../components/vocabulary-quiz-prefiix';
import { prefixGroups } from '../../data/prefix-drills';

export default function PrefixPracticePage() {
  return (
    <main className="min-h-screen bg-gray-50">
      <ConversionDrills conversionGroups={prefixGroups} />
    </main>
  );
}