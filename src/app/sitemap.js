export default async function sitemap() {
    const baseUrl = "https://rjland.ir";
  
    // گرفتن تمام محصولات از API تو
    let products = [];
    try {
      const res = await fetch(`${baseUrl}/api/myProducts`, {
        next: { revalidate: 300 }, // هر 5 دقیقه یک بار رفرش
      });
      products = await res.json();
    } catch (error) {
      console.error("❌ Error fetching /api/myProducts:", error);
    }
  
    // صفحات ثابت که عمومی هستند
    const staticPages = [
      "",
      "/categories",
    ].map((path) => ({
      url: `${baseUrl}${path}`,
      lastModified: new Date(),
    }));
  
    // استخراج category ها (مثل: اپل، شیائومی...)
    const categoryTypePages = Array.from(
      new Set(products.map((p) => p.category).filter(Boolean))
    ).map((category) => ({
      url: `${baseUrl}/product/categoryType/${encodeURIComponent(category)}`,
      lastModified: new Date(),
    }));
  
    // استخراج type ها (مثل: mobile, handsfree...)
    const typePages = Array.from(
      new Set(products.map((p) => p.type).filter(Boolean))
    ).map((type) => ({
      url: `${baseUrl}/product/Class/${encodeURIComponent(type)}`,
      lastModified: new Date(),
    }));
  
    // استخراج صفحات specialCategory
    const specialKeys = [
      "incredibleOffers",
      "dailySuggest",
      "gaming",
      "rjPlus",
      "bestSelling",
      "installmentGoods",
      "flagBearer",
    ];
  
    const specialCategoryPages = specialKeys
      .filter((key) => products.some((p) => p[key] === true))
      .map((key) => ({
        url: `${baseUrl}/product/specialCategory/${key}`,
        lastModified: new Date(),
      }));
  
    // صفحات محصولات تکی
    const productPages = products.map((item) => ({
      url: `${baseUrl}/product/${item.id}`,
      lastModified: new Date(),
    }));
  
    return [
      ...staticPages,
      ...categoryTypePages,
      ...typePages,
      ...specialCategoryPages,
      ...productPages,
    ];
  }
  