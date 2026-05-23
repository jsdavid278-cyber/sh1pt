import Script from 'next/script';

const TRACK_SCRIPT = `
(function(){
  try {
    var endpoint = '/api/crawlproof/track';
    function send() {
      var body = JSON.stringify({
        ref: document.referrer || null,
        path: location.pathname + location.search
      });
      if (navigator.sendBeacon) {
        try {
          var blob = new Blob([body], { type: 'application/json' });
          if (navigator.sendBeacon(endpoint, blob)) return;
        } catch (_) {}
      }
      try {
        fetch(endpoint, {
          method: 'POST',
          keepalive: true,
          headers: { 'Content-Type': 'application/json' },
          body: body,
          credentials: 'same-origin'
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
