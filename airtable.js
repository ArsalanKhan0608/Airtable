// Import the Airtable library using require, which is a function provided by Node.js to include modules
const Airtable = require("airtable");

// Configure Airtable with your API key and base ID
const apiKey = "."; // Replace with your actual Airtable API key
const tableName = ""; // Replace with your actual table name

// Configure Airtable with the provided API key
Airtable.configure({
  apiKey: apiKey, // Set the API key for Airtable
});

// Create a base object to interact with a specific Airtable base
const base = Airtable.base(baseId); // Initialize the base with the base ID

// Function to insert a record into the Airtable table
async function insertRecord(record) {
  try {
    // Use the create method to insert a new record into the specified table
    const createdRecord = await base(tableName).create(record);
    console.log("Record inserted:", createdRecord); // Log the inserted record
  } catch (error) {
    console.error("Error inserting record:", error); // Log any errors that occur during the insertion
  }
}

// Function to read records from the Airtable table
async function readRecords() {
  try {
    // Use the select method to get all records from the specified table
    const records = await base(tableName).select().all();
    // Iterate over each record and log its fields
    records.forEach((record) => {
      console.log("Record:", record.fields); // Log the fields of each record
    });
  } catch (error) {
    console.error("Error reading records:", error); // Log any errors that occur during the read operation
  }
}

// Example usage of the insertRecord and readRecords functions
const newRecord = {
  Name: "John Doe", // Example field: Name
  Notes: "john.doe", // Example field: Email
  Assignee: "sdfsdf", // Example field: Phone
  Status: "abcd",
};

// Insert the new record into the Airtable table
insertRecord(newRecord);

// Read and log all records from the Airtable table
readRecords();
