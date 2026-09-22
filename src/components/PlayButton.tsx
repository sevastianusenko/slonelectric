/** Контурный круг с треугольником; при наведении окрашивается в оранжевый. */
export default function PlayButton({ label = "Play video" }: { label?: string }) {
  return (
    <button type="button" className="play_button absolute inset-0 m-auto cursor-pointer" aria-label={label}>
      <svg className="mx-auto h-28 w-28 lg:h-36 lg:w-36" viewBox="0 0 24 24" fill="none" strokeWidth="1" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" fill="none" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        <path id="triangle" strokeLinecap="round" strokeLinejoin="round" fill="none"
          d="M15.91 11.672a.375.375 0 010 .656l-5.603 3.113a.375.375 0 01-.557-.328V8.887c0-.286.307-.466.557-.327l5.603 3.112z" />
      </svg>
    </button>
  );
}
