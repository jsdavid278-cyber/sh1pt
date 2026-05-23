import Script from 'next/script';

const TRACK_SCRIPT = `
(function(){
  try {
    var endpoint = 'https://crawlproof.com/api/track';
    var site = '09d382f0-1b98-4d28-b360-78eaf4e030f2';
    function send() {
      var body = JSON.stringify({
        site: site,
        ref: document.referrer || null,
        path: location.pathname + location.search
      });
      try {
        fetch(endpoint, {
          method: 'POST',
          keepalive: true,
          headers: { 'Content-Type': 'application/json' },
          body: body,
          credentials: 'omit',
          mode: 'no-cors'
        }).catch(function(){});
      } catch (_) {}
    }
    if (document.readyState === 'complete') send();
    else window.addEventListener('load', send, { once: true });
    var lastPath = location.pathname + location.search;
    function onNav() {
      var p = location.pathname + location.search;
      if (p === lastPath) return;
      lastPath = p;
      send();
    }
    var pushState = history.pushState;
    history.pushState = function(){ pushState.apply(this, arguments); onNav(); };
    var replaceState = history.replaceState;
    history.replaceState = function(){ replaceState.apply(this, arguments); onNav(); };
    window.addEventListener('popstate', onNav);
  } catch (_) {}
})();`;

export default function CrawlproofStats() {
  return <Script id="crawlproof-stats" strategy="afterInteractive">{TRACK_SCRIPT}</Script>;
}
