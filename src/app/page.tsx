const components = [
  "accordion","alert","alert-dialog","aspect-ratio","avatar","badge","breadcrumb","button","calendar","card","carousel","chart","checkbox","collapsible","combobox","command","context-menu","data-table","date-picker","dialog","drawer","dropdown-menu","form","hover-card","input","input-otp","label","menubar","navigation-menu","pagination","popover","progress","radio-group","resizable","scroll-area","select","separator","sheet","sidebar","skeleton","slider","sonner","switch","table","tabs","textarea","toast","toggle","toggle-group","tooltip","typography"
];

export default function Home() {
  return (
    <main className="min-h-screen p-8 bg-gradient-to-br from-slate-900 to-slate-800 text-white">
      <h1 className="text-2xl mb-4">ShadCN Components</h1>
      <ul className="space-y-2">
        {components.map((c) => (
          <li key={c}>
            <a href={`/${c}`} className="underline hover:text-slate-300">
              {c}
            </a>
          </li>
        ))}
      </ul>
    </main>
  );
}
