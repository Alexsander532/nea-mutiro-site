type IconProps = {
  className?: string;
};

export function InstagramIcon({ className }: IconProps) {
  return (
    <svg
      aria-hidden="true"
      className={className}
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
    </svg>
  );
}

export function YoutubeIcon({ className }: IconProps) {
  return (
    <svg aria-hidden="true" className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M21.58 7.19a2.98 2.98 0 0 0-2.1-2.11C17.63 4.58 12 4.58 12 4.58s-5.63 0-7.48.5a2.98 2.98 0 0 0-2.1 2.11C1.92 9.04 1.92 12 1.92 12s0 2.96.5 4.81a2.98 2.98 0 0 0 2.1 2.11c1.85.5 7.48.5 7.48.5s5.63 0 7.48-.5a2.98 2.98 0 0 0 2.1-2.11c.5-1.85.5-4.81.5-4.81s0-2.96-.5-4.81Z" />
      <path d="m10 15.5 5-3.5-5-3.5v7Z" fill="var(--cream, #fbfbe2)" />
    </svg>
  );
}
