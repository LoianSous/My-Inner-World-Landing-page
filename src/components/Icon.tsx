const PATHS = {
  note: ['M15.5 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V8.5Z', 'M15 3v4a2 2 0 0 0 2 2h4'],
  heart: [
    'M19 14c1.5-1.5 3-3.2 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.8 0-3 .5-4.5 2-1.5-1.5-2.7-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4 3 5.5l7 7Z',
  ],
  book: ['M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2Z', 'M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7Z'],
  chart: ['M3 3v18h18', 'm19 9-5 5-4-4-3 3'],
  user: ['M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2', 'M12 3a4 4 0 1 1 0 8 4 4 0 0 1 0-8Z'],
  lock: ['M5 11h14a2 2 0 0 1 2 2v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2Z', 'M7 11V7a5 5 0 0 1 10 0v4'],
  card: ['M4 5h16a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2Z', 'M2 10h20'],
  download: ['M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4', 'm7 10 5 5 5-5', 'M12 15V3'],
  sparkle: ['M12 3l1.9 5.1L19 10l-5.1 1.9L12 17l-1.9-5.1L5 10l5.1-1.9Z'],
  monitor: ['M4 3h16a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2Z', 'M8 21h8', 'M12 17v4'],
  offline: ['M2 2l20 20', 'M8.5 16.5a5 5 0 0 1 7 0', 'M5 12.9a10 10 0 0 1 5.2-2.8', 'M19 12.9a10 10 0 0 0-2.2-1.5', 'M12 20h.01'],
  check: ['M20 6 9 17l-5-5'],
  menu: ['M4 6h16', 'M4 12h16', 'M4 18h16'],
  close: ['M18 6 6 18', 'M6 6l12 12'],
  arrow: ['M5 12h14', 'm12 5 7 7-7 7'],
  mail: ['M4 4h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2Z', 'm22 6-10 7L2 6'],
} as const

export type IconName = keyof typeof PATHS

export function Icon({ name, className = 'size-5' }: { name: IconName; className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.75}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      {PATHS[name].map((d) => (
        <path key={d} d={d} />
      ))}
    </svg>
  )
}
