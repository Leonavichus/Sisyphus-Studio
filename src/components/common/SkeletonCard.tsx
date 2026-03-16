import type { FC } from "react";

interface NewsSkeletonCardProps {
  wide?: boolean;
}

export const NewsSkeletonCard: FC<NewsSkeletonCardProps> = ({ wide = false }) => {
  if (wide) {
    return (
      <div
        style={{
          borderRadius: "var(--r-2xl)",
          overflow: "hidden",
          background: "var(--s-4)",
          border: "1px solid var(--b-subtle)",
          aspectRatio: "16/9",
          position: "relative",
        }}
      >
        <div className="skeleton-shimmer" style={{ position: "absolute", inset: 0 }} />
      </div>
    );
  }

  return (
    <div
      style={{
        padding: "14px 16px",
        borderRadius: 12,
        background: "var(--s-4)",
        border: "1px solid var(--b-subtle)",
      }}
    >
      <div
        className="skeleton-shimmer"
        style={{ height: 10, width: "35%", borderRadius: 4, marginBottom: 10 }}
      />
      <div
        className="skeleton-shimmer"
        style={{ height: 14, width: "90%", borderRadius: 4, marginBottom: 6 }}
      />
      <div className="skeleton-shimmer" style={{ height: 11, width: "70%", borderRadius: 4 }} />
    </div>
  );
};
