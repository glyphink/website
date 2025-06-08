/**
 * @file Interfaces - SvgElements
 * @module website/theme/interfaces/SvgElements
 */

/**
 * Registry of SVG elements.
 *
 * @see https://developer.mozilla.org/docs/Web/SVG/Reference/Element
 */
interface SVGElements {
  /**
   * @see https://developer.mozilla.org/docs/Web/SVG/Reference/Element/animate
   * @see {@linkcode SVGAnimateElement}
   */
  animate: SVGAnimateElement

  /**
   * @see https://developer.mozilla.org/docs/Web/SVG/Reference/Element/animateMotion
   * @see {@linkcode SVGAnimateMotionElement}
   */
  animateMotion: SVGAnimateMotionElement

  /**
   * @see https://developer.mozilla.org/docs/Web/SVG/Reference/Element/animateTransform
   * @see {@linkcode SVGAnimateTransformElement}
   */
  animateTransform: SVGAnimateTransformElement

  /**
   * @see https://developer.mozilla.org/docs/Web/SVG/Reference/Element/circle
   * @see {@linkcode SVGCircleElement}
   */
  circle: SVGCircleElement

  /**
   * @see https://developer.mozilla.org/docs/Web/SVG/Reference/Element/clipPath
   * @see {@linkcode SVGClipPathElement}
   */
  clipPath: SVGClipPathElement

  /**
   * @see https://developer.mozilla.org/docs/Web/SVG/Reference/Element/defs
   * @see {@linkcode SVGDefsElement}
   */
  defs: SVGDefsElement

  /**
   * @see https://developer.mozilla.org/docs/Web/SVG/Reference/Element/desc
   * @see {@linkcode SVGDescElement}
   */
  desc: SVGDescElement

  /**
   * @see https://developer.mozilla.org/docs/Web/SVG/Reference/Element/ellipse
   * @see {@linkcode SVGEllipseElement}
   */
  ellipse: SVGEllipseElement

  /**
   * @see https://developer.mozilla.org/docs/Web/SVG/Reference/Element/feBlend
   * @see {@linkcode SVGFEBlendElement}
   */
  feBlend: SVGFEBlendElement

  /**
   * @see https://developer.mozilla.org/docs/Web/SVG/Reference/Element/feColorMatrix
   * @see {@linkcode SVGFEColorMatrixElement}
   */
  feColorMatrix: SVGFEColorMatrixElement

  /**
   * @see https://developer.mozilla.org/docs/Web/SVG/Reference/Element/feComponentTransfer
   * @see {@linkcode SVGFEComponentTransferElement}
   */
  feComponentTransfer: SVGFEComponentTransferElement

  /**
   * @see https://developer.mozilla.org/docs/Web/SVG/Reference/Element/feComposite
   * @see {@linkcode SVGFECompositeElement}
   */
  feComposite: SVGFECompositeElement

  /**
   * @see https://developer.mozilla.org/docs/Web/SVG/Reference/Element/feConvolveMatrix
   * @see {@linkcode SVGFEConvolveMatrixElement}
   */
  feConvolveMatrix: SVGFEConvolveMatrixElement

  /**
   * @see https://developer.mozilla.org/docs/Web/SVG/Reference/Element/feDiffuseLighting
   * @see {@linkcode SVGFEDiffuseLightingElement}
   */
  feDiffuseLighting: SVGFEDiffuseLightingElement

  /**
   * @see https://developer.mozilla.org/docs/Web/SVG/Reference/Element/feDisplacementMap
   * @see {@linkcode SVGFEDisplacementMapElement}
   */
  feDisplacementMap: SVGFEDisplacementMapElement

  /**
   * @see https://developer.mozilla.org/docs/Web/SVG/Reference/Element/feDistantLight
   * @see {@linkcode SVGFEDistantLightElement}
   */
  feDistantLight: SVGFEDistantLightElement

  /**
   * @see https://developer.mozilla.org/docs/Web/SVG/Reference/Element/feDropShadow
   * @see {@linkcode SVGFEDropShadowElement}
   */
  feDropShadow: SVGFEDropShadowElement

  /**
   * @see https://developer.mozilla.org/docs/Web/SVG/Reference/Element/feFlood
   * @see {@linkcode SVGFEFloodElement}
   */
  feFlood: SVGFEFloodElement

  /**
   * @see https://developer.mozilla.org/docs/Web/SVG/Reference/Element/feFuncA
   * @see {@linkcode SVGFEFuncAElement}
   */
  feFuncA: SVGFEFuncAElement

  /**
   * @see https://developer.mozilla.org/docs/Web/SVG/Reference/Element/feFuncB
   * @see {@linkcode SVGFEFuncBElement}
   */
  feFuncB: SVGFEFuncBElement

  /**
   * @see https://developer.mozilla.org/docs/Web/SVG/Reference/Element/feFuncG
   * @see {@linkcode SVGFEFuncGElement}
   */
  feFuncG: SVGFEFuncGElement

  /**
   * @see https://developer.mozilla.org/docs/Web/SVG/Reference/Element/feFuncR
   * @see {@linkcode SVGFEFuncRElement}
   */
  feFuncR: SVGFEFuncRElement

  /**
   * @see https://developer.mozilla.org/docs/Web/SVG/Reference/Element/feGaussianBlur
   * @see {@linkcode SVGFEGaussianBlurElement}
   */
  feGaussianBlur: SVGFEGaussianBlurElement

  /**
   * @see https://developer.mozilla.org/docs/Web/SVG/Reference/Element/feImage
   * @see {@linkcode SVGFEImageElement}
   */
  feImage: SVGFEImageElement

  /**
   * @see https://developer.mozilla.org/docs/Web/SVG/Reference/Element/feMerge
   * @see {@linkcode SVGFEMergeElement}
   */
  feMerge: SVGFEMergeElement

  /**
   * @see https://developer.mozilla.org/docs/Web/SVG/Reference/Element/feMergeNode
   * @see {@linkcode SVGFEMergeNodeElement}
   */
  feMergeNode: SVGFEMergeNodeElement

  /**
   * @see https://developer.mozilla.org/docs/Web/SVG/Reference/Element/feMorphology
   * @see {@linkcode SVGFEMorphologyElement}
   */
  feMorphology: SVGFEMorphologyElement

  /**
   * @see https://developer.mozilla.org/docs/Web/SVG/Reference/Element/feOffset
   * @see {@linkcode SVGFEOffsetElement}
   */
  feOffset: SVGFEOffsetElement

  /**
   * @see https://developer.mozilla.org/docs/Web/SVG/Reference/Element/fePointLight
   * @see {@linkcode SVGFEPointLightElement}
   */
  fePointLight: SVGFEPointLightElement

  /**
   * @see https://developer.mozilla.org/docs/Web/SVG/Reference/Element/feSpecularLighting
   * @see {@linkcode SVGFESpecularLightingElement}
   */
  feSpecularLighting: SVGFESpecularLightingElement

  /**
   * @see https://developer.mozilla.org/docs/Web/SVG/Reference/Element/feSpotLight
   * @see {@linkcode SVGFESpotLightElement}
   */
  feSpotLight: SVGFESpotLightElement

  /**
   * @see https://developer.mozilla.org/docs/Web/SVG/Reference/Element/feTile
   * @see {@linkcode SVGFETileElement}
   */
  feTile: SVGFETileElement

  /**
   * @see https://developer.mozilla.org/docs/Web/SVG/Reference/Element/feTurbulence
   * @see {@linkcode SVGFETurbulenceElement}
   */
  feTurbulence: SVGFETurbulenceElement

  /**
   * @see https://developer.mozilla.org/docs/Web/SVG/Reference/Element/filter
   * @see {@linkcode SVGFilterElement}
   */
  filter: SVGFilterElement

  /**
   * @see https://developer.mozilla.org/docs/Web/SVG/Reference/Element/foreignObject
   * @see {@linkcode SVGForeignObjectElement}
   */
  foreignObject: SVGForeignObjectElement

  /**
   * @see https://developer.mozilla.org/docs/Web/SVG/Reference/Element/g
   * @see {@linkcode SVGGElement}
   */
  g: SVGGElement

  /**
   * @see https://developer.mozilla.org/docs/Web/SVG/Reference/Element/image
   * @see {@linkcode SVGImageElement}
   */
  image: SVGImageElement

  /**
   * @see https://developer.mozilla.org/docs/Web/SVG/Reference/Element/line
   * @see {@linkcode SVGLineElement}
   */
  line: SVGLineElement

  /**
   * @see https://developer.mozilla.org/docs/Web/SVG/Reference/Element/linearGradient
   * @see {@linkcode SVGLinearGradientElement}
   */
  linearGradient: SVGLinearGradientElement

  /**
   * @see https://developer.mozilla.org/docs/Web/SVG/Reference/Element/marker
   * @see {@linkcode SVGMarkerElement}
   */
  marker: SVGMarkerElement

  /**
   * @see https://developer.mozilla.org/docs/Web/SVG/Reference/Element/mask
   * @see {@linkcode SVGMaskElement}
   */
  mask: SVGMaskElement

  /**
   * @see https://developer.mozilla.org/docs/Web/SVG/Reference/Element/metadata
   * @see {@linkcode SVGMetadataElement}
   */
  metadata: SVGMetadataElement

  /**
   * @see https://developer.mozilla.org/docs/Web/SVG/Reference/Element/mpath
   * @see {@linkcode SVGMPathElement}
   */
  mpath: SVGMPathElement

  /**
   * @see https://developer.mozilla.org/docs/Web/SVG/Reference/Element/path
   * @see {@linkcode SVGPathElement}
   */
  path: SVGPathElement

  /**
   * @see https://developer.mozilla.org/docs/Web/SVG/Reference/Element/pattern
   * @see {@linkcode SVGPatternElement}
   */
  pattern: SVGPatternElement

  /**
   * @see https://developer.mozilla.org/docs/Web/SVG/Reference/Element/polygon
   * @see {@linkcode SVGPolygonElement}
   */
  polygon: SVGPolygonElement

  /**
   * @see https://developer.mozilla.org/docs/Web/SVG/Reference/Element/polyline
   * @see {@linkcode SVGPolylineElement}
   */
  polyline: SVGPolylineElement

  /**
   * @see https://developer.mozilla.org/docs/Web/SVG/Reference/Element/radialGradient
   * @see {@linkcode SVGRadialGradientElement}
   */
  radialGradient: SVGRadialGradientElement

  /**
   * @see https://developer.mozilla.org/docs/Web/SVG/Reference/Element/rect
   * @see {@linkcode SVGRectElement}
   */
  rect: SVGRectElement

  /**
   * @see https://developer.mozilla.org/docs/Web/SVG/Reference/Element/stop
   * @see {@linkcode SVGStopElement}
   */
  stop: SVGStopElement

  /**
   * @see https://developer.mozilla.org/docs/Web/SVG/Reference/Element/svg
   * @see {@linkcode SVGSVGElement}
   */
  svg: SVGSVGElement

  /**
   * @see https://developer.mozilla.org/docs/Web/SVG/Reference/Element/switch
   * @see {@linkcode SVGSwitchElement}
   */
  switch: SVGSwitchElement

  /**
   * @see https://developer.mozilla.org/docs/Web/SVG/Reference/Element/symbol
   * @see {@linkcode SVGSymbolElement}
   */
  symbol: SVGSymbolElement

  /**
   * @see https://developer.mozilla.org/docs/Web/SVG/Reference/Element/text
   * @see {@linkcode SVGTextElement}
   */
  text: SVGTextElement

  /**
   * @see https://developer.mozilla.org/docs/Web/SVG/Reference/Element/textPath
   * @see {@linkcode SVGTextPathElement}
   */
  textPath: SVGTextPathElement

  /**
   * @see https://developer.mozilla.org/docs/Web/SVG/Reference/Element/tspan
   * @see {@linkcode SVGTSpanElement}
   */
  tspan: SVGTSpanElement

  /**
   * @see https://developer.mozilla.org/docs/Web/SVG/Reference/Element/use
   * @see {@linkcode SVGUseElement}
   */
  use: SVGUseElement

  /**
   * @see https://developer.mozilla.org/docs/Web/SVG/Reference/Element/view
   * @see {@linkcode SVGViewElement}
   */
  view: SVGViewElement
}

export type { SVGElements as default }
