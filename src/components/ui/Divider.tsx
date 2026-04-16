type Props = {
  className?: string;
};

export function Divider({ className = "" }: Props) {
  return (
    <div className={`flex items-center gap-4 ${className}`}>
      <div className="flex-1 h-px bg-mauve-light" />
      <div className="w-1.5 h-1.5 rounded-full bg-rose-blush" />
      <div className="flex-1 h-px bg-mauve-light" />
    </div>
  );
}
