---
description: Run an automated audit and fix cycle for the project
---

# Antigravity Audit Fix Workflow

This workflow automates the process of checking and fixing code quality issues based on Antigravity standards.

1.  **Run Type Check**
    ```bash
    npx tsc --noEmit
    ```

2.  **Run Linting**
    ```bash
    npm run lint
    ```

3.  **Run Format**
    ```bash
    npx prettier --write .
    ```

4.  **Check for Unused Exports**
    ```bash
    npx ts-prune
    ```

// turbo
5.  **Build Project**
    ```bash
    npm run build
    ```
