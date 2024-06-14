// Import the Airtable library using require, which is a function provided by Node.js to include modules
const Airtable = require("airtable");

// Configure Airtable with your API key and base ID
const apiKey = ""; // Replace with your actual Airtable API key
const baseId = ""; // Replace with your actual Airtable base ID

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
    return createdRecord; // Return the inserted record
  } catch (error) {
    console.error("Error inserting record:", error); // Log any errors that occur during the insertion
    throw error; // Rethrow the error to be handled by the caller
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
    return records; // Return the array of records
  } catch (error) {
    console.error("Error reading records:", error); // Log any errors that occur during the read operation
    throw error; // Rethrow the error to be handled by the caller
  }
}

// Function to update a record in the Airtable table
async function updateRecord(recordId, updatedFields) {
  try {
    // Use the update method to update the specified record with the provided fields
    const updatedRecord = await base(tableName).update(recordId, updatedFields);
    console.log("Record updated:", updatedRecord); // Log the updated record
    return updatedRecord; // Return the updated record
  } catch (error) {
    console.error("Error updating record:", error); // Log any errors that occur during the update operation
    throw error; // Rethrow the error to be handled by the caller
  }
}

// Function to delete a record from the Airtable table
async function deleteRecord(recordId) {
  try {
    // Use the destroy method to delete the specified record
    const deletedRecord = await base(tableName).destroy(recordId);
    console.log("Record deleted:", deletedRecord); // Log the deleted record
    return deletedRecord; // Return the deleted record
  } catch (error) {
    console.error("Error deleting record:", error); // Log any errors that occur during the delete operation
    throw error; // Rethrow the error to be handled by the caller
  }
}

// Example usage of the insertRecord, readRecords, updateRecord, and deleteRecord functions
async function main() {
  try {
    // Insert a new record into the Airtable table
    const newRecord = {
      Name: "John Doe", // Example field: Name
      Notes: "john.doe", // Example field: Email
      Assignee: "sdfsdf", // Example field: Phone
      Status: "abcd",
    };
    const insertedRecord = await insertRecord(newRecord);

    // Read and log all records from the Airtable table
    const records = await readRecords();

    // Update the inserted record with new field values
    const recordId = insertedRecord.id;
    const updatedFields = {
      Name: "John Doe Updated",
      Notes: "john.doe.updated",
      Assignee: "updated.sdfsdf",
      Status: "updated.abcd",
    };
    await updateRecord(recordId, updatedFields);

    // Delete the inserted record
    await deleteRecord(recordId);
  } catch (error) {
    console.error("Error in main function:", error); // Log any errors that occur in the main function
  }
}

// Call the main function to execute the example usage
main();
