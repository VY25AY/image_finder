# Project Setup Instructions

## Prerequisites
Before you begin, ensure you have the following installed on your machine:
- Node.js (version 14 or higher)
- npm (Node Package Manager)

## Step 1: Clone the Repository
Clone the repository to your local machine using the following command:
```bash
git clone https://github.com/your-username/visual-discovery-platform.git
```

## Step 2: Navigate to the Project Directory
Change your working directory to the project folder:
```bash
cd visual-discovery-platform
```

## Step 3: Install Dependencies
Run the following command to install the necessary dependencies:
```bash
npm install
```

## Step 4: Configure Environment Variables
Create a `.env` file in the root of the project and add your environment variables. You can refer to the `.env.example` file for the required variables.

## Step 5: Run the Development Server
Start the development server with the following command:
```bash
npm run dev
```
You can now access the application at `http://localhost:3000`.

## Step 6: Build for Production
To create an optimized production build, run:
```bash
npm run build
```

## Step 7: Start the Production Server
After building the project, you can start the production server using:
```bash
npm start
```

## Additional Notes
- For styling, this project uses Tailwind CSS. You can customize the styles in the `tailwind.config.ts` file.
- Make sure to check the `README.md` for more detailed documentation and usage instructions.

## Troubleshooting
If you encounter any issues, please refer to the `CONTRIBUTING.md` file for guidelines on how to report bugs or request features.