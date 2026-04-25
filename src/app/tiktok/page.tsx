import type { Metadata } from "next";
import SocialRedirectPage from "@/components/SocialRedirectPage";

export const metadata: Metadata = {
  title: "TikTok Redirect | Healthy&Fit",
  robots: {
    index: false,
    follow: false,
  },
};

export default function TikTokRedirect() {
  return <SocialRedirectPage source="tiktok" />;
}
