import { useState } from "react";
import { ChevronDown, Users } from "lucide-react";

const MANAGER_TRACK = [
  {
    code: "M6",
    title: "VP Position",
    tag: "Senior Director",
    body: "Manages senior leaders who are responsible for the success of their functions. Leads one functional business unit within the company.",
  },
  {
    code: "M5",
    title: "Director",
    tag: "Director",
    body: "Manages at least two or more teams or sub-teams via other managers.",
  },
  {
    code: "M4",
    title: "Head",
    tag: "Senior Manager",
    body: "Manages individual contributors and potentially other managers.",
  },
  {
    code: "M3",
    title: "Manager",
    tag: "Manager",
    body: "Provides direct supervision to individual contributors and is held accountable for the output of their team. Identifies and scopes their team's work in partnership with functional leadership.",
  },
];

const IC_TRACK = [
  {
    code: "P6",
    title: "Principal",
    tag: "Principal",
    body: "Identifies, defines, and translates company vision and goals into functional projects and direction for lower levels. Sets objectives for team leaders according to business needs. Receives regular updates at key milestones on each project.",
  },
  {
    code: "P5",
    title: "Staff",
    tag: "Expert",
    body: "Leads large, high-priority, cross-functional, strategic projects, driving multiple decisions that have significant impact on the company's direction and growth. Receives regular updates at key milestones and is a stakeholder in company direction.",
  },
  {
    code: "P4",
    title: "Senior / Lead",
    tag: "Senior",
    body: "Leads small project teams, provides direction, and keeps stakeholders informed. Determines key milestones and provides updates and check-ins to relevant teams and partners.",
  },
  {
    code: "P3",
    title: "Middle / Senior",
    tag: "Career",
    body: "Owns small or function-specific projects. Provides updates and receives input at key milestones within each project.",
  },
  {
    code: "P2",
    title: "Middle",
    tag: "Developing",
    body: "Contributes to large, cross-functional company projects. Provides regular updates and receives input within each project.",
  },
  {
    code: "P1",
    title: "Junior",
    tag: "Entry",
    body: "Contributes to small or function-specific projects. Receives regular guidance and check-ins within each project.",
  },
];

function LevelCard({ level, isOpen, onToggle, accent }) {
  return (
    <div
      className="relative rounded-2xl transition-colors duration-300"
      style={{
        backgroundColor: isOpen ? "#FFFFFF" : "#FAF7F1",
        border: `1px solid ${isOpen ? accent : "#E7E0D4"}`,
      }}
    >
      <button
        onClick={onToggle}
        className="w-full flex items-center gap-4 text-left px-5 py-4 sm:px-6 sm:py-5"
      >
        <span
          className="flex-shrink-0 w-11 h-11 rounded-full flex items-center justify-center font-serif text-sm"
          style={{
            backgroundColor: isOpen ? accent : "#F1EBDD",
            color: isOpen ? "#FFFFFF" : "#4A4238",
            transition: "background-color 300ms, color 300ms",
          }}
        >
          {level.code}
        </span>
        <span className="flex-1 min-w-0">
          <span className="block font-serif text-lg sm:text-xl text-[#241E1A] leading-tight">
            {level.title}
          </span>
          <span className="block text-sm text-[#8A8073] mt-0.5">
            {level.tag}
          </span>
        </span>
        <ChevronDown
          className="flex-shrink-0 w-5 h-5 transition-transform duration-300"
          style={{
            color: accent,
            transform: isOpen ? "rotate(180deg)" : "rotate(0deg)",
          }}
        />
      </button>
      <div
        className="grid transition-all duration-300 ease-out"
        style={{
          gridTemplateRows: isOpen ? "1fr" : "0fr",
          opacity: isOpen ? 1 : 0,
        }}
      >
        <div className="overflow-hidden">
          <p className="px-5 sm:px-6 pb-5 sm:pb-6 pl-[4.25rem] sm:pl-[4.75rem] text-[15px] leading-relaxed text-[#4A4238]">
            {level.body}
          </p>
        </div>
      </div>
    </div>
  );
}

function Track({ title, count, levels, accent, openCode, setOpenCode, trackId }) {
  return (
    <div className="flex-1 min-w-0">
      <div className="flex items-baseline justify-between mb-5 px-1">
        <h2 className="font-serif text-2xl text-[#241E1A]">{title}</h2>
        <span className="flex items-center gap-1.5 text-sm text-[#8A8073]">
          <Users className="w-3.5 h-3.5" />
          {count}
        </span>
      </div>
      <div className="flex flex-col gap-3">
        {levels.map((level) => {
          const id = `${trackId}-${level.code}`;
          return (
            <LevelCard
              key={id}
              level={level}
              accent={accent}
              isOpen={openCode === id}
              onToggle={() => setOpenCode(openCode === id ? null : id)}
            />
          );
        })}
      </div>
    </div>
  );
}

export default function CareerLevels() {
  const [openCode, setOpenCode] = useState("mgr-M3");

  return (
    <div
      className="min-h-screen w-full"
      style={{ backgroundColor: "#F6F2EA", fontFamily: "Georgia, 'Times New Roman', serif" }}
    >
      <style>{`
        .font-serif { font-family: 'Iowan Old Style', 'Palatino Linotype', Georgia, serif; }
        * { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif; }
        .font-serif, .font-serif * { font-family: 'Iowan Old Style', 'Palatino Linotype', Georgia, serif; }
      `}</style>
      <div className="max-w-4xl mx-auto px-5 sm:px-8 py-14 sm:py-20">
        <div className="mb-14">
          <p className="text-xs tracking-wide text-[#A38F5E] mb-3">Level Tracks</p>
          <h1 className="font-serif text-4xl sm:text-5xl text-[#241E1A] leading-tight">
            Where you stand,<br />and where you can go
          </h1>
          <p className="text-[15px] text-[#8A8073] mt-4 max-w-md">
            Two paths, six steps each. Click a level to see what it means.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-10 lg:gap-12">
          <Track
            title="Manager Track"
            count={20}
            levels={MANAGER_TRACK}
            accent="#7A1F52"
            openCode={openCode}
            setOpenCode={setOpenCode}
            trackId="mgr"
          />
          <Track
            title="Individual Contributor"
            count={241}
            levels={IC_TRACK}
            accent="#3D6B52"
            openCode={openCode}
            setOpenCode={setOpenCode}
            trackId="ic"
          />
        </div>
      </div>
    </div>
  );
}
