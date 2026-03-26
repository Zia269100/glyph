"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import VitalsMonitor from "@/components/VitalsMonitor";
import { profile } from "@/lib/data";

const INCIDENTS = ["Accident", "Seizure", "Unconscious", "Allergy"];

const INCIDENT_META: Record<string, { icon: string; label: string }> = {
  Accident: { icon: "🚑", label: "Accident" },
  Seizure: { icon: "🧠", label: "Seizure" },
  Unconscious: { icon: "💤", label: "Unconscious" },
  Allergy: { icon: "🤧", label: "Allergic Reaction" },
};

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
    background: "#cf432a",
    color: "#ffffff",
    padding: "34px 30px 26px",
  },
  section: {
    padding: "22px 24px 28px",
  },
  eyebrow: {
    margin: 0,
    color: "#aaa093",
    fontSize: 12,
    fontWeight: 600,
    letterSpacing: "0.18em",
    textTransform: "uppercase" as const,
  },
  glassCard: {
    border: "1px solid rgba(233, 225, 214, 0.95)",
    background: "rgba(255, 255, 255, 0.76)",
    backdropFilter: "blur(16px)",
    borderRadius: 22,
    boxShadow: "0 18px 40px rgba(133, 106, 76, 0.08)",
  },
  pillButton: {
    width: "100%",
    borderRadius: 18,
    padding: "18px 20px",
    fontSize: 16,
    fontWeight: 600,
    cursor: "pointer",
    border: "none",
  },
};

export default function Page() {
  const [incident, setIncident] = useState("");
  const router = useRouter();

  return (
    <div style={styles.page}>
      <div style={styles.shell}>
        <div style={styles.frame}>
          <motion.div
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            style={styles.header}
          >
            <div
              style={{
                width: 66,
                height: 66,
                borderRadius: "50%",
                border: "3px solid rgba(255,255,255,0.44)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                background: "rgba(255,255,255,0.08)",
                boxSizing: "border-box",
              }}
            >
              <div
                style={{
                  width: 28,
                  height: 28,
                  borderRadius: "50%",
                  border: "2px solid rgba(255,255,255,0.68)",
                  background: "rgba(255,255,255,0.18)",
                }}
              />
            </div>

            <div style={{ marginTop: 20 }}>
              <h1
                style={{
                  margin: 0,
                  fontSize: 27,
                  lineHeight: 1.1,
                  fontWeight: 700,
                  letterSpacing: "-0.04em",
                }}
              >
                Glyph Ring Detected
              </h1>
              <p
                style={{
                  margin: "10px 0 0",
                  fontSize: 15,
                  lineHeight: 1.5,
                  color: "rgba(255,255,255,0.92)",
                }}
              >
                Medical ID - {profile.name} - {profile.id}
              </p>
            </div>
          </motion.div>

          <div style={styles.section}>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              style={{
                ...styles.glassCard,
                padding: 18,
                marginBottom: 18,
              }}
            >
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "flex-start",
                  gap: 16,
                }}
              >
                <div>
                  <h2
                    style={{
                      margin: 0,
                      fontSize: 22,
                      fontWeight: 700,
                      color: "#241814",
                      letterSpacing: "-0.03em",
                    }}
                  >
                    {profile.name}
                  </h2>
                  <p
                    style={{
                      margin: "6px 0 0",
                      fontSize: 14,
                      color: "#77695c",
                    }}
                  >
                    {profile.age} years old • {profile.gender}
                  </p>
                  <p
                    style={{
                      margin: "4px 0 0",
                      fontSize: 14,
                      color: "#a09387",
                    }}
                  >
                    {profile.location}
                  </p>
                </div>

                <div
                  style={{
                    padding: "10px 12px",
                    borderRadius: 16,
                    border: "1px solid #f1d7d2",
                    background: "#fff7f5",
                    minWidth: 72,
                    textAlign: "right" as const,
                  }}
                >
                  <p
                    style={{
                      margin: 0,
                      color: "#9a7e71",
                      fontSize: 11,
                      fontWeight: 700,
                      letterSpacing: "0.12em",
                      textTransform: "uppercase",
                    }}
                  >
                    Blood
                  </p>
                  <p
                    style={{
                      margin: "4px 0 0",
                      color: "#cf432a",
                      fontSize: 18,
                      fontWeight: 700,
                    }}
                  >
                    {profile.blood}
                  </p>
                </div>
              </div>

              <div
                style={{
                  display: "flex",
                  flexWrap: "wrap",
                  gap: 8,
                  marginTop: 16,
                }}
              >
                <span
                  style={{
                    padding: "7px 12px",
                    borderRadius: 999,
                    border: "1px solid #e2d6fb",
                    background: "#f6f1ff",
                    color: "#6c46a7",
                    fontSize: 12,
                    fontWeight: 600,
                  }}
                >
                  {profile.blood}
                </span>
                <span
                  style={{
                    padding: "7px 12px",
                    borderRadius: 999,
                    border: "1px solid #f6c8c1",
                    background: "#fff1ef",
                    color: "#cf432a",
                    fontSize: 12,
                    fontWeight: 600,
                  }}
                >
                  Allergy
                </span>
                {profile.conditions.map((condition) => (
                  <span
                    key={condition}
                    style={{
                      padding: "7px 12px",
                      borderRadius: 999,
                      border: "1px solid #ece4d9",
                      background: "#fbf8f4",
                      color: "#6f6255",
                      fontSize: 12,
                      fontWeight: 600,
                    }}
                  >
                    {condition}
                  </span>
                ))}
              </div>
            </motion.div>

            <div
              style={{
                ...styles.glassCard,
                padding: 8,
                marginBottom: 18,
              }}
            >
              <VitalsMonitor />
            </div>

            <section>
              <p style={styles.eyebrow}>What happened?</p>

              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "1fr 1fr",
                  gap: 14,
                  marginTop: 16,
                }}
              >
                {INCIDENTS.map((item) => {
                  const selected = incident === item;
                  const meta = INCIDENT_META[item];

                  return (
                    <motion.button
                      whileTap={{ scale: 0.97 }}
                      key={item}
                      onClick={() => setIncident(item)}
                      style={{
                        minHeight: 118,
                        borderRadius: 16,
                        border: selected
                          ? "1.5px solid #cf432a"
                          : "1.5px solid #e6ddd3",
                        background: selected ? "#fff4f1" : "#ffffff",
                        boxShadow: selected
                          ? "0 16px 34px rgba(207, 67, 42, 0.12)"
                          : "0 10px 24px rgba(135, 108, 77, 0.05)",
                        padding: "18px 14px",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        cursor: "pointer",
                      }}
                    >
                      <div
                        style={{
                          display: "flex",
                          flexDirection: "column",
                          alignItems: "center",
                          justifyContent: "center",
                          gap: 14,
                          textAlign: "center",
                        }}
                      >
                        <div
                          style={{
                            fontSize: 32,
                            lineHeight: 1,
                          }}
                        >
                          {meta.icon}
                        </div>
                        <span
                          style={{
                            fontSize: 15,
                            color: "#231815",
                            fontWeight: 500,
                            lineHeight: 1.3,
                          }}
                        >
                          {meta.label}
                        </span>
                      </div>
                    </motion.button>
                  );
                })}

                <motion.button
                  whileTap={{ scale: 0.97 }}
                  onClick={() => setIncident("Other")}
                  style={{
                    minHeight: 118,
                    borderRadius: 16,
                    border:
                      incident === "Other"
                        ? "1.5px solid #cf432a"
                        : "1.5px solid #e6ddd3",
                    background: incident === "Other" ? "#fff4f1" : "#ffffff",
                    boxShadow:
                      incident === "Other"
                        ? "0 16px 34px rgba(207, 67, 42, 0.12)"
                        : "0 10px 24px rgba(135, 108, 77, 0.05)",
                    padding: "18px 14px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    cursor: "pointer",
                    gridColumn: "span 2",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      justifyContent: "center",
                      gap: 14,
                      textAlign: "center",
                    }}
                  >
                    <div style={{ fontSize: 32, lineHeight: 1 }}>❓</div>
                    <span
                      style={{
                        fontSize: 15,
                        color: "#231815",
                        fontWeight: 500,
                      }}
                    >
                      Other
                    </span>
                  </div>
                </motion.button>
              </div>
            </section>

            <motion.button
              whileTap={{ scale: 0.98 }}
              onClick={() => {
                if (!incident) {
                  alert("Please select incident first");
                  return;
                }
                router.push(`/ai?incident=${incident}`);
              }}
              style={{
                ...styles.pillButton,
                marginTop: 24,
                background: "linear-gradient(135deg, #efb1a8 0%, #e9a095 100%)",
                color: "#ffffff",
                boxShadow: "0 20px 36px rgba(235, 176, 167, 0.36)",
                letterSpacing: "-0.01em",
              }}
            >
              Get First Aid Steps →
            </motion.button>

            <button
              onClick={() => {
                const otp = prompt("Enter OTP: 1234");
                if (otp === "1234") {
                  router.push("/doctor");
                }
              }}
              style={{
                ...styles.pillButton,
                marginTop: 12,
                background: "#ffffff",
                color: "#cf432a",
                border: "1.5px solid #cf432a",
                boxShadow: "0 12px 26px rgba(120, 94, 68, 0.08)",
              }}
            >
              Medical Professional
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
