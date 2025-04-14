
# 📊 Project Dashboard

**Live Site:** [Click here to view the live website](https://chargind-dashboard.vercel.app/)

## 🚀 Setup Instructions

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/your-project.git
   cd your-project
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start local development server:
   ```bash
   npm run dev
   ```

> 🔐 **Note:** Kindly message me directly to receive the required `.env` variables.

---

## ✨ Features Implemented

- UI Dashboard
- Data Visualization
- Loading and Error Handling
- Mobile Responsiveness
- Sidebar Navigation

---

## 🛠️ Tech Stack

- **React** with **TypeScript**
- **TailwindCSS** for styling
- **ShadCN UI** – component library
- **Firebase Authentication**
- **Zod** – form validation
- **React Router** for navigation

---

## ⚠️ Known Limitations

- Due to using **ShadCN UI**, some components are challenging to fully customize.
- **Roobert (TRIAL)** font couldn't be used – replaced with **Inter** font instead.
- Different **Google login implementation** than standard – tailored for the project’s specific needs.

---

## 💡 Notes on Auth Implementation

Consider separating Google login behavior in the following cases:

- **Custom User Flows:** For handling new users uniquely (e.g., onboarding, collecting extra profile data, tracking, etc.).

---

## ⚙️ Technical Decisions & Trade-offs

- **ShadCN UI:** Chose this component library for its pre-built components and fast development. However, some components were hard to fully customize, requiring more effort to adjust them.
- **Firebase Authentication:** Used Firebase for easy and secure user authentication. The trade-off was the need for extra work on error handling and validation, which I handled with **Zod**.
- **Zod for Form Validation:** Opted for Zod due to its simplicity and compatibility with TypeScript. It gave better control and type safety.
- **TailwindCSS:** Used TailwindCSS for quick styling and flexibility. It helped keep the styling consistent and easy to manage.
- **React Router:** Chose React Router for navigation due to its simplicity.

---

## ⏱️ Time Spent

- 1–2 hours: Design ideation
- 2–4 hours: UI implementation
- 1–2 hours: Firebase Auth error handling & Zod validation
- 30 mins: Router navigation setup
- 2–4 hours: Debugging, additional testing, and UI polishing

> ⏳ **Note:** While the original estimate was approximately 5 hours, I took extra time to ensure high quality and functionality. I focused on polishing the UI, fixing bugs, and validating the experience to make sure it worked smoothly. I believe this extra effort was valuable in delivering a complete and reliable result.

---

## 🧪 Local Development

To run this project locally:

```bash
npm install
npm run dev
```

Ensure you have the required environment variables in a `.env` file. Feel free to reach out to me for access.
