# Super Test Form

## Table of Contents

- [Libraries Used](#libraries-used)
- [Features](#features)
- [Preview](#preview)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
- [External API](#external-api)
- [Usage](#usage)
- [License](#license)

## Libraries Used

- **React:** A JavaScript library for building user interfaces.
- **Tailwind CSS:** A utility-first CSS framework for rapid UI development.
- **TypeScript:** A statically typed superset of JavaScript.
- **Formik**: A popular form management library for React.
- **Yup**: A library for form validation and schema definition.

## Features

Super Test is a Multistep Form that includes:

### Step 1

- **Username**: A string field, required, with a length of 4-12 characters.
- **Email**: Any valid email address, required.
- **Phone Number**: Any valid phone number, required.
- **Country**: Required, retrieves the list of countries from an external API.

### Step 2

- **Password**: A password field, required, with a length of 8-16 characters.
- **Repeat Password**: Password must match the password field.

### Step 3

- Displayed Values from Step 1:
  - Username
  - Phone
  - Country

## Extrnal API

This project utilizes the [Rest Countries API](https://restcountries.com/) to fetch data about countries. The API provides information about countries, including names, populations, and more. You can explore the API for more details.

## Preview

[Test the live website.](https://super-test-form.netlify.app)

## Getting Started

### Prerequisites

Make sure you have Node.js and npm (Node Package Manager) installed on your machine.

### Installation

1. Clone this repository:

   ```bash
   git clone https://github.com/Shahriar-Rumel/super-test-form
   cd super-test-form
   ```

2. Install dependencies:

```bash
 npm install
```

3. Start the development server:

```bash
 npm start
```

The application will be available at http://localhost:3000.

## Usage

Fill the form step by step to test the input validation

## License

This project is licensed under the MIT License - see the LICENSE file for details
