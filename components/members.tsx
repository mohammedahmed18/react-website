import Image from "next/image";
import React, { useState } from "react";

const Members: React.FC = () => {
  const [members] = useState([
    {
      name: "marc",
      link: "https://artstation.com/mohammed_ahmed",
      link_name: "mo_art",
    },
    {
      name: "mo",
      link: "https://artstation.com/mohammed_ahmed",
      link_name: "mo_art",
    },
  ]);
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {members.map((m) => (
        <div key={m.name} className="text-center">
          <Image src={`/assets/${m.name}.svg`} width="1366" height="1555" />
          <span>{m.name}</span>
          <a href={m.link} target="_blank" className="block">
            @{m.link_name}
          </a>
        </div>
      ))}
    </div>
  );
};

export default Members;
