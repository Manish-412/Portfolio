"use client";

import { useMemo, useState } from "react";
import { Search } from "lucide-react";

import { commandItems } from "@/lib/data";
import { useCommandPalette } from "@/hooks/use-command-palette";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";

export function CommandPalette() {
  const { open, setOpen } = useCommandPalette();
  const [query, setQuery] = useState("");

  const results = useMemo(() => {
    return commandItems.filter((item) =>
      item.label.toLowerCase().includes(query.toLowerCase())
    );
  }, [query]);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent className="max-w-xl">
        <DialogHeader>
          <DialogTitle>Command Palette</DialogTitle>
        </DialogHeader>
        <div className="mt-4 flex items-center gap-2 rounded-2xl border border-white/10 bg-white/5 px-3">
          <Search className="h-4 w-4 text-muted-foreground" />
          <Input
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Search sections or actions"
            className="border-none bg-transparent px-0 focus-visible:ring-0"
          />
        </div>
        <div className="mt-4 flex flex-col gap-2">
          {results.map((item) => (
            <button
              key={item.label}
              type="button"
              onClick={() => {
                setOpen(false);
                if (item.href.startsWith("#")) {
                  document.querySelector(item.href)?.scrollIntoView({
                    behavior: "smooth",
                    block: "start",
                  });
                }
              }}
              className="flex items-center justify-between rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-left text-sm hover:bg-white/10"
            >
              <span>{item.label}</span>
              <item.icon className="h-4 w-4 text-muted-foreground" />
            </button>
          ))}
        </div>
      </DialogContent>
    </Dialog>
  );
}
