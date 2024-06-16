# DingTalk QR Code

钉钉风格的二维码生成器

## 使用方法

### node.js

```js
import { createCanvas, loadImage } from '@napi-rs/canvas';
import qr from 'dingtalk-qr-code';
import fs from 'fs/promises';

async function main() {
  const url = 'https://www.dingtalk.com';
  const defaultImgUrl =
    'https://gw.alicdn.com/imgextra/i4/O1CN01djwPhA29ICfjOWcA1_!!6000000008044-2-tps-192-192.png';
  const canvas = createCanvas(1, 1);
  const ctx = (canvas.getContext('2d') as any) as CanvasRenderingContext2D;
  const logo = ((await loadImage(defaultImgUrl)) as any) as HTMLImageElement;

  qr.generate(ctx, url, { logo, });

  const data = canvas.toBuffer('image/png');
  await fs.writeFile('./qrcode.test.png', data);
}

main();
```

### 前端

```js
import qr from 'dingtalk-qr-code';

async function main() {
  const url = 'https://www.dingtalk.com';
  const defaultImgUrl =
    'https://gw.alicdn.com/imgextra/i4/O1CN01djwPhA29ICfjOWcA1_!!6000000008044-2-tps-192-192.png';
  const logo = document.createElement('img');
  logo.src = defaultImgUrl;
  await new Promise(r=>logo.onload = r);

  const canvas = document.createElement('canvas');
  const ctx = canvas.getContext('2d');

  qr.generate(ctx, url, { logo, });

  document.body.appendChild(canvas);
}

main();
```