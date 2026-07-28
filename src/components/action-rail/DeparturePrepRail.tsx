"use client";

import {
  DEPARTURE_PREP_BEHAVIOR,
  DEPARTURE_PREP_CONTENT,
  DEPARTURE_PREP_VISIBILITY,
} from "@/lib/action-rail/departure-prep";
import { ActionRail } from "./ActionRail";

/** Site preset: Hidden China Travel departure prep action rail */
export function DeparturePrepRail() {
  return (
    <ActionRail
      content={DEPARTURE_PREP_CONTENT}
      visibility={DEPARTURE_PREP_VISIBILITY}
      behavior={DEPARTURE_PREP_BEHAVIOR}
    />
  );
}

export default DeparturePrepRail;
