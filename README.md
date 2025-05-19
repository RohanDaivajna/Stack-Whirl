# StackWhirl

StackWhirl is a modern, full-stack community platform inspired by Reddit. Users can create communities (subreddits), post content, vote, comment, and personalize their experience with theming and profile settings.

## Features

- **User Authentication:** Secure login and registration using Kinde. New users are automatically created in the database on first login.
- **Community Creation:** Users can create and manage their own subreddits.
- **Post Creation:** Rich text editor for posts, with support for images and videos.
- **Voting System:** Upvote and downvote posts and comments.
- **Commenting:** Threaded comments for organized discussions.
- **Pagination:** Efficient navigation through large lists of posts.
- **Profile Settings:** Update username and profile details.
- **Subreddit Description Editing:** Community owners can edit descriptions.
- **Image Uploads:** Secure image uploads via UploadThing.
- **Theming:** Light and dark mode toggle.
- **Toasts/Notifications:** Instant feedback for user actions.
- **Copy Link:** Easily share posts with a copy link button.
- **Loading Skeletons:** Smooth UI with skeleton loaders during data fetches.

## Tech Stack

- **Frontend:** Next.js, React, Tailwind CSS, Radix UI
- **Backend:** Next.js API routes, Prisma ORM
- **Authentication:** Kinde
- **Database:** PostgreSQL (via Prisma)
- **Image Uploads:** UploadThing


## Folder Structure

- `app/` - Next.js app directory (pages, API routes, server actions)
- `components/` - Reusable UI components
- `lib/` - Utility functions and database setup
- `prisma/` - Prisma schema and migrations

