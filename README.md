# Feelings

This web app allows users to say how they are feeling at different points in time.
This should be done in a simple way using icons or emojis, to encourage users to record frequently.
Users can optionally tag feelings. This allows the user to give context in whatever way feels relevant to them.
We can then analyse this data to look for trends and insights.

## Goals
Quickly create a functioning app which loosley mirrors a larger piece of work.
Able to discuss different elements from requirements to infrastructure - not just code.
- Defined user stories
- Basic features usable
- Deployed to some real infrastructure
- Working back-end API
- Support different "projects"

## Users
There are two main user groups:

### Tracker users
Tracker users record how they feel

### Analyst users
Analyst users look at collected data from one or more tracker users.

## Projects
A project represents some thing that users record their feelings about.
This can include a different set of icons.

## Screens
### Recording Screen
Here a tracking user can record feelings by selecting one of 5 icons
### Analysis Screen
Here an analyst user can analyze sets of data. This screen may be different for different project types.

## User Stories
As a tracker user, I want to see themed icons for my project

As a tracker user, I want to be able to record how I feel by selecting one of 5 icons

As a tracker user, I want to be able to tag my reaction with zero to many tags

As an analyst user, I want to see summary data for a given project

As an analyst user, I want to see a view specific to my project

As an analyst user, I want to filter my results by feeling selected


## Decision Notes
- create-react-app: For rapid development. Don't spend more time than necessary on project setup.
- S3 + Cloudfront hosting: A real project should have some sense of how it will run. Deploy to some realistic infrastructure.

Icons are from https://openmoji.org/
