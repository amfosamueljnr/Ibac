/**
 * Google Apps Script Web App for Ibac Farm Estates Preorder Form
 *
 * SETUP INSTRUCTIONS:
 * 1. Go to https://script.google.com and create a new project
 * 2. Replace the default Code.gs content with this script
 * 3. Create a new Google Sheet or use an existing one
 * 4. In the script, update SPREADSHEET_ID with your sheet's ID (from the URL)
 * 5. Deploy as Web App: Extensions > Apps Script > Deploy > New deployment
 *    - Type: Web app
 *    - Execute as: Me
 *    - Who has access: Anyone (so your form can submit)
 * 6. Copy the Web app URL and add it to your .env as VITE_GOOGLE_SHEET_WEBHOOK_URL
 */

const SPREADSHEET_ID = 'YOUR_SPREADSHEET_ID'; // Replace with your Google Sheet ID
const SHEET_NAME = 'Preorders';

function doPost(e) {
  try {
    const ss = SPREADSHEET_ID
      ? SpreadsheetApp.openById(SPREADSHEET_ID)
      : SpreadsheetApp.getActiveSpreadsheet();
    const sheet = ss.getSheetByName(SHEET_NAME) || createPreordersSheet(ss);

    const data = JSON.parse(e.postData.contents);
    const timestamp = data.timestamp || new Date().toISOString();

    const row = [
      timestamp,
      data.fullName || '',
      data.email || '',
      data.phone || '',
      data.address || '',
      data.city || '',
      data.country || '',
      data.idType || '',
      data.nextOfKin || ''
    ];

    sheet.appendRow(row);

    return ContentService
      .createTextOutput(JSON.stringify({
        success: true,
        message: 'Preorder saved successfully'
      }))
      .setMimeType(ContentService.MimeType.JSON);
  } catch (error) {
    console.error('Error processing preorder:', error);
    return ContentService
      .createTextOutput(JSON.stringify({
        success: false,
        error: error.toString()
      }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

function createPreordersSheet(ss) {
  const spreadsheet = ss || SpreadsheetApp.getActiveSpreadsheet();
  const sheet = spreadsheet.insertSheet(SHEET_NAME);
  sheet.appendRow([
    'Timestamp',
    'Full Name',
    'Email',
    'Phone',
    'Address',
    'City',
    'Country',
    'ID Type',
    'Next of Kin'
  ]);
  sheet.getRange(1, 1, 1, 9).setFontWeight('bold');
  return sheet;
}
