"use client";

import { motion } from "framer-motion";

const vitals = [
  { label: "Heart Rate", value: "82", unit: "bpm", color: "#cf4d3d" },
  { label: "SpO₂", value: "96", unit: "%", color: "#1f8a80" },
  { label: "Blood Glucose", value: "154", unit: "mg/dL", color: "#d28412" },
  { label: "Temp", value: "98.6", unit: "F", color: "#6f4ba2" },
];

const conditions = [
  "Type 2 Diabetes Mellitus (ICD-11: 5A11)",
  "Hypertension (Stage 1)",
  "Chronic Asthma",
  "Hyperlipidemia",
  "Mild Renal Impairment",
];

const allergies = [
  "Penicillin - Anaphylaxis",
  "Ibuprofen - Severe Rash",
  "Peanuts - Airway Constriction",
];

const medications = [
  "Metformin 500mg BD",
  "Amlodipine 5mg OD",
  "Atorvastatin 10mg HS",
  "Salbutamol Inhaler PRN",
  "Losartan 50mg OD",
];

const history = [
  {
    date: "Mar 2024",
    title: "HbA1c Test — 7.8% (Controlled)",
    note: "View Lab Report",
    dot: "#6f4ba2",
  },
  {
    date: "Jan 2024",
    title: "Hypertension diagnosis confirmed. BP 145/90. Amlodipine prescribed.",
    note: "View Prescription · Dr. Patel",
    dot: "#d28412",
  },
  {
    date: "Sep 2023",
    title: "Annual physical — all vitals stable. Asthma reassessed mild.",
    note: "View Annual Summary",
    dot: "#2e8b57",
  },
  {
    date: "Apr 2022",
    title: "Penicillin allergy confirmed via skin prick test. Anaphylaxis risk documented.",
    note: "View Allergy Test Result",
    dot: "#cf4d3d",
  },
];

const styles = {
  root: {
    marginTop: 24,
    display: "flex",
    flexDirection: "column" as const,
    gap: 24,
  },
  card: {
    border: "1px solid rgba(220, 212, 201, 0.9)",
    background: "rgba(255, 255, 255, 0.82)",
    backdropFilter: "blur(18px)",
    borderRadius: 32,
    boxShadow: "0 24px 70px rgba(105, 84, 58, 0.1)",
    padding: 28,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 700,
    color: "#231815",
    letterSpacing: "-0.03em",
    margin: 0,
  },
  eyebrow: {
    fontSize: 12,
    color: "#a49a8f",
    textTransform: "uppercase" as const,
    letterSpacing: "0.18em",
    fontWeight: 600,
    margin: 0,
  },
  pill: {
    display: "inline-flex",
    alignItems: "center",
    borderRadius: 999,
    padding: "10px 16px",
    fontSize: 14,
    fontWeight: 500,
    lineHeight: 1,
  },
};

export default function DoctorPanel() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      style={styles.root}
    >
      <div style={styles.card}>
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-between",
            alignItems: "flex-start",
            gap: 20,
          }}
        >
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              alignItems: "flex-start",
              gap: 22,
              flex: 1,
            }}
          >
            <div
              style={{
                width: 90,
                height: 90,
                borderRadius: "50%",
                background: "#6f4ba2",
                color: "#fff",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: 34,
                fontWeight: 700,
                boxShadow: "0 18px 35px rgba(111, 75, 162, 0.18)",
                flexShrink: 0,
              }}
            >
              A
            </div>

            <div style={{ flex: 1, minWidth: 240 }}>
              <div
                style={{
                  display: "flex",
                  flexWrap: "wrap",
                  alignItems: "center",
                  gap: 14,
                }}
              >
                <h2
                  style={{
                    margin: 0,
                    fontSize: 34,
                    lineHeight: 1.05,
                    fontWeight: 700,
                    letterSpacing: "-0.04em",
                    color: "#231815",
                  }}
                >
                  Arjun Mehta
                </h2>
                <span
                  style={{
                    ...styles.pill,
                    background: "#f0e9fb",
                    color: "#6b43a4",
                    padding: "9px 14px",
                  }}
                >
                  GLYPH-MH-002847
                </span>
              </div>

              <div
                style={{
                  display: "flex",
                  flexWrap: "wrap",
                  gap: "12px 20px",
                  marginTop: 14,
                  color: "#5d5044",
                  fontSize: 15,
                }}
              >
                <span>34 yrs</span>
                <span>72 kg</span>
                <span>5&apos;9&quot;</span>
                <span>Male</span>
                <span>Mumbai, MH</span>
              </div>

              <div
                style={{
                  display: "flex",
                  flexWrap: "wrap",
                  gap: 10,
                  marginTop: 18,
                }}
              >
                <span
                  style={{
                    ...styles.pill,
                    border: "1px solid #f6c3bb",
                    background: "#fff3f1",
                    color: "#df4c36",
                  }}
                >
                  Penicillin Allergy
                </span>
                <span
                  style={{
                    ...styles.pill,
                    border: "1px solid #ddd1fb",
                    background: "#f5f0ff",
                    color: "#6a45a4",
                  }}
                >
                  B+ Blood
                </span>
                <span
                  style={{
                    ...styles.pill,
                    border: "1px solid #bfe2cd",
                    background: "#eefaf2",
                    color: "#227a45",
                  }}
                >
                  Organ Donor
                </span>
                <span
                  style={{
                    ...styles.pill,
                    border: "1px solid #f1d08a",
                    background: "#fff8ea",
                    color: "#cb7e08",
                  }}
                >
                  Diabetic Diet
                </span>
              </div>
            </div>
          </div>

          <div
            style={{
              ...styles.pill,
              background: "#ebf7f4",
              color: "#117c6b",
              padding: "10px 18px",
            }}
          >
            • Live Data
          </div>
        </div>
      </div>

      <div>
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-between",
            alignItems: "center",
            gap: 12,
            marginBottom: 16,
          }}
        >
          <h3
            style={{
              margin: 0,
              fontSize: 20,
              fontWeight: 700,
              color: "#231815",
              letterSpacing: "-0.03em",
            }}
          >
            Live Vitals Stream
          </h3>
          <div
            style={{
              ...styles.pill,
              background: "#ebf7f4",
              color: "#117c6b",
              padding: "10px 18px",
            }}
          >
            Novel Feature · Wearable Sync
          </div>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(150px, 1fr))",
            gap: 14,
          }}
        >
          {vitals.map((vital) => (
            <div
              key={vital.label}
              style={{
                ...styles.card,
                padding: "20px 18px",
                borderRadius: 22,
                textAlign: "center" as const,
              }}
            >
              <p
                style={{
                  margin: 0,
                  color: "#9f9183",
                  fontSize: 14,
                }}
              >
                {vital.label}
              </p>
              <p
                style={{
                  margin: "8px 0 0",
                  color: vital.color,
                  fontSize: 36,
                  fontWeight: 700,
                  letterSpacing: "-0.05em",
                  lineHeight: 1.05,
                }}
              >
                {vital.value}
              </p>
              <p
                style={{
                  margin: "6px 0 0",
                  color: "#9f9183",
                  fontSize: 14,
                }}
              >
                {vital.unit}
              </p>
            </div>
          ))}
        </div>
      </div>

      <div style={styles.card}>
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-between",
            alignItems: "flex-start",
            gap: 12,
          }}
        >
          <h3 style={{ ...styles.sectionTitle, fontSize: 16 }}>AI Clinical Summary</h3>
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: 14,
              alignItems: "center",
            }}
          >
            <span
              style={{
                ...styles.pill,
                background: "#f1eafb",
                color: "#6b43a4",
                padding: "8px 14px",
              }}
            >
              Glyph AI
            </span>
            <span style={{ color: "#a59a8d", fontSize: 14 }}>Generated 11:02 AM</span>
          </div>
        </div>

        <div style={{ marginTop: 22 }}>
          <p style={styles.eyebrow}>Clinical Overview</p>
          <p
            style={{
              margin: "14px 0 0",
              color: "#231815",
              fontSize: 18,
              lineHeight: 1.75,
            }}
          >
            34-year-old male, presenting with known Type 2 Diabetes (ICD 5A11), Stage 1
            Hypertension (BA00), and documented Penicillin allergy. Currently on
            Metformin 500mg and Amlodipine 5mg. No recent hospitalizations. Mild
            asthmatic — salbutamol as needed.
          </p>
        </div>

        <div style={{ marginTop: 18 }}>
          <p style={styles.eyebrow}>Immediate Cautions</p>

          <div
            style={{
              marginTop: 14,
              border: "1px solid #f6c3bb",
              background: "#fff4f2",
              borderRadius: 16,
              padding: "16px 18px",
            }}
          >
            <p
              style={{
                margin: 0,
                color: "#e04c37",
                fontSize: 17,
                fontWeight: 500,
                lineHeight: 1.5,
              }}
            >
              Avoid all penicillin-class antibiotics (Ampicillin, Amoxicillin,
              Piperacillin)
            </p>
            <p
              style={{
                margin: "6px 0 0",
                color: "#5d5044",
                fontSize: 15,
                lineHeight: 1.55,
              }}
            >
              Documented severe allergy — anaphylaxis risk. Use macrolide or
              fluoroquinolone alternatives.
            </p>
          </div>

          <div
            style={{
              marginTop: 12,
              border: "1px solid #efca75",
              background: "#fff8e8",
              borderRadius: 16,
              padding: "16px 18px",
            }}
          >
            <p
              style={{
                margin: 0,
                color: "#da8d12",
                fontSize: 17,
                fontWeight: 500,
                lineHeight: 1.5,
              }}
            >
              Blood glucose 148 mg/dL — elevated. Monitor for hypoglycemia during
              procedures.
            </p>
            <p
              style={{
                margin: "6px 0 0",
                color: "#5d5044",
                fontSize: 15,
                lineHeight: 1.55,
              }}
            >
              Patient is on Metformin. Avoid NPO orders &gt;4 hours without glucose
              monitoring protocol.
            </p>
          </div>
        </div>

        <div style={{ marginTop: 18 }}>
          <p style={styles.eyebrow}>Active Medications</p>
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: 10,
              marginTop: 12,
            }}
          >
            <span
              style={{
                ...styles.pill,
                background: "#eaf7f3",
                color: "#0d7d69",
                padding: "9px 14px",
              }}
            >
              Metformin 500mg · BD
            </span>
            <span
              style={{
                ...styles.pill,
                background: "#f1eafb",
                color: "#6b43a4",
                padding: "9px 14px",
              }}
            >
              Amlodipine 5mg · OD
            </span>
            <span
              style={{
                ...styles.pill,
                background: "#fff5e8",
                color: "#cb7e08",
                padding: "9px 14px",
              }}
            >
              Salbutamol · PRN
            </span>
          </div>
        </div>
      </div>

      <div>
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: 30,
            borderBottom: "1px solid #ddd2c6",
            paddingBottom: 0,
          }}
        >
          <button
            style={{
              border: 0,
              borderBottom: "2px solid #6b43a4",
              background: "transparent",
              color: "#5f399a",
              padding: "0 0 14px",
              fontSize: 16,
              fontWeight: 500,
              cursor: "pointer",
            }}
          >
            Medical History
          </button>
          <button
            style={{
              border: 0,
              background: "transparent",
              color: "#5d5044",
              padding: "0 0 14px",
              fontSize: 16,
              cursor: "pointer",
            }}
          >
            Proofs &amp; Prescriptions
          </button>
          <button
            style={{
              border: 0,
              background: "transparent",
              color: "#5d5044",
              padding: "0 0 14px",
              fontSize: 16,
              cursor: "pointer",
            }}
          >
            Clinical Notes
          </button>
        </div>
      </div>

      <div style={styles.card}>
        {history.map((item, index) => (
          <div
            key={item.title}
            style={{
              display: "grid",
              gridTemplateColumns: "100px 16px 1fr",
              gap: 18,
              paddingBottom: index === history.length - 1 ? 0 : 22,
              marginBottom: index === history.length - 1 ? 0 : 22,
              borderBottom:
                index === history.length - 1 ? "none" : "1px solid #ece1d6",
            }}
          >
            <p
              style={{
                margin: 0,
                color: "#9f9183",
                fontSize: 14,
              }}
            >
              {item.date}
            </p>
            <div
              style={{
                width: 14,
                height: 14,
                borderRadius: "50%",
                background: item.dot,
                marginTop: 4,
              }}
            />
            <div>
              <p
                style={{
                  margin: 0,
                  color: "#231815",
                  fontSize: 18,
                  lineHeight: 1.6,
                }}
              >
                {item.title}
              </p>
              <p
                style={{
                  margin: "4px 0 0",
                  color: "#117c6b",
                  fontSize: 15,
                  lineHeight: 1.5,
                }}
              >
                {item.note}
              </p>
            </div>
          </div>
        ))}
      </div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
          gap: 16,
        }}
      >
        <div style={styles.card}>
          <h3 style={styles.sectionTitle}>Known Conditions</h3>
          <ul
            style={{
              margin: "16px 0 0",
              paddingLeft: 18,
              color: "#4f4338",
              fontSize: 15,
              lineHeight: 1.8,
            }}
          >
            {conditions.map((condition) => (
              <li key={condition}>{condition}</li>
            ))}
          </ul>
        </div>

        <div
          style={{
            ...styles.card,
            border: "1px solid #f3c2bc",
            background: "#fff7f6",
          }}
        >
          <h3 style={{ ...styles.sectionTitle, color: "#df4c36" }}>
            Critical Allergies
          </h3>
          <ul
            style={{
              margin: "16px 0 0",
              paddingLeft: 18,
              color: "#b64334",
              fontSize: 15,
              lineHeight: 1.8,
            }}
          >
            {allergies.map((allergy) => (
              <li key={allergy}>{allergy}</li>
            ))}
          </ul>
        </div>
      </div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
          gap: 16,
        }}
      >
        <div style={styles.card}>
          <h3 style={styles.sectionTitle}>Current Medications</h3>
          <ul
            style={{
              margin: "16px 0 0",
              paddingLeft: 18,
              color: "#4f4338",
              fontSize: 15,
              lineHeight: 1.8,
            }}
          >
            {medications.map((medication) => (
              <li key={medication}>{medication}</li>
            ))}
          </ul>
        </div>

        <div style={styles.card}>
          <h3 style={styles.sectionTitle}>AI Clinical Insight</h3>
          <p
            style={{
              margin: "16px 0 0",
              color: "#4f4338",
              fontSize: 15,
              lineHeight: 1.8,
            }}
          >
            Patient shows signs of moderate risk due to hypertension and elevated
            glucose. Avoid beta-blockers and NSAIDs. Monitor oxygen and airway closely.
          </p>
        </div>
      </div>

      <div style={styles.card}>
        <h3 style={styles.sectionTitle}>Medical Reports</h3>

        <div style={{ display: "flex", flexDirection: "column", gap: 12, marginTop: 18 }}>
          <div
            style={{
              border: "1px solid #e8ddd1",
              background: "#fcfaf8",
              borderRadius: 22,
              padding: 16,
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "space-between",
              alignItems: "center",
              gap: 14,
            }}
          >
            <div>
              <p
                style={{
                  margin: 0,
                  fontSize: 18,
                  fontWeight: 500,
                  color: "#231815",
                }}
              >
                Chest X-Ray
              </p>
              <p
                style={{
                  margin: "4px 0 0",
                  fontSize: 14,
                  color: "#8f8175",
                }}
              >
                Date: 12 Feb 2026 • Status: Reviewed
              </p>
            </div>

            <a
              href="/reports/xray-demo.pdf"
              target="_blank"
              style={{
                borderRadius: 14,
                background: "#6b43a4",
                color: "#fff",
                textDecoration: "none",
                padding: "10px 16px",
                fontSize: 14,
                fontWeight: 500,
              }}
            >
              View
            </a>
          </div>

          <div
            style={{
              border: "1px solid #e8ddd1",
              background: "#fcfaf8",
              borderRadius: 22,
              padding: 16,
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "space-between",
              alignItems: "center",
              gap: 14,
            }}
          >
            <div>
              <p
                style={{
                  margin: 0,
                  fontSize: 18,
                  fontWeight: 500,
                  color: "#231815",
                }}
              >
                Brain MRI Scan
              </p>
              <p
                style={{
                  margin: "4px 0 0",
                  fontSize: 14,
                  color: "#8f8175",
                }}
              >
                Date: 03 Jan 2026 • Status: Critical Findings
              </p>
            </div>

            <a
              href="/reports/mri-demo.pdf"
              target="_blank"
              style={{
                borderRadius: 14,
                background: "#6b43a4",
                color: "#fff",
                textDecoration: "none",
                padding: "10px 16px",
                fontSize: 14,
                fontWeight: 500,
              }}
            >
              View
            </a>
          </div>
        </div>
      </div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
          gap: 12,
        }}
      >
        <button
          style={{
            border: "none",
            borderRadius: 18,
            background: "#231815",
            color: "#fff",
            padding: "14px 18px",
            fontSize: 14,
            fontWeight: 500,
            cursor: "pointer",
            boxShadow: "0 16px 30px rgba(35, 24, 21, 0.16)",
          }}
        >
          Download Report
        </button>
        <button
          style={{
            border: "1px solid #d9cdbf",
            borderRadius: 18,
            background: "#fff",
            color: "#4f4338",
            padding: "14px 18px",
            fontSize: 14,
            fontWeight: 500,
            cursor: "pointer",
            boxShadow: "0 12px 26px rgba(102, 72, 40, 0.08)",
          }}
        >
          Add Notes
        </button>
      </div>

      <div
        style={{
          paddingBottom: 8,
          textAlign: "center" as const,
          color: "#9f9183",
          fontSize: 12,
          lineHeight: 1.6,
        }}
      >
        © 2026 Mohammed Zia • All Rights Reserved
        <br />
        This system is for emergency assistance only.
      </div>
    </motion.div>
  );
}
