import test from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import matter from 'gray-matter';
import { scenarios, coverageColumns, coverageRows, relationships, licensingRows, telemetryRows, jiraPaths, mcpSources, clientExample } from '../src/lib/mcpGovernance.ts';

test('MCP draft keeps the three requested scenarios and lifecycle decisions',()=>{
 assert.deepEqual(scenarios.map(s=>s.id),['onprem','vendor-integrated','vendor-separate']);
 for(const s of scenarios){assert.deepEqual(s.lifecycle.map(r=>r[0]),['Approve','Restrict','Revoke']); for(const field of ['model','gateway','server','target','auth','boundary','limit','telemetry','ownership']) assert.ok(s[field].trim().length>0,`${s.id}: ${field}`);}
});
test('MCP capability matrix has one supported state for every product/column',()=>{
 assert.ok(coverageColumns.length>0); assert.ok(new Set(coverageColumns).size===coverageColumns.length);
 for(const r of coverageRows){assert.equal(r.values.length,coverageColumns.length);for(const v of r.values)assert.ok(['primary','conditional','none'].includes(v));assert.ok(r.note.length>30);}
 assert.ok(relationships.some(r=>r.symbol==='≈ +')); assert.ok(relationships.some(r=>r.symbol==='+'));
});
test('MCP structured claims resolve to named public sources',()=>{
 for(const r of [...scenarios,...coverageRows,...relationships,...licensingRows,...telemetryRows]){assert.ok(r.sources.length);for(const id of r.sources){assert.ok(mcpSources[id]?.title);assert.equal(new URL(mcpSources[id].url).protocol,'https:');}}
});
test('MCP guide preserves separate billing and unknown preview pricing',()=>{
 assert.match(licensingRows.find(r=>r.product==='Dedicated AI Gateway preview').status,/not yet published/);
 assert.match(licensingRows.find(r=>r.product==='Azure API Center').text,/linked to eligible APIM/);
 assert.match(licensingRows.find(r=>r.product==='Microsoft Sentinel').text,/bounded ingestion benefit/);
 assert.match(scenarios.find(s=>s.id==='vendor-separate').limit,/not proof every vendor/);
});
test('MCP walkthrough uses a named local client without inventing agent identity',()=>{
 assert.equal(clientExample.name,'Codex CLI');
 assert.match(clientExample.location,/Local session on a managed workstation/);
 for(const path of jiraPaths)assert.equal(path.nodes[0],clientExample.name);
 assert.ok(!jiraPaths[0].credentials.includes('Agent: Entra Agent ID'));
 assert.match(jiraPaths[0].condition,/not a tested connector recipe/);
 const vendor=scenarios.find(s=>s.id==='vendor-integrated');
 assert.equal(vendor.server,'Atlassian MCP server');assert.equal(vendor.target,'Jira / Confluence');
 for(const id of clientExample.sources)assert.ok(mcpSources[id]?.title);
});
test('MCP Jira supplement preserves approved gateway/direct/network/combined paths',()=>{
 assert.deepEqual(jiraPaths.map(p=>p.id),['gateway','bypass','network','combined']);
 assert.ok(!jiraPaths.find(p=>p.id==='bypass').nodes.includes('APIM'));
 assert.match(jiraPaths.find(p=>p.id==='gateway').credentials,/separately configured Atlassian OAuth/);
});
test('MCP article is published with all three diagrams and comparisons',()=>{
 const raw=readFileSync(new URL('../src/content/posts/2026-10-30-managing-mcp-connections.mdx',import.meta.url),'utf8');const post=matter(raw);assert.equal(post.data.draft,false);
 for(const s of scenarios) assert.ok(post.content.includes(`scenario="${s.id}"`));
 for(const kind of ['coverage','licensing','telemetry']) assert.ok(post.content.includes(`kind="${kind}"`));
 assert.ok(post.content.includes('<McpApimConnectionFlow />'));
 assert.ok(post.content.includes('<JiraMcpPaths />'));
 assert.ok(!post.content.includes('not intended for production use'));
 assert.ok(!post.content.includes('two meanings of “token”'));
 assert.ok(post.content.includes('If GSA closes the direct path, is GSA alone enough?'));
 assert.equal(mcpSources[68]?.url,'https://learn.microsoft.com/en-us/azure/api-management/rate-limit-by-key-policy');
 assert.ok(post.content.includes('(Sources: [1], [2], [10], [11], [15], [25], [56], [57], [60], [65], [68])'));
 const apimFlow=readFileSync(new URL('../src/components/McpApimConnectionFlow.astro',import.meta.url),'utf8');
 assert.ok(!apimFlow.includes('B -->|Inbound Entra token| C'));
 assert.ok(apimFlow.includes('A[Agent Runtime] -->|Caller presents Entra token to APIM| C[APIM Gateway Endpoint]'));
 assert.ok(apimFlow.includes('B -->|Forwards covered traffic| C'));
});
