# Visual Product Matcher

A web application that helps users find visually similar products based on uploaded images or image URLs.

---

## 🚀 Live Demo

- **App URL:** https://ohara.ai/mini-apps/560a8505-342f-40ed-94a8-2f9514c2ee3f
- **GitHub Repo:** https://github.com/VY25AY/image_finder

---

## 📸 Features
<img width="1190" height="723" alt="Screenshot 2025-09-01 121020" src="https://github.com/user-attachments/assets/96037bed-fa53-4bef-9f4e-9cdbc4245c22" />
<img width="869" height="655" alt="Screenshot 2025-09-01 121034" src="https://github.com/user-attachments/assets/94715c47-41eb-4064-bc43-e89ef3c846e8" />
<img width="800" height="728" alt="Screenshot 2025-09-01 121106" src="https://github.com/user-attachments/assets/f910a14d-1ec5-4542-995f-8a3da0d20b5d" />



---
---
- **Image Upload:** Upload a product image or provide an image URL.
- **Search Interface:** 
  - View your uploaded image.
  - Instantly see a grid of visually similar products.
  - Filter results by similarity score.
- **Product Database:** 
  - 50+ products with images and metadata (name, category, etc.).
- **Mobile Responsive:** Works seamlessly on all devices.
- **Error Handling & Loading States:** User-friendly feedback throughout.

---

## 🛠️ Tech Stack

- **Framework:** Next.js (React + TypeScript)
- **Styling:** Tailwind CSS
- **UI Components:** ShadCN/UI
- **Image Analysis:** [e.g., Replicate, Google Vision API, or custom ML]
- **Hosting:** [e.g., Vercel, Netlify, or your chosen free service]

---

## 📝 Approach (200 words max)

This project leverages Next.js for a fast, scalable, and developer-friendly experience. Users can upload an image or provide an image URL, which is then analyzed using an AI/ML service to extract visual features. The app compares these features against a curated database of 50+ products, each with images and metadata. Results are ranked by similarity and displayed in a responsive grid, with filtering options for enhanced usability. The UI is built with ShadCN/UI and Tailwind CSS for a modern, accessible, and mobile-friendly design. Error handling and loading states ensure a smooth user experience. The application is deployed on [your chosen platform] for easy access and sharing.

---

## 📦 Getting Started

1. **Clone the repo:**  
   `git clone https://github.com/yourusername/visual-product-matcher.git`
2. **Install dependencies:**  
   `npm install`
3. **Run locally:**  
   `npm run dev`
4. **Configure API keys:**  
   Add your AI/ML API keys in `.env.local` as needed.

---

## 📂 Project Structure

```
visual-discovery-platform/
├── README.md
├── CONTRIBUTING.md
├── LICENSE
├── CHANGELOG.md
├── PROJECT_SETUP.md
├── .gitignore
├── package.json
├── tailwind.config.ts
├── tsconfig.json
├── next.config.js
├── postcss.config.js
├── public/
│   └── favicon.ico
├── src/
│   ├── app/
│   │   ├── api/
│   │   ├── fonts/
│   │   ├── layout.tsx
│   │   ├── globals.css
│   │   └── page.tsx
│   ├── components/
│   ├── hooks/
│   ├── lib/
│   └── middleware.ts
```

---

