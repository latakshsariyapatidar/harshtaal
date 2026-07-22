# 🤝 Contributing to Harshtal

Thank you for your interest in contributing to **Harshtal**! We welcome all contributions, whether it's fixing bugs, adding new features, improving documentation, or optimizing performance.

This guide provides a step-by-step walkthrough for open-source contributors, especially beginners, to contribute smoothly without running into merge conflicts.

---

## 🛠️ Step-by-Step Contribution Workflow

Follow these exact steps to set up your workflow and submit your changes.

### Step 1: Fork & Clone the Repository

1. Click the **Fork** button at the top-right of the repository page on GitHub.
2. Clone your fork to your local machine:

```bash
git clone https://github.com/YOUR-USERNAME/harshtal.git
cd harshtal
```

3. Add the original repository as `upstream` to stay synchronized with the main project:

```bash
git remote add upstream https://github.com/latakshsariyapatidar/harshtal.git
```

---

### Step 2: Sync Your Local Repository

Before starting any new feature or bug fix, always fetch the latest changes from `upstream/main`:

```bash
git checkout main
git fetch upstream
git merge upstream/main
```

---

### Step 3: Create a Dedicated Feature Branch

Never make changes directly on the `main` branch. Create a new branch named after your task:

```bash
# For a new feature
git checkout -b feature/event-filter

# For a bug fix
git checkout -b fix/navbar-mobile-overlay
```

---

### Step 4: Make & Test Your Changes

1. Run the local dev server to test your changes:

```bash
npm run dev
```

2. Test your production build before staging changes:

```bash
npm run build
```

Ensure the build succeeds with no errors.

---

### Step 5: Stage and Commit Your Changes

Commit your changes with clear, descriptive commit messages:

```bash
# Stage modified files
git add .

# Commit with conventional message prefix (feat, fix, docs, refactor, style)
git commit -m "feat: add category filter to events page"
```

---

### Step 6: Prevent Merge Conflicts Before Pushing

To avoid merge conflicts, pull the latest changes from `upstream/main` using rebase right before pushing:

```bash
git fetch upstream
git rebase upstream/main
```

If there are any merge conflicts, resolve them in your code editor, stage the resolved files, and continue the rebase:

```bash
git add .
git rebase --continue
```

---

### Step 7: Push to Your Fork

Push your feature branch to your GitHub fork:

```bash
git push -u origin feature/event-filter
```

---

### Step 8: Create a Pull Request (PR)

1. Navigate to your fork on GitHub.
2. Click **Compare & Pull Request**.
3. Provide a clear title and description of your changes.
4. Submit the PR for review!

---

## 💡 Best Practices to Avoid Merge Conflicts

1. **Keep Pull Requests Small**: Focus on a single feature or bug fix per PR rather than mixing multiple changes.
2. **Sync Frequently**: Frequently run `git fetch upstream && git rebase upstream/main` while working on your feature branch.
3. **Do Not Touch Generated Files**: Avoid manually modifying `package-lock.json` unless adding or removing dependencies.
4. **Follow Project Code Style**: Keep TypeScript interfaces clean and test builds locally with `npm run build` before pushing.

---

Thank you for helping make Harshtal better for everyone! 🎉
