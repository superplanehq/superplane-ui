# Guidelines for AI Agents

This document outlines the guidelines for AI agents contributing to the Superplane UI repository. The goal is to ensure that AI-generated code is consistent, high-quality, and easy to maintain.

## Component Structure

- **Storybook Stories**: Story files should be named `[component-name].stories.tsx` (e.g., `button.stories.tsx`).
- **Storybook Titles**: Story titles should be in the format `components/[Component Name]` (e.g., `components/Button`).

## Storybook Best Practices

- **Use Controls**: Use Storybook's `argTypes` to create controls for component props. This allows for interactive testing and documentation.
- **Consolidate Stories**: Avoid creating separate stories for each component variant. Instead, use a single `Default` story with controls to switch between variants.
- **Keep Distinct Use Cases**: Create separate stories for distinct use cases that involve more than just changing a simple prop (e.g., a button with an icon).
- **Disable Irrelevant Controls**: If a control is not applicable to a specific story, disable it using `control: { disable: true }`.

## Code Style

- **Imports**: Use relative paths for imports between components (e.g., `../button/index.tsx`).
- **Clarity and Conciseness**: Write clear and concise code. Add comments where necessary to explain complex logic.

By following these guidelines, we can ensure that AI agents are effective and valuable contributors to this project.
