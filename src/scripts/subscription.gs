function doPost(e) {
  try {
    const data = JSON.parse(e.postData.contents);
    const email = data.email;

    if (!validateEmail(email)) {
      throw new Error('Invalid email format');
    }

    const sheet = SpreadsheetApp.openById('1-ifH_LlBCNR75uUYi9gq44am3a5-kt19ovU_SKWSgds').getSheetByName('Subscribers');
    sheet.appendRow([new Date(), email]);

    return ContentService.createTextOutput(JSON.stringify({ success: true, message: 'Subscription successful!' }))
      .setMimeType(ContentService.MimeType.JSON);
  } catch (error) {
    console.error('Error in doPost:', error);
    return ContentService.createTextOutput(JSON.stringify({ success: false, message: error.message }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

function validateEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

function doOptions(e) {
  return HtmlService.createHtmlOutput('')
    .addMetaTag('Access-Control-Allow-Origin', '*')
    .addMetaTag('Access-Control-Allow-Methods', 'POST, OPTIONS')
    .addMetaTag('Access-Control-Allow-Headers', 'Content-Type');
}
