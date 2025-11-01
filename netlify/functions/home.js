export async function handler(event) {
  const { path } = event;

  // 🏠 Nếu người dùng gọi /home → trả hướng dẫn chi tiết
  if (path.includes("/home")) {
    return {
      statusCode: 200,
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(
        {
          project: "🎬 Random Media API (Node.js Version)",
          author: "truyentranh210",
          version: "1.0.0",
          updated: new Date().toISOString(),
          description:
            "API demo chạy trên Netlify Functions, cho phép lấy nội dung ngẫu nhiên từ nhiều danh mục khác nhau.",
          endpoints: {
            "/home": "Hiển thị toàn bộ hướng dẫn và danh sách endpoint.",
            "/api": "Trả về danh sách tất cả danh mục có sẵn.",
            "/api/<category>":
              "Trả về nội dung ngẫu nhiên từ danh mục chỉ định, ví dụ: /api/animal hoặc /api/movie.",
          },
          usage: {
            list_categories: {
              method: "GET",
              example: "/api",
              note: "Lấy danh sách tất cả danh mục có sẵn.",
            },
            random_from_category: {
              method: "GET",
              example: "/api/movie",
              note: "Trả về phần tử ngẫu nhiên từ danh mục 'movie'.",
            },
          },
          message: "✅ API đang hoạt động. Hãy thử gọi /api hoặc /api/<category>!",
        },
        null,
        2
      ),
    };
  }

  // ⚙️ Mặc định /api
  return {
    statusCode: 200,
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(
      {
        status: "ok",
        message: "Welcome to Random Media API (Node.js Version)",
        usage: {
          list_categories: "/api",
          random_from_category: "/api/<category>",
        },
      },
      null,
      2
    ),
  };
}
