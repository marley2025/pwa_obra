async function api(path, opts){
  const base = (window.API_BASE || '/api').replace(/\/$/,''); // remove trailing slash
  const url = base + path;
  const res = await fetch(url, Object.assign({ headers:{'Content-Type':'application/json'} }, opts||{}));
  if (!res.ok) {
    let txt = await res.text().catch(()=>'');
    throw new Error(res.status + ' ' + txt);
  }
  return res.json();
}

async function geoCheck(payload){
  return api('/attendance/geo_check', { method:'POST', body: JSON.stringify(payload) });
}

async function createMaterialRequest(payload){
  return api('/material/request', { method:'POST', body: JSON.stringify(payload) });
}

async function listPending(){
  return api('/material/pending', { method:'POST', body: '{}' });
}

async function approveRequest(id){
  return api('/material/approve', { method:'POST', body: JSON.stringify({id}) });
}

async function orderBest(id){
  return api('/material/order_best', { method:'POST', body: JSON.stringify({id}) });
}
