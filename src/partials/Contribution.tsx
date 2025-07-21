import React from 'react';

interface ContributionProps {
  title: string;
  important?: boolean;
  children: React.ReactNode;
}

const Contribution = (props: ContributionProps) => (
  <>
    <div
      className="flex select-none items-center justify-between rounded-md"
      style={{
        backgroundColor: '#1E293B',
        color: '#fff',
        marginTop: '36px',
        padding: '0.5rem',
      }}
    >
      <h4 style={{ margin: 0 }}>{props.title}</h4>
      {props.important && (
        <span className="ml-2 text-orange-400">
          <span className="hidden sm:inline">Hot topic 🔥</span>
          <span className="sm:hidden">🔥</span>
        </span>
      )}
    </div>
    <div
      style={{
        borderLeft: '2px solid #ccc',
        paddingLeft: '22px',
        margin: '6px 0 6px 12px',
      }}
    >
      {props.children}
    </div>
  </>
);

export { Contribution };
