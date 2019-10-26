# Herwaldt Calculator

## Contribution Guidelines For Forked Repo

When working off a forked version of the main repository, it is important to keep your forks master branch up to date with the original repository master branch. In order to sync the fork master branch to make sure you have the most up to date code, follow the guidelines here https://help.github.com/en/github/collaborating-with-issues-and-pull-requests/syncing-a-fork, make sure you do this whenever you create a new branch, and whenever you go to push your branch to the remote in order to ensure your code is up to date.

To make a change, create a new branch with the naming scheme of `{feature | fix | task}/{issue#s}_short-description` for example if you are adding a new piece of functionality for issues 1, 2 and 3 make a branch named `feature/1-2-3_Adding-multiply-divide-and-delete` Try as much as possible to limit one issue per pull request though as this will make testing and review easier.

An example git worklow would look something like this:

`git fetch upstream` - update the remote upstream repository (original repository)
`git checkout master`- checkout your forks master branch locally
`git merge upstream/master` - merge the upstream upstream version of master into your forks local master
`git push origin head` - push the updated fork master branch to your fork remote repository (GitHub)
`git checkout -b new-branch-name` - create a new branch off of your local fork master branch
`git add .` - Stage all changes to folders/files in the current working directory
`git commit -m "A descriptive message about the changes you made"` - commit the staged changes to your checked out local fork branch
`git push origin head` - push your changes to your local branch to remote (GitHub) if the branch does not exist remotely it will be created for you
