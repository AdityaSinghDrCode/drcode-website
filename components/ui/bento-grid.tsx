import { type ComponentPropsWithoutRef, type ReactNode } from "react";
import { ArrowRightIcon } from "@radix-ui/react-icons";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

interface BentoGridProps extends ComponentPropsWithoutRef<"div"> {
  children: ReactNode;
  className?: string;
}

interface BentoCardProps extends ComponentPropsWithoutRef<"div"> {
  name: string;
  className: string;
  background: ReactNode;
  Icon: React.ElementType;
  description: string;
  href?: string;
  cta?: string;
}

const BentoGrid = ({ children, className, ...props }: BentoGridProps) => {
  return (
    <div
      className={cn(
        "grid w-full auto-rows-auto md:auto-rows-[9rem] grid-cols-1 md:grid-cols-2 gap-4",
        className,
      )}
      {...props}
    >
      {children}
    </div>
  );
};

const BentoCard = ({
  name,
  className,
  background,
  Icon,
  description,
  href,
  cta,
  ...props
}: BentoCardProps) => (
  <div
    key={name}
    className={cn(
      "group relative col-span-1 flex flex-col justify-between overflow-hidden rounded-xl",
      // light styles
      "bg-card border border-border hover:border-brand/50",
      // dark styles
      "dark:bg-background dark:border-gray-800",
      // smooth transitions
      "transition-all duration-200 ease-out hover:shadow-lg",
      className,
    )}
    {...props}
  >
    <div>{background}</div>
    <div className="p-4">
      <div
        className={cn(
          "pointer-events-none z-10 flex transform-gpu flex-col gap-1 transition-all duration-200 ease-out",
          href && cta && "lg:group-hover:-translate-y-10",
        )}
      >
        <Icon className="h-10 w-10 origin-left transform-gpu text-foreground transition-all duration-200 ease-out group-hover:scale-90 group-hover:text-brand" />
        <h3 className="type-card-title text-foreground">{name}</h3>
        <p className="type-body max-w-lg text-muted-foreground">
          {description}
        </p>
      </div>

      {href && cta && (
        <div
          className={cn(
            "pointer-events-none flex w-full translate-y-0 transform-gpu flex-row items-center transition-all duration-200 ease-out group-hover:translate-y-0 group-hover:opacity-100 lg:hidden",
          )}
        >
          <Button
            variant="link"
            size="sm"
            className="pointer-events-auto p-0 text-foreground hover:text-brand"
            render={<a href={href} />}
            nativeButton={false}
          >
            {cta}
            <ArrowRightIcon className="ms-2 h-4 w-4 rtl:rotate-180" />
          </Button>
        </div>
      )}
    </div>

    {href && cta && (
      <div
        className={cn(
          "pointer-events-none absolute bottom-0 hidden w-full translate-y-10 transform-gpu flex-row items-center p-4 opacity-0 transition-all duration-200 ease-out group-hover:translate-y-0 group-hover:opacity-100 lg:flex",
        )}
      >
        <Button
          variant="link"
          size="sm"
          className="pointer-events-auto p-0 text-foreground hover:text-brand"
          render={<a href={href} />}
          nativeButton={false}
        >
          {cta}
          <ArrowRightIcon className="ms-2 h-4 w-4 rtl:rotate-180" />
        </Button>
      </div>
    )}

    <div className="pointer-events-none absolute inset-0 transform-gpu transition-all duration-200 ease-out group-hover:bg-brand/[0.03]" />
  </div>
);

export { BentoCard, BentoGrid };
