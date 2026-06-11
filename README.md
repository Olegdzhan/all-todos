# All Todo

## Goal
Create a framework-independent boilerplate that incorporates a clean architecture approach with separate implementations for each Big 4 framework (React, Angular, View, Svelte) on microfrontends. 

## Structure
- API Layer (request/response implementation and handling)
- Application layer
  - Forms Layer (implementation, structure and models of forms data)
  - Modals Layer (namings, data and logic of modal windows)
- Domain Layer (application independent models and values, such as exceptions, bpm-statuses, etc.)
- DTO Layer (DTO-models)
- Services Layer (business logic, accumulating of all layers, except view)
- Store Layer (state management)
- Views Layer (framework implementation)
  - Assets (images, icons, fonts, etc.)
  - Modals (views of modal-windows)
  - Pages (views of pages)
  - Shared (shared components, incapsulating application meanings)
  - Ui-controllers (npm-package-candidate: store-adapter)
  - Ui-kit (npm-package-candidate: abstract ui-blocks, such as inputs, buttons, cards, etc.)
- Utils (helper functions)
```
