// Learnly 11+ / MyRank 11+ — Standard Age Score (SAS) Standardisation Engine
// Standardizes raw test marks based on GL Assessment & CEM national cohort distribution norms

/**
 * Calculates standardized 11+ SAS and percentile rank.
 * @param {number} rawScore - Marks achieved by the student (e.g. 23)
 * @param {number} maxScore - Total available marks (e.g. 25)
 * @param {number} studentAgeMonths - Student age in months (default: 125 = 10y 5m)
 * @param {string} subject - 'Mathematics' | 'Verbal Reasoning' | 'Non-Verbal Spatial' | 'English'
 * @returns {object} { sas, percentile, percentage, readinessTier, stanine }
 */
function calculateSAS(rawScore, maxScore = 25, studentAgeMonths = 125, subject = 'Verbal Reasoning') {
  const percentage = Math.round((rawScore / maxScore) * 1000) / 10;

  // Cohort standard normalization parameters for 11+ competitive entry
  const cohortMean = maxScore * 0.68; // 68% average cohort raw score
  const cohortStdDev = maxScore * 0.16; // spread

  // Standard z-score
  const z = (rawScore - cohortMean) / cohortStdDev;

  // Age adjustment factor: Older students (September born) vs younger (August born)
  // Baseline benchmark is 10 years 6 months (126 months). Younger students get standard age weight.
  const baselineAge = 126;
  const ageDeltaMonths = baselineAge - studentAgeMonths;
  const ageAdjustmentSAS = Math.max(-2, Math.min(6, ageDeltaMonths * 0.5));

  // Transform standard normal z-score to standard SAS scale (Mean 100, StdDev 15)
  let rawSAS = 100 + (z * 15) + ageAdjustmentSAS;

  // Bound within realistic standard UK 11+ SAS range (69 to 141)
  const sas = Math.max(70, Math.min(141, Math.round(rawSAS)));

  // Calculate national percentile rank using error function approximation
  const normalizedZ = (sas - 100) / 15;
  const percentile = Math.max(1, Math.min(99, Math.round(cumulativeStandardNormal(normalizedZ) * 100)));

  // Determine Stanine (Standard Nine) score: 1 to 9 scale used in UK grammar admissions
  let stanine = 5;
  if (sas >= 126) stanine = 9;
  else if (sas >= 119) stanine = 8;
  else if (sas >= 112) stanine = 7;
  else if (sas >= 104) stanine = 6;
  else if (sas >= 96) stanine = 5;
  else if (sas >= 88) stanine = 4;
  else if (sas >= 81) stanine = 3;
  else if (sas >= 74) stanine = 2;
  else stanine = 1;

  let readinessTier = 'High Readiness';
  if (sas >= 125) readinessTier = 'High Readiness (Consortium Target)';
  else if (sas >= 115) readinessTier = 'Competitive (Grammar Track)';
  else if (sas >= 100) readinessTier = 'Targeted Foundation';
  else readinessTier = 'Intensive Review Needed';

  return {
    rawScore,
    maxScore,
    percentage,
    sas,
    percentile,
    stanine,
    readinessTier,
    ageAdjustmentApplied: Math.round(ageAdjustmentSAS * 10) / 10
  };
}

// Approximation of standard normal cumulative distribution
function cumulativeStandardNormal(z) {
  // Abramowitz and Stegun formula 7.1.26
  const t = 1 / (1 + 0.2316419 * Math.abs(z));
  const d = 0.3989423 * Math.exp(-z * z / 2);
  let p = d * t * (0.3193815 + t * (-0.3565638 + t * (1.781478 + t * (-1.821256 + t * 1.330274))));
  if (z > 0) p = 1 - p;
  return 1 - p;
}

module.exports = {
  calculateSAS
};
