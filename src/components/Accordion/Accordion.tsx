import { useState } from 'react';

type AccordionProps = {
  /**
   * Title of the accordion
   */
  title?: string;
  /**
   * Content of the accordion
   */
  children: React.ReactNode;
  /**
   * Is the accordion open
   */
  open?: boolean;
};

export function Accordion({ children, title, open = false }: AccordionProps) {
  const [isOpen, setIsOpen] = useState(open);

  return (
    <div
      onClick={() => {
        setIsOpen((currentValue) => !currentValue);
      }}
    >
      <h1>{title}</h1>

      {isOpen && <div>{children}</div>}
    </div>
  );
}
