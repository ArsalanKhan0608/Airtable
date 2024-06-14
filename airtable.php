<?php
// Import the Airtable library using Composer
require 'vendor/autoload.php';

use Airtable\Airtable;

// Configure Airtable with your API key and base ID
$apiKey = ""; // Replace with your actual Airtable API key
$baseId = ""; // Replace with your actual Airtable base ID
$tableName = ""; // Replace with your actual table name

// Create an instance of the Airtable client
$airtable = new Airtable($apiKey);

// Function to insert a record into the Airtable table
function insertRecord($record) {
    global $airtable, $baseId, $tableName;
    try {
        $createdRecord = $airtable->saveContent($baseId, $tableName, $record);
        echo "Record inserted: " . json_encode($createdRecord) . "<br>";
        return $createdRecord;
    } catch (Exception $e) {
        echo "Error inserting record: " . $e->getMessage() . "<br>";
        throw $e;
    }
}

// Function to read records from the Airtable table
function readRecords() {
    global $airtable, $baseId, $tableName;
    try {
        $records = $airtable->getContent($baseId, $tableName);
        return $records;
    } catch (Exception $e) {
        echo "Error reading records: " . $e->getMessage() . "<br>";
        throw $e;
    }
}

// Function to update a record in the Airtable table
function updateRecord($recordId, $updatedFields) {
    global $airtable, $baseId, $tableName;
    try {
        $updatedRecord = $airtable->updateContent($baseId, $tableName, $recordId, $updatedFields);
        echo "Record updated: " . json_encode($updatedRecord) . "<br>";
        return $updatedRecord;
    } catch (Exception $e) {
        echo "Error updating record: " . $e->getMessage() . "<br>";
        throw $e;
    }
}

// Function to delete a record from the Airtable table
function deleteRecord($recordId) {
    global $airtable, $baseId, $tableName;
    try {
        $deletedRecord = $airtable->deleteContent($baseId, $tableName, $recordId);
        echo "Record deleted: " . json_encode($deletedRecord) . "<br>";
        return $deletedRecord;
    } catch (Exception $e) {
        echo "Error deleting record: " . $e->getMessage() . "<br>";
        throw $e;
    }
}

// Read and display all records from the Airtable table
$records = readRecords();
?>

<!DOCTYPE html>
<html>
<head>
    <title>Airtable Records</title>
    <style>
        table {
            border-collapse: collapse;
            width: 100%;
        }
        th, td {
            border: 1px solid black;
            padding: 8px;
            text-align: left;
        }
        th {
            background-color: #f2f2f2;
        }
    </style>
</head>
<body>
    <h1>Airtable Records</h1>
    <table>
        <thead>
            <tr>
                <th>Name</th>
                <th>Notes</th>
                <th>Assignee</th>
                <th>Status</th>
            </tr>
        </thead>
        <tbody>
            <?php foreach ($records as $record): ?>
            <tr>
                <td><?php echo $record['fields']['Name']; ?></td>
                <td><?php echo $record['fields']['Notes']; ?></td>
                <td><?php echo $record['fields']['Assignee']; ?></td>
                <td><?php echo $record['fields']['Status']; ?></td>
            </tr>
            <?php endforeach; ?>
        </tbody>
    </table>
</body>
</html>