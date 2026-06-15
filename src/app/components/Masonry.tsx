import React, { useMemo } from 'react';

// Responsive hook to track current window matching media query values
const useMedia = (queries: string[], values: number[], defaultValue: number): number => {
  const get = () => values[queries.findIndex(q => matchMedia(q).matches)] ?? defaultValue;
  const [value, setValue] = React.useState<number>(get);

  React.useEffect(() => {
    const handler = () => setValue(get);
    queries.forEach(q => matchMedia(q).addEventListener('change', handler));
    return () => queries.forEach(q => matchMedia(q).removeEventListener('change', handler));
  }, [queries]);

  return value;
};

interface Item {
  id: string;
  img: string;
  url: string;
  height: number;
  title?: string;
  subtitle?: string;
}

interface MasonryProps {
  items: Item[];
  ease?: string;
  duration?: number;
  stagger?: number;
  animateFrom?: 'bottom' | 'top' | 'left' | 'right' | 'center' | 'random';
  scaleOnHover?: boolean;
  hoverScale?: number;
  blurToFocus?: boolean;
  colorShiftOnHover?: boolean;
}

const Masonry: React.FC<MasonryProps> = ({
  items,
  colorShiftOnHover = true
}) => {
  // Use responsive media queries to determine column counts:
  // Desktop: 3 columns, Tablet: 2 columns, Mobile: 1 column
  const columnsCount = useMedia(
    ['(min-width: 1024px)', '(min-width: 640px)'],
    [3, 2],
    1
  );

  // Partition items dynamically into the calculated column count
  const columnsData = useMemo(() => {
    const cols = Array.from({ length: columnsCount }, () => [] as Item[]);
    items.forEach((item, index) => {
      cols[index % columnsCount].push(item);
    });
    return cols;
  }, [items, columnsCount]);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 h-full w-full overflow-hidden marquee-mask select-none">
      {columnsData.map((colItems, colIndex) => {
        // Alternate scroll directions for columns (column 0: up, column 1: down, column 2: up)
        const directionClass = colIndex % 2 === 0 ? 'scroll-up' : 'scroll-down';
        
        // Alternate scroll speeds for an organic, unsynchronized parallax look
        const speedClass = colIndex === 0 ? 'speed-slow' : colIndex === 1 ? 'speed-fast' : '';

        // Duplicate items so the column track loops seamlessly in CSS translateY animation
        const repeatedItems = [...colItems, ...colItems];

        return (
          <div key={colIndex} className="marquee-column-wrapper h-full">
            <div className={`marquee-track ${directionClass} ${speedClass}`}>
              {repeatedItems.map((item, itemIdx) => (
                <div
                  key={`${item.id}-dup-${itemIdx}`}
                  className="marquee-item"
                  onClick={() => window.open(item.url, '_blank', 'noopener')}
                >
                  <div
                    className="marquee-item-image bg-cover bg-center"
                    style={{
                      backgroundImage: `url(${item.img})`,
                      height: `${item.height / 2.2}px`, // Adjusted ratio to fit card layout perfectly
                    }}
                  >
                    {/* Dark gradient overlay for visual hierarchy and readability */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent opacity-75 pointer-events-none" />

                    {/* Custom Brand Red/Pink color shift overlay on card hover */}
                    {colorShiftOnHover && (
                      <div className="color-overlay absolute inset-0 bg-gradient-to-tr from-[#c62828]/40 to-pink-600/20 opacity-0 pointer-events-none transition-opacity duration-300" />
                    )}

                    {/* Text Details Overlay */}
                    <div 
                      className="marquee-info-overlay absolute bottom-0 left-0 right-0 p-4 flex flex-col justify-end select-none"
                      style={{ fontFamily: "'Noto Sans JP', sans-serif" }}
                    >
                      <span className="text-[8px] text-[#c62828] font-bold tracking-[0.25em] uppercase mb-0.5">
                        Harshtal Moments
                      </span>
                      {item.title && (
                        <h4 className="text-white text-xs font-extrabold uppercase tracking-widest leading-snug">
                          {item.title}
                        </h4>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Masonry;
