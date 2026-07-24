/**
 * WebWorldMaker Cloudflare Edge Worker
 * Handles Edge-Origin Bot Routing, Path Normalization (Zombie Redirect Prevention), and Cache Poisoning Prevention.
 */

addEventListener('fetch', event => {
  event.respondWith(handleRequest(event.request));
});

async function handleRequest(request) {
  const url = new URL(request.url);
  const ua = request.headers.get('User-Agent') || '';
  
  // 1. Edge-Level Path Normalization (Eradicates Zombie 308/301 loops)
  if (url.pathname.length > 1 && url.pathname.endsWith('/') && !url.pathname.startsWith('/api/')) {
    url.pathname = url.pathname.slice(0, -1);
    return Response.redirect(url.toString(), 301);
  }

  // 2. AI-Specific Edge Routing
  const isAIBot = /GPTBot|CCBot|Google-Extended|Perplexity|ClaudeBot|Applebot/i.test(ua);
  const wantsMarkdown = request.headers.get('Accept')?.includes('text/markdown');

  if (isAIBot || wantsMarkdown) {
    url.searchParams.set('format', 'raw');
    const botRequest = new Request(url.toString(), request);
    const response = await fetch(botRequest);
    
    const newHeaders = new Headers(response.headers);
    newHeaders.set('Vary', 'User-Agent, Accept');
    
    return new Response(response.body, {
      status: response.status,
      statusText: response.statusText,
      headers: newHeaders
    });
  }

  // 3. Normal Human Routing
  const response = await fetch(request);
  return response;
}
