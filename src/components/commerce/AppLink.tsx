import { Link } from "@tanstack/react-router";
import type { ComponentProps, ReactNode } from "react";

type LinkProps = ComponentProps<typeof Link>;

/**
 * Thin wrapper so route paths coming from data files (typed as `string`) can be
 * passed to TanStack Router's strictly-typed `to` prop.
 */
export function AppLink({
  to,
  children,
  ...rest
}: { to: string; children?: ReactNode } & Omit<LinkProps, "to" | "children">) {
  return (
    <Link to={to as LinkProps["to"]} {...rest}>
      {children}
    </Link>
  );
}
