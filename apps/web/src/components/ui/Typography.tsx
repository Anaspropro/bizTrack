import React from "react";
import { cn } from "@/lib/utils";

type TypographyElement = "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p" | "span";
type TypographyVariant =
  | "h1"
  | "h2"
  | "h3"
  | "h4"
  | "h5"
  | "h6"
  | "body"
  | "lead"
  | "small"
  | "muted";

interface TypographyProps extends React.HTMLAttributes<HTMLElement> {
  children: React.ReactNode;
  as?: TypographyElement;
  variant?: TypographyVariant;
}

export const Typography: React.FC<TypographyProps> = ({
  children,
  as,
  variant = "body",
  className,
  ...props
}) => {
  const Component = as || getDefaultElement(variant);

  const variants = {
    h1: "text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-foreground",
    h2: "text-2xl md:text-3xl lg:text-4xl font-bold tracking-tight text-foreground",
    h3: "text-xl md:text-2xl font-bold tracking-tight text-foreground",
    h4: "text-lg md:text-xl font-semibold tracking-tight text-foreground",
    h5: "text-base md:text-lg font-semibold tracking-tight text-foreground",
    h6: "text-sm md:text-base font-semibold tracking-tight text-foreground",
    body: "text-base text-foreground leading-relaxed",
    lead: "text-lg md:text-xl text-muted-foreground leading-relaxed",
    small: "text-sm text-muted-foreground",
    muted: "text-muted-foreground",
  };

  return (
    <Component className={cn(variants[variant], className)} {...props}>
      {children}
    </Component>
  );
};

function getDefaultElement(variant: TypographyVariant): TypographyElement {
  switch (variant) {
    case "h1":
    case "h2":
    case "h3":
    case "h4":
    case "h5":
    case "h6":
      return variant;
    case "lead":
    case "body":
      return "p";
    case "small":
    case "muted":
      return "span";
    default:
      return "p";
  }
}

export default Typography;
