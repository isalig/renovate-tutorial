module.exports = {
  extends: [
    "group:monorepos",
    "group:recommended",
  ],
  repositories: ["isalig/renovate-tutorial"],
  platform: "github",
  token: process.env.GITHUB_TOKEN,
  onboardingBranch: "renovate-onboarding",
  branchPrefix: "renovate/",
  labels: ["renovate"],
  stabilityDays: 3,
  dependencyDashboard: true,
  semanticCommits: "enabled",
  requireConfig: true,
  // Опция для дебага
  // dryRun: true,
  // logLevel: 'debug',
  persistRepoData: true,
  rangeStrategy: "auto",
  packageRules: [
    {
      matchUpdateTypes: ["major"],
      addLabels: ["renovate-major"],
    },
    {
      matchUpdateTypes: ["minor"],
      addLabels: ["renovate-minor"],
    },
    {
      matchUpdateTypes: ["patch"],
      addLabels: ["renovate-patch"],
    },
    {
      matchDepTypes: ["dependencies"],
      addLabels: ["renovate-dependencies"],
    },
    {
      matchDepTypes: ["devDependencies"],
      addLabels: ["renovate-devDependencies"],
    }
  ],
};