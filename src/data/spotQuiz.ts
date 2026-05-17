export interface SpotQuizItem {
  id: string;
  scenario: string;
  isFraud: boolean;
  explanation: string;
}

export const spotQuiz: SpotQuizItem[] = [
  {
    id: "sq1",
    scenario: "You receive an email from 'support@paytm-verify.com' asking you to update your KYC by clicking a link.",
    isFraud: true,
    explanation: "The domain 'paytm-verify.com' is fake. Official domains do not usually have such hyphenated suffixes. Always use the official app for KYC."
  },
  {
    id: "sq2",
    scenario: "Your bank's app sends a push notification to your phone asking you to review a recent transaction.",
    isFraud: false,
    explanation: "Push notifications from official, installed banking apps are generally safe and part of standard security monitoring."
  }
];
