const p = Deno.run({
  cmd: ["echo", "hello"],
});

await p.status();
