import { css } from 'styled-components'

const size = {
    small: 575,
    medSmall: 767,
    medLarge: 900,
    med: 960,
    large: 1175
}
// allows us to easily do media queries

export const above = Object.keys(size).reduce((acc, label) => {
    acc[label] = (...args) => css`
    @media (min-width: ${size[label]}px) {
      ${css(...args)}
    }
  `
    return acc
}, {})

export const below = Object.keys(size).reduce((acc, label) => {
    acc[label] = (...args) => css`
    @media (max-width: ${size[label]}px) {
      ${css(...args)}
    }
  `
    return acc
}, {})

export const belowHeight = Object.keys(size).reduce((acc, label) => {
    acc[label] = (...args) => css`
    @media (max-height: ${size[label]}px) {
      ${css(...args)}
    }
  `
    return acc
}, {})

export const aboveHeight = Object.keys(size).reduce((acc, label) => {
    acc[label] = (...args) => css`
    @media (min-height: ${size[label]}px) {
      ${css(...args)}
    }
  `
    return acc
}, {})

/*
How to use:
in your css:
${above.med `
  color: blue;
`}
*/