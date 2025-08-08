import { Tech } from "../projects/projects";

interface StackPillsProps {
  stack?: Tech[];
}

export default function StackPills({ stack }: StackPillsProps) {
  return (
    <div className="mt-2 flex flex-wrap gap-3">
      {stack?.map((t) => {
        const Icon = t.icon;
        return (
          <div
            key={t.name}
            className="inline-flex items-center gap-3 rounded-xl border border-border bg-card px-4 py-2 shadow-sm transition hover:shadow-md"
            title={t.name}
          >
            {Icon && (
              <div
                className="flex h-7 w-7 items-center justify-center rounded-md border"
                style={{
                  backgroundColor: t.color
                    ? `${t.color}20`
                    : "hsl(var(--muted))", // ~12% alpha
                  borderColor: t.color ? `${t.color}40` : "hsl(var(--border))", // ~25% alpha
                }}
              >
                <Icon
                  size={16}
                  style={{ color: t.color ?? "currentColor" }}
                  aria-hidden
                />
              </div>
            )}
            <span className="text-sm font-medium text-foreground">
              {t.name}
            </span>
          </div>
        );
      })}
    </div>
  );
}
