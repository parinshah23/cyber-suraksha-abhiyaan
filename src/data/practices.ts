export interface PracticeItem {
  id: string;
  title: string;
  detail: string;
  icon: string;
}

export interface PracticeCategory {
  id: string;
  category: string;
  items: PracticeItem[];
}

export const practices: PracticeCategory[] = [
  {
    id: "c1",
    category: "Mobile Security",
    items: [
      { id: "p1", title: "App Permissions", detail: "Regularly audit app permissions. A calculator app doesn't need access to your contacts or location.", icon: "📱" },
      { id: "p2", title: "OS Updates", detail: "Keep your phone's operating system updated. Updates contain critical security patches.", icon: "🔄" },
      { id: "p3", title: "Unknown Sources", detail: "Never install APKs from unknown websites or WhatsApp forwards. Only use official app stores.", icon: "🚫" },
      { id: "p4", title: "Screen Lock", detail: "Use a strong PIN, biometric, or complex pattern lock. Avoid simple sequences like 1234.", icon: "🔒" }
    ]
  },
  {
    id: "c2",
    category: "Banking & UPI",
    items: [
      { id: "p5", title: "UPI PIN Rule", detail: "Remember: UPI PIN is only needed to SEND money, NEVER to receive money.", icon: "💸" },
      { id: "p6", title: "Public Wi-Fi", detail: "Avoid making financial transactions or checking bank balances on free public Wi-Fi networks.", icon: "📶" },
      { id: "p7", title: "Card Details", detail: "Never share your debit/credit card CVV or expiry date with anyone, even bank officials.", icon: "💳" },
      { id: "p8", title: "Account Monitoring", detail: "Check your bank statements regularly to spot any unauthorized, small transactions early.", icon: "👁️" }
    ]
  },
  {
    id: "c3",
    category: "Social Media Hygiene",
    items: [
      { id: "p9", title: "Profile Privacy", detail: "Set your social media profiles to private. Restrict who can see your photos and friends list.", icon: "👤" },
      { id: "p10", title: "Two-Factor Auth", detail: "Enable 2FA (Two-Factor Authentication) on all social accounts (WhatsApp, Instagram, Facebook).", icon: "🔑" },
      { id: "p11", title: "Friend Requests", detail: "Do not accept friend requests from strangers. Beware of fake profiles impersonating acquaintances.", icon: "🤝" },
      { id: "p12", title: "Oversharing", detail: "Avoid posting real-time travel updates or boarding passes. Post travel photos after you return.", icon: "✈️" }
    ]
  },
  {
    id: "c4",
    category: "Password Safety",
    items: [
      { id: "p13", title: "Complex Passwords", detail: "Use a mix of upper/lower case letters, numbers, and symbols. Aim for at least 12 characters.", icon: "🔐" },
      { id: "p14", title: "Unique Passwords", detail: "Never reuse the same password across multiple sites. A data breach on one site compromises all.", icon: "🎭" },
      { id: "p15", title: "Password Managers", detail: "Use a reputable password manager to securely store and generate unique passwords.", icon: "🗄️" },
      { id: "p16", title: "Avoid Personal Info", detail: "Do not use your name, DOB, pet's name, or 'password123' as passwords.", icon: "❌" }
    ]
  }
];
