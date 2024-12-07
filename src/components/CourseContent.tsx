import React from 'react';
import { FreeWebinar } from './course/FreeWebinar';
// import CourseInstructors from './course/CourseInstructors';
import  CourseInstructors  from './course/CourseInstructors';

export function CourseContent() {
  return (
    <div className="max-w-6xl mx-auto px-6 py-16">
      <div className="flex gap-4 border-b mb-12">
        {['Course Instructors', 'How the course is laid out', 'What you will learn by doing the course'].map((tab, i) => (
          <button
            key={i}
            className={`pb-4 px-2 ${i === 0 ? 'border-b-2 border-[#00A651] text-[#00A651]' : 'text-gray-500'}`}
          >
            {tab}
          </button>
        ))}
      </div>

      <FreeWebinar />
      <div id="course-instructors">
        <CourseInstructors />
      </div>
    </div>
  );
}