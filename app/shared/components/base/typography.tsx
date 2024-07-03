import { PropsWithChildren } from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "~/shared/utils/tailwindHelpers";

const typographyVariants = cva("text-black", {
  variants: {
    variant: {
      paragraph: "font-normal text-sm",
      H3: "font-semibold text-3xl",
    },
  },
  defaultVariants: {
    variant: "paragraph",
  },
});

export interface TypographyProps
  extends React.HTMLAttributes<HTMLParagraphElement>,
    VariantProps<typeof typographyVariants> {}

const Typography = ({
  variant,
  className,
  children,
}: PropsWithChildren<TypographyProps>) => {
  return (
    <p className={cn(typographyVariants({ variant, className }))}>{children}</p>
  );
};

export { Typography };
