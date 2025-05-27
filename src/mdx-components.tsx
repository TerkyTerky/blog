import type { MDXComponents } from 'mdx/types'

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    ...components,
    h1: (props) => (
      <h1 className="text-[clamp(1.75rem,3vw,2.5rem)] font-bold mb-6">
        {props.children}
      </h1>
    ),
    h2: (props) => (
      <h2 className="text-[clamp(1.5rem,2.5vw,2rem)] font-bold mb-4 mt-8 border-b pb-2">
        {props.children}
      </h2>
    ),
    h3: (props) => (
      <h3 className="text-[clamp(1.25rem,2vw,1.5rem)] font-bold mb-3 mt-6">
        {props.children}
      </h3>
    ),
    h4: (props) => (
      <h4 className="text-[clamp(1.1rem,1.5vw,1.25rem)] font-bold mb-2 mt-4">
        {props.children}
      </h4>
    ),
    h5: (props) => (
      <h5 className="text-lg font-bold mb-2 mt-3">{props.children}</h5>
    ),
    h6: (props) => (
      <h6 className="text-base font-bold mb-2 mt-2 text-gray-600">
        {props.children}
      </h6>
    ),
    p: (props) => <p className="mb-4 leading-relaxed">{props.children}</p>,
    a: (props) => (
      <a
        href={props.href}
        className="text-blue-600 hover:text-blue-800 transition-colors duration-200 underline-offset-2 hover:underline"
      >
        {props.children}
      </a>
    ),
    strong: (props) => <strong className="font-bold">{props.children}</strong>,
    em: (props) => <em className="italic">{props.children}</em>,
    code: (props) => (
      <code className="bg-gray-100 text-gray-800 px-1 py-0.5 rounded text-sm font-mono">
        {props.children}
      </code>
    ),
    del: (props) => (
      <del className="line-through text-gray-500">{props.children}</del>
    ),
    ul: (props) => (
      <ul className="list-disc pl-5 mb-4 space-y-1">{props.children}</ul>
    ),
    ol: (props) => (
      <ol className="list-decimal pl-5 mb-4 space-y-1">{props.children}</ol>
    ),
    li: (props) => <li className="mb-1">{props.children}</li>,
    pre: (props) => (
      <pre className="bg-gray-800 text-gray-100 rounded-lg p-4 my-6 overflow-x-auto text-sm font-mono">
        {props.children}
      </pre>
    ),
    blockquote: (props) => (
      <blockquote className="border-l-4 border-gray-300 pl-4 italic text-gray-600 my-4">
        {props.children}
      </blockquote>
    ),
    table: (props) => (
      <table className="w-full border-collapse my-6">{props.children}</table>
    ),
    thead: (props) => <thead className="bg-gray-100">{props.children}</thead>,
    tbody: (props) => <tbody>{props.children}</tbody>,
    tr: (props) => (
      <tr className="border-b border-gray-200 hover:bg-gray-50 transition-colors">
        {props.children}
      </tr>
    ),
    th: (props) => (
      <th className="py-2 px-4 text-left font-bold">{props.children}</th>
    ),
    td: (props) => <td className="py-2 px-4">{props.children}</td>,
    hr: (props) => <hr className="border-gray-200 my-6" {...props} />,
  }
}
