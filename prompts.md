# AI Prompts Used in Development

This document tracks all AI prompts and commands used during the development of the Random Profiles Catalog App.

## Step 1: Profile Schema

- **Prompt**: "Create Zod schema for profile with following attributes:
  id
  name
  email
  avatarUrl
  phone
  username
  birthDate
  address (with 5 sub-fields)
  jobTitle
  company
  bio
  website
  "
- **Tool**: Claude
- **Output**: Profile type definitions with validation

## Step 2: Loading Spinner Component
- **Prompt**: "Create LoadingSpinner component for displaying loading states with accessibility features including proper ARIA labels and screen reader support"
- **Tool**: Claude
- **Output**: Accessible loading spinner with ARIA attributes
