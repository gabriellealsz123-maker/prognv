import { applySignals, canTrack, needsAnswer, onConsentChange, readChoice } from "./consent";

/** Optional measurement always requires an explicit, current grant, worldwide. */
export async function canMeasure(): Promise<boolean> {
  return readChoice("analytics") === "granted" && await canTrack("analytics");
}

export async function needsOptionalAnswer(): Promise<boolean> {
  if ((navigator as Navigator & { globalPrivacyControl?: boolean }).globalPrivacyControl) return false;
  return readChoice("analytics") === null || await needsAnswer(["analytics"]);
}

export function onOptionalChange(listener: () => void): () => void {
  return onConsentChange(() => {
    // The shared module restores regional signals; override its no-answer fallback.
    void canTrack("analytics").then(() => {
      applySignals("analytics", readChoice("analytics") ?? "denied");
      applySignals("advertising", "denied");
      listener();
    });
  });
}