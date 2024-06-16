import { createCanvas, loadImage } from "@napi-rs/canvas";
import fs from "node:fs/promises";
import path from "node:path";
import { generate } from "../dist";

async function main() {
  const url =
    "https://www.dingtalk.com/1234567890abcdefghijklmnopqrstuvwxyz";
  const defaultImgUrl =
    "https://gw.alicdn.com/imgextra/i4/O1CN01djwPhA29ICfjOWcA1_!!6000000008044-2-tps-192-192.png";
  const image = (await loadImage(defaultImgUrl)) as any as HTMLImageElement;
  const canvas = createCanvas(1, 1);
  const ctx = canvas.getContext("2d") as any as CanvasRenderingContext2D;

  await generate(ctx, url, { logo: image });

  const data = canvas.toBuffer("image/png");

  await fs.writeFile(path.resolve(__dirname, "./qrcode.png"), data);
}

main();
