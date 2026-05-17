export interface FraudType {
  id: string;
  type: string;
  victimName: string;
  city: string;
  amountLost: string;
  story: string;
  redFlags: string[];
  dos: string[];
  donts: string[];
}

export const frauds: FraudType[] = [
  {
    id: "f1",
    type: "UPI / QR Code Fraud",
    victimName: "Rahul Sharma",
    city: "Delhi",
    amountLost: "₹ 45,000",
    story: "Rahul wanted to sell his old bicycle on an online marketplace. A 'buyer' contacted him, agreed on the price instantly without negotiating, and sent a QR code. They claimed Rahul needed to scan it and enter his UPI PIN to 'receive' the payment. Unaware that scanning a QR code is only for sending money, Rahul scanned it, entered his PIN, and ₹45,000 was deducted from his account.",
    redFlags: ["Buyer agreed to buy without seeing the product.", "Insisted on sending a QR code for payment.", "Asked to enter UPI PIN to 'receive' money."],
    dos: ["Remember that entering a UPI PIN is ONLY for sending money, never for receiving.", "Verify the identity of the buyer before proceeding."],
    donts: ["Do not scan unknown QR codes.", "Do not share your UPI PIN with anyone."]
  },
  {
    id: "f2",
    type: "Digital Arrest Scam",
    victimName: "Priya Patel",
    city: "Mumbai",
    amountLost: "₹ 2,50,000",
    story: "Priya received a call from someone claiming to be a CBI officer. They told her a parcel in her name containing illegal items was intercepted at customs. The caller escalated to a video call, showing a fake police station setup, and threatened her with 'Digital Arrest' unless she transferred funds to a 'secure RBI account' for verification. Terrified, she transferred the amount.",
    redFlags: ["Unsolicited call from 'law enforcement' threatening arrest.", "Demand for immediate money transfer for 'verification'.", "Use of the term 'Digital Arrest' (which does not exist in law)."],
    dos: ["Disconnect suspicious calls immediately.", "Report the incident to the official National Cyber Crime Reporting Portal (1930)."],
    donts: ["Do not panic or succumb to threats over the phone.", "Do not transfer money to unknown accounts under pressure."]
  },
  {
    id: "f3",
    type: "Job / Work-From-Home Scam",
    victimName: "Amit Verma",
    city: "Bengaluru",
    amountLost: "₹ 1,15,000",
    story: "Amit found a part-time job offer via Telegram where he had to 'like' YouTube videos to earn money. Initially, he was paid ₹500 for a few tasks. Then, he was asked to 'invest' in prepaid tasks for higher returns. He kept depositing money into various accounts until the scammers stopped responding.",
    redFlags: ["Unsolicited job offer with unrealistic high returns for simple tasks.", "Initial small payouts to build trust.", "Requests for money to 'unlock' tasks or higher tiers."],
    dos: ["Verify the company offering the job.", "Understand that legitimate employers never ask you to pay for a job."],
    donts: ["Do not pay any 'registration' or 'task' fees.", "Do not share banking details with unknown recruiters."]
  },
  {
    id: "f4",
    type: "KYC Update Fraud",
    victimName: "Sunita Devi",
    city: "Jaipur",
    amountLost: "₹ 80,000",
    story: "Sunita received an SMS warning that her bank account would be blocked in 24 hours if she didn't update her PAN card. The SMS had a link. Clicking it took her to a website that looked exactly like her bank's login page. She entered her credentials and the OTP she received. Her account was emptied within minutes.",
    redFlags: ["Urgent, threatening tone in SMS regarding account blockage.", "Links provided in SMS from unknown 10-digit numbers.", "Request for OTP on an unverified webpage."],
    dos: ["Always use the official banking app or type the bank's URL directly.", "Contact your bank branch to verify any KYC claims."],
    donts: ["Do not click links in SMS claiming to be from your bank.", "Never share OTPs or login credentials."]
  },
  {
    id: "f5",
    type: "Investment / Crypto Scam",
    victimName: "Karthik N.",
    city: "Hyderabad",
    amountLost: "₹ 5,00,000",
    story: "Karthik joined a WhatsApp group promising 300% guaranteed returns on crypto investments. The group admins shared screenshots of 'massive profits' daily. He was directed to download a fake trading app. He invested heavily, saw his 'portfolio' grow on the app, but when he tried to withdraw, they demanded a 20% 'tax fee'. After paying that, he was blocked.",
    redFlags: ["Guaranteed, unrealistic high returns.", "Pressure to invest quickly via private WhatsApp/Telegram groups.", "Fake trading apps not available on official app stores.", "Demand for extra 'tax fees' to withdraw funds."],
    dos: ["Only use SEBI-registered brokers and official platforms.", "Do thorough research before investing in crypto."],
    donts: ["Do not trust screenshots of profits from unknown individuals.", "Do not download trading apps from APK links."]
  }
];
