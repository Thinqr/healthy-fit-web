import type { Metadata } from "next";
import SocialRedirectPage from "@/components/SocialRedirectPage";

export const metadata: Metadata = {
  title: "Instagram Redirect | Healthy&Fit",
  robots: {
    index: false,
    follow: false,
  },
};

export default function InstagramRedirect() {
  return <SocialRedirectPage source="instagram" />;
}
