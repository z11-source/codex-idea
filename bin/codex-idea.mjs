#!/usr/bin/env node
import { resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import { getIdea, listIdeas } from '../src/codex-idea.mjs';

const HELP = `codex-idea

Usage:
  codex-idea list
  codex-idea idea [number]

Examples:
  codex-idea list
  codex-idea idea 2
`;

export async function main(argv = process.argv.slice(2), io = console) {
  const [command, rawNumber] = argv;

  if (!command || command === 'help' || command === '--help' || command === '-h') {
    io.log(HELP.trimEnd());
    return 0;
  }

  if (command === 'list') {
    io.log(listIdeas().map((name, index) => `${index + 1}. ${name}`).join('\n'));
    return 0;
  }

  if (command === 'idea') {
    const index = Number.parseInt(rawNumber ?? '1', 10) - 1;
    io.log(getIdea(index));
    return 0;
  }

  throw new Error(`Unknown command: ${command}`);
}

if (process.argv[1] && resolve(process.argv[1]) === fileURLToPath(import.meta.url)) {
  main().then((code) => {
    process.exitCode = code;
  }).catch((error) => {
    console.error(error.message);
    process.exitCode = 1;
  });
}
