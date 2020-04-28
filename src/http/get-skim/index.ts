export async function handler(req: object) {
  try {
    return {
      statusCode: 200,
      headers: {
        "content-type": "application/json; charset=utf8",
        "cache-control":
          "no-cache, no-store, must-revalidate, max-age=0, s-maxage=0",
      },
      body: {
        message: "Success",
        req,
      },
    };
  } catch (e) {
    return {
      statusCode: 500,
      headers: {
        "content-type": "application/json; charset=utf8",
        "cache-control":
          "no-cache, no-store, must-revalidate, max-age=0, s-maxage=0",
      },
      body: {
        message: `Something went wrong - ${e.message}`,
      },
    };
  }
}
