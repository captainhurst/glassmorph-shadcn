# Glassmorphism UI

An open source collection of glassmorphic-styled components inspired by shadcn/ui.

## Development

The site is a static bundle consisting of `index.html`, `style.css`, and `app.js`.

## Deployment

GitHub Pages deployment is handled by a GitHub Actions workflow located at `.github/workflows/deploy.yml`.
The workflow uses `actions/configure-pages` to initialize GitHub Pages for the repository before uploading the build artifact.

- Commits to `main` publish the latest version to GitHub Pages.
- Pull requests generate a preview environment so changes can be reviewed before publication.

To require manual approval before production deployment, configure the `github-pages` environment in the repository settings with required reviewers.
