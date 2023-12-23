import React from 'react';

type Props = {
  justifyContent?: 'center' | 'flex-start' | 'flex-end' | 'space-between' | 'space-around';
  alignItems?: 'center' | 'flex-start' | 'flex-end' | 'stretch' | 'baseline';
  direction?: 'row' | 'column';
  gap?: number;
  children: React.ReactNode;
  style?: React.CSSProperties;
};

export const Flex = (props: Props) => {
  const { children, justifyContent, direction, alignItems,gap } = props;
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: justifyContent,
        alignItems: alignItems,
        flexDirection: direction,
        ...props.style,
        gap: gap,
      }}
    >
      {children}
    </div>
  );
};
