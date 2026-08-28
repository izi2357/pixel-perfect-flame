import { Link } from "@tanstack/react-router";
import type { ReactNode } from "react";

type AppLinkProps = {
  to: string;
  children?: ReactNode;
  className?: string;
  onClick?: () => void;
  "aria-label"?: string;
};

/**
 * Thin wrapper so route paths coming from data files (typed as `string`) can be
 * passed to TanStack Router's strictly-typed `to` prop.
 */
const LooseLink = Link as unknown as (props: AppLinkProps) => ReactNode;

export function AppLink(props: AppLinkProps) {
  return <LooseLink {...props} />;
}
