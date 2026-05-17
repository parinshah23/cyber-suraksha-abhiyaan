export interface Alert {
  id: string;
  headline: string;
  tipText: string;
  severity: "Info" | "Warning" | "Danger";
}

export const alerts: Alert[] = [
  {
    id: "a1",
    headline: "New WhatsApp Scam",
    tipText: "Beware of international numbers offering part-time jobs. Do not reply or click any links.",
    severity: "Danger"
  },
  {
    id: "a2",
    headline: "Free Wi-Fi Warning",
    tipText: "Public Wi-Fi networks can be easily spoofed. Avoid accessing bank accounts on them.",
    severity: "Warning"
  }
];
