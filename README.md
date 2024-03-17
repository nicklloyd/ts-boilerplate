# TypeScript Project Template

This repository serves as a template for TypeScript projects, providing a basic setup with Jest for unit testing, Prettier for code formatting, and ESLint for linting.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

- Node.js (v14 or newer recommended)
- Yarn

## Installation

### 1. Clone the repository & Install:

```bash
git clone https://github.com/nicklloyd/ts-boilerplate.git my-project
cd my-project
yarn
```

### 2. Validate the setup by running the tests:

```bash
yarn test
```

### 3. Remove the Original Git History

To start fresh with your own version control history, remove the existing .git directory:

```bash
rm -rf .git
```

### 4. Initialize a New Git Repository

```bash
git init
```

### 5. Update the `package.json` with your project details.

### 6. Add All Files to the New Repository

Add all the files in your new project directory to the repository:

```bash
git add .
```

### 7. Create a New Repository on GitHub

Go to GitHub and create a new repository. Do not initialize the repository with a README, .gitignore, or license since your project already includes these files.

### 8. Add the GitHub Repository as a Remote

Replace `your-username` with your GitHub username and `your-repository` with the name of your new repository. Then, add the GitHub repository as a remote to your project:

```bash
git remote add origin https://github.com/your-username/your-repository.git
```

### 9. Push to GitHub

Push your commits to the new GitHub repository:

For the main branch:

```bash
git push -u origin main
```

### 10. Start Developing

At this point, you've successfully created a new project from the template and started your own Git repository. You can now start developing your project.

Remember to update the project's `README.md` and other documentation to reflect your project's name and specifics.
