import Markdown from "react-markdown";

export default function MarkdownPreview({ content }: { content: string }) {
  return <Markdown className="prose">{content}</Markdown>;
}
