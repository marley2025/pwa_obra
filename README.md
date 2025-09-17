# web/pwa_obra – Ultra-simple PWA

- **index.html**: Check-in/out with GPS (calls `/api/attendance/geo_check`)
- **pedir.html**: Create Material Request (calls `/api/material/request`)
- **owner.html**: List + Approve + Order (calls `/api/material/*`)

## Configure API base
Copy `assets/config.default.js` to `assets/config.js` and set `API_BASE`:

```js
// Same domain as Odoo
window.API_BASE = '/api';

// Different domain
window.API_BASE = 'http://odoo.example.com/api';
