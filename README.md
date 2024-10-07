# Small Bet Game

Brief description of Small Bet Game Project.

## Getting Started

Follow these instructions to set up the project locally.

### Prerequisites

Ensure you have the following installed:

- [Node.js](https://nodejs.org/) (using [nvm](https://github.com/nvm-sh/nvm))
- [npm](https://www.npmjs.com/get-npm) (Node Package Manager)

### Installing Node.js with nvm

To ensure you're using the correct Node.js version for this project, follow these steps to install `nvm` and manage Node.js versions.

#### Step 1: Install nvm

**macOS/Linux**:

1. Download and install `nvm` by running:

   ```bash
   curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.0/install.sh | bash
   ```

2. After installation, add `nvm` to your shell profile (if not added automatically):

   ```bash
   export NVM_DIR="$([ -z "${XDG_CONFIG_HOME-}" ] && printf %s "${HOME}/.nvm" || printf %s "${XDG_CONFIG_HOME}/nvm")"
   [ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh" # This loads nvm
   ```

3. Close and reopen your terminal, or run:
   ```bash
   source ~/.bashrc
   ```
   (or `source ~/.zshrc` for zsh users).

**Windows**:

1. Download and install `nvm-windows` from [this link](https://github.com/coreybutler/nvm-windows/releases).
2. Follow the instructions in the installer.

#### Step 2: Install Node.js Using nvm

1. Install the Node.js version required by the project (specified in `.nvmrc` or package.json):

   ```bash
   nvm install
   ```

2. Switch to the installed Node.js version:

   ```bash
   nvm use 20
   ```

3. Verify that Node.js is installed:
   ```bash
   node -v
   ```

### Cloning the Repository

To clone the repository, run:

```bash
git clone https://github.com/mehmetunubol/small-bet-game.git
cd small-bet-game
```

### Installing Dependencies

Once inside the project directory, install the required dependencies by running:

```bash
npm install
```

This command installs all the packages listed in the `package.json` file.

### Running the Project

To start the project, use the following command:

```bash
npm start
```

This will launch the server, and you can view the project at `http://localhost:3000`.

## Contributing

Feel free to fork this project and submit a pull request.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
