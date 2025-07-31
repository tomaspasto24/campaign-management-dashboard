## Design Decisions

### Form Validation

No request was received detailing form validations; they were designed with arbitrary but reasonable constraints:

- **Campaign Names:** Maximum of 50 characters to keep titles concise yet descriptive.
- **Date Validations:** Years are restricted between 1900 and current year +5, preventing unrealistic future campaigns while accommodating reasonable planning.
- **Numeric Fields:** 
    - Clicks: Minimum 0, maximum 1,000,000.
    - Financials: $0–$10,000,000.
    - These constraints prevent data entry errors while supporting most real-world campaign scales.
- **Date Range Validation:** Ensures logical campaign durations by requiring end dates to follow start dates.

### Sorting

To sort by **name**, **profit**, **start date**, or **end date**, click above the respective label.

### BONUS: Responsive Screen
CSS has been added to make it **responsive** and accessible from mobile devices.


---

## Setup Instructions

### Prerequisites

- **Node.js**, **React** and **npm** or **yarn** installed.
- No additional global dependencies required.

### Installation Steps

1. **Clone the repository**
2. **Install dependencies**  
     Run `npm install` or `yarn install`
3. **Copy the provided source files** into your project structure
4. The application uses **vanilla CSS** no additional CSS processors required

### Running the Application

- **Start the development server:**  
    Run `npm start` or `yarn start`
- The application will automatically open in your default browser at [http://localhost:3000](http://localhost:3000)
- **For production builds:**  
    Run `npm run build` to create optimized static files