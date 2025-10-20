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

## Step 3: Error Message Component
- **Prompt**: "Build ErrorMessage component for error state display with retry functionality, proper styling with Tailwind CSS, and accessibility features"
- **Tool**: Claude
- **Output**: Error component with retry button and ARIA alerts

## Step 4: Layout Structure Component
- **Prompt**: "Build Default layout for the whole application with consistent and proper styling with Tailwind CSS"
- **Tool**: Claude
- **Output**: Layout Structure with retry button and ARIA alerts

## Step 5: Profile Card Component
- **Prompt**: "Build ProfileCard component for gallery display with hover effects, responsive design, accessibility features, and proper image handling using NuxtImg"
- **Tool**: Claude
- **Output**: Complete profile card with animations and accessibility
