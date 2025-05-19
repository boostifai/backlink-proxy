export default async function handler(req, res) {
  const targetUrl = 'https://script.google.com/macros/s/AKfycbyKIj4W_-DOQfKU1FaW9N7nWGZWKM8lbx8Xz-r2Asm3KiiqtoDlfGiFwP83J_Bf7sI/exec?view=form';

  try {
    const response = await fetch(targetUrl);
    const html = await response.text();

    res.setHeader('Content-Type', 'text/html');
    res.status(response.status).send(html);
  } catch (error) {
    res.status(500).send('Error fetching form');
  }
}