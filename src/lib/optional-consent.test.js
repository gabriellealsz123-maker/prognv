import { afterEach, describe, expect, test } from "bun:test";
import { canMeasure, needsOptionalAnswer } from "./optional-consent";
import { readChoice, saveChoices } from "./consent";

const values = new Map();
const events = new EventTarget();
Object.defineProperty(globalThis, "localStorage", { configurable: true, value: {
  getItem: (key) => values.get(key) ?? null,
  setItem: (key, value) => values.set(key, value),
} });
Object.defineProperty(globalThis, "window", { configurable: true, value: events });
Object.defineProperty(globalThis, "navigator", { configurable: true, value: { globalPrivacyControl: false } });
Object.defineProperty(globalThis, "fetch", { configurable: true, value: async () => ({ ok: false }) });
afterEach(() => { values.clear(); navigator.globalPrivacyControl = false; });

describe("explicit optional consent", () => {
  test("optional analytics is off before a valid choice", async () => { expect(await canMeasure()).toBe(false); expect(await needsOptionalAnswer()).toBe(true); });
  test("acceptance permits analytics but not advertising", async () => { saveChoices({ analytics: "granted" }); expect(await canMeasure()).toBe(true); expect(readChoice("advertising")).toBe(null); });
  test("withdrawal overrides acceptance", async () => { saveChoices({ analytics: "granted" }); saveChoices({ analytics: "denied" }); expect(await canMeasure()).toBe(false); });
  test("GPC overrides a stored grant", async () => { saveChoices({ analytics: "granted" }); navigator.globalPrivacyControl = true; expect(await canMeasure()).toBe(false); expect(await needsOptionalAnswer()).toBe(false); });
  test("expired acceptance does not permit measurement", async () => { values.set("cookie_consent_analytics", JSON.stringify({ choice: "granted", at: Date.now() - 366 * 86400000 })); expect(await canMeasure()).toBe(false); });
});
