# Report-comments-on-farcaster

The `farcaster-report-comment` repository implements a feature to report hateful or bullying comments on Farcaster, prioritizing protection for women against sexism and harassment. It includes a React frontend with a "Report" button offering categories like "Sexism" and a Node.js backend integrated with Farcaster’s Hub. An optional Solidity smart contract enables decentralized moderation. This open-source project encourages contributions to enhance safety and moderation on Farcaster.

## Motivation

Online harassment, particularly targeting women, undermines Farcaster’s mission of fostering open discussions about crypto, tech, and more. This project provides a reporting system to flag harmful content, creating a safer and more inclusive community for all users.

## Features

- **Report Button**: A user-friendly interface to flag comments with categories like "Sexism," "Hate Speech," and "Bullying."
- **Anonymous Reporting**: Protects users from retaliation.
- **Farcaster Hub Integration**: Seamlessly fetches and processes comments using `@farcaster/hub-nodejs`.
- **Decentralized Moderation (Optional)**: Uses a Solidity smart contract for transparent report handling.
- **AI Support**: Extensible for integrating hate speech detection models (e.g., BERT-based).

## Setup

1. **Clone the Repository**:
   ```bash
   git clone https://github.com/<joymutheu-dev>/farcaster-report-comment.git
   cd farcaster-report-comment
   ```

2. **Install Dependencies**:
   - Frontend: `cd apps/report-comment/frontend && yarn install`
   - Backend: `cd apps/report-comment/backend && yarn install`

3. **Configure Environment Variables**:
   - Copy `apps/report-comment/backend/.env.example` to `.env` and add your Farcaster Hub API key.

4. **Run the Application**:
   - Frontend: `cd apps/report-comment/frontend && yarn start`
   - Backend: `cd apps/report-comment/backend && yarn start`

5. **Deploy Contracts (Optional)**:
   - Compile and deploy `apps/report-comment/contracts/ReportContract.sol` using Hardhat or Foundry.

