export default async function handler(req, res) {
  const targetUrl = 'https://script.google.com/macros/s/AKfycbx9ksu-7mHfCcZ-uNJwPzarh5VoDjLA6fx3_D-4ymWnTe6Se4w34zULcBdrHGyCxj_t/exec';

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