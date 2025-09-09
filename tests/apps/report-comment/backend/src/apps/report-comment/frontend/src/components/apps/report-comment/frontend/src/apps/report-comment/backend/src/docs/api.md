# API Documentation

## POST /report
Submits a report for a comment.

**Request**:
```json
{
  "commentId": "string",
  "reason": "string",
  "userId": "string",
  "description": "string" // Optional
}
