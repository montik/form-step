# Form Step (module federation)
A React, Typescript and Tailwind application that renders
one form step. It is expected to work as part of a webpack
module federation.

## Description
As a proof of concept, this step implements all 3 
form steps "Persönliche Informationen", "Adressinformationen"
and "Zahlungsinformationen".

The form fields and the validation constraints are defined in 
`data/form-data-ts`.

The module expects the host application to run on `http://localhost:8000`.
It uses `zustand` from the host for state management.

## Installation
```bash
npm install
```

## Usage
Start the project in dev mode on port 8001

```bash
npm run start:dev
```

