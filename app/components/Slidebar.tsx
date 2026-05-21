"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

type NavItem = {
  name: string;
  path: string;
};

const navItems: NavItem[] = [
  { name: "Dashboard", path: "/dashboard" },
  { name: "History", path: "/dashboard/history" },
  { name: "Templates", path: "/dashboard/templates" },
  { name: "Integrations", path: "/dashboard/integrations" },
  { name: "Settings", path: "/dashboard/settings" },
];

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <div className="w-64 bg-black border-r border-gray-800 p-4">
      <h1 className="text-xl font-bold text-orange-500 mb-6">
        MailPilot
      </h1>

      <nav className="space-y-2">
        {navItems.map((item) => {
          const active = pathname === item.path;

          return (
            <Link
              key={item.name}
              href={item.path}
              className={`block px-4 py-2 rounded-lg ${
                active
                  ? "bg-orange-500 text-white"
                  : "text-gray-400 hover:bg-gray-800 hover:text-white"
              }`}
            >
              {item.name}
            </Link>
          );
        })}
      </nav>
    </div>
  );
}