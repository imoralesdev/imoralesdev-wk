'use client'

import ConversionDrills from '../../components/conversion-drills';
import { conversionGroups } from '../../data/conversion-drills';

export default function ConversionPracticePage() {
  return (
    <main className="min-h-screen bg-gray-50">
      <ConversionDrills conversionGroups={conversionGroups} />
    </main>
  );
}