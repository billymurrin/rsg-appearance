window.addEventListener('message', (event) => {
  if (event.data.action === 'open') {
    document.body.style.display = 'flex';
  }
  if (event.data.action === 'close') {
    document.body.style.display = 'none';
  }
});

const resourceName = GetParentResourceName();

document.getElementById('close').addEventListener('click', () => {
  fetch(`https://${resourceName}/close`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({})
  });
});

document.body.style.display = 'none';
