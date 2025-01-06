function doPost(e) {
  try {
    // Parse the POST request body
    const data = JSON.parse(e.postData.contents);
    const { name, email, aiUseCase } = data;

    // Open the Google Sheet by its ID
    const sheet = SpreadsheetApp.openById('1ZvF7ziIXOxShbzPATq36aeAK15CBt5BcqU_fO3xDwiM').getSheetByName('Sheet1');
    sheet.appendRow([new Date(), name, email, aiUseCase]);

    // Build a response with CORS headers
    const response = {
      success: true,
      message: 'Data appended successfully!',
    };

    return ContentService.createTextOutput(JSON.stringify(response))
      .setMimeType(ContentService.MimeType.JSON);
  } catch (error) {
    console.error('Error in doPost:', error);

    // Error response
    const response = {
      success: false,
      message: 'An error occurred while appending data.',
    };
    
    return ContentService.createTextOutput(JSON.stringify(response))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

function doGet(e) {
  return ContentService.createTextOutput('Web App is running!')
    .setMimeType(ContentService.MimeType.TEXT);
}

function doOptions(e) {
  // Handle preflight OPTIONS requests
  return HtmlService.createHtmlOutput('')
    .addMetaTag('Access-Control-Allow-Origin', '*')
    .addMetaTag('Access-Control-Allow-Methods', 'GET, POST, OPTIONS')
    .addMetaTag('Access-Control-Allow-Headers', 'Content-Type');
}
