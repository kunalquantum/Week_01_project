# API Documentation

**Last Updated:** 2026-07-20

## Base URL

Development: `http://localhost:8000`

## Authentication

Currently using mock authentication. No tokens required.

## Endpoints

### Health Check

```
GET /
```

Response: `{ "message": "NexusFlow API is running" }`

### Workspaces

```
GET /workspaces
```

Returns all workspaces.

### Projects

```
GET /projects
```

Returns all projects with computed ticket counts.

### Columns

```
GET /columns
```

Returns all board columns.

### Tickets

```
GET /tickets
```

Returns all tickets.

```
PUT /tickets/{ticket_id}/move
```

Move a ticket to a different column.

Request body:
```json
{
  "column_id": "c2"
}
```

Response: Updated ticket object.

## Error Responses

All endpoints return standard HTTP errors:

- `404` - Resource not found
- `500` - Internal server error (with detail message)

## OpenAPI Docs

FastAPI auto-generated docs available at `/docs` (Swagger UI).
