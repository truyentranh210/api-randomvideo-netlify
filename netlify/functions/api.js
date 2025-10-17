export async function handler(event) {
  const data = {
    hentai3dvanguoi: [
      "https://files.catbox.moe/vysf40.mp4",
      "https://files.catbox.moe/1py1jv.mp4",
      "https://files.catbox.moe/tfeuzt.mp4",
      "https://files.catbox.moe/uu49i9.mp4",
      "https://files.catbox.moe/n1rv9x.mp4",
      "https://files.catbox.moe/n16b22.mp4",
      "https://files.catbox.moe/7stgrz.mp4",
      "https://files.catbox.moe/p59oyz.mp4",
      "https://files.catbox.moe/9sbhov.mp4",
      "https://files.catbox.moe/0tijln.mp4",
      "https://files.catbox.moe/fhj82c.mp4",
      "https://files.catbox.moe/440xpk.mp4",
      "https://files.catbox.moe/b1a5yt.mp4",
      "https://files.catbox.moe/7zbnhc.mp4",
      "https://files.catbox.moe/oza3qo.mp4",
      "https://files.catbox.moe/9t0i7k.mp4",
      "https://files.catbox.moe/ebb21n.mp4",
      "https://files.catbox.moe/ddkjnh.mp4",
      "https://files.catbox.moe/rlsc5e.mp4",
      "https://files.catbox.moe/t61f69.mp4",
      "https://files.catbox.moe/2kysgb.mp4",
      "https://files.catbox.moe/upaf0f.mp4",
      "https://files.catbox.moe/7970lm.mp4",
      "https://files.catbox.moe/vnrket.mp4",
      "https://files.catbox.moe/nv2zfa.mp4",
      "https://files.catbox.moe/tapgiw.mp4",
      "https://files.catbox.moe/640bn2.mp4",
      "https://files.catbox.moe/doc4cb.mp4",
      "https://files.catbox.moe/cbhjkt.mp4",
      "https://files.catbox.moe/owb583.mp4",
      "https://files.catbox.moe/30hkmk.mp4",
      "https://files.catbox.moe/kci6zp.mp4",
      "https://files.catbox.moe/0xo8k3.mp4",
      "https://files.catbox.moe/ayc6wh.mp4",
      "https://files.catbox.moe/6jutt8.mp4",
      "https://files.catbox.moe/sxwu2y.mp4"
    ],
    hentai2d: [],
    hentai3d: [
      "https://files.catbox.moe/wpj4iy.mp4",
      "https://files.catbox.moe/sn2kmf.mp4"
    ]
  };

  const path = event.path.replace("/api/", "");
  const category = path.split("/")[1] || "";

  // Nếu chỉ truy cập /api → trả danh sách category
  if (!category || category === "api") {
    const result = {};
    for (const [key, value] of Object.entries(data)) {
      result[key] = value.length;
    }
    return {
      statusCode: 200,
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(result),
    };
  }

  // Nếu truy cập /api/<category>
  if (!data[category]) {
    return {
      statusCode: 404,
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ error: "category_not_found" }),
    };
  }

  const items = data[category];
  const randomItem = items[Math.floor(Math.random() * items.length)];
  return {
    statusCode: 200,
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      url: randomItem,
      count: items.length,
      category,
    }),
  };
}
