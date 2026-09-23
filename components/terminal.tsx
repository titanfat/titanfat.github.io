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
  const [lines, setLines] = useState<Line[]>([]);
  const [activeLine, setActiveLine] = useState<Line | null>(null);
  const [typingOutput, setTypingOutput] = useState(false);
  const [isBooting, setIsBooting] = useState(true);
  const [value, setValue] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    let cancelled = false;
    const timers: ReturnType<typeof setTimeout>[] = [];
    const wait = (delay: number) => new Promise<void>((resolve) => timers.push(setTimeout(resolve, delay)));

    async function boot() {
      setLines([]);
      setActiveLine(null);
      setTypingOutput(false);
      setIsBooting(true);

      const script: Line[] = [
        { command: "whoami", output: commands.whoami },
        { command: "cat profile.yml", output: commands["cat profile.yml"] },
      ];
      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
        setLines(script);
        setIsBooting(false);
        return;
      }

      for (const entry of script) {
        const command = entry.command ?? "";
        setActiveLine({ command: "", output: [] });
        setTypingOutput(false);
        for (let index = 1; index <= command.length; index += 1) {
          await wait(55);
          if (cancelled) return;
          setActiveLine({ command: command.slice(0, index), output: [] });
        }
        await wait(180);

        const completedOutput: string[] = [];
        for (const output of entry.output ?? []) {
          setTypingOutput(true);
          for (let index = 1; index <= output.length; index += 1) {
            await wait(18);
            if (cancelled) return;
            setActiveLine({ command, output: [...completedOutput, output.slice(0, index)] });
          }
          completedOutput.push(output);
          await wait(90);
        }

        if (cancelled) return;
        setLines((current) => [...current, entry]);
        setActiveLine(null);
        setTypingOutput(false);
        await wait(260);
      }

      if (!cancelled) setIsBooting(false);
    }

    boot();
    return () => {
      cancelled = true;
      timers.forEach(clearTimeout);
    };
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
      <div className="terminalBody" aria-live={isBooting ? "off" : "polite"}>
        {lines.map((line, index) => (
          <div className="terminalEntry" key={`${line.command ?? "intro"}-${index}`}>
            {line.command && <div><span className="prompt">andrew@dev:~$</span> {line.command}</div>}
            {line.output?.map((text) => <div className="terminalOutput" key={text}>{text}</div>)}
          </div>
        ))}
        {activeLine && (
          <div className="terminalEntry">
            <div><span className="prompt">andrew@dev:~$</span> {activeLine.command}{!typingOutput && <span className="terminalCursor" />}</div>
            {activeLine.output?.map((text, index) => <div className="terminalOutput" key={index}>{text}{typingOutput && index === activeLine.output!.length - 1 && <span className="terminalCursor" />}</div>)}
          </div>
        )}
        {!isBooting && (
          <form onSubmit={submit} className="terminalForm">
            <label className="srOnly" htmlFor="terminal-input">{hint}</label>
            <span className="prompt">andrew@dev:~$</span>
            <input id="terminal-input" ref={inputRef} value={value} onChange={(event) => setValue(event.target.value)} autoComplete="off" spellCheck={false} placeholder={hint} />
          </form>
        )}
      </div>
    </section>
  );
}
