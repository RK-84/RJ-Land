export async function GET() {
  const baseUrl = "https://rjland.ir";

  // دریافت تصاویر صفحه اصلی
  const homeImages = await fetch(`${baseUrl}/api/HomeImages`)
    .then(res => res.json())
    .catch(() => []);

  // دریافت تصاویر محصولات
  const products = await fetch(`${baseUrl}/api/myProducts`)
    .then(res => res.json())
    .catch(() => []);

  // دریافت تصاویر اسلایدر
  const sliderImages = await fetch(`${baseUrl}/api/public/mainSlider`)
    .then(res => res.json())
    .catch(() => []);

  // ساخت لیست تصاویر
  const images = [];

  // 0. اضافه کردن لوگوی سرچ
  images.push({
    loc: `${baseUrl}`,
    img: `${baseUrl}/logo-search.png`
  });

  // 1. Home images
  homeImages.forEach(img => {
    if (img.indexImageUrl) {
      images.push({
        loc: `${baseUrl}`,
        img: img.indexImageUrl
      });
    }
  });

  // 2. Product images
  products.forEach(p => {
    if (p.indexImageUrl) {
      images.push({
        loc: `${baseUrl}/product/${p.id}`,
        img: p.indexImageUrl
      });
    }
  });

  // 3. Slider images
  sliderImages.forEach(sl => {
    if (sl.indexImageUrl) {
      images.push({
        loc: `${baseUrl}`,
        img: sl.indexImageUrl
      });
    }
  });

  // ساخت XML نهایی
  const body = `
  <urlset 
    xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
    xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">

    ${images
      .map(
        i => `
      <url>
        <loc>${i.loc}</loc>
        <image:image>
          <image:loc>${i.img}</image:loc>
        </image:image>
      </url>
    `
      )
      .join("")}

  </urlset>
  `.trim();

  return new Response(body, {
    headers: {
      "Content-Type": "application/xml"
    }
  });
}
