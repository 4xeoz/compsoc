import { getAllMembers } from "@/app/actions/Members";
import React from "react";
import { FaGlobe, FaInstagram, FaLinkedin } from "react-icons/fa";
import { member } from "@prisma/client";

const Section2 = async () => {
  const teamData = await getAllMembers();
  return (
    <div>
      <CardGrid teamData={teamData} />
    </div>
  );
};

export default Section2;

const CardGrid = ({ teamData }: { teamData: member[] }) => {
  const groupedMembers = teamData.reduce((acc: Record<number, member[]>, currentMember) => {
    if (!acc[currentMember.year]) {
      acc[currentMember.year] = [];
    }
    acc[currentMember.year].push(currentMember);
    return acc;
  }, {});

  const years = Object.keys(groupedMembers)
    .map(Number)
    .sort((a, b) => b - a);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center space-y-8">
      {years.map((year) => (
        <YearSection key={year} year={year.toString()} members={groupedMembers[year]} />
      ))}
    </div>
  );
};

const YearSection = ({ year, members }: { year: string; members: member[] }) => (
  <div className="w-full">
    <h1 className="font-bold text-center mb-6">
      {year} - {parseInt(year) - 1}
    </h1>
    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
      {members.map((member, index) => (
        <MemberCard key={index} member={member} />
      ))}
    </div>
  </div>
);

const MemberCard = ({ member }: { member: member }) => (
  <div className="relative rounded-sm bg-gradient-to-br from-[var(--Gradient-1)] to-[var(--Gradient-2)] shadow-lg p-4 flex flex-col items-center space-y-4 my-10">
    <img
      src={member.image || "/default.png"}
      alt={`${member.name} profile picture`}
      className="w-24 h-24 rounded-md absolute top-[-40px] object-cover border-foreground border-2"
    />
    <h3 className="text-lg font-bold text-center pt-12">{member.name}</h3>
    <p className="text-sm text-center">{member.position}</p>
    <SocialLinks member={member} />
  </div>
);

const SocialLinks = ({ member }: { member: member }) => {
  const links = [
    { href: member.instagram, icon: <FaInstagram />, label: "Instagram" },
    { href: member.website, icon: <FaGlobe />, label: "Website" },
    { href: member.linkedin, icon: <FaLinkedin />, label: "LinkedIn" },
  ];

  return (
    <div className="flex space-x-2">
      {links.map(
        (link, index) =>
          link.href && (
            <a
              key={index}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="w-6 h-6 text-foreground rounded-full flex items-center justify-center"
              aria-label={link.label}
            >
              {link.icon}
            </a>
          )
      )}
    </div>
  );
};
