<<<<<<< HEAD
### DJS01: Mars Climate Orbiter Challenge

The Mars Climate Orbiter incident in 1999 is a stark reminder of the importance of precision in space missions, highlighting how a simple unit mismatch led to the loss of the spacecraft. This challenge seeks to simulate similar challenges in a spacecraft navigation system, emphasising the need for accuracy in calculations.

#### Challenge Overview

This challenge invites students to debug, refactor, and enhance JavaScript functions designed for determining the trajectory of a spacecraft. The initial functions are flawed and may result in incorrect calculations.

![alt text](mars.gif)

##### Problem Areas to Address

1. **Unit Mismatch**: The provided functions fail to convert units correctly, leading to calculation inaccuracies.
2. **Parameter Misalignment**: Parameters are not handled in a way that prevents or highlights the potential for unit mismatch errors, leading to possible confusion.

##### Initial Parameters

- **Initial Velocity (`vel`)**: The starting speed of the spacecraft, 10,000 km/h.
- **Acceleration (`acc`)**: The spacecraft's acceleration, 3 m/s².
- **Time (`time`)**: The duration of the calculation, 3,600 seconds (equivalent to 1 hour).
- **Initial Distance (`d`)**: The starting distance from the reference point, 0 km.
- **Initial Fuel (`fuel`)**: The starting amount of fuel, 5,000 kg.
- **Fuel Burn Rate (`fbr`)**: The rate at which fuel is consumed, 0.5 kg/s.

##### Expected Corrected Results

- **New Velocity**: Approximately 48880 km/h after correction.
- **New Distance**: Approximately 10000 km after correction.
- **Remaining Fuel**: Approximately 3,200 kg after correction.

#### Your Task

1. **Identify and Understand Errors**: Analyse the provided functions to determine how unit mismatches and parameter misalignments cause incorrect results.
2. **Refactor and Correct**: Modify the functions to handle parameters more effectively, incorporating object destructuring for clarity and implementing necessary unit conversions.

#### Solution Approach

- Use object destructuring in function parameters for better clarity.
- Implement accurate unit conversions within the functions.
- Ensure the corrected functions address the issues of unit mismatches and parameter clarity.

#### Debugging Guide

1. Enhance code readability for easier debugging.
2. Identify and correct calculation errors.
3. Improve the robustness of calculations. If incorrect units are used or other errors are detected, the code should notify the user instead of producing an incorrect result.
=======
## This is a simple HTML project that includes JavaScript functionality and CSS normalization. 

**Records:**

- `index.html}: The primary HTML file that references the CSS and JavaScript files and contains the page structure.
- `index.css}: An optional CSS file to style the elements of the webpage (not included).
- `index.js}: A JavaScript file that contains the page's unique functionality (not included).

**Applications:**

Although the JavaScript file `index.js` is not specifically functional, its general structure indicates a basic webpage consisting of the following elements:

A heading element titled "Coming in hot!"
- Potentially more HTML elements that the JavaScript code could style or work with.

**Internal References:**

The "normalize.css" external library ([https://cdnjs.com/libraries/normalize](https://cdnjs.com/libraries/normalize)) is used by the project to supply fundamental to offer rudimentary cross-browser normalization. This guarantees a more uniform foundation for layout design.
Managing the Project:

Make sure that the index.html, index.css, and index.js files are all saved in the same directory.
Click index.html to start the project in your browser.
Additional Development

To style the different HTML elements on the page (header, body, etc.), create the index.css file.
To add certain functionality or interactivity to the page, work on the index.js file. This might entail:
To react to user actions (clicks, form submissions, etc.), event listeners can be added.
dynamically altering the page's content or style by working with the Document Object Model (DOM).
utilizing JavaScript frameworks or libraries for more sophisticated functionalities.
This project offers a foundation for developing straightforward
>>>>>>> 86c2470e8fccb23080f3f644fe202b9497b1c04f
