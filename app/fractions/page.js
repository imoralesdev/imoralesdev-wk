'use client'

import ConversionDrills from '../../components/conversion-drills';
import { fractionGroups } from '../../data/fraction-drills';

export default function FractionPracticePage() {
  return (
    <main className="min-h-screen bg-gray-50">
      <ConversionDrills conversionGroups={fractionGroups} />
    </main>
  );
}