#SETUP
1. Create a new dir and enter it

2. Command >> git clone git@github.com:MarinaZLKN/Typescript_SKAN.git

3. cd Typescript_SKAN

4. npm install

5. npm start

All the users credentials and TIX to check:

1. username: 'sf_student1', password: '4i2385j' 
2. username: 'sf_student10', password: 'KHKfTXb'
3. username: 'sf_student3', password: '6z9ZFRs'
4. username: 'sf_student2', password: 'lV8xjCH'

TIX: 9702009530, 6449013711 or any other you know.
   


#Technical Specification

Project: Development of the client-side of "SCAN" company service for searching publications about legal entities in mass media by TIN.

1. Introduction

"SCAN" company is engaged in online reputation management for businesses and provides tools for monitoring media, interacting with journalists, and verifying counterparties. Within this project, the client-side of the service is being developed for searching publications about legal entities in mass media by TIN.

2. Functional Requirements

2.1. Home Page

The home page is the starting point for users and is accessible to all users without authentication. The home page includes the following elements:

"SCAN" company logo.
A brief description of the service and its advantages.
A "Request Data" button (visible only to registered users).
A button to navigate to the login form.

2.2. Authorization Form

The authorization form allows users to log in to the system and use the service. It includes the following elements:

Fields for entering the username and password.
A "Log In" button.
A link to the password recovery page (if necessary).

2.3. Query Parameter Input Form

The form for entering query parameters allows registered users to specify the necessary parameters for searching publications. It includes the following elements:

A field for entering the TIN of the company (legal entity).
Selection of search parameters (e.g., date range, keywords, etc.).
A "Search" button.

2.4. Results Page

On this page, the user sees the results of the query obtained from the server-side. The page includes the following elements:

A list of found publications with the date, source, and other relevant information.


3. Technical Requirements

The client-side should be implemented using modern web technologies, such as HTML5, CSS3, and TypeScript.
HTTPS and authentication mechanisms should be used to ensure data security, data transmission, and user authentication.
The interface design should be attractive, intuitive, and responsive to various devices (from mobile devices to desktops).
The entire client-side should be developed with a focus on security principles and user data protection.


4. Additional Requirements

4.1. "Why Choose Us" Section

Cards in the "Why Choose Us" section should have carousel functionality, allowing users to navigate between them using left and right arrows.
Clicking the left arrow takes the user to the previous card, and clicking the right arrow takes them to the next one.
Cards should transition with animation to provide a more engaging visual experience.

4.2. "Our Tariffs" Section

The "Our Tariffs" section lists available tariffs.
If a user is logged in, the card with their current tariff should have the following changes:
A "Current Tariff" badge should appear on the tariff card.
The "Details" button on the tariff card should be replaced with "Go to the Personal Account." Clicking it should have no functionality (a placeholder).
The tariff card should be highlighted with a color corresponding to the user's current tariff.
5. Technical Requirements (Continuation)

To implement the carousel in the "Why Choose Us" section, JavaScript libraries or frameworks that provide such functionality can be used (e.g., Slick Carousel, Owl Carousel, etc.).
To display the user's current tariff and highlight it with the corresponding color, dynamic HTML generation using JavaScript and CSS class management can be employed.
6. Conclusion

The development of the client-side of the "SCAN" service for searching publications about legal entities in mass media by TIN should provide a convenient and functional interface for users, allowing them to effectively use the company's service. The project should be completed on time and meet all the technical and functional requirements described above.
