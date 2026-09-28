# Lab-5.2-Form-Validation-and-DOM-Manipulation
DOM manipulation, event handling, HTML5 and JavaScript form validation, and localStorage. The form will provide real-time feedback to the user 


# Reflection Questions

### 1. How did `event.preventDefault()` help in handling form submission?

I used `event.preventDefault()` to stop the form from refreshing before validation finished. This allowed JavaScript to check the fields first and show errors if needed.

### 2. What is the difference between HTML5 validation and JavaScript validation?

HTML5 uses attributes like `required`, `minlength`, and `pattern`. JavaScript gives more control over custom messages and extra checks, like matching passwords. I used both to make validation stronger and easier for the user.

### 3. How did you use `localStorage`?

I used `localStorage.setItem()` to save the username and `localStorage.getItem()` to retrieve it later. I would not store passwords there because `localStorage` is not secure for sensitive information.

### 4. What challenge did you face with real-time validation?

A challenge was keeping the confirm password field updated when the original password changed. I solved this by checking the confirm password again whenever the password field was edited.

### 5. How did you make error messages user-friendly?

I gave each field its own clear error message and updated the message while the user typed. When the input became valid, the error message was removed.
