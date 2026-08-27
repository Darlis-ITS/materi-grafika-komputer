import React, { useEffect, useMemo, useRef, useState } from "react";
import { createRoot } from "react-dom/client";
import { marked } from "marked";
import hljs from "highlight.js/lib/core";
import javascript from "highlight.js/lib/languages/javascript";
import typescript from "highlight.js/lib/languages/typescript";
import xml from "highlight.js/lib/languages/xml";
import css from "highlight.js/lib/languages/css";
import json from "highlight.js/lib/languages/json";
import glsl from "highlight.js/lib/languages/glsl";
import "highlight.js/styles/github-dark.css";
import "./styles.css";

hljs.registerLanguage("javascript", javascript);
hljs.registerLanguage("js", javascript);
hljs.registerLanguage("typescript", typescript);
hljs.registerLanguage("ts", typescript);
hljs.registerLanguage("html", xml);
hljs.registerLanguage("xml", xml);
hljs.registerLanguage("css", css);
hljs.registerLanguage("json", json);
hljs.registerLanguage("glsl", glsl);

type Mode = "home" | "slide" | "practical";
type Tab = "description" | "output" | "checklist";
type SlideTab = "markup" | "image" | "narrative";
type Content = {
  id: string;
  type: "rps" | "intro" | "meeting";
  number?: number;
  title: string;
  subtitle: string;
  slide?: string;
  narrative?: string;
  practical?: string;
  output?: string;
  rps?: string;
};
type Heading = { id: string; text: string; level: number };

const slides = import.meta.glob("../slide/*.md", {
  query: "?raw",
  import: "default",
  eager: true,
}) as Record<string, string>;
const narratives = import.meta.glob("../slide/narasi/*.md", {
  query: "?raw",
  import: "default",
  eager: true,
}) as Record<string, string>;
const images = import.meta.glob(
  "../slide/slide-image/**/*.{webp,png,jpg,jpeg,gif}",
  { query: "?url", import: "default", eager: true },
) as Record<string, string>;
const practicals = import.meta.glob("../praktikum/*.md", {
  query: "?raw",
  import: "default",
  eager: true,
}) as Record<string, string>;
const outputSourceFiles = import.meta.glob("../praktikum/output/**/*", {
  query: "?url",
  import: "default",
  eager: true,
}) as Record<string, string>;
const outputFiles = Object.fromEntries(
  Object.keys(outputSourceFiles).map((path) => [
    path,
    `./praktikum/output/${path.replace(/^\.\.\/praktikum\/output\//, "")}`,
  ]),
) as Record<string, string>;
const outputDocs = import.meta.glob("../praktikum/output/**/*.md", {
  query: "?raw",
  import: "default",
  eager: true,
}) as Record<string, string>;
const rpsDocuments = import.meta.glob("../rps/*.md", {
  query: "?raw",
  import: "default",
  eager: true,
}) as Record<string, string>;

function slideImageFor(content: Content, index: number) {
  const folder =
    content.type === "intro"
      ? "pert00"
      : `pert${String(content.number).padStart(2, "0")}`;
  const filename = `slide-${String(index).padStart(3, "0")}-v001.webp`;
  const path = Object.keys(images).find((item) =>
    item.endsWith(`/slide-image/${folder}/${filename}`),
  );
  return path ? images[path] : undefined;
}

const practicalByMeeting = Object.entries(practicals).reduce<
  Record<string, string>
>((acc, [path, value]) => {
  const match = path.match(/pertemuan-(\d+)/i);
  if (match) acc[match[1].padStart(2, "0")] = value;
  return acc;
}, {});

const titleMap: Record<string, string> = {
  "00": "Informasi Awal",
  "01": "Pengenalan Grafika Komputer",
  "02": "WebGL Fundamental",
  "03": "Transformasi & Sistem Koordinat",
  "04": "Kamera dan Proyeksi 3D",
  "05": "Lighting, Shading & Texture",
  "06": "Introduction to Three.js",
  "07": "Three.js Interactive 3D",
  "08": "Evaluasi Tengah Semester",
  "09": "Blender Fundamental 3D Modeling",
  "10": "Blender Materials, UV & Texturing",
  "11": "Blender Lighting, Camera & Rendering",
  "12": "Unity URP",
  "13": "Unity Lighting & Post-Processing",
  "14": "Unity Shader Graph",
  "15": "VFX, Particle & Optimization",
  "16": "UAS / Final Project",
};
const subtitleMap: Record<string, string> = {
  "00": "Peta kuliah, aturan, dan cara belajar",
  "01": "Fondasi dunia grafika komputer",
  "02": "Mengenal pipeline grafis di browser",
  "03": "Membangun geometri dari koordinat",
  "04": "Melihat dunia 3D dari kamera",
  "05": "Membuat objek terasa hidup",
  "06": "Mulai membangun scene 3D",
  "07": "Scene 3D yang interaktif",
  "08": "Checkpoint konsep dan praktik",
  "09": "Dasar pemodelan 3D di Blender",
  "10": "Material, UV, dan tekstur",
  "11": "Lighting, kamera, dan rendering",
  "12": "Universal Render Pipeline",
  "13": "Look development di Unity",
  "14": "Visual shader tanpa kode",
  "15": "Efek visual dan performa",
  "16": "Proyek akhir integratif",
};

const rpsContent: Content = {
  id: "rps",
  type: "rps",
  title: "Rencana Pembelajaran Semester",
  subtitle: "Peta belajar, capaian, asesmen, dan rencana pertemuan",
  rps: Object.values(rpsDocuments)[0],
  output: "00",
};

const contents: Content[] = [
  rpsContent,
  ...Array.from({ length: 17 }, (_, index) => {
    const key = String(index).padStart(2, "0");
    const slidePath = Object.keys(slides).find((path) =>
      path.endsWith(`/pert${key}.md`),
    );
    const narrativePath = Object.keys(narratives).find((path) =>
      path.endsWith(`/pert${key}.md`),
    );
    return {
      id: key === "00" ? "intro" : `pert${key}`,
      type: key === "00" ? "intro" : "meeting",
      number: key === "00" ? undefined : index,
      title: titleMap[key],
      subtitle: subtitleMap[key],
      slide: slidePath ? slides[slidePath] : undefined,
      narrative: narrativePath ? narratives[narrativePath] : undefined,
      practical: practicalByMeeting[key],
      output: key,
    };
  }),
];

marked.setOptions({ gfm: true, breaks: true });

function slugify(value: string) {
  return value
    .toLowerCase()
    .trim()
    .replace(/<[^>]*>/g, "")
    .replace(/[^\w\s-]/g, "")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-");
}

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

function inlineCodeKind(value: string) {
  const text = value.trim();
  if (/^(\/\/|#|\/\*)/.test(text)) return "comment";
  if (/^(?:["'`]).*(?:["'`])$/.test(text)) return "string";
  if (/^-?\d+(?:\.\d+)?$/.test(text)) return "number";
  if (
    /^(?:const|let|var|function|return|import|from|new|class|if|else|for|while|true|false|null|undefined)$/.test(
      text,
    )
  )
    return "keyword";
  if (/^[A-Za-z_$][\w$]*\s*\(/.test(text)) return "function";
  return "variable";
}

function inferCodeLanguage(source: string) {
  if (
    /#version\s+\d+|\b(?:vec[2-4]|mat[2-4]|gl_Position|gl_FragColor)\b|\bvoid\s+main\s*\(/.test(
      source,
    )
  )
    return "glsl";
  if (/<\/?[a-z][\s\S]*>/i.test(source)) return "xml";
  if (
    /\b(?:const|let|var|function|document\.|window\.|addEventListener)\b|=>/.test(
      source,
    )
  )
    return "javascript";
  if (/^\s*[.#]?[\w-]+\s*\{[\s\S]*:[\s\S]*;[\s\S]*\}/m.test(source))
    return "css";
  if (/^\s*[\[{][\s\S]*[\]}]\s*$/.test(source)) return "json";
  return "plaintext";
}

function renderMarkdown(source: string) {
  const headings: Heading[] = [];
  const renderer = new marked.Renderer();
  renderer.heading = ({ text, depth }) => {
    const id = slugify(text);
    headings.push({ id, text: text.replace(/<[^>]*>/g, ""), level: depth });
    return `<h${depth} id="${id}">${text}</h${depth}>`;
  };
  renderer.codespan = ({ text }) => {
    const kind = inlineCodeKind(text);
    return `<code class="inline-code inline-code-${kind}">${escapeHtml(text)}</code>`;
  };
  renderer.code = ({ text, lang }) => {
    const language =
      lang && hljs.getLanguage(lang) ? lang : inferCodeLanguage(text);
    const highlighted =
      language === "plaintext"
        ? text
        : hljs.highlight(text, { language }).value;
    return `<pre><code class="hljs language-${language}">${highlighted}</code></pre>`;
  };
  return { html: marked.parse(source, { renderer }) as string, headings };
}

function slideTitle(section: string, index: number) {
  const heading = section
    .match(/^#\s+(.+)$/m)?.[1]
    ?.replace(/\s+—.*$/, "")
    .trim();
  return heading || `Slide ${String(index + 1).padStart(3, "0")}`;
}

function slideNumberFor(section: string, fallbackIndex: number) {
  const number = section.match(/^#\s+Slide\s+(\d+)/im)?.[1];
  return number === undefined ? fallbackIndex : Number(number);
}

function narrativeForSlide(source: string | undefined, index: number) {
  if (!source) return "";
  const sections = source.split(/(?=^##\s+Slide\s+\d+)/gim);
  return (
    sections.find(
      (section) =>
        Number(section.match(/^##\s+Slide\s+(\d+)/im)?.[1]) === index,
    ) || ""
  );
}

function icon(name: string) {
  return <span className="material-symbols-rounded icon">{name}</span>;
}

function ModeToggle({
  isPractical,
  onModeChange,
  hasPractical,
}: {
  isPractical: boolean;
  onModeChange: (mode: Mode) => void;
  hasPractical: boolean;
}) {
  return (
    <div className="view-toggle content-mode-toggle">
      <button
        className={!isPractical ? "selected" : ""}
        onClick={() => onModeChange("slide")}
      >
        {icon("auto_stories")} Slide
      </button>
      <button
        className={isPractical ? "selected" : ""}
        onClick={() => onModeChange("practical")}
        disabled={!hasPractical}
      >
        {icon("terminal")} Praktikum
      </button>
    </div>
  );
}

function App() {
  const [mode, setMode] = useState<Mode>("home");
  const [selected, setSelected] = useState<Content>(contents[0]);
  const [slideMode, setSlideMode] = useState<"single" | "all">("single");
  const [slideTab, setSlideTab] = useState<SlideTab>("markup");
  const [slideIndex, setSlideIndex] = useState(0);
  const [tab, setTab] = useState<Tab>("description");
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [theme, setTheme] = useState<"dark" | "light">(
    (localStorage.getItem("gc-theme") as "dark" | "light") || "dark",
  );
  const [backgroundEnabled, setBackgroundEnabled] = useState(
    localStorage.getItem("gc-background") !== "off",
  );
  const [search, setSearch] = useState("");

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    localStorage.setItem("gc-theme", theme);
  }, [theme]);
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [selected, mode, tab]);

  const openContent = (content: Content, nextMode: Mode = "slide") => {
    setSelected(content);
    setMode(nextMode);
    setSlideIndex(0);
    setSlideTab("markup");
    setTab("description");
  };
  const filtered = contents.filter((item) =>
    `${item.title} ${item.subtitle}`
      .toLowerCase()
      .includes(search.toLowerCase()),
  );

  return (
    <div
      className={`app-shell ${backgroundEnabled ? "background-image-enabled" : ""}`}
    >
      <header className="topbar">
        <button
          className="icon-button menu-button"
          onClick={() => setSidebarOpen((value) => !value)}
          aria-label="Toggle sidebar"
        >
          {icon("menu")}
        </button>
        <button className="brand" onClick={() => setMode("home")}>
          <span className="brand-mark">✦</span>
          <span>
            <b>Grafika</b> Komputer <small>LEARNING HUB</small>
          </span>
        </button>
        <div className="topbar-actions">
          <label className="search-box">
            {icon("search")}
            <input
              value={search}
              onChange={(event) => setSearch(event.target.value)}
              placeholder="Cari materi..."
            />
            {search && (
              <button onClick={() => setSearch("")}>{icon("close")}</button>
            )}
          </label>
          <button
            className="icon-button theme-toggle"
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            aria-label="Ganti tema"
          >
            {icon(theme === "dark" ? "light_mode" : "dark_mode")}
          </button>
          <button
            className="icon-button background-toggle"
            onClick={() => {
              const next = !backgroundEnabled;
              setBackgroundEnabled(next);
              localStorage.setItem("gc-background", next ? "on" : "off");
            }}
            aria-label="Toggle background image"
            title={
              backgroundEnabled
                ? "Matikan background image"
                : "Nyalakan background image"
            }
          >
            {icon(backgroundEnabled ? "wallpaper" : "texture")}
          </button>
        </div>
      </header>
      <div className={`body-layout ${sidebarOpen ? "" : "sidebar-collapsed"}`}>
        <aside className={`sidebar ${sidebarOpen ? "" : "collapsed"}`}>
          <div className="sidebar-label">NAVIGASI KULIAH</div>
          <button
            className={`nav-item ${mode === "home" ? "active" : ""}`}
            onClick={() => setMode("home")}
          >
            {icon("dashboard")}
            <span>Beranda</span>
          </button>
          <div className="sidebar-label meetings-label">MATERI</div>
          {contents.map((item) => (
            <button
              key={item.id}
              className={`nav-item ${selected.id === item.id && mode !== "home" ? "active" : ""}`}
              onClick={() => openContent(item, "slide")}
              title={item.title}
            >
              <span className="nav-number">
                {item.type === "rps"
                  ? "RPS"
                  : item.type === "intro"
                    ? "00"
                    : String(item.number).padStart(2, "0")}
              </span>
              <span className="nav-label">
                {item.type === "rps"
                  ? "Rencana Pembelajaran Semester"
                  : item.type === "intro"
                    ? item.title
                    : `Pertemuan ${item.number}`}
              </span>
            </button>
          ))}
        </aside>
        <main className="main-content">
          {mode === "home" ? (
            <Home items={filtered} onOpen={openContent} />
          ) : (
            <ContentPage
              content={selected}
              mode={mode}
              setMode={setMode}
              slideMode={slideMode}
              setSlideMode={setSlideMode}
              slideTab={slideTab}
              setSlideTab={setSlideTab}
              slideIndex={slideIndex}
              setSlideIndex={setSlideIndex}
              tab={tab}
              setTab={setTab}
            />
          )}
        </main>
      </div>
    </div>
  );
}

function Home({
  items,
  onOpen,
}: {
  items: Content[];
  onOpen: (content: Content, mode?: Mode) => void;
}) {
  return (
    <div className="home-page">
      <section className="hero-panel">
        <div className="hero-copy">
          <span className="eyebrow">EF234504 · SEMESTER GASAL 2026/2027</span>
          <h1>
            Belajar grafika,
            <br />
            <em>menciptakan dunia.</em>
          </h1>
          <p>
            Ruang belajar interaktif untuk memahami konsep, menjelajahi slide,
            dan mengerjakan praktikum Grafika Komputer.
          </p>
        </div>
        <div className="hero-orbit">
          <div className="orbit-ring ring-one" />
          <div className="orbit-ring ring-two" />
          <div className="hero-cube">◈</div>
          <span className="float-tag tag-a">CANVAS</span>
          <span className="float-tag tag-b">WEBGL</span>
          <span className="float-tag tag-c">3D</span>
        </div>
      </section>
      <div className="section-heading">
        <div>
          <span className="eyebrow">KURIKULUM</span>
          <h2>Jelajahi materi</h2>
        </div>
        <span className="count-pill">{items.length} topik</span>
      </div>
      <div className="course-grid">
        {items.map((item, index) => (
          <article
            className={`course-card ${item.type === "intro" ? "intro-card" : item.type === "rps" ? "rps-card" : ""}`}
            key={item.id}
            onClick={() => onOpen(item, "slide")}
          >
            <div className="card-top">
              <span className="number-badge">
                {item.type === "intro"
                  ? "✦"
                  : String(item.number).padStart(2, "0")}
              </span>
              <span className="arrow">{icon("north_east")}</span>
            </div>
            <h3>{item.title}</h3>
            <p>{item.subtitle}</p>
            <div className="card-footer">
              <span>
                {item.type === "rps"
                  ? "Dokumen akademik"
                  : item.type === "intro"
                    ? "Pengantar"
                    : "Pertemuan " + item.number}
              </span>
              {item.practical && (
                <span className="available">Praktikum tersedia</span>
              )}
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}

function ContentPage({
  content,
  mode,
  setMode,
  slideMode,
  setSlideMode,
  slideTab,
  setSlideTab,
  slideIndex,
  setSlideIndex,
  tab,
  setTab,
}: {
  content: Content;
  mode: Mode;
  setMode: (mode: Mode) => void;
  slideMode: "single" | "all";
  setSlideMode: (mode: "single" | "all") => void;
  slideTab: SlideTab;
  setSlideTab: (tab: SlideTab) => void;
  slideIndex: number;
  setSlideIndex: (index: number) => void;
  tab: Tab;
  setTab: (tab: Tab) => void;
}) {
  const slideSections = useMemo(
    () =>
      content.slide
        ? content.slide
            .split(/\n\s*---\s*\n/g)
            .map((value) => value.trim())
            .filter((value) => /^#\s+Slide\s+\d+/im.test(value))
        : [],
    [content.slide],
  );
  const current = renderMarkdown(
    slideSections[slideIndex] || content.slide || "",
  );
  const practical = content.practical
    ? renderMarkdown(content.practical)
    : null;
  const narrative = content.narrative
    ? renderMarkdown(content.narrative)
    : null;
  const narrativeSlide = renderMarkdown(
    narrativeForSlide(
      content.narrative,
      slideNumberFor(slideSections[slideIndex] || "", slideIndex),
    ),
  );
  const all = renderMarkdown(content.slide || "");
  const output = Object.entries(outputFiles).filter(([path]) =>
    new RegExp(`/pert${content.output}/`, "i").test(path),
  );
  const docs = Object.entries(outputDocs).filter(([path]) =>
    new RegExp(`/pert${content.output}/`, "i").test(path),
  );
  const isPractical = mode === "practical";
  const narrativePart = narrativeSlide.html;
  const slideArticle = content.slide ? (
    <div dangerouslySetInnerHTML={{ __html: current.html }} />
  ) : (
    <EmptyState text="Materi slide Pertemuan 16 belum ditambahkan." />
  );
  if (content.type === "rps") {
    const rpsDocument = renderMarkdown(content.rps || "");
    return (
      <div className="content-page rps-page">
        <div className="breadcrumbs">
          <button onClick={() => setMode("home")}>Beranda</button>
          <span>/</span>
          <b>RPS</b>
        </div>
        <div className="page-title-row">
          <div>
            <span className="eyebrow">DOKUMEN AKADEMIK</span>
            <h1>{content.title}</h1>
            <p>{content.subtitle}</p>
          </div>
        </div>
        <div className="rps-layout">
          <Outline headings={rpsDocument.headings} />
          <article
            className="markdown-content rps-document"
            dangerouslySetInnerHTML={{ __html: rpsDocument.html }}
          />
        </div>
      </div>
    );
  }
  return (
    <div className="content-page">
      <div className="breadcrumbs">
        <button onClick={() => setMode("home")}>Beranda</button>
        <span>/</span>
        <b>
          {content.type === "rps"
            ? "RPS"
            : content.type === "intro"
              ? "Informasi Awal"
              : `Pertemuan ${content.number}`}
        </b>
      </div>
      <div className="page-title-row">
        <div>
          <span className="eyebrow">
            {content.type === "rps"
              ? "DOKUMEN AKADEMIK"
              : content.type === "intro"
                ? "PENGANTAR MATA KULIAH"
                : `PERTEMUAN ${content.number}`}
          </span>
          <h1>{content.title}</h1>
          <p>{content.subtitle}</p>
        </div>
        <ModeToggle
          isPractical={isPractical}
          onModeChange={setMode}
          hasPractical={!!content.practical}
        />
      </div>
      {!isPractical ? (
        <div className="reader-layout">
          <SlideOutline
            sections={slideSections}
            activeIndex={slideIndex}
            onSelect={(index) => {
              setSlideIndex(index);
              if (slideMode === "all") setSlideMode("single");
            }}
          />
          <div className="reader-column">
            <section className="reader">
              <div className="slide-tabs">
                {(["markup", "image", "narrative"] as SlideTab[]).map(
                  (item) => (
                    <button
                      className={slideTab === item ? "active" : ""}
                      onClick={() => setSlideTab(item)}
                      key={item}
                    >
                      {icon(
                        item === "markup"
                          ? "code"
                          : item === "image"
                            ? "image"
                            : "record_voice_over",
                      )}
                      {item === "markup"
                        ? "Slide (Markup)"
                        : item === "image"
                          ? "Image Slide"
                          : "Narasi Slide"}
                    </button>
                  ),
                )}
              </div>
              {slideTab === "markup" && (
                <>
                  <div className="reader-toolbar">
                    <div className="segmented">
                      <button
                        className={slideMode === "single" ? "selected" : ""}
                        onClick={() => setSlideMode("single")}
                      >
                        Per slide
                      </button>
                      <button
                        className={slideMode === "all" ? "selected" : ""}
                        onClick={() => setSlideMode("all")}
                      >
                        Keseluruhan
                      </button>
                    </div>
                    {slideSections.length > 0 && (
                      <span className="slide-counter">
                        Slide{" "}
                        {String(
                          slideNumberFor(
                            slideSections[slideIndex] || "",
                            slideIndex,
                          ),
                        ).padStart(2, "0")}{" "}
                        /{" "}
                        {String(
                          slideNumberFor(
                            slideSections[slideSections.length - 1] || "",
                            slideSections.length - 1,
                          ),
                        ).padStart(2, "0")}
                      </span>
                    )}
                  </div>
                  {slideMode === "single" ? (
                    <>
                      <article className="markdown-content">
                        {slideArticle}
                      </article>
                      {slideSections.length > 1 && (
                        <div className="reader-nav">
                          <button
                            className="secondary-button"
                            disabled={slideIndex === 0}
                            onClick={() => setSlideIndex(slideIndex - 1)}
                          >
                            {icon("arrow_back")} Sebelumnya
                          </button>
                          <button
                            className="primary-button"
                            disabled={slideIndex === slideSections.length - 1}
                            onClick={() => setSlideIndex(slideIndex + 1)}
                          >
                            Berikutnya {icon("arrow_forward")}
                          </button>
                        </div>
                      )}
                    </>
                  ) : (
                    <article
                      className="markdown-content"
                      dangerouslySetInnerHTML={{
                        __html: content.slide
                          ? all.html
                          : "<p>Materi belum tersedia.</p>",
                      }}
                    />
                  )}
                </>
              )}
              {slideTab === "image" && (
                <ImageSlideView
                  content={content}
                  total={slideSections.length}
                  index={slideIndex}
                  slideNumber={slideNumberFor(
                    slideSections[slideIndex] || "",
                    slideIndex,
                  )}
                  setIndex={setSlideIndex}
                />
              )}
              {slideTab === "narrative" && (
                <>
                  <article className="markdown-content narrative-page">
                    {narrative ? (
                      <div
                        dangerouslySetInnerHTML={{ __html: narrativePart }}
                      />
                    ) : (
                      <EmptyState text="Narasi slide belum tersedia." />
                    )}
                  </article>
                  {slideSections.length > 1 && (
                    <div className="reader-nav">
                      <button
                        className="secondary-button"
                        disabled={slideIndex === 0}
                        onClick={() => setSlideIndex(slideIndex - 1)}
                      >
                        {icon("arrow_back")} Sebelumnya
                      </button>
                      <button
                        className="primary-button"
                        disabled={slideIndex === slideSections.length - 1}
                        onClick={() => setSlideIndex(slideIndex + 1)}
                      >
                        Berikutnya {icon("arrow_forward")}
                      </button>
                    </div>
                  )}
                </>
              )}
            </section>
          </div>
        </div>
      ) : (
        <PracticalView
          practical={practical}
          output={output}
          docs={docs}
          tab={tab}
          setTab={setTab}
        />
      )}
    </div>
  );
}

function Outline({ headings }: { headings: Heading[] }) {
  return (
    <aside className="outline">
      <div className="outline-title">
        {icon("format_list_bulleted")} OUTLINE
      </div>
      {headings
        .filter((heading) => heading.level <= 2)
        .map((heading, index) => (
          <a
            href={`#${heading.id}`}
            className={heading.level === 1 ? "level-one" : ""}
            key={`${heading.id}-${index}`}
          >
            {heading.text}
          </a>
        ))}
    </aside>
  );
}
function SlideOutline({
  sections,
  activeIndex,
  onSelect,
}: {
  sections: string[];
  activeIndex: number;
  onSelect: (index: number) => void;
}) {
  return (
    <aside className="outline slide-outline">
      <div className="outline-title">{icon("view_carousel")} DAFTAR SLIDE</div>
      {sections.map((section, index) => (
        <button
          className={activeIndex === index ? "active" : ""}
          onClick={() => onSelect(index)}
          key={index}
        >
          <span>{String(slideNumberFor(section, index)).padStart(2, "0")}</span>
          <b>{slideTitle(section, index)}</b>
        </button>
      ))}
    </aside>
  );
}
function ImageSlideView({
  content,
  total,
  index,
  slideNumber,
  setIndex,
}: {
  content: Content;
  total: number;
  index: number;
  slideNumber: number;
  setIndex: (index: number) => void;
}) {
  const [fullscreen, setFullscreen] = useState(false);
  const viewerRef = useRef<HTMLElement>(null);
  const image = slideImageFor(content, index);
  const go = (delta: number) =>
    setIndex(Math.max(0, Math.min(total - 1, index + delta)));
  const enterFullscreen = async () => {
    if (viewerRef.current?.requestFullscreen)
      await viewerRef.current.requestFullscreen();
    setFullscreen(true);
  };
  const exitFullscreen = async () => {
    if (document.fullscreenElement && document.exitFullscreen)
      await document.exitFullscreen();
    setFullscreen(false);
  };
  useEffect(() => {
    const handler = (event: KeyboardEvent) => {
      if (event.key === "ArrowLeft") {
        event.preventDefault();
        go(-1);
      }
      if (event.key === "ArrowRight") {
        event.preventDefault();
        go(1);
      }
    };
    const fullscreenHandler = () =>
      setFullscreen(document.fullscreenElement === viewerRef.current);
    window.addEventListener("keydown", handler);
    document.addEventListener("fullscreenchange", fullscreenHandler);
    return () => {
      window.removeEventListener("keydown", handler);
      document.removeEventListener("fullscreenchange", fullscreenHandler);
    };
  }, [index, total]);
  return (
    <section
      ref={viewerRef}
      className={`image-viewer ${fullscreen ? "fullscreen" : ""}`}
    >
      <div className="image-toolbar">
        <span>
          Slide {String(slideNumber).padStart(2, "0")} /{" "}
          {String(total - 1).padStart(2, "0")}
        </span>
        <div>
          {fullscreen ? (
            <button onClick={exitFullscreen}>
              {icon("fullscreen_exit")} Exit
            </button>
          ) : (
            <button onClick={enterFullscreen}>
              {icon("fullscreen")} Fullscreen
            </button>
          )}
        </div>
      </div>
      {image ? (
        <div className="image-viewport">
          <img src={image} alt={`Slide ${slideNumber} — ${content.title}`} />
          <button
            className="image-nav prev"
            onClick={() => go(-1)}
            disabled={index === 0}
            aria-label="Slide sebelumnya"
          >
            {icon("chevron_left")}
          </button>
          <button
            className="image-nav next"
            onClick={() => go(1)}
            disabled={index === total - 1}
            aria-label="Slide berikutnya"
          >
            {icon("chevron_right")}
          </button>
        </div>
      ) : (
        <EmptyState text="Gambar slide belum tersedia." />
      )}
      <p className="image-help">
        Gunakan tombol, klik navigasi pada gambar, atau tekan <kbd>←</kbd>{" "}
        <kbd>→</kbd>. Tekan <kbd>Esc</kbd> untuk keluar fullscreen.
      </p>
    </section>
  );
}
function PracticalView({
  practical,
  output,
  docs,
  tab,
  setTab,
}: {
  practical: ReturnType<typeof renderMarkdown> | null;
  output: [string, string][];
  docs: [string, string][];
  tab: Tab;
  setTab: (tab: Tab) => void;
}) {
  const [checks, setChecks] = useState<Record<number, boolean>>({});
  const rawTasks = practical?.html
    .match(/<li>(.*?)<\/li>/g)
    ?.slice(-8)
    .map((task) => task.replace(/<[^>]*>/g, "")) || [
    "Pahami tujuan praktikum dan konsep yang digunakan",
    "Jalankan contoh program",
    "Kembangkan hasil sesuai instruksi modul",
    "Rapikan dan dokumentasikan source code",
    "Siapkan hasil untuk dikumpulkan",
  ];
  return (
    <div className="practical-layout">
      <Outline headings={practical?.headings || []} />
      <div className="practical-column">
        <section className="practical-main">
          <div className="tabs">
            {(["description", "output", "checklist"] as Tab[]).map((item) => (
              <button
                className={tab === item ? "active" : ""}
                onClick={() => setTab(item)}
                key={item}
              >
                {icon(
                  item === "description"
                    ? "description"
                    : item === "output"
                      ? "preview"
                      : "checklist",
                )}
                {item === "description"
                  ? "Deskripsi"
                  : item === "output"
                    ? `Output${output.length ? ` (${output.length})` : ""}`
                    : "Checklist Tugas"}
              </button>
            ))}
          </div>
          {tab === "description" && (
            <article
              className="markdown-content"
              dangerouslySetInnerHTML={{
                __html:
                  practical?.html || "<p>Modul praktikum belum tersedia.</p>",
              }}
            />
          )}
          {tab === "output" && <OutputPanel output={output} docs={docs} />}
          {tab === "checklist" && (
            <div className="checklist-panel">
              <span className="eyebrow">PANDUAN PENGERJAAN</span>
              <h2>Checklist tugas</h2>
              <p>
                Gunakan daftar ini sebagai panduan sebelum mengumpulkan
                pekerjaan.
              </p>
              {rawTasks.map((task, index) => (
                <label
                  className={`check-item ${checks[index] ? "checked" : ""}`}
                  key={index}
                >
                  <input
                    type="checkbox"
                    checked={!!checks[index]}
                    onChange={() =>
                      setChecks({ ...checks, [index]: !checks[index] })
                    }
                  />
                  <span className="fake-check">{checks[index] ? "✓" : ""}</span>
                  <span>{task}</span>
                </label>
              ))}
            </div>
          )}
        </section>
      </div>
    </div>
  );
}
function OutputPanel({
  output,
  docs,
}: {
  output: [string, string][];
  docs: [string, string][];
}) {
  const htmlOutputs = output.filter(([path]) =>
    path.toLowerCase().endsWith(".html"),
  );
  const indexOutput = htmlOutputs.find(
    ([path]) => path.split(/[\\/]/).pop()?.toLowerCase() === "index.html",
  );
  const otherHtmlOutputs = htmlOutputs.filter(
    ([path]) => path !== indexOutput?.[0],
  );
  const documentation = docs.map(([path, source]) => ({
    name: path.split(/[\\/]/).pop() || "Dokumentasi",
    ...renderMarkdown(source),
  }));
  const sourceOutputs = output.filter(
    ([path]) =>
      !path.toLowerCase().endsWith(".html") &&
      !path.toLowerCase().endsWith("readme.md"),
  );
  const demo = (entry: [string, string]) => (
    <section className="demo-card" key={entry[0]}>
      <div className="demo-card-head">
        <b>{entry[0].split(/[\\/]/).pop()}</b>
        <a href={entry[1]} target="_blank" rel="noreferrer">
          Buka penuh {icon("open_in_new")}
        </a>
      </div>
      <iframe
        src={entry[1]}
        title={entry[0].split(/[\\/]/).pop()}
        sandbox="allow-scripts"
        loading="lazy"
      />
    </section>
  );
  return (
    <div className="output-panel">
      <div className="output-intro">
        <span className="eyebrow">HASIL PRAKTIKUM</span>
        <h2>Contoh output</h2>
        <p>
          Demo dapat dicoba langsung di bawah. Parameter kontrol dan penjelasan
          teknis ditampilkan bersama output.
        </p>
      </div>
      {indexOutput && (
        <div className="demo-list output-index-preview">
          {demo(indexOutput)}
        </div>
      )}
      {documentation.map((doc) => (
        <article className="output-document markdown-content" key={doc.name}>
          <div className="document-label">
            {icon("engineering")} {doc.name}
          </div>
          <div dangerouslySetInnerHTML={{ __html: doc.html }} />
        </article>
      ))}
      {output.length ? (
        <>
          {sourceOutputs.length > 0 && (
            <div className="output-grid">
              {sourceOutputs.map(([path, url]) => (
                <a
                  className="output-card"
                  href={url}
                  target="_blank"
                  rel="noreferrer"
                  key={path}
                >
                  {icon("open_in_new")}
                  <span>{path.split(/[\\/]/).pop()}</span>
                </a>
              ))}
            </div>
          )}
          {otherHtmlOutputs.length > 0 && (
            <div className="demo-list">{otherHtmlOutputs.map(demo)}</div>
          )}
        </>
      ) : (
        <EmptyState text="Contoh output belum tersedia untuk pertemuan ini." />
      )}
    </div>
  );
}
function EmptyState({ text }: { text: string }) {
  return (
    <div className="empty-state">
      {icon("deployed_code")}
      <p>{text}</p>
    </div>
  );
}

createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
