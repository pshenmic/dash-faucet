import { CSSObject, createGlobalStyle, css } from "styled-components";
import { AdaptiveGrid } from "./AdaptiveGrid";

export const initSmartCSSGrid = ({
  grid,
  related = {},
  scaleUpCoeff = 0.6666,
  fontBase = 16,
}) => {
  const breakpoints = {}
  const fontSizes = {}

  for (let key in grid) {
    breakpoints[key] = `${grid[key]}px`
    fontSizes[key] = `${(fontBase * 100) / Number(related[key] || grid[key])}vw`
  }

  const highestWidth = Math.max(...Object.values(grid));

  const rm = (value) => `${value / fontBase}rem`;
  const em = (value) => `${value / fontBase}em`;

  const media = Object.keys(breakpoints).reduce((acc, label) => {
    acc[label] = (...args) => css`
      @media (max-width: ${breakpoints[label]}) {
        ${css(...args)}
      }
    `;
    return acc;
  }, {});


  const PrintGrid = createGlobalStyle`
    html {
      font-size: ${fontBase}px;

      ${Object.keys(breakpoints).reduce((acc, curr) => {
        const value = `
          @media (max-width: ${breakpoints[curr]}) {
            font-size: ${fontSizes[curr]};
          }\n
        `;
        return acc + value;
      }, '')}
    }
  `;

  const SmartCSSGridComponent = () => (
    <>
      <AdaptiveGrid baseWidth={highestWidth} coef={scaleUpCoeff} />
      <PrintGrid />
    </>
  );

  return { SmartCSSGrid: SmartCSSGridComponent, media, rm, em };
};