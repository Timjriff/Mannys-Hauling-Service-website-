import { faq } from "@/lib/site";

export function FAQ() {
  return (
    <div className="grid gap-4">
      {faq.map((item) => (
        <details key={item.question} className="group rounded-2xl border border-black/8 bg-white p-6 shadow-sm">
          <summary className="cursor-pointer list-none text-xl font-black text-black">
            {item.question}
          </summary>
          <p className="mt-4 leading-7 text-black/62">{item.answer}</p>
        </details>
      ))}
    </div>
  );
}
