/**
 * @file Type Tests - SvgElements
 * @module website/theme/interfaces/tests/unit-d/SvgElements
 */

import type { RequiredKeys } from '@flex-development/tutils'
import type TestSubject from '../svg-elements.mts'

describe('unit-d:theme/interfaces/SvgElements', () => {
  it('should have all required keys', () => {
    expectTypeOf<RequiredKeys<TestSubject>>().toEqualTypeOf<keyof TestSubject>()
  })

  it('should match [animate: SVGAnimateElement]', () => {
    expectTypeOf<TestSubject>()
      .toHaveProperty('animate')
      .toEqualTypeOf<SVGAnimateElement>()
  })

  it('should match [animateMotion: SVGAnimateMotionElement]', () => {
    expectTypeOf<TestSubject>()
      .toHaveProperty('animateMotion')
      .toEqualTypeOf<SVGAnimateMotionElement>()
  })

  it('should match [animateTransform: SVGAnimateTransformElement]', () => {
    expectTypeOf<TestSubject>()
      .toHaveProperty('animateTransform')
      .toEqualTypeOf<SVGAnimateTransformElement>()
  })

  it('should match [circle: SVGCircleElement]', () => {
    expectTypeOf<TestSubject>()
      .toHaveProperty('circle')
      .toEqualTypeOf<SVGCircleElement>()
  })

  it('should match [clipPath: SVGClipPathElement]', () => {
    expectTypeOf<TestSubject>()
      .toHaveProperty('clipPath')
      .toEqualTypeOf<SVGClipPathElement>()
  })

  it('should match [defs: SVGDefsElement]', () => {
    expectTypeOf<TestSubject>()
      .toHaveProperty('defs')
      .toEqualTypeOf<SVGDefsElement>()
  })

  it('should match [desc: SVGDescElement]', () => {
    expectTypeOf<TestSubject>()
      .toHaveProperty('desc')
      .toEqualTypeOf<SVGDescElement>()
  })

  it('should match [ellipse: SVGEllipseElement]', () => {
    expectTypeOf<TestSubject>()
      .toHaveProperty('ellipse')
      .toEqualTypeOf<SVGEllipseElement>()
  })

  it('should match [feBlend: SVGFEBlendElement]', () => {
    expectTypeOf<TestSubject>()
      .toHaveProperty('feBlend')
      .toEqualTypeOf<SVGFEBlendElement>()
  })

  it('should match [feColorMatrix: SVGFEColorMatrixElement]', () => {
    expectTypeOf<TestSubject>()
      .toHaveProperty('feColorMatrix')
      .toEqualTypeOf<SVGFEColorMatrixElement>()
  })

  it('should match [feComponentTransfer: SVGFEComponentTransferElement]', () => {
    expectTypeOf<TestSubject>()
      .toHaveProperty('feComponentTransfer')
      .toEqualTypeOf<SVGFEComponentTransferElement>()
  })

  it('should match [feComposite: SVGFECompositeElement]', () => {
    expectTypeOf<TestSubject>()
      .toHaveProperty('feComposite')
      .toEqualTypeOf<SVGFECompositeElement>()
  })

  it('should match [feConvolveMatrix: SVGFEConvolveMatrixElement]', () => {
    expectTypeOf<TestSubject>()
      .toHaveProperty('feConvolveMatrix')
      .toEqualTypeOf<SVGFEConvolveMatrixElement>()
  })

  it('should match [feDiffuseLighting: SVGFEDiffuseLightingElement]', () => {
    expectTypeOf<TestSubject>()
      .toHaveProperty('feDiffuseLighting')
      .toEqualTypeOf<SVGFEDiffuseLightingElement>()
  })

  it('should match [feDisplacementMap: SVGFEDisplacementMapElement]', () => {
    expectTypeOf<TestSubject>()
      .toHaveProperty('feDisplacementMap')
      .toEqualTypeOf<SVGFEDisplacementMapElement>()
  })

  it('should match [feDistantLight: SVGFEDistantLightElement]', () => {
    expectTypeOf<TestSubject>()
      .toHaveProperty('feDistantLight')
      .toEqualTypeOf<SVGFEDistantLightElement>()
  })

  it('should match [feDropShadow: SVGFEDropShadowElement]', () => {
    expectTypeOf<TestSubject>()
      .toHaveProperty('feDropShadow')
      .toEqualTypeOf<SVGFEDropShadowElement>()
  })

  it('should match [feFlood: SVGFEFloodElement]', () => {
    expectTypeOf<TestSubject>()
      .toHaveProperty('feFlood')
      .toEqualTypeOf<SVGFEFloodElement>()
  })

  it('should match [feFuncA: SVGFEFuncAElement]', () => {
    expectTypeOf<TestSubject>()
      .toHaveProperty('feFuncA')
      .toEqualTypeOf<SVGFEFuncAElement>()
  })

  it('should match [feFuncB: SVGFEFuncBElement]', () => {
    expectTypeOf<TestSubject>()
      .toHaveProperty('feFuncB')
      .toEqualTypeOf<SVGFEFuncBElement>()
  })

  it('should match [feFuncG: SVGFEFuncGElement]', () => {
    expectTypeOf<TestSubject>()
      .toHaveProperty('feFuncG')
      .toEqualTypeOf<SVGFEFuncGElement>()
  })

  it('should match [feFuncR: SVGFEFuncRElement]', () => {
    expectTypeOf<TestSubject>()
      .toHaveProperty('feFuncR')
      .toEqualTypeOf<SVGFEFuncRElement>()
  })

  it('should match [feGaussianBlur: SVGFEGaussianBlurElement]', () => {
    expectTypeOf<TestSubject>()
      .toHaveProperty('feGaussianBlur')
      .toEqualTypeOf<SVGFEGaussianBlurElement>()
  })

  it('should match [feImage: SVGFEImageElement]', () => {
    expectTypeOf<TestSubject>()
      .toHaveProperty('feImage')
      .toEqualTypeOf<SVGFEImageElement>()
  })

  it('should match [feMerge: SVGFEMergeElement]', () => {
    expectTypeOf<TestSubject>()
      .toHaveProperty('feMerge')
      .toEqualTypeOf<SVGFEMergeElement>()
  })

  it('should match [feMergeNode: SVGFEMergeNodeElement]', () => {
    expectTypeOf<TestSubject>()
      .toHaveProperty('feMergeNode')
      .toEqualTypeOf<SVGFEMergeNodeElement>()
  })

  it('should match [feMorphology: SVGFEMorphologyElement]', () => {
    expectTypeOf<TestSubject>()
      .toHaveProperty('feMorphology')
      .toEqualTypeOf<SVGFEMorphologyElement>()
  })

  it('should match [feOffset: SVGFEOffsetElement]', () => {
    expectTypeOf<TestSubject>()
      .toHaveProperty('feOffset')
      .toEqualTypeOf<SVGFEOffsetElement>()
  })

  it('should match [fePointLight: SVGFEPointLightElement]', () => {
    expectTypeOf<TestSubject>()
      .toHaveProperty('fePointLight')
      .toEqualTypeOf<SVGFEPointLightElement>()
  })

  it('should match [feSpecularLighting: SVGFESpecularLightingElement]', () => {
    expectTypeOf<TestSubject>()
      .toHaveProperty('feSpecularLighting')
      .toEqualTypeOf<SVGFESpecularLightingElement>()
  })

  it('should match [feSpotLight: SVGFESpotLightElement]', () => {
    expectTypeOf<TestSubject>()
      .toHaveProperty('feSpotLight')
      .toEqualTypeOf<SVGFESpotLightElement>()
  })

  it('should match [feTile: SVGFETileElement]', () => {
    expectTypeOf<TestSubject>()
      .toHaveProperty('feTile')
      .toEqualTypeOf<SVGFETileElement>()
  })

  it('should match [feTurbulence: SVGFETurbulenceElement]', () => {
    expectTypeOf<TestSubject>()
      .toHaveProperty('feTurbulence')
      .toEqualTypeOf<SVGFETurbulenceElement>()
  })

  it('should match [filter: SVGFilterElement]', () => {
    expectTypeOf<TestSubject>()
      .toHaveProperty('filter')
      .toEqualTypeOf<SVGFilterElement>()
  })

  it('should match [foreignObject: SVGForeignObjectElement]', () => {
    expectTypeOf<TestSubject>()
      .toHaveProperty('foreignObject')
      .toEqualTypeOf<SVGForeignObjectElement>()
  })

  it('should match [g: SVGGElement]', () => {
    expectTypeOf<TestSubject>()
      .toHaveProperty('g')
      .toEqualTypeOf<SVGGElement>()
  })

  it('should match [image: SVGImageElement]', () => {
    expectTypeOf<TestSubject>()
      .toHaveProperty('image')
      .toEqualTypeOf<SVGImageElement>()
  })

  it('should match [line: SVGLineElement]', () => {
    expectTypeOf<TestSubject>()
      .toHaveProperty('line')
      .toEqualTypeOf<SVGLineElement>()
  })

  it('should match [linearGradient: SVGLinearGradientElement]', () => {
    expectTypeOf<TestSubject>()
      .toHaveProperty('linearGradient')
      .toEqualTypeOf<SVGLinearGradientElement>()
  })

  it('should match [marker: SVGMarkerElement]', () => {
    expectTypeOf<TestSubject>()
      .toHaveProperty('marker')
      .toEqualTypeOf<SVGMarkerElement>()
  })

  it('should match [mask: SVGMaskElement]', () => {
    expectTypeOf<TestSubject>()
      .toHaveProperty('mask')
      .toEqualTypeOf<SVGMaskElement>()
  })

  it('should match [metadata: SVGMetadataElement]', () => {
    expectTypeOf<TestSubject>()
      .toHaveProperty('metadata')
      .toEqualTypeOf<SVGMetadataElement>()
  })

  it('should match [mpath: SVGMPathElement]', () => {
    expectTypeOf<TestSubject>()
      .toHaveProperty('mpath')
      .toEqualTypeOf<SVGMPathElement>()
  })

  it('should match [path: SVGPathElement]', () => {
    expectTypeOf<TestSubject>()
      .toHaveProperty('path')
      .toEqualTypeOf<SVGPathElement>()
  })

  it('should match [pattern: SVGPatternElement]', () => {
    expectTypeOf<TestSubject>()
      .toHaveProperty('pattern')
      .toEqualTypeOf<SVGPatternElement>()
  })

  it('should match [polygon: SVGPolygonElement]', () => {
    expectTypeOf<TestSubject>()
      .toHaveProperty('polygon')
      .toEqualTypeOf<SVGPolygonElement>()
  })

  it('should match [polyline: SVGPolylineElement]', () => {
    expectTypeOf<TestSubject>()
      .toHaveProperty('polyline')
      .toEqualTypeOf<SVGPolylineElement>()
  })

  it('should match [radialGradient: SVGRadialGradientElement]', () => {
    expectTypeOf<TestSubject>()
      .toHaveProperty('radialGradient')
      .toEqualTypeOf<SVGRadialGradientElement>()
  })

  it('should match [rect: SVGRectElement]', () => {
    expectTypeOf<TestSubject>()
      .toHaveProperty('rect')
      .toEqualTypeOf<SVGRectElement>()
  })

  it('should match [stop: SVGStopElement]', () => {
    expectTypeOf<TestSubject>()
      .toHaveProperty('stop')
      .toEqualTypeOf<SVGStopElement>()
  })

  it('should match [svg: SVGSVGElement]', () => {
    expectTypeOf<TestSubject>()
      .toHaveProperty('svg')
      .toEqualTypeOf<SVGSVGElement>()
  })

  it('should match [switch: SVGSwitchElement]', () => {
    expectTypeOf<TestSubject>()
      .toHaveProperty('switch')
      .toEqualTypeOf<SVGSwitchElement>()
  })

  it('should match [symbol: SVGSymbolElement]', () => {
    expectTypeOf<TestSubject>()
      .toHaveProperty('symbol')
      .toEqualTypeOf<SVGSymbolElement>()
  })

  it('should match [text: SVGTextElement]', () => {
    expectTypeOf<TestSubject>()
      .toHaveProperty('text')
      .toEqualTypeOf<SVGTextElement>()
  })

  it('should match [textPath: SVGTextPathElement]', () => {
    expectTypeOf<TestSubject>()
      .toHaveProperty('textPath')
      .toEqualTypeOf<SVGTextPathElement>()
  })

  it('should match [tspan: SVGTSpanElement]', () => {
    expectTypeOf<TestSubject>()
      .toHaveProperty('tspan')
      .toEqualTypeOf<SVGTSpanElement>()
  })

  it('should match [use: SVGUseElement]', () => {
    expectTypeOf<TestSubject>()
      .toHaveProperty('use')
      .toEqualTypeOf<SVGUseElement>()
  })

  it('should match [view: SVGViewElement]', () => {
    expectTypeOf<TestSubject>()
      .toHaveProperty('view')
      .toEqualTypeOf<SVGViewElement>()
  })
})
