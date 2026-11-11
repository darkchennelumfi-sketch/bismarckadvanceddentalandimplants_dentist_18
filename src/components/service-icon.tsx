import {
  AlignCenter,
  Anchor,
  Bone,
  CircleDot,
  Crown,
  FlaskConical,
  GitBranch,
  Grid2X2,
  HeartPulse,
  Layers,
  Lock,
  Moon,
  RefreshCw,
  Scissors,
  ShieldCheck,
  Siren,
  Smile,
  Sparkles,
  Users,
  Wind,
  type LucideIcon,
} from "lucide-react";

import type { ServiceIcon as ServiceIconName } from "@/data/services";

const icons: Record<ServiceIconName, LucideIcon> = {
  anchor: Anchor,
  "circle-dot": CircleDot,
  grid: Grid2X2,
  layers: Layers,
  smile: Smile,
  lock: Lock,
  refresh: RefreshCw,
  wind: Wind,
  bone: Bone,
  flask: FlaskConical,
  users: Users,
  shield: ShieldCheck,
  sparkles: Sparkles,
  moon: Moon,
  siren: Siren,
  scissors: Scissors,
  crown: Crown,
  branch: GitBranch,
  align: AlignCenter,
  "heart-pulse": HeartPulse,
};

export function ServiceIcon({
  name,
  className,
}: {
  name: ServiceIconName;
  className?: string;
}) {
  const Icon = icons[name];
  return <Icon className={className} strokeWidth={1.6} aria-hidden="true" />;
}
