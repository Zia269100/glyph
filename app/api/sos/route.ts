import { NextResponse } from "next/server";
import axios from "axios";

export async function POST(req: Request) {
  const { name, incident, location } = await req.json();

  const message = `🚨 EMERGENCY ALERT

${name} needs help
Incident: ${incident}

Location:
https://maps.google.com/?q=${location}`;

  await axios.post(
    "https://api.twilio.com/2010-04-01/Accounts/YOUR_SID/Messages.json",
    new URLSearchParams({
      From: "+14785754270",
      To: "8692827954",
      Body: message,
    }),
    {
      auth: {
        username: "GlyphRing",
        password: "Hamza123",
      },
    }
  );

  return NextResponse.json({ success: true });
}