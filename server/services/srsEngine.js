// Learnly 11+ / MyRank 11+ — Spaced Repetition (SRS) Leitner Box Engine
// Schedules vocabulary retrieval intervals to optimize retention for 11+ entrance exams

const SRS_BOXES = {
  1: { name: 'To Drill', intervalDays: 1, xpReward: 5 },
  2: { name: 'Getting There', intervalDays: 3, xpReward: 10 },
  3: { name: 'Mastered', intervalDays: 7, xpReward: 15 }
};

/**
 * Updates a vocabulary item's Leitner box and schedules the next review date.
 * @param {number} currentBox - Current Leitner box (1, 2, or 3)
 * @param {string} userRating - 'Needs Practice' | 'Getting There' | 'Mastered'
 * @returns {object} { newBox, status, nextReviewDate, xpEarned }
 */
function processWordReview(currentBox = 1, userRating = 'Mastered') {
  let newBox = currentBox;
  let status = 'Needs Practice';

  if (userRating === 'Mastered') {
    newBox = Math.min(3, currentBox + 1);
    status = 'Mastered';
  } else if (userRating === 'Getting There') {
    newBox = Math.min(2, Math.max(1, currentBox));
    status = 'Getting There';
  } else {
    // Drop down to Box 1 for intensive spaced retrieval
    newBox = 1;
    status = 'Needs Practice';
  }

  const boxConfig = SRS_BOXES[newBox];
  const now = new Date();
  const nextReviewDate = new Date(now.getTime() + boxConfig.intervalDays * 24 * 60 * 60 * 1000);

  return {
    newBox,
    status,
    nextReviewDate: nextReviewDate.toISOString(),
    xpEarned: boxConfig.xpReward
  };
}

module.exports = {
  processWordReview,
  SRS_BOXES
};
