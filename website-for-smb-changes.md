Step 1: Scope Identification

Limit all analysis and changes strictly to the AI-for-SMB landing page

Do not modify or refactor shared components unless explicitly required for this page

Clearly identify which files, components, and sections are impacted by the requested changes

Output required:

A list of affected sections and components specific to ai-for-smb

Step 2: Change Identification (Functional + Structural)

Based on the requirements below, identify all changes needed, grouped by category.

You must:

Map each requested change to the current section or component

Identify whether the change is:

Content-only

Layout-only

Component-level

Navigation-level

Interaction-level

Requested changes to analyze:

Hero section:
    Add two additional CTAs:
        Scroll or navigate to Program Structure
        Scroll or navigate to Pricing

Registration flow (interestflorm.tsx): Remove the standalone “Register Now” section. Replace it with a popup modal form triggered from CTAs across the page

“Is this you” + AI (ProgramUrgency.tsx):
    Reduce vertical space usage
    Convert to a two-column layout
    Maintain content but improve information density

Section ordering: Move What you’ll be able to do (Outcomes.tsx) to appear after Program Structure and before Example Workflows

ProgramModules.tsx: Add a visible timeline duration to each module. I have added the key in the modules object for your reference


Example Workflows: Remove from current location inside programmodules.tsx. Move to a separate module to manage better. Display one workflow at a time
    Add simple left/right navigation to switch workflows
    Each workflow represents a techno-functional flow
    All workflows are orchestrated via n8n
    Workflow data source: content-core/smb-landing-page/workflow-examples.json

Pricing section cleanup: Remove the “Updates and flexibility” heading and the outer box. Just retain the text and keep it below pricing cards. No heading for this text. Reduce vertical padding so pricing does not feel oversized

Trainer section: Add a Trainer section after Pricing. Reuse layout and components from the Mentor.tsx page
    Add Existing trainer (reuse data) and another Placeholder trainer: Dipesh Lakhotia

Top navigation
    Add an “About Us” tab: Clicking it should scroll or navigate to the Trainer section on this page (in page navigation)

Output required: A structured list of changes, mapped to existing sections/components

Step 3: Layout and Component Impact Analysis

Before implementation, analyze:
    Which existing components can be:
    Reused as-is
    Reused with layout changes
    Extended
    Which changes require:
        New components
        New layout wrappers
        New interaction logic (modal, navigation, state)

Special attention required for: Hero CTAs, Modal form behavior, Workflow carousel/navigation, Two-column responsive layouts

Output required:

Section-by-section component reuse vs new component plan

Clear justification for any new components

Step 4: Proposed Implementation Plan

Create a clear execution plan, including:

Order of changes

Dependencies between changes

Any shared logic or state management considerations

Files or folders likely to be touched

Do not write code yet.

Step 5: Confirmation Gate

End your response with:

A short summary of the plan

Explicit confirmation that you are ready to proceed with implementation only after approval

Final Rule

Do not implement anything until the analysis and plan are reviewed and approved.