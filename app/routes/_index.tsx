import type { MetaFunction } from "@remix-run/node";

export const meta: MetaFunction = () => {
  return [
    { title: "Peekaboo" },
    { name: "description", content: "Welcome to Peekaboo!" },
  ];
};

export default function Index() {
  return <div className="text-3xl">hello world</div>;
}
