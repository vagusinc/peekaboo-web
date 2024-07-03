import type { MetaFunction } from "@remix-run/node";

import { LoginForm } from "~/features/auth/components";
import { Typography } from "~/shared/components/base";
import { TextLogo } from "~/shared/components/icons";

export const meta: MetaFunction = () => {
  return [
    { title: "Peekaboo" },
    { name: "description", content: "Welcome to Peekaboo!" },
  ];
};

export default function Index() {
  return (
    <div className="h-full flex flex-col items-center justify-center">
      <div className="w-[40vw] max-w-sm mb-20">
        <div className="flex justify-center mb-16">
          <TextLogo />
        </div>
        <div className="mb-8">
          <Typography variant="H3">Login</Typography>
          <Typography>enter your login details</Typography>
        </div>
        <LoginForm />
      </div>
    </div>
  );
}
