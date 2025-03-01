import { writeFileSync } from "fs";

const baseUrl = "https://gafvi.com.br";
const pages = [
    { loc: "/", lastmod: "2025-03-01", changefreq: "daily", priority: 1.0 }
];

const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    ${pages.map(({ loc, lastmod, changefreq, priority }) => `
        <url>
            <loc>${baseUrl}${loc}</loc>
            <lastmod>${lastmod}</lastmod>
            <changefreq>${changefreq}</changefreq>
            <priority>${priority}</priority>
        </url>
    `).join("")}
</urlset>`;

writeFileSync("dist/sitemap.xml", xml);
console.log("✅ Sitemap gerado com sucesso!");
