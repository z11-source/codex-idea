const IDEAS = [
  {
    name: 'Prompt card generator',
    build: 'A CLI that turns a short task into a reusable Codex prompt card.',
    useful: 'It helps people start coding tasks with clearer goals and checks.'
  },
  {
    name: 'Pre-code checklist',
    build: 'A CLI that prints a tiny checklist before editing code with Codex.',
    useful: 'It reminds people to read context, keep changes small, and verify.'
  },
  {
    name: 'Done-note writer',
    build: 'A CLI that writes a short share note after Codex finishes a task.',
    useful: 'It makes GitHub project updates easier to explain.'
  }
];

export function listIdeas() {
  return IDEAS.map((idea) => idea.name);
}

export function getIdea(index = 0) {
  const safeIndex = Number.isInteger(index) && index >= 0 ? index % IDEAS.length : 0;
  const idea = IDEAS[safeIndex];

  return [
    `# Codex Idea #${safeIndex + 1}: ${idea.name}`,
    '',
    `What to build: ${idea.build}`,
    `Why it is useful: ${idea.useful}`,
    '',
    'Keep it tiny: one command, no dependencies, one README example.'
  ].join('\n');
}
