export interface Scenario {
  id: string;
  question: string;
  options: string[];
  correctAnswerIndex: number;
  explanation: string;
}

export const scenarios: Scenario[] = [
  {
    id: "s1",
    question: "You receive an SMS claiming your electricity connection will be disconnected tonight because your previous month's bill was not updated. It asks you to call a 10-digit mobile number immediately. What should you do?",
    options: [
      "Call the number immediately to avoid disconnection.",
      "Click the link in the SMS to pay the bill.",
      "Ignore the message and check your official electricity board app/website.",
      "Forward the message to your friends to warn them."
    ],
    correctAnswerIndex: 2,
    explanation: "Official electricity boards never send disconnection threats from personal 10-digit mobile numbers. Always verify through the official app or portal."
  },
  {
    id: "s2",
    question: "A friend texts you on WhatsApp from an unknown number saying they lost their phone and need urgent money for a medical emergency. What is your best course of action?",
    options: [
      "Transfer the money immediately.",
      "Call your friend on their original phone number or contact a common friend to verify.",
      "Reply to the message asking for their bank details.",
      "Block the number immediately without checking."
    ],
    correctAnswerIndex: 1,
    explanation: "Scammers often impersonate friends in distress. Always verify the request by calling the person directly on a known number or contacting someone close to them."
  },
  {
    id: "s3",
    question: "You get an email from 'Income Tax Dept' saying you have a refund of ₹15,000 pending. They ask you to click a link to verify your bank details. The link looks like 'incometax.refund-portal.in'.",
    options: [
      "Click the link and provide details since it's from the government.",
      "Reply to the email asking for proof.",
      "Do nothing, log in to the official Income Tax portal (incometax.gov.in) directly to check.",
      "Provide incorrect details to trick them."
    ],
    correctAnswerIndex: 2,
    explanation: "Government agencies usually do not ask for bank details via email links for refunds. Always use the official '.gov.in' portals directly."
  },
  {
    id: "s4",
    question: "While searching for a customer care number for an airline on Google, you find a number listed on a blog post. When you call, they ask you to download 'AnyDesk' or 'TeamViewer QuickSupport' to help you process a refund.",
    options: [
      "Download the app; customer care often needs to see your screen.",
      "Refuse to download any app, hang up, and find the number on the official airline website.",
      "Provide them with your credit card number instead of downloading the app.",
      "Stay on the line but don't download the app."
    ],
    correctAnswerIndex: 1,
    explanation: "Scammers list fake customer care numbers online. Legitimate customer support will NEVER ask you to download remote desktop apps like AnyDesk, as it gives them full control of your device."
  },
  {
    id: "s5",
    question: "You are setting up a new UPI app. A caller claiming to be from the bank says they will help you link your account. They ask for the OTP you just received.",
    options: [
      "Share the OTP, as they are from the bank.",
      "Ask them to verify your account balance first.",
      "Hang up immediately. Banks never ask for OTPs.",
      "Wait for a second OTP and share the first one."
    ],
    correctAnswerIndex: 2,
    explanation: "OTPs are your digital keys. Bank officials will NEVER ask for your OTP, PIN, or CVV. Sharing an OTP gives the scammer access to your funds."
  }
];
