import type { ComponentProps } from "react";
import {
  Activity,
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  Binary,
  Check,
  CheckCircle2,
  ChevronDown,
  CircleAlert,
  CircleHelp,
  Code2,
  Compass,
  Database,
  FileText,
  GitBranch,
  Layers3,
  Menu,
  Scale,
  ShieldCheck,
  Sparkles,
  Terminal,
  TrendingUp,
  Users,
  Zap,
} from "lucide-react";

type LucideProps = ComponentProps<typeof Activity>;

const icons = {
  activity: Activity,
  "alert-circle": CircleAlert,
  "arrow-left": ArrowLeft,
  "arrow-right": ArrowRight,
  "arrow-up-right": ArrowUpRight,
  "bayes-logo": Binary,
  bolt: Zap,
  check: Check,
  "check-circle": CheckCircle2,
  "chevron-down": ChevronDown,
  code: Code2,
  compass: Compass,
  database: Database,
  "file-text": FileText,
  "git-branch": GitBranch,
  layers: Layers3,
  menu: Menu,
  scale: Scale,
  "shield-check": ShieldCheck,
  sparkles: Sparkles,
  terminal: Terminal,
  "trending-up": TrendingUp,
  users: Users,
} as const;

export type IconName = keyof typeof icons;

/** Maps the small, stable icon vocabulary used by the marketing site to Lucide. */
export function Icon({ name, size = 20, ...props }: { name: IconName | string; size?: number | string } & LucideProps) {
  const Glyph = icons[name as IconName] ?? CircleHelp;
  return <Glyph size={size} aria-hidden="true" {...props} />;
}
