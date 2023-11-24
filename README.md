# Diary manager

## UC1 View diaries

### Precondition

There is at least one diarie saved

### Base flow

1. User clicks on the "View Diaries" button
2. User is presented a list of diaries


### Completetion conditions

User is presented with all of the saved diaries

## UC2 Create a new diary

### Precondition

User is on the main screen

### Base flow

1. User clicks on the "New diary" button
2. User fills in the date, title and content
3. User clicks on the "Create" button

### Alternative flow

3. User clicks on the "Cancel" button
3.1. User is presented with the main screen

### Completetion conditions

User is presented the options screen


## UC3 Save the diary

### Precondition

User is on the options screen and has created at least one new diary

### Base flow

1. User clicks on the "Save diary" button.
2. The diary is saved and the user is presented with the confirmation alert


## Completetion conditions

The diary is saved and the user is presented with the confirmation alert

## UC4 Delete a diary

### Precondition

There is at least one diarie saved

### Base flow

1. User clicks on the "View Diaries" button
2. User clicks on one of the "Delete" buttons next to the diary
3. Confirmation pop up is shown and the user clicks the "Yes" button

### Alternative flow

3. User clicks the "No" button
3.1 User is presented with the list of diaries


### Completetion conditions

The diary is deleted and the user is presented with the confirmation alert

## UC5 Close diary manager

### Precondition

User is viewing diaries

### Base flow

1. User clicks on the "Exit" button
2. User gets to choose if they want to have their diary saved before exitting
3. User clicks on the "Yes" button

### Alternative flow

3. User clicks on the "No" button
3.1. User is presented with the main screen

### Completetion conditions

The diary manager is closed

## UC6 Next diary

### Precondition

There is at least one more diary after the random one

### Base flow

1. User clicks on the "Next" button below "Random diary"

### Completetion conditions

User is presented with a diary that follows the random one

## UC7 Previous diary

### Precondition

There is at least one diary before the random one

### Base flow

1. User clicks on the "Previous" button below "Random diary"

### Completetion conditions

User is presented with a diary that precedes the random one

## UC8 Show random diary

## Precondition

There is at least one diarie saved

### Base flow

1. User is on the main screen

### Completetion conditions

User is presented with a random diary

