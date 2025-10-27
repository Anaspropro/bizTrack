import React from "react";
import { Container } from "@/components/ui/Container";
import { cn } from "@/lib/utils";

interface SectionProps extends React.HTMLAttributes<HTMLElement> {
  children: React.ReactNode;
  variant?: "default" | "muted" | "primary";
  padding?: "sm" | "md" | "lg" | "xl";
  containerSize?: "sm" | "md" | "lg" | "xl" | "full";
}

export const Section: React.FC<SectionProps> = ({
  children,
  variant = "default",
  padding = "lg",
  containerSize = "lg",
  className,
  ...props
}) => {
  const variants = {
    default: "bg-background",
    muted: "bg-muted",
    primary: "bg-primary text-white",
  };

  const paddings = {
    sm: "py-8",
    md: "py-12",
    lg: "py-16",
    xl: "py-24",
  };

  return (
    <section
      className={cn(variants[variant], paddings[padding], className)}
      {...props}
    >
      <Container size={containerSize}>{children}</Container>
    </section>
  );
};

export default Section;
