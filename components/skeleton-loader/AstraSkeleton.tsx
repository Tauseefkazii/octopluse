export function AstraSkeleton() {
  return (
    <section className="py-28 bg-[#F9FAFB]">
      <div className="mx-auto max-w-6xl text-center">
        <div className="h-10 w-96 mx-auto rounded bg-gray-200 animate-pulse" />
        <div className="mt-6 h-4 w-[520px] mx-auto rounded bg-gray-200 animate-pulse" />

        <div className="mt-20 flex justify-center gap-10">
          {[1, 2, 3].map((i) => (
            <div
              key={i}
              className="h-[320px] w-[260px] rounded-2xl bg-gray-200 animate-pulse"
            />
          ))}
        </div>
      </div>
    </section>
  )
}
