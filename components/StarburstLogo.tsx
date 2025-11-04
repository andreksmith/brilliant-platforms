export default function StarburstLogo({ size = 200 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 200 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <defs>
        <radialGradient id="starburst-gradient">
          <stop offset="0%" stopColor="#3B82F6" stopOpacity="0.3" />
          <stop offset="100%" stopColor="#3B82F6" stopOpacity="0" />
        </radialGradient>
      </defs>
      <circle cx="100" cy="100" r="80" fill="url(#starburst-gradient)" />
      {[...Array(16)].map((_, i) => {
        const angle = (i * 360) / 16
        const rad = (angle * Math.PI) / 180
        const x1 = 100
        const y1 = 100
        const x2 = 100 + Math.cos(rad) * 90
        const y2 = 100 + Math.sin(rad) * 90
        return (
          <line
            key={i}
            x1={x1}
            y1={y1}
            x2={x2}
            y2={y2}
            stroke="#3B82F6"
            strokeWidth="0.5"
            opacity="0.4"
          />
        )
      })}
      <circle cx="100" cy="100" r="4" fill="#3B82F6" />
    </svg>
  )
}
