"use client";

import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  ResponsiveContainer,
} from "recharts";

const data = [
  { subject: "國文", A: 11, fullMark: 100 },
  { subject: "英文", A: 8, fullMark: 100 },
  { subject: "數A", A: 9, fullMark: 100 },
  { subject: "自然", A: 11, fullMark: 100 },
  { subject: "社會", A: 11, fullMark: 100 },
  { subject: "數B", A: 14, fullMark: 100 },
];

export default function RadarChartComponent() {
  return (
    <ResponsiveContainer width="100%" height={400}>
      <RadarChart cx="50%" cy="50%" outerRadius="80%" data={data}>
        <PolarGrid />
        <PolarAngleAxis dataKey="subject" />
        <PolarRadiusAxis angle={30} domain={[0, 15]} />
        <Radar
          name="Score"
          dataKey="A"
          stroke="#8884d8"
          fill="#8884d8"
          fillOpacity={0.6}
        />
      </RadarChart>
    </ResponsiveContainer>
  );
}
