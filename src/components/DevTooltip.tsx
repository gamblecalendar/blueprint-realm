import React, { useState, useEffect } from 'react';

interface TooltipState {
  visible: boolean;
  x: number;
  y: number;
  filePath: string;
}

export const DevTooltip: React.FC = () => {
  const [tooltip, setTooltip] = useState<TooltipState>({
    visible: false,
    x: 0,
    y: 0,
    filePath: ''
  });
  const [enabled, setEnabled] = useState(true);

  useEffect(() => {
    // Only show in development mode
    if (import.meta.env.PROD) return;

    const handleMouseOver = (e: MouseEvent) => {
      if (!enabled) return;
      
      const target = e.target as HTMLElement;
      const lovableFile = target.getAttribute('data-lovable-file');
      
      if (lovableFile) {
        setTooltip({
          visible: true,
          x: e.clientX + 10,
          y: e.clientY - 30,
          filePath: lovableFile
        });
      }
    };

    const handleMouseOut = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const lovableFile = target.getAttribute('data-lovable-file');
      
      if (lovableFile) {
        setTooltip(prev => ({ ...prev, visible: false }));
      }
    };

    const handleKeyDown = (e: KeyboardEvent) => {
      // Toggle with Ctrl+Shift+D
      if (e.ctrlKey && e.shiftKey && e.key === 'D') {
        setEnabled(prev => !prev);
        setTooltip(prev => ({ ...prev, visible: false }));
      }
    };

    document.addEventListener('mouseover', handleMouseOver);
    document.addEventListener('mouseout', handleMouseOut);
    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('mouseover', handleMouseOver);
      document.removeEventListener('mouseout', handleMouseOut);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [enabled]);

  // Don't render in production
  if (import.meta.env.PROD) return null;

  return (
    <>
      {tooltip.visible && (
        <div
          className="fixed z-[9999] px-2 py-1 text-xs bg-popover border border-border rounded shadow-lg pointer-events-none"
          style={{
            left: tooltip.x,
            top: tooltip.y,
            transform: 'translateY(-100%)'
          }}
        >
          <div className="flex items-center gap-1">
            <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
            <span className="font-mono text-muted-foreground">{tooltip.filePath}</span>
          </div>
        </div>
      )}
      {!enabled && (
        <div className="fixed bottom-4 right-4 z-[9998] px-3 py-2 bg-muted border border-border rounded text-sm">
          Dev tooltips disabled (Ctrl+Shift+D to enable)
        </div>
      )}
    </>
  );
};