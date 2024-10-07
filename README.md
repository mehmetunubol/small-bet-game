# Small Bet Game

Brief description of Small Bet Game Project.

### Follow below instructions to set up the project locally.

## Prerequisites

Ensure you have the following installed:

- [Node.js](https://nodejs.org/) (using [nvm](https://github.com/nvm-sh/nvm))
- [npm](https://www.npmjs.com/get-npm) (Node Package Manager)
- [Docker](https://www.docker.com/)

## Installing Node.js with nvm

To ensure you're using the correct Node.js version for this project, follow these steps to install `nvm` and manage Node.js versions.

### Step 1: Install nvm

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

### Step 2: Install Node.js Using nvm

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

### Step 3: Installing Docker

#### For macOS

1. Download Docker Desktop from the [Docker Hub](https://www.docker.com/products/docker-desktop).
2. Open the downloaded `.dmg` file and drag the Docker icon to your Applications folder.
3. Launch Docker from your Applications folder. You might need to authorize Docker to run.
4. Follow the installation instructions and sign in or create a Docker account if prompted.

#### For Windows

1. Download Docker Desktop from the [Docker Hub](https://www.docker.com/products/docker-desktop).
2. Run the installer and follow the prompts to install Docker.
3. After installation, you may need to enable WSL 2 (Windows Subsystem for Linux) and install a Linux kernel update package if prompted.
4. Launch Docker Desktop and follow the setup instructions.

#### For Linux

1. Open a terminal and update your package index:

   ```bash
   sudo apt-get update
   ```

2. Install the required packages:

   ```bash
   sudo apt-get install apt-transport-https ca-certificates curl software-properties-common
   ```

3. Add Docker’s official GPG key:

   ```bash
   curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo apt-key add -
   ```

4. Add the Docker repository:

   ```bash
   sudo add-apt-repository "deb [arch=amd64] https://download.docker.com/linux/ubuntu $(lsb_release -cs) stable"
   ```

5. Update your package index again:

   ```bash
   sudo apt-get update
   ```

6. Install Docker:

   ```bash
   sudo apt-get install docker-ce
   ```

7. After installation, start Docker and enable it to run at startup:
   ```bash
   sudo systemctl start docker
   sudo systemctl enable docker
   ```

### Step 4: Installing Docker Compose

#### For macOS and Linux

1. Download the latest version of Docker Compose:

   ```bash
   sudo curl -L "https://github.com/docker/compose/releases/latest/download/docker-compose-$(uname -s)-$(uname -m)" -o /usr/local/bin/docker-compose
   ```

2. Apply executable permissions to the binary:

   ```bash
   sudo chmod +x /usr/local/bin/docker-compose
   ```

3. Verify that Docker Compose is installed correctly:
   ```bash
   docker-compose --version
   ```

#### For Windows

1. Download Docker Desktop from the [Docker Hub](https://www.docker.com/products/docker-desktop) which includes Docker Compose by default.

2. Install Docker Desktop by following the installation prompts.

3. After installation, you can verify that Docker Compose is installed by opening a command prompt and running:
   ```bash
   docker-compose --version
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
