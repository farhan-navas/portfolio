// components/Snowfall.tsx
export default function Snowfall() {
  return (
    <div className="snowflakes" aria-hidden="true">
      {Array.from({ length: 8 }).map((_, i) => (
        <div className="snowflake text-maintext dark:text-white" key={i}>
          <div className="inner">❅</div>
        </div>
      ))}
    </div>
  );
}
