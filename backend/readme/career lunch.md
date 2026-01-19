# 🎯 Career Launch

[![Streamlit App](https://static.streamlit.io/badges/streamlit_badge_svg)](https://share.streamlit.io)
[![Python 3.9+](https://img.shields.io/badge/python-3.9+-blue.svg)](https://www.python.org/downloads/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

**Career Launch** is an intelligent, AI-powered career intelligence platform that analyzes resumes against job descriptions to identify skill gaps, calculate matching scores, and provide actionable career insights using advanced Natural Language Processing (NLP) and Machine Learning techniques.

---

## 📋 Table of Contents

- [Project Overview](#-project-overview)
- [Key Features](#-key-features)
- [Architecture](#-architecture)
- [Technology Stack](#-technology-stack)
- [Project Structure](#-project-structure)
- [Installation & Setup](#-installation--setup)
- [How It Works](#-how-it-works)
- [Core Components](#-core-components)
- [UI Features](#-ui-features)
- [Configuration](#-configuration)
- [Usage Guide](#-usage-guide)
- [API Reference](#-api-reference)
- [Contributing](#-contributing)
- [License](#-license)

---

## 🖥️ Project Overview

Career Launch is designed to help job seekers and professionals:

- **Instantly analyze** their resume against any job description
- **Identify matched, missing, and extra skills** with detailed categorization
- **Get explainable match scores** based on ML algorithms (TF-IDF, Cosine Similarity)
- **Receive actionable recommendations** for upskilling and career development
- **Visualize their fit** with interactive scorecards and skill breakdowns
- **Access a modern, mobile-first dashboard** with dark theme and responsive design

---

## 🚀 Key Features

### 1. **Robust Resume Parsing**
- Multi-engine PDF text extraction using both `pdfplumber` and `PyPDF2`
- Automatic fallback mechanism for maximum compatibility
- Support for both PDF upload and direct text input
- Resume validation with quality checks

### 2. **Advanced Skill Extraction Engine**
- **Hybrid approach** combining:
  - Taxonomy-based matching (curated skill database)
  - TF-IDF importance scoring
  - N-gram pattern recognition (unigrams to trigrams)
- **Skill normalization** with synonym handling
- **Confidence scoring** for each extracted skill
- **Category-based organization** (9 skill categories)

### 3. **Intelligent Job Matching**
- **Weighted scoring algorithm**:
  - 60% skill-based matching
  - 40% content similarity (TF-IDF + Cosine Similarity)
- **Explainable AI** with human-readable explanations
- Match level categorization (Excellent/Good/Moderate/Low/Poor)

### 4. **Comprehensive Skill Gap Analysis**
- **Three-way skill classification**:
  - Matched Skills (in both resume and job description)
  - Missing Skills (required but not in resume)
  - Extra Skills (in resume but not required)
- **Category-based breakdown** for each skill type
- **Actionable insights** with context-aware recommendations
- **Priority-based recommendations** (High/Medium/Low)

### 5. **Modern Streamlit UI**
- **Dark theme** with custom CSS styling
- **Mobile-responsive** design with optimized layouts
- **Interactive components**:
  - Score cards with animated progress bars
  - Tabbed skill breakdowns
  - Category-based skill badges
  - Insight and recommendation cards
- **Toggle-based input** (PDF Upload vs. Text Input)

---

## 🏗️ Architecture

```
┌─────────────────────────────────────────────────────────────┐
│                     Streamlit UI Layer                       │
│  (streamlit_app.py - User Interface & Visualization)         │
└────────────────────┬────────────────────────────────────────┘
                     │
┌────────────────────┴────────────────────────────────────────┐
│                   Application Layer                          │
├──────────────────────────────────────────────────────────────┤
│  ┌─────────────┐  ┌──────────────┐  ┌──────────────┐       │
│  │   Parsers   │  │  Extractors  │  │  Analyzers   │       │
│  │             │  │              │  │              │       │
│  │ Resume      │  │ Skill        │  │ Gap          │       │
│  │ Parser      │→ │ Extractor    │→ │ Analyzer     │       │
│  │             │  │              │  │              │       │
│  │ PDF/Text    │  │ TF-IDF +     │  │ Match/Miss/  │       │
│  │ Extraction  │  │ Taxonomy     │  │ Extra Skills │       │
│  └─────────────┘  └──────────────┘  └──────────────┘       │
│                                                              │
│  ┌─────────────┐  ┌──────────────┐                         │
│  │  Matcher    │  │ Text         │                         │
│  │             │  │ Processor    │                         │
│  │ Job         │  │              │                         │
│  │ Matching    │  │ Cleaning &   │                         │
│  │             │  │ Normalization│                         │
│  │ Cosine Sim  │  │              │                         │
│  └─────────────┘  └──────────────┘                         │
└──────────────────────────────────────────────────────────────┘
                     │
┌────────────────────┴────────────────────────────────────────┐
│                    Core Layer                                │
├──────────────────────────────────────────────────────────────┤
│  ┌─────────────────┐  ┌────────────────────────┐           │
│  │  Configuration  │  │  Skill Taxonomy        │           │
│  │                 │  │                        │           │
│  │  - Settings     │  │  - 9 Skill Categories  │           │
│  │  - ML Params    │  │  - Synonym Mapping     │           │
│  │  - Thresholds   │  │  - Normalization       │           │
│  └─────────────────┘  └────────────────────────┘           │
└──────────────────────────────────────────────────────────────┘
```

---

## 🛠️ Technology Stack

### **Frontend**
- **Streamlit** (v1.28.2+) - Web application framework
- **Plotly** (v5.18.0+) - Interactive visualizations
- **Custom CSS** - Dark theme, mobile responsiveness, animations

### **NLP & Machine Learning**
- **Scikit-learn** (v1.3.2+) - TF-IDF vectorization, cosine similarity
- **NumPy** (v1.26.2+) - Numerical computations
- **Pandas** (v2.1.3+) - Data manipulation

### **PDF Processing**
- **pdfplumber** (v0.10.3+) - Primary PDF text extraction
- **PyPDF2** (v3.0.1+) - Fallback PDF extraction

### **Configuration & Utilities**
- **pydantic-settings** (v2.1.0+) - Settings management
- **python-dotenv** (v1.0.0+) - Environment variable handling

---

## 📁 Project Structure

```
Career AI/
│
├── app/
│   └── streamlit_app.py              # Main Streamlit application (1596 lines)
│                                      # - UI configuration & CSS
│                                      # - Input handling (PDF/Text)
│                                      # - Analysis orchestration
│                                      # - Results visualization
│
├── src/
│   ├── __init__.py                   # Package initialization
│   │
│   ├── analyzers/
│   │   ├── __init__.py
│   │   └── gap_analyzer.py           # Skill gap analysis engine
│   │                                  # - Matched/Missing/Extra skill identification
│   │                                  # - Category-based breakdown
│   │                                  # - Insight generation
│   │                                  # - Priority-based recommendations
│   │
│   ├── core/
│   │   ├── __init__.py
│   │   ├── config.py                 # Application configuration
│   │   │                              # - ML hyperparameters
│   │   │                              # - Skill categories (9 types)
│   │   │                              # - Synonym mappings
│   │   │                              # - Threshold settings
│   │   │
│   │   └── skill_taxonomy.py         # Skill knowledge base
│   │                                  # - Hierarchical skill categorization
│   │                                  # - Skill normalization
│   │                                  # - Synonym expansion
│   │                                  # - Category lookup
│   │
│   ├── ml/
│   │   ├── __init__.py
│   │   ├── skill_extractor.py        # Skill extraction engine
│   │   │                              # - Taxonomy-based matching
│   │   │                              # - TF-IDF importance scoring
│   │   │                              # - N-gram extraction
│   │   │                              # - Confidence scoring
│   │   │
│   │   ├── matcher.py                # Job matching engine
│   │   │                              # - Cosine similarity calculation
│   │   │                              # - Skill-based matching
│   │   │                              # - Weighted scoring (60/40)
│   │   │                              # - Explainability generation
│   │   │
│   │   └── text_processor.py         # Text preprocessing
│   │                                  # - Text cleaning & normalization
│   │                                  # - N-gram extraction
│   │                                  # - Tokenization
│   │                                  # - Skill term normalization
│   │
│   └── parsers/
│       ├── __init__.py
│       └── resume_parser.py          # Resume parsing engine
│                                      # - Multi-engine PDF extraction
│                                      # - Fallback mechanism
│                                      # - Text validation
│                                      # - Resume quality checks
│
├── .streamlit/
│   └── config.toml                   # Streamlit theme configuration
│                                      # - Dark color scheme
│                                      # - Custom primary colors
│                                      # - Server settings
│
├── requirements.txt                  # Python dependencies
├── .gitignore                        # Git ignore rules
└── README.md                         # This file
```

---

## 📦 Installation & Setup

### **Prerequisites**
- Python 3.9 or higher
- pip package manager
- Virtual environment (recommended)

### **Step-by-Step Installation**

1. **Clone the Repository**
   ```bash
   git clone https://github.com/ladHarsh/Career-Launch.git
   cd Career-Launch
   ```

2. **Create Virtual Environment**
   ```bash
   # Windows
   python -m venv venv
   venv\Scripts\activate

   # macOS/Linux
   python3 -m venv venv
   source venv/bin/activate
   ```

3. **Install Dependencies**
   ```bash
   pip install -r requirements.txt
   ```

4. **Verify Installation**
   ```bash
   python -c "import streamlit; import sklearn; import pdfplumber; print('All dependencies installed successfully!')"
   ```

5. **Run the Application**
   ```bash
   streamlit run app/streamlit_app.py
   ```

6. **Access the Application**
   - The app will automatically open in your default browser
   - Default URL: `http://localhost:8501`

---

## 🧬 How It Works

### **Step 1: Resume Parsing**
```
User Input (PDF/Text) → ResumeParser
                         ├─ Try pdfplumber (primary)
                         ├─ Fallback to PyPDF2
                         └─ Validate extracted text
                         → Cleaned resume text
```

### **Step 2: Skill Extraction**
```
Resume Text + Job Description → SkillExtractor
                                 ├─ Taxonomy Matching
                                 │  └─ Match against 100+ known skills
                                 ├─ TF-IDF Analysis
                                 │  └─ Extract important terms
                                 └─ Merge & Score
                                    └─ Confidence-weighted skills
                                 → Skill Lists (with categories)
```

### **Step 3: Job Matching**
```
Resume + Job Description → JobMatcher
                            ├─ Text Similarity (40%)
                            │  └─ TF-IDF + Cosine Similarity
                            ├─ Skill Match (60%)
                            │  └─ Skill overlap percentage
                            └─ Weighted Combination
                            → Overall Match Score (0-100%)
```

### **Step 4: Gap Analysis**
```
Resume Skills + Job Skills → GapAnalyzer
                              ├─ Matched Skills (Intersection)
                              ├─ Missing Skills (Job - Resume)
                              ├─ Extra Skills (Resume - Job)
                              ├─ Category Breakdown
                              ├─ Insight Generation
                              └─ Priority Recommendations
                              → Comprehensive Gap Report
```

---

## 🔧 Core Components

### **1. Resume Parser** (`src/parsers/resume_parser.py`)

**Key Features:**
- Dual-engine PDF extraction with automatic fallback
- Text validation and quality checks
- Resume content verification

**Methods:**
- `parse_pdf(pdf_file)` - Extract text from PDF
- `parse_text(text)` - Process plain text input
- `validate_resume(text)` - Check if text looks like a resume

**Example:**
```python
from src.parsers.resume_parser import get_resume_parser

parser = get_resume_parser()
result = parser.parse_pdf(uploaded_file)
# Returns: {'success': True, 'text': '...', 'method': 'pdfplumber', ...}
```

### **2. Skill Extractor** (`src/ml/skill_extractor.py`)

**Extraction Strategies:**
1. **Taxonomy-based**: Exact and fuzzy matching against skill database
2. **TF-IDF-based**: Statistical importance scoring
3. **Hybrid**: Combines both with confidence weighting

**Methods:**
- `extract_skills(text, context)` - Extract skills with confidence scores
- `extract_skill_list(text)` - Simple skill name extraction

**Skill Categories:**
- Programming Languages (Python, Java, JavaScript, etc.)
- Web Frontend (React, Angular, Vue, etc.)
- Web Backend (Node.js, Django, Flask, etc.)
- Databases (MySQL, PostgreSQL, MongoDB, etc.)
- Cloud & DevOps (AWS, Azure, Docker, Kubernetes, etc.)
- ML & AI (TensorFlow, PyTorch, NLP, etc.)
- Data Science (Pandas, Tableau, Power BI, etc.)
- Tools & Platforms (Git, Jira, VS Code, etc.)
- Soft Skills (Leadership, Communication, Agile, etc.)

### **3. Job Matcher** (`src/ml/matcher.py`)

**Scoring Algorithm:**
```
Overall Score = (Skill Match × 0.6) + (Text Similarity × 0.4)

Where:
- Skill Match = (Matched Skills / Required Skills) × 100
- Text Similarity = Cosine Similarity(Resume, Job) × 100
```

**Match Levels:**
- **Excellent**: 80-100% (Strong candidate)
- **Good**: 60-79% (Good fit with room to grow)
- **Moderate**: 40-59% (Moderate fit, upskilling needed)
- **Low**: 20-39% (Significant skill gap)
- **Poor**: 0-19% (Not recommended)

### **4. Gap Analyzer** (`src/analyzers/gap_analyzer.py`)

**Analysis Output:**
```python
{
    'matched_skills': {
        'skills': [...],
        'count': int,
        'by_category': {...}
    },
    'missing_skills': {
        'skills': [...],
        'count': int,
        'by_category': {...}
    },
    'extra_skills': {
        'skills': [...],
        'count': int,
        'by_category': {...}
    },
    'insights': [...],
    'recommendations': [...],
    'summary': str
}
```

**Recommendation Priorities:**
- **High**: Essential skills for the role (new category for user)
- **Medium**: Build on existing knowledge (user has some skills in category)
- **Low**: Nice-to-have skills

### **5. Text Processor** (`src/ml/text_processor.py`)

**Processing Pipeline:**
1. Lowercase conversion
2. URL and email removal
3. Special character handling
4. Whitespace normalization
5. N-gram extraction
6. Skill term normalization

---

## 🎨 UI Features

### **1. Dark Theme Design**
- Custom color palette (Slate/Blue)
- Smooth transitions and animations
- Glassmorphism effects
- Mobile-optimized layouts

### **2. Interactive Components**

**Score Cards:**
- Animated progress bars
- Color-coded scores (green/yellow/red)
- Hover effects

**Skill Badges:**
- Category-based color coding
- Matched (green), Missing (red), Extra (blue)
- Responsive grid layout

**Tabs:**
- Matched/Missing/Extra skill views
- Category breakdowns
- Scrollable on mobile

**Insight Cards:**
- Icon-based visual hierarchy
- Contextual explanations
- Priority badges

### **3. Responsive Design**
- Desktop-first with mobile optimizations
- Breakpoint: 768px
- Touch-friendly controls
- Optimized typography scaling

---

## ⚙️ Configuration

### **Application Settings** (`src/core/config.py`)

```python
# ML Configuration
MIN_SKILL_CONFIDENCE = 0.3      # Minimum TF-IDF score
TFIDF_MAX_FEATURES = 500        # Maximum features for TF-IDF
TFIDF_NGRAM_RANGE = (1, 3)      # Unigrams to trigrams
MIN_MATCH_SCORE = 0.0           # Minimum cosine similarity

# Skill Extraction
SKILL_MATCH_THRESHOLD = 0.85    # Fuzzy matching threshold
MAX_SKILLS_EXTRACT = 50         # Maximum skills to extract

# PDF Processing
PDF_MAX_PAGES = 10              # Maximum pages to process
```

### **Streamlit Theme** (`.streamlit/config.toml`)

```toml
[theme]
primaryColor = "#3b82f6"           # Blue
backgroundColor = "#0f172a"        # Dark slate
secondaryBackgroundColor = "#1e293b"
textColor = "#f1f5f9"              # Light slate
font = "sans serif"

[server]
headless = true
```

---

## 📖 Usage Guide

### **Basic Workflow**

1. **Launch the Application**
   ```bash
   streamlit run app/streamlit_app.py
   ```

2. **Input Your Resume**
   - **Option A**: Upload PDF (recommended)
   - **Option B**: Paste text directly

3. **Input Job Description**
   - Paste the complete job description in the text area

4. **Analyze**
   - Click "Analyze Match" button
   - Wait for processing (typically 2-5 seconds)

5. **Review Results**
   - **Match Intelligence**: Overall score, skill match, content similarity
   - **Skills Analysis**: Matched, missing, and extra skills
   - **Detailed Breakdown**: Category-based skill organization
   - **Insights & Recommendations**: Actionable next steps

### **Tips for Best Results**

✅ **Do:**
- Use complete, well-formatted resumes
- Include full job descriptions (not just titles)
- Ensure PDFs are text-based (not scanned images)
- Review category breakdowns for context

❌ **Don't:**
- Upload password-protected PDFs
- Use extremely short text (< 50 words)
- Expect perfect matches (70%+ is excellent)
- Ignore "Extra Skills" (they can differentiate you!)

---

## 🔌 API Reference

### **Core Functions**

```python
# Resume Parsing
from src.parsers.resume_parser import get_resume_parser
parser = get_resume_parser()
result = parser.parse_pdf(file)

# Skill Extraction
from src.ml.skill_extractor import get_skill_extractor
extractor = get_skill_extractor()
skills = extractor.extract_skills(text, context="resume")

# Job Matching
from src.ml.matcher import get_job_matcher
matcher = get_job_matcher()
match = matcher.calculate_match_score(resume_text, job_text, resume_skills, job_skills)

# Gap Analysis
from src.analyzers.gap_analyzer import get_gap_analyzer
analyzer = get_gap_analyzer()
gap = analyzer.analyze_gap(resume_skills, job_skills)
```

---

## 🤝 Contributing

Contributions are welcome! Here's how you can help:

### **Ways to Contribute**
1. **Report Bugs**: Open an issue with detailed reproduction steps
2. **Suggest Features**: Share ideas for new functionality
3. **Improve Documentation**: Fix typos, add examples
4. **Submit Code**: Create pull requests for bug fixes or features

### **Development Setup**
```bash
# Fork and clone the repository
git clone https://github.com/YOUR_USERNAME/Career-Launch.git
cd Career-Launch

# Create a feature branch
git checkout -b feature/your-feature-name

# Make changes and test
streamlit run app/streamlit_app.py

# Commit and push
git add .
git commit -m "Add: your feature description"
git push origin feature/your-feature-name

# Create a pull request on GitHub
```

### **Code Style**
- Follow PEP 8 guidelines
- Add docstrings to all functions
- Include type hints where applicable
- Write descriptive commit messages

---

## 📄 License

This project is licensed under the **MIT License**.

```
MIT License

Copyright (c) 2024 Harsh Lad

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
```

---

## 🙏 Acknowledgments

- **Streamlit** - For the amazing web app framework
- **Scikit-learn** - For robust ML algorithms
- **pdfplumber & PyPDF2** - For reliable PDF parsing

---

## 📞 Contact & Support

- **Developer**: Harsh Lad
- **GitHub**: [@ladHarsh](https://github.com/ladHarsh)
- **Project Repository**: [Career-Launch](https://github.com/ladHarsh/Career-Launch)

---

## 🗺️ Roadmap

### **Planned Features**
- [ ] Support for multiple file formats (DOCX, TXT)
- [ ] Export analysis reports as PDF
- [ ] Job recommendation engine
- [ ] Skill trend analysis
- [ ] Integration with job boards (LinkedIn, Indeed)
- [ ] Resume improvement suggestions
- [ ] Multi-language support
- [ ] User accounts and history tracking

---

**Built with ❤️ by [Harsh Lad](https://github.com/ladHarsh)**

*Last Updated: January 2026*
