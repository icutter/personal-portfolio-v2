import React from 'react';

interface CollapsibleProps {
  title: string;
  important?: boolean;
  children: React.ReactNode;
}

const Collapsible = ({ title, important, children }: CollapsibleProps) => (
  <details
    style={{
      borderLeft: '4px solid #ccc',
      paddingLeft: '10px',
      margin: '6px 0 6px 0',
    }}
  >
    <summary
      className="flex select-none items-center justify-between rounded-md"
      style={{
        cursor: 'pointer',
        backgroundColor: '#1E293B',
        color: '#fff',
        padding: '0.5rem',
      }}
    >
      {title}
      {important && <span className="ml-2 text-orange-400">Hot topic 🔥</span>}
    </summary>
    {children}
  </details>
);

export { Collapsible };
