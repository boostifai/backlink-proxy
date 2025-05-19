export default async function handler(req, res) {
  const targetUrl = 'https://script.google.com/macros/s/AKfycbyKIj4W_-DOQfKU1FaW9N7nWGZWKM8lbx8Xz-r2Asm3KiiqtoDlfGiFwP83J_Bf7sI/exec?view=form';

  const url = new URL(targetUrl);
  Object.entries(req.query).forEach(([key, value]) => {
    url.searchParams.append(key, value);
  });

  const response = await fetch(url.href, {
    method: req.method,
    headers: {
      ...req.headers,
      host: url.host, // prevent CORS errors
    },
  });

  const body = await response.text();
  res.status(response.status).send(body);
}