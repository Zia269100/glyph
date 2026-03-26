import { profile } from "@/lib/data";

export default function Dashboard() {
  return (
    <div className="max-w-md mx-auto p-4">

      <h1 className="text-2xl font-bold mb-4">
        Good morning, {profile.name}
      </h1>

      {/* STATS */}
      <div className="grid grid-cols-2 gap-3">
        <Card title="Conditions" value="4" />
        <Card title="Medications" value="3" />
        <Card title="Documents" value="12" />
        <Card title="Ring Health" value="100%" />
      </div>

      {/* RING STATUS */}
      <div className="bg-white p-4 rounded-2xl shadow mt-4">
        <h3 className="font-semibold">Ring Active & Broadcasting</h3>
        <p className="text-sm text-gray-500">
          NTAG216 • AES-256 Token
        </p>

        <button className="mt-3 bg-green-600 text-white px-4 py-2 rounded-lg">
          Sync Ring
        </button>
      </div>

      {/* CONDITIONS */}
      <div className="bg-white p-4 rounded-2xl shadow mt-4">
        <h3 className="font-semibold mb-2">Active Conditions</h3>
        <p>Type 2 Diabetes</p>
        <p>Hypertension</p>
      </div>
    </div>
  );
}

function Card({ title, value }: any) {
  return (
    <div className="bg-white p-4 rounded-xl shadow">
      <p className="text-sm text-gray-500">{title}</p>
      <h2 className="text-xl font-bold">{value}</h2>
    </div>
  );
}