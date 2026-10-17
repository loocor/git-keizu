import { resolveWorktreePath } from "../src/worktreePath";

/** Suggested create-worktree path for the repository, from the current view settings. */
export function suggestedWorktreePath(repo: string, branch: string): string {
  const settings = viewState.worktreePath;
  return resolveWorktreePath(settings?.template ?? "", {
    repoPath: repo,
    branch,
    homeDir: settings?.homeDir ?? "",
    platform: settings?.platform
  });
}
