## Part 0.4

```mermaid
sequenceDiagram
    participant Browser
    participant Server
    participant User
    
    Browser->>Server: GET https://studies.cs.helsinki.fi/exampleapp/notes
    activate Server
    Server-->>Browser: HTML document
    Note right of Browser: The browser starts parsing the html document
    Note right of Browser: Fetches other resources if applicable
    deactivate Server

    User->>Browser: Enters the input
    activate Browser
    User->>Browser: Clicks on save button
    Note right of Browser: When save button is clickeded by user, browser sends user input the server
    deactivate Browser

    Browser->>Server: POST https://studies.cs.helsinki.fi/exampleapp/new_note
    Note right of Browser: The browser appends the note inside the payload
    activate Server
    Server-->>Browser: The server responds with HTTP status code 302 and url redirect
    Browser-->>Server: GET https://{redirect-url}
    Server->>Browser: HTML document
    deactivate Server
    Note right of Browser: The browser displays the updated notes



```

## Part 0.5

```mermaid
sequenceDiagram
    participant User
    participant Browser
    participant Server

    User->>Browser: Opens the browser
    activate Browser
    User->>Browser: Enters the URL, https://studies.cs.helsinki.fi/exampleapp/spa
    deactivate Browser
    



```