export const Separator = ({ text }: { text: string }) => {
  return (
    <span className="flex items-center my-20">
      <span className="h-px flex-1 bg-neutral-100"></span>
      {text.length > 0 && (
        <span className="shrink-0 px-6 text-neutral-100 text-2xl font-bold">
          {text}
        </span>
      )}
      <span className="h-px flex-1 bg-neutral-100"></span>
    </span>
  );
};
