import { execFile } from 'node:child_process';
import { promisify } from 'node:util';
import { test } from 'node:test';
import assert from 'node:assert/strict';
import { getIdea, listIdeas } from '../src/codex-idea.mjs';

const execFileAsync = promisify(execFile);

test('getIdea returns a numbered Codex project idea', () => {
  const idea = getIdea(1);

  assert.match(idea, /Codex Idea #2/);
  assert.match(idea, /What to build:/);
  assert.match(idea, /Why it is useful:/);
});

test('listIdeas returns stable idea names', () => {
  assert.deepEqual(listIdeas(), [
    'Prompt card generator',
    'Pre-code checklist',
    'Done-note writer'
  ]);
});

test('CLI prints the requested idea', async () => {
  const { stdout } = await execFileAsync(process.execPath, ['./bin/codex-idea.mjs', 'idea', '2']);

  assert.match(stdout, /Codex Idea #2/);
});
