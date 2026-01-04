1. Objective
1.1 Purpose

Build a dedicated landing page for an SMB-focused AI program under the existing One Tapp University domain.

The page must:

Target SMB owners, operators, and startup teams

Communicate an outcome-driven, modular AI upskilling program

Capture user intent without taking payments

Support modular enrollment choices

1.2 Non-goals

This page is not intended for:

General AI awareness

Students or academic audiences

Payments or checkout flows

LMS or dashboard functionality

2. Existing Context
2.1 Existing Site

Primary site already exists at:
https://university.onetapp.in/

Cursor has already analyzed the general audience site (which is the current repo)

Existing components, layouts, and styling should be reused where appropriate

2.2 New Page Scope

This must be a separate route within the same domain

The page must visually belong to One Tapp University

Content and structure will differ significantly from the general audience page

3. Routing and Navigation
3.1 Route Requirements

Page must live under a clean, human-readable route (/ai-for-smbs)


3.2 Navigation

Page should be linkable from:

Marketing campaigns

Direct URLs

Optional secondary navigation on the main site

No requirement for primary navigation inclusion

4. Page Structure (High-Level)

The page is a single-scroll landing page with the following logical sections, in order:

Hero

Problem and urgency

Program overview

Tools stack (logos only)

Outcomes

Program structure (modules)

Pricing

Interest capture CTA and form

FAQs

Footer

5. Section-Level Requirements
5.1 Hero Section

Outcome-first messaging

Clear SMB positioning

Primary CTA visible above the fold

Metric highlights should be visually distinct

5.2 Problem and Urgency Section

Short, scannable bullet points

Focus on time, inefficiency, and clarity

No AI jargon

Must reinforce “why now” without fear-based language

5.3 Program Overview Section

Clearly state that this is a 15-week program

Emphasize hands-on and outcome-driven nature

Avoid deep curriculum details

5.4 Tools Stack Section

Logos only

Two-row layout

No categorization or descriptive text

Optional single-line disclaimer allowed

5.5 Outcomes Section

Exactly three business outcomes

Written in terms of what users will be able to do

No learning jargon

5.6 Program Structure Section

Use the term “Modules,” not “Phases”

Three modules:

Module 1

Module 2

Module 3

Each module must include:

What users will be able to do

Tools and techniques focus (2–3 items)

Must clearly support stackable enrollment

5.7 Pricing Section

Bundle-based pricing

Three pricing options aligned to modules

ROI snapshot for each option

Team pricing with defined thresholds

No discount-percentage framing

No payment or checkout logic

5.8 CTA and Interest Form

CTA must capture intent, not payment

Embedded form (not modal)

Required fields:

Name

Work email

Company

Interested module

Preferred cohort start date

Team size

Optional message

Clear confirmation state after submission

5.9 FAQs Section

5 to 6 FAQs

Simple accordion or expandable layout

Content provided separately and must not be rewritten

5.10 Footer

Reuse existing site footer

No changes unless required for layout consistency

6. Reusability and Component Strategy (Critical)
6.1 Mandatory Analysis Step

Before implementing any code, Cursor must:

Analyze existing components from the general audience site

Identify components that can be:

Reused as-is

Reused with minor modification

Not reused

6.2 Planning Output Requirement

Cursor must present a plan that includes:

Section-by-section component mapping

Which existing components will be reused

Which new custom React components are required

Justification for each new component

6.3 Implementation Rule

Adapt components to fit content
Do not modify content to fit components
Search for right icons from lucide react and styling using tailwind css
Do not invent new content

7. Non-Functional Requirements
7.1 Performance

Fast load times
No unnecessary client-side logic

7.2 Responsiveness

Fully responsive across devices

Clean mobile layout for all sections

7.3 Accessibility

Semantic HTML structure

Accessible form fields

Keyboard-navigable interactive elements

7.4 SEO

Proper heading hierarchy

Descriptive meta tags

Clean URL structure

8. Out of Scope

Payments and billing

Authentication

User dashboards

LMS features

Analytics integration

Backend workflows beyond form submission

9. Success Criteria

The page is considered complete when:

SMB users understand the value within 10 to 15 seconds

Modular pricing and stackable structure are clear

Users can submit interest without friction

The page feels consistent with One Tapp University branding

Component reuse is intentional and documented

10. Explicit Instruction to Cursor

Analyze first.
Present a reuse and component plan.
Only then implement.
Do not invent content.
Do not optimize copy.
Follow the provided content document verbatim.