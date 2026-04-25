'use client';

import { useEffect } from 'react';
import posthog from 'posthog-js';

export function ManageSubscriptionTracker() {
  useEffect(() => {
    posthog.capture('manage_subscription_viewed');
  }, []);

  return null;
}

export function PlatformSubscriptionLink({
  href,
  platform,
  children,
  className,
}: {
  href: string;
  platform: 'app_store' | 'google_play';
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      onClick={() => posthog.capture('manage_subscription_platform_clicked', { platform })}
      className={className}
    >
      {children}
    </a>
  );
}
