import React from 'react';
import { CheckCircle2 } from 'lucide-react';

const courseFeatures = [
  '36 LIVE Classes (50 mins lecture+ 30 mins Q/A)',
  '8 Practice Reading Mock Test',
  '8 Practice Listening Mock Test',
  '2 Complete Mock Test',
  '10 Full Mock Test Questions to practice at home',
  '1:1 Consultation Sessions from Mentors',
  'Facebook Support Group',
  'Course Validity 12 Months'
];

export function CourseFeatures() {
  return (
    <div className="space-y-4">
      <h3 className="font-medium text-lg">এই কোর্সে যা থাকছে</h3>
      <div className="space-y-3">
        {courseFeatures.map((feature, index) => (
          <div key={index} className="flex items-start gap-3">
            <CheckCircle2 className="w-5 h-5 text-gray-600 mt-0.5 flex-shrink-0" />
            <span className="text-sm text-gray-600">{feature}</span>
          </div>
        ))}
      </div>
    </div>
  );
}