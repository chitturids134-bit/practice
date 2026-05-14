# Caching Strategy

## Endpoint Cached

GET /api/tasks

## Cache Duration

60 seconds

## Cache Invalidation

Cache clears when:
- task created
- task updated
- task deleted

## Limitation

In-memory cache resets when server restarts.