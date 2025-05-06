import type { ReactNode } from 'react';

export const Button = ({ children }: { children?: ReactNode }) => (
  <div>
    <button className="relative flex h-[56px] items-center justify-center overflow-hidden rounded-full bg-[#1EA665] pr-16 pl-6 text-lg font-semibold text-ellipsis text-white transition hover:opacity-80">
      {children}
      <span className="absolute top-2 right-2 flex h-10 w-10 items-center justify-center rounded-full bg-[#FFF]">
        <svg
          width="13"
          height="13"
          viewBox="0 0 13 13"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M1 12L12 1M12 1H1M12 1V12" stroke="#101716" strokeWidth="2" />
        </svg>
      </span>
    </button>
  </div>
);
