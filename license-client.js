(async function(){
  const LICENSE_API_URL = 'https://YOUR-WORKER-URL/verify'; 
  const HEARTBEAT_URL = 'https://YOUR-WORKER-URL/heartbeat';
  const PRODUCT_ID = 'arsya-web-v1';

  async function checkLicense() {
    const domain = window.location.hostname.toLowerCase();
    
    const resp = await fetch(LICENSE_API_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ domain, productId: PRODUCT_ID })
    });
    
    const j = await resp.json();

    if (!j.ok || !j.valid) {
      document.body.innerHTML = "";
      const d = document.createElement("div");
      d.style = "position:fixed; inset:0; display:flex;align-items:center;justify-content:center;background:#000;color:#fff;font-size:20px;z-index:9999";
      d.innerHTML = "Website ini tidak memiliki lisensi.";
      document.body.appendChild(d);

      fetch(HEARTBEAT_URL,{
        method:"POST",
        headers:{'Content-Type':'application/json'},
        body:JSON.stringify({domain,reason:j.reason})
      });

      return;
    }
  }

  checkLicense();
})();
