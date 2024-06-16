import qr from "./qr";

/**
 * 在给定的 ctx 中绘制二维码
 * @param ctx
 * @param text
 * @param params
 */
export function generate(
  /**
   * canvas 的绘制上下文
   */
  ctx: CanvasRenderingContext2D,
  /**
   * 二维码的内容，通常为一个 url
   */
  text: string,
  params?: {
    /**
     * 二维码中间显示的图像
     */
    logo?:
      | HTMLImageElement
      | SVGImageElement
      | HTMLVideoElement
      | HTMLCanvasElement
      | ImageBitmap
      | OffscreenCanvas
      | VideoFrame
      | Buffer;
    /**
     * 二维码的背景色，默认为 #FFFFFF
     */
    background?: string;
    /**
     * 二维码的尺寸，默认为 512，也就是 512 * 512
     */
    size?: number;
    /**
     * 二维码的形状，默认为 square
     */
    shape?: "square" | "circle";
    /**
     * 纠错等级，默认为 2
     */
    ecc?: number;
  }
) {
  const {
    logo,
    ecc = 2,
    size = 512,
    shape = "square",
    background = "#FFFFFF",
  } = params || {};

  ctx.canvas.width = size;
  ctx.canvas.height = size;

  ctx.save();
  ctx.fillStyle = background;
  ctx.fillRect(0, 0, size, size);
  ctx.restore();

  qr.draw(text, ctx, size, Number(ecc), {
    imageUrl: logo,
    shape,
    background,
  });
}

export default { generate };
