import { cn } from "@/lib/utils";
import React from "react";

interface PlaceholderProps {
  children: React.ReactNode;
  className?: string;
}

const Placeholder = ({ children, className }: PlaceholderProps) => {
  return (
    <div
      className={cn(
        "flex h-full w-full items-center justify-center rounded-lg border border-dashed bg-muted p-4 text-center text-muted-foreground",
        className
      )}
    >
      {children}
    </div>
  );
};

export default Placeholder;