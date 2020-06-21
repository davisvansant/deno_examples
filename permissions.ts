const status = await Deno.permissions.query({ name: "write" });

if (status.state !== "granted") {
  throw new Error("need write permissions");
}

const log = await Deno.open("request.log", { write: true, append: true });

await Deno.permissions.revoke({ name: "read" });
await Deno.permissions.revoke({ name: "write" });

const encoder = new TextEncoder();

await log.write(encoder.encode("hello\n"));
// await Deno.remove("request.log");
