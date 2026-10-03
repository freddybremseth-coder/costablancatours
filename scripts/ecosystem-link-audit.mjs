import fs from "node:fs";

const checks = [
  ["public/index.html", "zenecohomes.com"],
  ["public/index.html", "care.zenecohomes.com"],
  ["public/index.html", "pinosoecolife.com"],
  ["public/turer/index.html", "zenecohomes.com"],
  ["public/turer/index.html", "care.zenecohomes.com"],
  ["public/turer/altea/index.html", "zenecohomes.com"],
  ["public/turer/villajoyosa-sjokolade/index.html", "zenecohomes.com"],
  ["public/turer/guadalest/index.html", "zenecohomes.com"],
  ["public/turer/jumilla-vin/index.html", "pinosoecolife.com"],
];

let failed = false;
for (const [file, needle] of checks) {
  const text = fs.readFileSync(file, "utf8");
  if (!text.includes(needle)) {
    console.error(`Missing ecosystem link: ${needle} in ${file}`);
    failed = true;
  }
}
if (failed) process.exit(1);
console.log("Ecosystem link audit passed.");
