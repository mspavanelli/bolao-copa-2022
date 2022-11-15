type HeaderProps = {
  title: string;
};

export function Header({ title }: HeaderProps) {
  return (
    <header className="flex h-16 items-center justify-center rounded-lg bg-stone-800 text-lg text-stone-100">
      {title}
    </header>
  );
}
