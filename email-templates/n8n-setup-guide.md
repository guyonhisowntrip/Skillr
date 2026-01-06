# n8n Email Template Setup Guide

## Template File
Use `registration-confirmation-n8n.html` for n8n integration.

## Required Variables

The template uses n8n expressions to populate dynamic content. Make sure your n8n workflow provides these fields:

### Required Fields (from form submission):
- `fullName` - Full name from registration form
- `programOption` - Selected program option (e.g., "Module 1: Everyday AI for Business Work")
- `teamSize` - Team size selection (e.g., "Just me", "2–3 people")
- `cohortDate` - Preferred cohort start date
- `companyName` - Company name from registration
- `programPrice` - Calculated price (e.g., "$25", "$100", "$200")

### Optional Fields (links you'll add later):
- `youtubeLink` - YouTube video URL (has fallback placeholder)
- `pdfLink` - PDF download URL (has fallback placeholder)

## n8n Setup Instructions

### Option 1: Using HTML Node with Expressions

1. **Add an "HTML" node** after your form submission webhook
2. **Set the HTML field** to the contents of `registration-confirmation-n8n.html`
3. The expressions `{{ $json.fieldName }}` will automatically be replaced with values from the previous node

### Option 2: Using Code Node for Dynamic Generation

1. **Add a "Code" node** after your form submission
2. **Add logic to calculate `programPrice`** based on `programOption`:
   ```javascript
   const programOption = $input.item.json.programOption;
   let programPrice = "$25"; // Default
  
   if (programOption.includes("Module 1 + Module 2")) {
     programPrice = "$100";
   } else if (programOption.includes("Full program")) {
     programPrice = "$200";
   }
  
   return {
     json: {
       ...$input.item.json,
       programPrice: programPrice,
       youtubeLink: "YOUR_YOUTUBE_URL_HERE", // Add your YouTube link
       pdfLink: "YOUR_PDF_URL_HERE" // Add your PDF link
     }
   };
   ```

3. **Add an "HTML" node** and use the template with expressions

### Option 3: Using Set Node for Field Mapping

1. **Add a "Set" node** to map/transform fields:
   - Map form fields to match template variable names
   - Add calculated fields like `programPrice`
   - Add static fields like `youtubeLink` and `pdfLink`

2. **Add an "HTML" node** with the template

## Field Mapping Reference

Map your form submission fields to these variable names:

| Form Field | Template Variable | Example Value |
|------------|------------------|---------------|
| `name` or `fullName` | `{{ $json.fullName }}` | "John Doe" |
| `programOption` | `{{ $json.programOption }}` | "Module 1 + Module 2" |
| `teamSize` | `{{ $json.teamSize }}` | "2–3 people" |
| `cohortDate` or `cohortStartDate` | `{{ $json.cohortDate }}` | "Next cohort (Month, Year)" |
| `company` or `companyName` | `{{ $json.companyName }}` | "Acme Corp" |
| Calculated | `{{ $json.programPrice }}` | "$100" |
| Static/Later | `{{ $json.youtubeLink }}` | "https://youtube.com/..." |
| Static/Later | `{{ $json.pdfLink }}` | "https://your-domain.com/..." |

## Price Calculation Logic

Based on your pricing structure:

```javascript
// In n8n Code node or Function node
const programOption = $input.item.json.programOption;

let programPrice = "$25"; // Default: Module 1 only

if (programOption.includes("Module 1 + Module 2")) {
  programPrice = "$100";
} else if (programOption.includes("Full program") || programOption.includes("Module 1 + 2 + 3")) {
  programPrice = "$200";
}

return {
  json: {
    ...$input.item.json,
    programPrice: programPrice
  }
};
```

## Testing

1. Test with sample data first
2. Verify all expressions are replaced correctly
3. Check email rendering in different email clients
4. Ensure links work correctly

## Notes

- YouTube and PDF links have fallback placeholders if not provided
- All other fields are required for proper email rendering
- The template uses inline styles for maximum email client compatibility
- Logo URL is already set to the One Tapp logo from Google Cloud Storage

