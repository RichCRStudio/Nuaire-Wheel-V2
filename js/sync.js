const USERS_KEY = 'wheel_users';
const SYNC_URL  = 'https://crstudiosites.co.uk/nuaire-wheel/sync.php';

function loadUsers() {
  try { return JSON.parse(localStorage.getItem(USERS_KEY) || '[]'); }
  catch { return []; }
}
function saveUsers(arr) {
  localStorage.setItem(USERS_KEY, JSON.stringify(arr));
}

async function syncWheelUsers() {
  if (!navigator.onLine) return;

  const users = loadUsers();

  const unsynced = users.filter(u => u.synced === 0);

  if (!unsynced.length) return;

  const payload = { schema: 1, items: unsynced };

  try {
	const res = await fetch(SYNC_URL, {
	  method: 'POST',
	  headers: {
		'Content-Type': 'application/json',
  		'X-API-Key': '+OkM+Nr6?jSg6PozWGVGT&BN@lTMk@h!PxJarxrGY'},
	  keepalive: true,
	  body: JSON.stringify(payload)
	});
	if (!res.ok) throw new Error('HTTP ' + res.status);
	const data = await res.json();

	// ✅ Mark all just-synced rows as synced = 1
	if (data.ok) {
	  const updated = users.map(u =>
		u.synced === 0 ? { ...u, synced: 1 } : u
	  );
	  saveUsers(updated);
	}
  } catch (err) {
	console.warn('Sync failed:', err.message);
  }
}

// Run every 5 minutes
setInterval(syncWheelUsers, 5 * 60 * 1000);