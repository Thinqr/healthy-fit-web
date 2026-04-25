"use client";

import posthog from "posthog-js";
import { useEffect, useRef } from "react";
import { useSearchParams } from "next/navigation";

type SocialSource = "instagram" | "tiktok";

type SocialRedirectPageProps = {
  source: SocialSource;
};

const IOS_APP_STORE_URL =
  process.env.NEXT_PUBLIC_APP_STORE_URL ??
  "https://apps.apple.com/app/id6760506169";
const GOOGLE_PLAY_URL = process.env.NEXT_PUBLIC_PLAY_STORE_URL;
const UTM_KEYS = [
  "utm_source",
  "utm_medium",
  "utm_campaign",
  "utm_term",
  "utm_content",
] as const;

function resolveDestination(userAgent: string) {
  const ua = userAgent.toLowerCase();
  if (/android/.test(ua) && GOOGLE_PLAY_URL) {
    return GOOGLE_PLAY_URL;
  }

  if (/iphone|ipad|ipod/.test(ua)) {
    return IOS_APP_STORE_URL;
  }

  return IOS_APP_STORE_URL;
}

export default function SocialRedirectPage({ source }: SocialRedirectPageProps) {
  const searchParams = useSearchParams();
  const hasProcessed = useRef(false);

  useEffect(() => {
    if (hasProcessed.current) {
      return;
    }
    hasProcessed.current = true;

    const params = new URLSearchParams(searchParams.toString());
    if (!params.has("utm_source")) {
      params.set("utm_source", source);
    }

    const attribution: Record<string, string> = {
      source,
      landing_path: `/${source}`,
      ts: new Date().toISOString(),
    };

    UTM_KEYS.forEach((key) => {
      const value = params.get(key);
      if (value) {
        attribution[key] = value;
      }
    });

    const clickIds = ["ttclid", "gclid", "fbclid"];
    clickIds.forEach((key) => {
      const value = params.get(key);
      if (value) {
        attribution[key] = value;
      }
    });

    if (typeof document !== "undefined") {
      attribution.referrer = document.referrer || "direct";
    }

    const payload = JSON.stringify(attribution);

    try {
      localStorage.setItem("hf_attribution", payload);
      document.cookie = `hf_attribution=${encodeURIComponent(payload)}; path=/; max-age=7776000; samesite=lax`;
    } catch (error) {
      console.warn("Failed to persist attribution", error);
    }

    posthog.capture("social_redirect_opened", attribution);

    const destination = resolveDestination(navigator.userAgent);
    window.setTimeout(() => {
      window.location.replace(destination);
    }, 150);
  }, [searchParams, source]);

  return (
    <main className="min-h-screen bg-white flex items-center justify-center px-6">
      <div className="text-center max-w-md">
        <h1 className="text-2xl font-extrabold text-ink tracking-tight">
          Redirecting you to Healthy&Fit...
        </h1>
        <p className="text-mist mt-3">
          If nothing happens in a moment, please refresh this page.
        </p>
      </div>
    </main>
  );
}
