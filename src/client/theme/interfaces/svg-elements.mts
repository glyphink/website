/**
 * @file Interfaces - SvgElements
 * @module website/theme/interfaces/SvgElements
 */

/**
 * Registry of SVG elements.
 */
interface SVGElements {
  animate: SVGAnimateElement
  animateMotion: SVGAnimateMotionElement
  animateTransform: SVGAnimateTransformElement
  circle: SVGCircleElement
  clipPath: SVGClipPathElement
  defs: SVGDefsElement
  desc: SVGDescElement
  ellipse: SVGEllipseElement
  feBlend: SVGFEBlendElement
  feColorMatrix: SVGFEColorMatrixElement
  feComponentTransfer: SVGFEComponentTransferElement
  feComposite: SVGFECompositeElement
  feConvolveMatrix: SVGFEConvolveMatrixElement
  feDiffuseLighting: SVGFEDiffuseLightingElement
  feDisplacementMap: SVGFEDisplacementMapElement
  feDistantLight: SVGFEDistantLightElement
  feDropShadow: SVGFEDropShadowElement
  feFlood: SVGFEFloodElement
  feFuncA: SVGFEFuncAElement
  feFuncB: SVGFEFuncBElement
  feFuncG: SVGFEFuncGElement
  feFuncR: SVGFEFuncRElement
  feGaussianBlur: SVGFEGaussianBlurElement
  feImage: SVGFEImageElement
  feMerge: SVGFEMergeElement
  feMergeNode: SVGFEMergeNodeElement
  feMorphology: SVGFEMorphologyElement
  feOffset: SVGFEOffsetElement
  fePointLight: SVGFEPointLightElement
  feSpecularLighting: SVGFESpecularLightingElement
  feSpotLight: SVGFESpotLightElement
  feTile: SVGFETileElement
  feTurbulence: SVGFETurbulenceElement
  filter: SVGFilterElement
  foreignObject: SVGForeignObjectElement
  g: SVGGElement
  image: SVGImageElement
  line: SVGLineElement
  linearGradient: SVGLinearGradientElement
  marker: SVGMarkerElement
  mask: SVGMaskElement
  metadata: SVGMetadataElement
  mpath: SVGMPathElement
  path: SVGPathElement
  pattern: SVGPatternElement
  polygon: SVGPolygonElement
  polyline: SVGPolylineElement
  radialGradient: SVGRadialGradientElement
  rect: SVGRectElement
  stop: SVGStopElement
  svg: SVGSVGElement
  switch: SVGSwitchElement
  symbol: SVGSymbolElement
  text: SVGTextElement
  textPath: SVGTextPathElement
  tspan: SVGTSpanElement
  use: SVGUseElement
  view: SVGViewElement
}

export type { SVGElements as default }
