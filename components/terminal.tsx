"use client";

import { FormEvent, useEffect, useRef, useState } from "react";
import type { Locale } from "../lib/profile";

type Line = { command?: string; output?: string[] };

export default function Terminal({ locale, title, hint, commands }: {
  locale: Locale;
  title: string;
  hint: string;
  commands: Record<string, string[]>;
}) {
  const [lines, setLines] = useState<Line[]>([{ output: commands.about }, { output: commands.help }]);
  const [value, setValue] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    setLines([{ output: commands.about }, { output: commands.help }]);
  }, [locale, commands]);

  function submit(event: FormEvent) {
    event.preventDefault();
    const command = value.trim().toLowerCase();
    setValue("");
    if (!command) return;
    if (command === "clear") {
      setLines([]);
      return;
    }
    const output = commands[command] ?? [locale === "ru" ? `Команда не найдена: ${command}` : `Command not found: ${command}`];
    setLines((current) => [...current, { command, output }]);
  }

  return (
    <section className="terminal" aria-label={locale === "ru" ? "Интерактивный терминал" : "Interactive terminal"} onClick={() => inputRef.current?.focus()}>
      <div className="terminalBar">
        <span className="dot dotRed" /><span className="dot dotGold" /><span className="dot dotGreen" />
        <span className="terminalTitle">{title}</span>
      </div>
      <div className="terminalBody" aria-live="polite">
        {lines.map((line, index) => (
          <div className="terminalEntry" key={`${line.command ?? "intro"}-${index}`}>
            {line.command && <div><span className="prompt">andrew@dev:~$</span> {line.command}</div>}
            {line.output?.map((text) => <div className="terminalOutput" key={text}>{text}</div>)}
          </div>
        ))}
        <form onSubmit={submit} className="terminalForm">
          <label className="srOnly" htmlFor="terminal-input">{hint}</label>
          <span className="prompt">andrew@dev:~$</span>
          <input id="terminal-input" ref={inputRef} value={value} onChange={(event) => setValue(event.target.value)} autoComplete="off" spellCheck={false} placeholder={hint} />
        </form>
      </div>
    </section>
  );
}
