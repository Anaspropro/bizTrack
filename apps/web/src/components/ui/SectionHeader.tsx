import React from "react";
import { Typography } from "./Typography"
import { cn } from "@/lib/utils";

interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  className?: string;
  titleClassName?: string;
  subtitleClassName?: string;
  centered?: boolean;
}

export const SectionHeader: React.FC<SectionHeaderProps> = ({
  title,
  subtitle,
  className,
  titleClassName,
  subtitleClassName,
  centered = true,
}) => {
  return (
    <div className={cn("mb-10", centered && "text-center", className)}>
      <div className="relative inline-block">
        <Typography variant="h2" className={cn("mb-4", titleClassName)}>
          {title}
        </Typography>
        {/* Accent bottom border line */}
        <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-16 h-0.5 bg-accent rounded-full"></div>
      </div>
      {subtitle && (
        <Typography variant="lead" className={cn("mt-6", subtitleClassName)}>
          {subtitle}
        </Typography>
      )}
    </div>
  );
};

export default SectionHeader;
