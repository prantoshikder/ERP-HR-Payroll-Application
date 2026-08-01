/**
 * Shown while a route segment streams in. Routes are prerendered, so on a fast
 * connection this barely flashes — on a slow one it replaces a frozen page with
 * the shape of the page that is coming.
 */
export default function Loading() {
  return (
    <div className="relative overflow-hidden pt-32 pb-20 sm:pt-40" aria-busy>
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div className="grid-lines mask-fade-b absolute inset-0" />
        <div className="bg-brand-300/20 absolute -top-32 -left-24 h-96 w-96 rounded-full blur-[120px]" />
      </div>

      <div className="shell">
        <div className="mx-auto flex max-w-3xl flex-col items-center">
          <span className="sr-only" role="status">
            Loading page
          </span>

          <div className="bg-ink-100 h-6 w-28 animate-pulse rounded-full" />
          <div className="bg-ink-100 mt-6 h-11 w-full animate-pulse rounded-2xl" />
          <div className="bg-ink-100 mt-3 h-11 w-3/4 animate-pulse rounded-2xl" />
          <div className="bg-ink-100/70 mt-6 h-4 w-full max-w-xl animate-pulse rounded-full" />
          <div className="bg-ink-100/70 mt-2.5 h-4 w-2/3 animate-pulse rounded-full" />

          <div className="mt-9 flex gap-3">
            <div className="bg-ink-100 h-12 w-40 animate-pulse rounded-xl" />
            <div className="bg-ink-100/70 h-12 w-40 animate-pulse rounded-xl" />
          </div>
        </div>

        <div className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {Array.from({ length: 6 }).map((_, i) => (
            <div
              key={i}
              className="border-ink-200/70 h-44 animate-pulse rounded-2xl border bg-white"
            />
          ))}
        </div>
      </div>
    </div>
  );
}
