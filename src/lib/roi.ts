export const ROI = {
  minBill: 300,
  maxBill: 10_000,
  step: 50,
  defaultBill: 800,
  presets: [500, 800, 1500, 2500, 5000],
  savingsRate: 0.95,
  years: 25,
  kwpDivisor: 110,
  investmentFactor: 58,
  treesPerHundred: 3.2,
  co2PerHundred: 0.85,
} as const;

export type RoiMetrics = {
  monthlySavings: number;
  annualSavings: number;
  roi25Years: number;
  treesSaved: number;
  co2Avoided: number;
  systemKwp: number;
  estimatedInvestment: number;
  paybackYears: number;
};

export function calculateRoi(bill: number): RoiMetrics {
  const monthlySavings = Math.round(bill * ROI.savingsRate);
  const annualSavings = monthlySavings * 12;
  const estimatedInvestment = Math.round(bill * ROI.investmentFactor);

  return {
    monthlySavings,
    annualSavings,
    roi25Years: Math.round(annualSavings * ROI.years),
    treesSaved: Math.round((bill / 100) * ROI.treesPerHundred),
    co2Avoided: Math.round((bill / 100) * ROI.co2PerHundred * 12),
    systemKwp: Math.round((bill / ROI.kwpDivisor) * 10) / 10,
    estimatedInvestment,
    paybackYears: annualSavings > 0 ? Math.round((estimatedInvestment / annualSavings) * 10) / 10 : 0,
  };
}

export function billFillPercent(bill: number) {
  return ((bill - ROI.minBill) / (ROI.maxBill - ROI.minBill)) * 100;
}
