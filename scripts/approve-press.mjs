import fs from "node:fs";
const event=JSON.parse(fs.readFileSync(process.env.GITHUB_EVENT_PATH,"utf8")),encoded=(event.issue?.body||"").match(/<!-- press-candidate:([A-Za-z0-9+/=]+) -->/)?.[1];
if(!encoded)throw Error("La propuesta no contiene datos válidos.");
const item=JSON.parse(Buffer.from(encoded,"base64").toString("utf8"));
if(item.imagen?.includes("noticia-generica")&&!item.url?.includes("news.google.com"))try{const r=await fetch(item.url,{headers:{"user-agent":"Mozilla/5.0 press-monitor"}}),html=await r.text();const image=html.match(/<meta[^>]+(?:property|name)=["'](?:og:image|twitter:image)["'][^>]+content=["']([^"']+)/i)?.[1]||html.match(/<meta[^>]+content=["']([^"']+)["'][^>]+(?:property|name)=["'](?:og:image|twitter:image)["']/i)?.[1];if(image)item.imagen=image.replace(/&amp;/g,"&");}catch{}
for(const f of ["id","medio","fecha","titular","resumen","imagen","url"])if(typeof item[f]!=="string"||!item[f].trim())throw Error("Campo inválido: "+f);
if(!/^https:\/\//.test(item.url)||!item.id.startsWith("auto-"))throw Error("Noticia no válida.");
const file=new URL("../data/press-auto.json",import.meta.url),items=JSON.parse(fs.readFileSync(file,"utf8"));
if(!items.some(x=>x.id===item.id||x.url===item.url)){items.push(item);items.sort((a,b)=>(b.publishedAt||"").localeCompare(a.publishedAt||""));fs.writeFileSync(file,JSON.stringify(items,null,2)+"\n");}