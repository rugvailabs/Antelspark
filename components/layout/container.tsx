import { cn } from "@/lib/utils";

type ContainerProps = React.HTMLAttributes<HTMLDivElement>;

/** Site-wide content container: 1400px max width with fluid gutters. */
export function Container({ className, ...props }: ContainerProps) {
  return (
    <div
      className={cn("mx-auto w-full max-w-[1400px] px-5 sm:px-8 lg:px-12", className)}
      {...props}
    />
  );
}
