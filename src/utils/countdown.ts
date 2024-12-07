// Utility functions for countdown calculations
export function calculateTimeLeft(targetDate: Date,): {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
} {
 
  const total = new Date(targetDate).getTime() - new Date().getTime();
  
  return {
    days: Math.floor(total / (1000 * 60 * 60 * 24)),
    hours: Math.floor((total % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
    minutes: Math.floor((total % (1000 * 60 * 60)) / (1000 * 60)),
    seconds: Math.floor((total % (1000 * 60)) / 1000)
  };
}