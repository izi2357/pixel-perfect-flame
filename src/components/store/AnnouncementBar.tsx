export function AnnouncementBar({ message }: { message: string }) {
  return (
    <div className="bg-brand text-brand-foreground">
      <p className="mx-auto max-w-[1600px] px-5 py-2.5 text-center text-[13px] font-semibold tracking-[0.01em] sm:text-sm">
        {message}
      </p>
    </div>
  );
}
