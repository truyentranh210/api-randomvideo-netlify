export async function handler() {
  return {
    statusCode: 200,
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      status: "ok",
      message: "Welcome to Random Media API (Node.js Version)",
      usage: {
        list_categories: "/api",
        random_from_category: "/api/<category>",
      },
    }),
  };
}
