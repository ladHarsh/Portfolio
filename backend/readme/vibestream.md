# 🎬 VibeStream - Movie Recommendation System

<div align="center">

**Stop doomscrolling. Start watching.** ⚡

A modern, intelligent movie recommendation system powered by content-based filtering and machine learning.

[![Python](https://img.shields.io/badge/Python-3.8+-blue.svg)](https://www.python.org/)
[![Streamlit](https://img.shields.io/badge/Streamlit-1.0+-red.svg)](https://streamlit.io/)
[![scikit-learn](https://img.shields.io/badge/scikit--learn-ML-orange.svg)](https://scikit-learn.org/)
[![License](https://img.shields.io/badge/License-Educational-green.svg)](LICENSE)

</div>

---

## 📋 Table of Contents

- [Overview](#-overview)
- [Features](#-features)
- [How It Works](#-how-it-works)
- [Tech Stack](#-tech-stack)
- [Project Structure](#-project-structure)
- [Installation & Setup](#-installation--setup)
- [Usage](#-usage)
- [Data Processing Pipeline](#-data-processing-pipeline)
- [Machine Learning Model](#-machine-learning-model)
- [API Integration](#-api-integration)
- [Screenshots](#-screenshots)
- [Future Enhancements](#-future-enhancements)
- [Contributing](#-contributing)
- [License](#-license)

---

## 🌟 Overview

**VibeStream** is an intelligent movie recommendation web application built with **Streamlit** and powered by **machine learning**. It analyzes movie metadata including plot summaries, genres, keywords, cast, and crew to suggest movies similar to your favorites. The system uses **content-based filtering** with **cosine similarity** to provide personalized recommendations from a dataset of 5,000+ movies.

The application features a beautiful, modern UI with animated gradients, responsive design, and live movie posters fetched from **The Movie Database (TMDB) API**.

---

## ✨ Features

### 🎨 **Beautiful User Interface**
- **Animated gradient background** with smooth transitions
- **Glassmorphism design** with modern card-based layout
- **Responsive grid system** (5 columns on desktop, 2 on mobile)
- **Hover effects** and smooth animations for enhanced UX
- **Dark theme** optimized for movie browsing

### 🤖 **Intelligent Recommendations**
- **Content-based filtering** using NLP techniques
- **Cosine similarity** algorithm for accurate matching
- Analyzes **multiple features**: plot, genres, keywords, cast, crew
- Returns **top 10 similar movies** for any selected title
- **Fast search** with autocomplete from 4,800+ movies

### 🖼️ **Rich Visual Experience**
- **Live movie posters** fetched from TMDB API
- **Fallback images** for missing posters
- **Optimized image loading** with caching
- **Grid layout** for easy browsing

### ⚡ **Performance Optimized**
- **Cached data loading** using Streamlit's `@st.cache_resource`
- **Pre-computed similarity matrix** for instant recommendations
- **Efficient vectorization** with CountVectorizer (5,000 features)
- **Minimal API calls** with smart caching

---

## 🔍 How It Works

### 1️⃣ **Data Preparation** (Jupyter Notebook)

The `movieRecommandation.ipynb` notebook processes raw movie data:

1. **Load Data**: Merge TMDB movies and credits datasets
2. **Feature Extraction**: Extract genres, keywords, cast (top 3), and director
3. **Data Cleaning**: 
   - Remove null values
   - Parse JSON-like strings using `ast.literal_eval()`
   - Remove spaces from multi-word names (e.g., "Sam Worthington" → "SamWorthington")
4. **Tag Creation**: Combine overview + genres + keywords + cast + crew into a single "tags" field
5. **Vectorization**: Convert tags to numerical vectors using CountVectorizer (5,000 features)
6. **Similarity Computation**: Calculate cosine similarity matrix between all movies
7. **Serialization**: Save processed data as `movie_list.pkl` and `similarity.pkl`

### 2️⃣ **Web Application** (Streamlit App)

The `app.py` file serves the recommendation engine:

1. **Load Data**: Load pre-computed movie list and similarity matrix
2. **User Input**: User selects a movie from the searchable dropdown
3. **Find Similar Movies**: 
   - Get the index of selected movie
   - Sort all movies by similarity score
   - Return top 10 most similar movies (excluding the selected one)
4. **Fetch Posters**: Call TMDB API to get poster images for recommended movies
5. **Display Results**: Render recommendations in a responsive grid with posters and titles

---

## 🛠️ Tech Stack

### **Frontend**
- **Streamlit** - Interactive web framework
- **HTML/CSS** - Custom styling and animations
- **Responsive Design** - Mobile-first approach

### **Backend & ML**
- **Python 3.8+** - Core programming language
- **pandas** - Data manipulation and analysis
- **NumPy** - Numerical computations
- **scikit-learn** - Machine learning library
  - `CountVectorizer` - Text vectorization
  - `cosine_similarity` - Similarity computation

### **Data & APIs**
- **TMDB 5000 Dataset** - Movie metadata (Kaggle)
- **TMDB API** - Live movie posters and metadata
- **pickle** - Model serialization

### **Development Tools**
- **Jupyter Notebook** - Data exploration and model building
- **Git** - Version control
- **Virtual Environment** - Dependency isolation

---

## 📁 Project Structure

```
Movie-Recommendation-System/
│
├── 📄 app.py                          # Streamlit web application
├── 📓 movieRecommandation.ipynb       # Data processing & model training notebook
│
├── 📊 Data Files
│   ├── tmdb_5000_movies.csv           # Raw movie metadata (5.4 MB)
│   ├── tmdb_5000_credits.csv          # Cast and crew data (38 MB)
│   ├── movie_list.pkl                 # Processed movie features (2.3 MB)
│   └── similarity.pkl                 # Cosine similarity matrix (176 MB)
│
├── 📋 Configuration
│   ├── requirements.txt               # Python dependencies
│   ├── .gitignore                     # Git ignore rules
│   └── README.md                      # Project documentation
│
└── 📂 Environment
    └── venv/                          # Virtual environment (not tracked)
```

### **Key Files Explained**

| File | Purpose | Size |
|------|---------|------|
| `app.py` | Main Streamlit application with UI and recommendation logic | 6 KB |
| `movieRecommandation.ipynb` | Jupyter notebook for data preprocessing and model creation | 38 KB |
| `tmdb_5000_movies.csv` | Raw movie data (budget, genres, keywords, overview, etc.) | 5.4 MB |
| `tmdb_5000_credits.csv` | Cast and crew information for each movie | 38 MB |
| `movie_list.pkl` | Processed DataFrame with movie_id, title, and tags | 2.3 MB |
| `similarity.pkl` | Pre-computed 4803×4803 similarity matrix | 176 MB |
| `requirements.txt` | Python package dependencies | 64 B |

---

## 🚀 Installation & Setup

### **Prerequisites**
- Python 3.8 or higher
- pip (Python package manager)
- Git (optional, for cloning)

### **Step 1: Clone the Repository**

```bash
git clone https://github.com/ladHarsh/Movie-Recommendation-System.git
cd Movie-Recommendation-System
```

### **Step 2: Create Virtual Environment** (Recommended)

```bash
# Windows
python -m venv venv
venv\Scripts\activate

# macOS/Linux
python3 -m venv venv
source venv/bin/activate
```

### **Step 3: Install Dependencies**

```bash
pip install -r requirements.txt
```

**Dependencies installed:**
- `streamlit` - Web framework
- `pandas` - Data manipulation
- `numpy` - Numerical operations
- `scikit-learn` - Machine learning
- `requests` - API calls
- `pickle-mixin` - Serialization support

### **Step 4: Verify Data Files**

Ensure these files exist in the project directory:
- ✅ `movie_list.pkl`
- ✅ `similarity.pkl`
- ✅ `tmdb_5000_movies.csv`
- ✅ `tmdb_5000_credits.csv`

> **Note**: If `.pkl` files are missing, run the Jupyter notebook to generate them (see [Data Processing Pipeline](#-data-processing-pipeline)).

---

## 💻 Usage

### **Running the Application**

```bash
streamlit run app.py
```

The app will automatically open in your default browser at `http://localhost:8501`

### **Using the Recommendation System**

1. **Search for a Movie**: Type in the search box to find your favorite movie
2. **Select a Movie**: Choose from the dropdown suggestions
3. **Generate Recommendations**: Click the "Generate Recommendations" button
4. **Browse Results**: View 10 similar movies with posters and titles
5. **Explore More**: Select another movie to get new recommendations

### **Example Workflow**

```
1. Type "Avatar" in the search box
2. Select "Avatar" from the dropdown
3. Click "Generate Recommendations"
4. View similar sci-fi movies like:
   - Guardians of the Galaxy
   - Star Trek
   - Aliens
   - Star Wars
   - etc.
```

---

## 🔬 Data Processing Pipeline

### **Notebook Workflow** (`movieRecommandation.ipynb`)

#### **1. Data Loading**
```python
movies = pd.read_csv("tmdb_5000_movies.csv")
credits = pd.read_csv("tmdb_5000_credits.csv")
movies = movies.merge(credits, on='title')
```

#### **2. Feature Selection**
```python
movies = movies[['movie_id', 'title', 'overview', 'genres', 'keywords', 'cast', 'crew']]
```

#### **3. Data Cleaning**

**Remove null values:**
```python
movies.dropna(inplace=True)
```

**Parse JSON strings:**
```python
import ast

def convert(text):
    L = []
    for i in ast.literal_eval(text):
        L.append(i['name'])
    return L

movies['genres'] = movies['genres'].apply(convert)
movies['keywords'] = movies['keywords'].apply(convert)
```

**Extract top 3 cast members:**
```python
movies['cast'] = movies['cast'].apply(convert)
movies['cast'] = movies['cast'].apply(lambda x: x[0:3])
```

**Extract director from crew:**
```python
def fetch_director(text):
    L = []
    for i in ast.literal_eval(text):
        if i['job'] == 'Director':
            L.append(i['name'])
    return L

movies['crew'] = movies['crew'].apply(fetch_director)
```

**Remove spaces from names:**
```python
def collapse(L):
    return [i.replace(" ", "") for i in L]

movies['cast'] = movies['cast'].apply(collapse)
movies['crew'] = movies['crew'].apply(collapse)
movies['genres'] = movies['genres'].apply(collapse)
movies['keywords'] = movies['keywords'].apply(collapse)
```

#### **4. Tag Creation**
```python
movies['overview'] = movies['overview'].apply(lambda x: x.split())
movies['tags'] = movies['overview'] + movies['genres'] + movies['keywords'] + movies['cast'] + movies['crew']

new = movies.drop(columns=['overview', 'genres', 'keywords', 'cast', 'crew'])
new['tags'] = new['tags'].apply(lambda x: " ".join(x))
```

#### **5. Vectorization**
```python
from sklearn.feature_extraction.text import CountVectorizer

cv = CountVectorizer(max_features=5000, stop_words='english')
vectors = cv.fit_transform(new['tags']).toarray()
```

#### **6. Similarity Computation**
```python
from sklearn.metrics.pairwise import cosine_similarity

similarity = cosine_similarity(vectors)
```

#### **7. Save Models**
```python
import pickle

pickle.dump(new, open('movie_list.pkl', 'wb'))
pickle.dump(similarity, open('similarity.pkl', 'wb'))
```

### **Rebuilding the Model**

If you modify the data or logic:

1. Open `movieRecommandation.ipynb` in Jupyter Notebook or VS Code
2. Run all cells sequentially
3. New `.pkl` files will be generated
4. Restart the Streamlit app to use updated models

---

## 🧠 Machine Learning Model

### **Algorithm: Content-Based Filtering**

The system uses **content-based filtering**, which recommends items similar to what a user has shown interest in, based on item features.

### **Feature Engineering**

**Input Features:**
- **Overview**: Movie plot summary (tokenized words)
- **Genres**: Action, Drama, Comedy, etc.
- **Keywords**: Themes and topics (e.g., "space", "revenge", "love")
- **Cast**: Top 3 actors
- **Crew**: Director

**Combined Tags Example:**
```
"Avatar" → "In the 22nd century a paraplegic Marine... Action Adventure Fantasy 
ScienceFiction cultureclash future spacewar spacecolony SamWorthington ZoeSaldana 
SigourneyWeaver JamesCameron"
```

### **Vectorization: CountVectorizer**

- **Type**: Bag-of-Words model
- **Max Features**: 5,000 most frequent words
- **Stop Words**: English stop words removed ("the", "is", "and", etc.)
- **Output**: Sparse matrix of shape (4803, 5000)

### **Similarity Metric: Cosine Similarity**

**Formula:**
```
cosine_similarity(A, B) = (A · B) / (||A|| × ||B||)
```

**Range**: 0 to 1
- **1**: Identical movies
- **0**: Completely different movies

**Matrix Shape**: 4803 × 4803 (all pairwise similarities)

### **Recommendation Algorithm**

```python
def recommend(movie):
    # 1. Find movie index
    index = movies[movies['title'] == movie].index[0]
    
    # 2. Get similarity scores for this movie
    distances = sorted(
        list(enumerate(similarity[index])),
        reverse=True,
        key=lambda x: x[1]
    )
    
    # 3. Return top 10 similar movies (excluding itself)
    recommendations = []
    for i in distances[1:11]:
        movie_id = movies.iloc[i[0]].movie_id
        recommendations.append({
            'title': movies.iloc[i[0]].title,
            'poster': fetch_poster(movie_id)
        })
    
    return recommendations
```

---

## 🌐 API Integration

### **TMDB API**

**Purpose**: Fetch movie posters and metadata

**Endpoint Used:**
```
GET https://api.themoviedb.org/3/movie/{movie_id}?api_key={api_key}
```

**Implementation:**
```python
@st.cache_data(show_spinner=False)
def fetch_poster(movie_id):
    try:
        api_key = "8265bd1679663a7ea12ac168da84d2e8"
        url = f"https://api.themoviedb.org/3/movie/{movie_id}?api_key={api_key}"
        data = requests.get(url, timeout=3).json()
        
        if data.get("poster_path"):
            return "https://image.tmdb.org/t/p/w500/" + data["poster_path"]
    except Exception:
        pass
    
    return "https://via.placeholder.com/500x750.png?text=No+Cover"
```

**Features:**
- ✅ **Caching**: Results cached to minimize API calls
- ✅ **Timeout**: 3-second timeout to prevent hanging
- ✅ **Error Handling**: Graceful fallback to placeholder image
- ✅ **Image Quality**: 500px width posters for optimal loading

**API Rate Limits:**
- Free tier: 1,000 requests per day
- Caching ensures minimal usage

---

## 📸 Screenshots

### **Home Page**
![Home Page](https://via.placeholder.com/800x400.png?text=VibeStream+Home+Page)

### **Movie Search**
![Search](https://via.placeholder.com/800x400.png?text=Movie+Search+Interface)

### **Recommendations Grid**
![Recommendations](https://via.placeholder.com/800x400.png?text=Movie+Recommendations+Grid)

---

## 🔮 Future Enhancements

### **Planned Features**

- [ ] **Hybrid Recommendation System**
  - Combine content-based + collaborative filtering
  - Use user ratings and watch history

- [ ] **Advanced NLP**
  - Use TF-IDF instead of CountVectorizer
  - Implement word embeddings (Word2Vec, BERT)

- [ ] **User Accounts**
  - Save favorite movies
  - Personalized recommendation history
  - Watchlist functionality

- [ ] **Filters & Sorting**
  - Filter by genre, year, rating
  - Sort by popularity, release date
  - Advanced search options

- [ ] **Movie Details Page**
  - Full plot summary
  - Cast and crew information
  - Ratings and reviews
  - Trailers and clips

- [ ] **Social Features**
  - Share recommendations
  - User reviews and ratings
  - Community discussions

- [ ] **Performance Improvements**
  - Use Annoy/FAISS for faster similarity search
  - Implement lazy loading for posters
  - Optimize similarity matrix storage

- [ ] **Deployment**
  - Deploy on Streamlit Cloud
  - Containerize with Docker
  - Set up CI/CD pipeline

---

## 🤝 Contributing

Contributions are welcome! Here's how you can help:

### **Reporting Bugs**
1. Check if the issue already exists
2. Create a detailed bug report with:
   - Steps to reproduce
   - Expected vs actual behavior
   - Screenshots (if applicable)
   - Environment details

### **Suggesting Features**
1. Open an issue with the `enhancement` label
2. Describe the feature and its benefits
3. Provide mockups or examples if possible

### **Code Contributions**
1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

### **Development Guidelines**
- Follow PEP 8 style guide for Python
- Add comments for complex logic
- Update documentation for new features
- Test thoroughly before submitting PR

---

## 📄 License

This project is for **educational purposes only**. 

### **Dataset License**
- TMDB 5000 Dataset: [Kaggle License](https://www.kaggle.com/datasets/tmdb/tmdb-movie-dataset)
- Must comply with TMDB API [Terms of Use](https://www.themoviedb.org/terms-of-use)

### **API Usage**
- TMDB API: Free tier with attribution required
- Display TMDB logo when using their data

---

## 🙏 Acknowledgments

- **TMDB** - For providing the movie dataset and API
- **Kaggle** - For hosting the TMDB 5000 dataset
- **Streamlit** - For the amazing web framework
- **scikit-learn** - For machine learning tools

---

## 📞 Contact

**Harsh Lad**
- GitHub: [@ladHarsh](https://github.com/ladHarsh)
- Repository: [Movie-Recommendation-System](https://github.com/ladHarsh/Movie-Recommendation-System)

---

<div align="center">

**Made with ❤️ and Python**

⭐ Star this repo if you found it helpful!

**VibeStream** — Stop doomscrolling. Start watching! ⚡

</div>
