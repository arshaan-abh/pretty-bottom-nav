import type { FC } from "react";

const DefineFeather: FC = () => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg">
      <defs>
        <filter id="feather">
          <feGaussianBlur
            in="SourceGraphic"
            stdDeviation="8"
            result="gaussian-blur"
          />
          <feColorMatrix
            in="gaussian-blur"
            mode="matrix"
            values="0 0 0 0 1  0 0 0 0 1  0 0 0 0 1  0 0 0 64 -32"
            result="color-matrix"
          />
          <feComposite in="SourceGraphic" in2="color-matrix" operator="atop" />
        </filter>
      </defs>
    </svg>
  );
};

export default DefineFeather;
