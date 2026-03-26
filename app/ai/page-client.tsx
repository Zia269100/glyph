"use client";

import { useMemo } from "react";
import { useSearchParams } from "next/navigation";
import { profile } from "@/lib/data";

const styles = {
  page: {
    minHeight: "100vh",
    background: "#f7f4ee",
    padding: "24px 16px 32px",
  },
  shell: {
    maxWidth: 488,
    margin: "0 auto",
  },
  frame: {
    overflow: "hidden",
    borderRadius: 30,
    border: "1px solid rgba(224, 216, 205, 0.92)",
    background: "rgba(255, 255, 255, 0.86)",
    backdropFilter: "blur(20px)",
    boxShadow: "0 32px 90px rgba(132, 103, 70, 0.14)",
  },
  header: {
    background: "#2b9688",
    color: "#ffffff",
    padding: "28px 26px 24px",
  },
  section: {
    padding: "20px 24px 26px",
  },
  stepCard: {
    borderRadius: 16,
    padding: "14px 18px",
    display: "flex",
    alignItems: "flex-start",
    gap: 14,
  },
  actionButton: {
    width: "100%",
    borderRadius: 18,
    padding: "18px 20px",
    fontSize: 16,
    fontWeight: 700,
    border: "none",
    cursor: "pointer",
  },
};

export default function AIPageClient() {
  const params = useSearchParams();
  const incident = params.get("incident");

  const steps = useMemo(() => {
    if (!incident) return [];

    if (incident === "Unconscious") {
      return [
        "Check responsiveness",
        "Ensure airway is clear",
        "Place patient in recovery position",
        "Do NOT give food or water",
        "Call emergency services immediately",
      ];
    }

    if (incident === "Seizure") {
      return [
        "Do not restrain the patient",
        "Clear surrounding objects",
        "Place something soft under head",
        "Turn patient to side after seizure",
      ];
    }

    return [
      "Keep patient stable",
      "Avoid known allergens",
      "Monitor breathing",
    ];
  }, [incident]);

  const titledIncident = incident || "Other";

  const stepColors = [
    {
      border: "#1f8a80",
      chip: "#1f8a80",
      bg: "#eef7f6",
    },
    {
      border: "#d58a11",
      chip: "#d58a11",
      bg: "#fdf7ea",
    },
    {
      border: "#d84a35",
      chip: "#d84a35",
      bg: "#fff2f0",
    },
    {
      border: "#1f8a80",
      chip: "#1f8a80",
      bg: "#eef7f6",
    },
    {
      border: "#1f8a80",
      chip: "#1f8a80",
      bg: "#eef7f6",
    },
  ];

  const handleSOS = () => {
    alert(`SOS sent for ${profile.name}. Calling 8692827954 now.`);
    if (typeof window !== "undefined") {
      window.location.href = "tel:8692827954";
    }
  };

  const handleCall112 = () => {
    if (typeof window !== "undefined") {
      window.location.href = "tel:112";
    }
  };

  return (
    <div style={styles.page}>
      <div style={styles.shell}>
        <div style={styles.frame}>
          <div style={styles.header}>
            <p
              style={{
                margin: 0,
                fontSize: 13,
                color: "rgba(255,255,255,0.85)",
                letterSpacing: "0.03em",
              }}
            >
              ✨ First Aid Guide
            </p>
            <h1
              style={{
                margin: "10px 0 0",
                fontSize: 24,
                lineHeight: 1.2,
                fontWeight: 700,
                letterSpacing: "-0.03em",
              }}
            >
              For {titledIncident}
            </h1>
            <p
              style={{
                margin: "10px 0 0",
                fontSize: 15,
                lineHeight: 1.55,
                color: "rgba(255,255,255,0.88)",
              }}
            >
              AI-generated based on {profile.name}&apos;s medical profile
            </p>
            <p
              style={{
                margin: "8px 0 0",
                fontSize: 14,
                lineHeight: 1.5,
                color: "rgba(255,255,255,0.8)",
              }}
            >
              Incident: {titledIncident} • Patient: {profile.name}
            </p>
          </div>

          <div style={styles.section}>
            <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
              {steps.map((step, index) => {
                const color = stepColors[index] || stepColors[0];

                return (
                  <div
                    key={step}
                    style={{
                      ...styles.stepCard,
                      borderLeft: `3px solid ${color.border}`,
                      background: color.bg,
                    }}
                  >
                    <div
                      style={{
                        width: 30,
                        height: 30,
                        borderRadius: "50%",
                        background: color.chip,
                        color: "#fff",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        flexShrink: 0,
                        fontSize: 14,
                        fontWeight: 700,
                        marginTop: 1,
                      }}
                    >
                      {index + 1}
                    </div>

                    <p
                      style={{
                        margin: 0,
                        color: "#231815",
                        fontSize: 18,
                        lineHeight: 1.55,
                      }}
                    >
                      {step}
                    </p>
                  </div>
                );
              })}
            </div>

            <div
              style={{
                marginTop: 20,
                border: "1px solid #f6c3bb",
                background: "#fff5f3",
                borderRadius: 14,
                padding: "16px 16px 14px",
              }}
            >
              <p
                style={{
                  margin: 0,
                  color: "#ff3b30",
                  fontSize: 15,
                  fontWeight: 600,
                }}
              >
                ⊘ Critical Allergy Alert
              </p>
              <p
                style={{
                  margin: "8px 0 0",
                  color: "#5f5146",
                  fontSize: 15,
                  lineHeight: 1.55,
                }}
              >
                DO NOT administer Penicillin, Amoxicillin, or any penicillin-class
                drugs. Anaphylaxis risk.
              </p>
            </div>

            <button
              onClick={handleSOS}
              style={{
                ...styles.actionButton,
                marginTop: 22,
                background: "#cf432a",
                color: "#ffffff",
                boxShadow: "0 18px 34px rgba(207, 67, 42, 0.25)",
              }}
            >
              🚑 Send SOS + Call Ambulance
            </button>

            <button
              onClick={handleCall112}
              style={{
                ...styles.actionButton,
                marginTop: 14,
                border: "2px solid #df5039",
                background: "#ffffff",
                color: "#df5039",
              }}
            >
              📞 Call 112
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
