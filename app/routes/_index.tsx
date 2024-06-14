import type { MetaFunction } from "@remix-run/node";
import { Link } from "@remix-run/react";

export const meta: MetaFunction = () => {
  return [
    { title: "Peekaboo" },
    { name: "description", content: "Welcome to Peekaboo!" },
  ];
};

export default function Index() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
      }}
    >
      Home Page
      <Link to="onboarding">Link to Onboarding page</Link>
    </div>
  );
}
