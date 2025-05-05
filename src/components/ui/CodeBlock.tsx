import React, { useState } from "react";
import { Check, Copy } from "lucide-react";

interface CodeBlockProps {
  code: string;
  language?: string;
}

const CodeBlock: React.FC<CodeBlockProps> = ({ code, language = "python" }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="relative group">
      <pre className="bg-neutral-900 text-white p-4 rounded-lg overflow-x-auto">
        <code className={`language-${language}`}>{code}</code>
      </pre>
      <button
        onClick={handleCopy}
        className="absolute top-2 right-2 p-2 bg-neutral-800 hover:bg-neutral-700 text-white rounded-md transition-all duration-200 flex items-center gap-1"
        aria-label="Copy code"
      >
        {copied ? (
          <>
            <Check size={16} className="text-green-400" />
            <span className="text-sm">Copied!</span>
          </>
        ) : (
          <>
            <Copy size={16} />
            <span className="text-sm">Copy</span>
          </>
        )}
      </button>
    </div>
  );
};

export default CodeBlock;
