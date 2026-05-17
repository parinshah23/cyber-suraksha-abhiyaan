export interface Story {
  id: string;
  title: string;
  category: string;
  narrative: string[];
  takeaways: string[];
}

export const stories: Story[] = [
  {
    id: "st1",
    title: "The Digital Arrest That Wasn't",
    category: "Impersonation Scam",
    narrative: [
      "A software engineer received a call from someone claiming to be a customs officer. They alleged that a package in his name was intercepted containing illegal narcotics.",
      "The call was escalated to a 'senior IPS officer' over a Skype video call. The officer was sitting in what looked like a police station, complete with a uniform and walkie-talkie sounds.",
      "They threatened him with 'Digital Arrest' and demanded ₹5 Lakhs for immediate clearance. Panicked, he transferred the money before realizing it was an elaborate setup."
    ],
    takeaways: [
      "'Digital Arrest' does not exist in Indian law.",
      "Real police will never demand money over a video call to drop charges.",
      "Always independently verify by calling the official police station number."
    ]
  }
];
