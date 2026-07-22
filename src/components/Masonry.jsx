import React, { useMemo } from 'react';


const useMedia = (queries, values, defaultValue) => {
  const get = () => values[queries.findIndex((q) => matchMedia(q).matches)] ?? defaultValue;
  const [value, setValue] = React.useState(get);

  React.useEffect(() => {
    const handler = () => setValue(get);
    queries.forEach((q) => matchMedia(q).addEventListener('change', handler));
    return () => queries.forEach((q) => matchMedia(q).removeEventListener('change', handler));
  }, [queries]);

  return value;
};






















const Masonry = ({
  items,
  colorShiftOnHover = true
}) => {


  const columnsCount = useMedia(
  ['(min-width: 1024px)', '(min-width: 640px)'],
  [3, 2],
  1);



  const columnsData = useMemo(() => {
    const cols = Array.from({ length: columnsCount }, () => []);
    items.forEach((item, index) => {
      cols[index % columnsCount].push(item);
    });
    return cols;
  }, [items, columnsCount]);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 h-full w-full overflow-hidden marquee-mask select-none">
      {columnsData.map((colItems, colIndex) => {

        const directionClass = colIndex % 2 === 0 ? 'scroll-up' : 'scroll-down';


        const speedClass = colIndex === 0 ? 'speed-slow' : colIndex === 1 ? 'speed-fast' : '';


        const repeatedItems = [...colItems, ...colItems];

        return (
          <div key={colIndex} className="marquee-column-wrapper h-full">
            <div className={`marquee-track ${directionClass} ${speedClass}`}>
              {repeatedItems.map((item, itemIdx) =>
              <div
              key={`${item.id}-dup-${itemIdx}`}
              className="marquee-item"
              onClick={() => window.open(item.url, '_blank', 'noopener')}>

                  <div
                className="marquee-item-image bg-cover bg-center"
                style={{
                  backgroundImage: `url(${item.img})`,
                  height: `${item.height / 2.2}px`
                }}>

                    
                    <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent opacity-75 pointer-events-none" />

                    
                    {colorShiftOnHover &&
                  <div className="color-overlay absolute inset-0 bg-gradient-to-tr from-[#c62828]/40 to-pink-600/20 opacity-0 pointer-events-none transition-opacity duration-300" />}


                    
                    <div
                  className="marquee-info-overlay absolute bottom-0 left-0 right-0 p-4 flex flex-col justify-end select-none"
                  style={{ fontFamily: "'Noto Sans JP', sans-serif" }}>

                      <span className="text-[8px] text-[#c62828] font-bold tracking-[0.25em] uppercase mb-0.5">
                        Harshtal Moments
                      </span>
                      {item.title &&
                    <h4 className="text-white text-xs font-extrabold uppercase tracking-widest leading-snug">
                          {item.title}
                        </h4>}

                    </div>
                  </div>
                </div>)}

            </div>
          </div>);

      })}
    </div>);

};

export default Masonry;