import { MDXComponents } from "mdx/types";

export const mdxComponents: MDXComponents = {
  h1(properties) {
    return (
      <h1
        {...properties}
        className="scroll-m-20 text-3xl font-bold tracking-tight lg:text-5xl"
      ></h1>
    );
  },
  h2(properties) {
    return (
      <h2
        {...properties}
        className="mt-10 scroll-m-20 border-b pb-2 text-2xl font-semibold tracking-tight first:mt-0"
      ></h2>
    );
  },
  h3(properties) {
    return (
      <h3
        {...properties}
        className="mt-8 scroll-m-20 text-xl font-semibold tracking-tight"
      ></h3>
    );
  },
  h4(properties) {
    return (
      <h4
        {...properties}
        className="mt-8 scroll-m-20 text-lg font-semibold tracking-tight"
      ></h4>
    );
  },
  p(properties) {
    return (
      <p {...properties} className="leading-7 [&:not(:first-child)]:mt-6"></p>
    );
  },
  blockquote(properties) {
    return (
      <blockquote
        {...properties}
        className="mt-6 border-l-2 pl-6 italic"
      ></blockquote>
    );
  },
  table(properties) {
    return (
      <div className="my-6 w-full overflow-y-auto">
        <table {...properties} className="w-full"></table>
      </div>
    );
  },
  tbody(properties) {
    return <tbody {...properties}></tbody>;
  },
  thead(properties) {
    return <thead {...properties}></thead>;
  },
  tr(properties) {
    return <tr {...properties} className="m-0 border-t p-0 even:bg-muted"></tr>;
  },
  th(properties) {
    return (
      <th
        {...properties}
        className="border px-4 py-2 text-left font-bold [&[align=center]]:text-center [&[align=right]]:text-right"
      ></th>
    );
  },
  td(properties) {
    return (
      <td
        {...properties}
        className="border px-4 py-2 text-left [&[align=center]]:text-center [&[align=right]]:text-right"
      ></td>
    );
  },
  ul(properties) {
    return (
      <ul {...properties} className="my-4 ml-6 list-disc [&>li]:mt-2"></ul>
    );
  },
  ol(properties) {
    return (
      <ol {...properties} className="my-4 ml-6 list-decimal [&>li]:mt-2"></ol>
    );
  },
  li(properties) {
    return <li {...properties}></li>;
  },
  code(properties) {
    return (
      <code
        {...properties}
        className="relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm font-semibold"
      ></code>
    );
  },
  pre(properties) {
    return <pre {...properties}></pre>;
  },
  img(properties) {
    return <img {...properties} className="w-4/5 mx-auto" />;
  },
  Lead(properties) {
    return <p {...properties} className="text-xl text-muted-foreground"></p>;
  },
  Large(properties) {
    return <div {...properties} className="text-lg font-semibold"></div>;
  },
  Small(properties) {
    return (
      <small
        {...properties}
        className="text-sm font-medium leading-none"
      ></small>
    );
  },
  Muted(properties) {
    return <p {...properties} className="text-sm text-muted-foreground"></p>;
  },
  Callout({ children, ...properties }) {
    return (
      <div {...properties} className="mt-6 rounded p-4 bg-muted">
        <span className="mr-3">💡</span>
        {children}
      </div>
    );
  },
};
