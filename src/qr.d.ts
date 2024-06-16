export function draw(
  text: string,
  ctx: CanvasRenderingContext2D,
  size: number,
  ecc: number,
  options: {
    imageUrl?:
      | HTMLImageElement
      | SVGImageElement
      | HTMLVideoElement
      | HTMLCanvasElement
      | ImageBitmap
      | OffscreenCanvas
      | VideoFrame
      | Buffer;
    shape?: string;
    background?: string;
  }
): void;
