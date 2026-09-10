import { Check, ChevronDown } from "lucide-react";
import { useEffect, useId, useRef, useState } from "react";

export type SortOrder = "newest" | "oldest" | "title";
const options: { value: SortOrder; label: string }[] = [
  { value: "newest", label: "Newest first" },
  { value: "oldest", label: "Oldest first" },
  { value: "title", label: "A?Z" },
];

export default function ProjectSort({ value, onChange }: { value: SortOrder; onChange: (value: SortOrder) => void }) {
  const [open, setOpen] = useState(false);
  const root = useRef<HTMLDivElement>(null);
  const trigger = useRef<HTMLButtonElement>(null);
  const items = useRef<(HTMLButtonElement | null)[]>([]);
  const initialFocus = useRef(0);
  const id = useId();
  const selected = options.findIndex(option => option.value === value);

  useEffect(() => {
    if (!open) return;
    items.current[initialFocus.current]?.focus();
    const dismiss = (event: PointerEvent) => {
      if (!root.current?.contains(event.target as Node)) setOpen(false);
    };
    document.addEventListener("pointerdown", dismiss);
    return () => document.removeEventListener("pointerdown", dismiss);
  }, [open]);

  const show = (index: number) => {
    initialFocus.current = index;
    setOpen(true);
  };

  return (
    <div ref={root} className="relative flex shrink-0 self-start items-center gap-3 text-sm" onBlur={event => {
      if (!event.currentTarget.contains(event.relatedTarget)) setOpen(false);
    }}>
      <span id={`${id}-label`} className="text-textMuted">Sort</span>
      <button ref={trigger} id={`${id}-trigger`} type="button" aria-haspopup="menu" aria-expanded={open} aria-controls={open ? `${id}-menu` : undefined} aria-labelledby={`${id}-label ${id}-value`}
        onClick={() => open ? setOpen(false) : show(selected)}
        onKeyDown={event => {
          if (event.key === "ArrowDown" || event.key === "ArrowUp") {
            event.preventDefault();
            show(event.key === "ArrowUp" ? options.length - 1 : selected);
          }
        }}
        className={`inline-flex min-h-11 min-w-[160px] items-center justify-between gap-5 rounded-full border px-4 py-2.5 text-textMain transition-colors hover:border-primary/50 hover:bg-primary/5 motion-reduce:transition-none ${open ? "border-primary/50 bg-primary/10" : "border-borderMedium bg-bgCard/45"}`}>
        <span id={`${id}-value`} className="font-medium">{options[selected].label}</span>
        <ChevronDown size={16} aria-hidden="true" className={`text-primary transition-transform duration-200 motion-reduce:transition-none ${open ? "rotate-180" : ""}`} />
      </button>
      {open && (
        <div id={`${id}-menu`} role="menu" aria-labelledby={`${id}-label`} className="absolute right-0 top-full z-30 mt-2 w-[200px] rounded-2xl border border-primary/20 bg-bg p-1.5 shadow-[0_12px_32px_rgb(0_0_0/0.14)]"
          onKeyDown={event => {
            const current = items.current.indexOf(document.activeElement as HTMLButtonElement);
            let next: number | undefined;
            if (event.key === "ArrowDown") next = (current + 1) % options.length;
            if (event.key === "ArrowUp") next = (current - 1 + options.length) % options.length;
            if (event.key === "Home") next = 0;
            if (event.key === "End") next = options.length - 1;
            if (next !== undefined) {
              event.preventDefault();
              items.current[next]?.focus();
            }
            if (event.key === "Escape") {
              event.preventDefault();
              setOpen(false);
              trigger.current?.focus();
            }
            if (event.key === "Tab") {
              setOpen(false);
              trigger.current?.focus();
            }
          }}>
          {options.map((option, index) => (
            <button key={option.value} ref={element => { items.current[index] = element; }} type="button" role="menuitemradio" aria-checked={value === option.value} tabIndex={-1}
              onClick={() => { onChange(option.value); setOpen(false); trigger.current?.focus(); }}
              className={`flex min-h-11 w-full items-center justify-between gap-4 rounded-xl px-3 py-2.5 text-left transition-colors hover:bg-primary/10 focus-visible:bg-primary/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-inset focus-visible:outline-primary motion-reduce:transition-none ${value === option.value ? "bg-primary/10 font-medium text-primary" : "text-textBody"}`}>
              {option.label}
              {value === option.value && <Check size={16} aria-hidden="true" />}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
