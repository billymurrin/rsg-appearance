window.addEventListener('message', (event) => {
  if (event.data.action === 'open') {
    document.body.style.display = 'flex';
  }
  if (event.data.action === 'close') {
    document.body.style.display = 'none';
  }
});

document.getElementById('close').addEventListener('click', () => {
  fetch('https://rsg-appearance/close', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({})
  });
});

document.body.style.display = 'none';
