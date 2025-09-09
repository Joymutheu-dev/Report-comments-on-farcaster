const express = require('express');
const { Hub } = require('@farcaster/hub-nodejs');
const app = express();
const port = process.env.PORT || 3001;

app.use(express.json());

// Mock Farcaster Hub client for testing
const hub = {
  getCast: async (commentId) => {
    // Simulate fetching a comment (replace with actual Hub API call)
    if (commentId === '123') {
      return { text: 'Sample comment' };
    }
    return null;
  }
};

let server;

app.post('/report', async (req, res) => {
  const { commentId, reason, userId, description } = req.body;

  if (!commentId || !reason) {
    return res.status(400).json({ message: 'Missing commentId or reason' });
  }

  try {
    const comment = await hub.getCast(commentId);
    if (!comment) {
      return res.status(404).json({ message: 'Comment not found' });
    }

    // Store report (e.g., in a database or queue)
    console.log(`Report submitted: Comment ${commentId}, Reason: ${reason}, User: ${userId}, Description: ${description}`);

    res.json({ message: 'Report submitted successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error processing report' });
  }
});

// Export start/stop functions for testing
module.exports = {
  startServer: async () => {
    server = app.listen(port, () => {
      console.log(`Server running at http://localhost:${port}`);
    });
  },
  stopServer: async () => {
    server.close();
  },
  app
};

// Start server for non-test environments
if (process.env.NODE_ENV !== 'test') {
  app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
  });
}
